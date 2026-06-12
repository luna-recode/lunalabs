"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { EMAIL_EVENTS, fireEmailEvent } from "@/lib/email/events";
import { newsletterSegmentId, upsertContactIntoSegment } from "@/lib/email/segments";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";
import { isRateLimited } from "@/lib/rate-limit";
import { getResendClient } from "@/lib/resend";

const schema = z.object({
  email:  z.string().email().max(254),
  locale: z.enum(["en", "es"]).optional(),
});

// Bots fill forms instantly — humans need at least a couple of seconds.
// Lower than the contact form's threshold: this is a single field that a
// returning user with browser autofill can legitimately submit quickly.
const MIN_FILL_MS = 2000;

const SUBSCRIBE_LIMIT = 5;
const SUBSCRIBE_WINDOW_MS = 10 * 60 * 1000;

export type SubscribeState = {
  status: "success" | "error";
  message: string;
} | null;

function getLocale(value: FormDataEntryValue | null): Locale {
  return value === "es" ? "es" : "en";
}

export async function subscribeEmail(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const locale = getLocale(formData.get("locale"));
  const t = translations[locale].forms;

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited("subscribe", ip, { limit: SUBSCRIBE_LIMIT, windowMs: SUBSCRIBE_WINDOW_MS })) {
    return { status: "error", message: "Too many requests. Please wait a few minutes." };
  }

  // Bot checks run before validation so bots always see a fake success and
  // never learn they were rejected: a filled honeypot field, or a submission
  // faster than any human could fill the form.
  const honeypot = formData.get("company_ref");
  const renderedAt = Number(formData.get("form_ts"));
  if (honeypot || !renderedAt || Date.now() - renderedAt < MIN_FILL_MS) {
    console.warn("Bot submission silently rejected", {
      form: "subscribe",
      ip,
      honeypot: Boolean(honeypot),
    });
    return { status: "success", message: t.subscribeSuccess };
  }

  const result = schema.safeParse({
    email:  formData.get("email"),
    locale: formData.get("locale"),
  });

  if (!result.success) {
    return { status: "error", message: t.subscribeInvalidError };
  }

  const segmentId = newsletterSegmentId();
  if (!segmentId) {
    console.error(
      "RESEND_NEWSLETTER_SEGMENT_ID / RESEND_AUDIENCE_ID is not set — cannot subscribe contact.",
    );
    return { status: "error", message: t.subscribeGenericError };
  }

  const email = result.data.email;
  const resend = getResendClient();

  try {
    const outcome = await upsertContactIntoSegment(resend, { email, segmentId });

    // First-timers trigger the welcome automation, returning unsubscribers
    // the welcome-back one; an existing subscriber resubmitting triggers
    // nothing. The emails themselves live in Resend (Automations/Templates).
    // The subscription succeeded, so a failed event must not fail it.
    if (outcome !== "already-member") {
      const event =
        outcome === "resubscribed"
          ? EMAIL_EVENTS.newsletterResubscribed
          : EMAIL_EVENTS.newsletterSubscribed;
      try {
        await fireEmailEvent(resend, event, email);
      } catch (error) {
        console.error("Failed to fire newsletter welcome event:", error);
      }
    }

    return { status: "success", message: t.subscribeSuccess };
  } catch (error) {
    console.error("Newsletter subscribe failed:", error);
    return { status: "error", message: t.subscribeGenericError };
  }
}
