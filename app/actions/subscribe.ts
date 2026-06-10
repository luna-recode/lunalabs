"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email:  z.string().email().max(254),
  locale: z.enum(["en", "es"]).optional(),
});

// Bots fill forms instantly — humans need at least a couple of seconds.
// Lower than the contact form's threshold: this is a single field that a
// returning user with browser autofill can legitimately submit quickly.
const MIN_FILL_MS = 2000;

// Max 5 subscribe attempts per IP per 10 minutes.
// NOTE: resets on serverless cold starts — replace with @upstash/ratelimit
// once UPSTASH_REDIS_REST_URL / _TOKEN env vars are provisioned.
const subscribeRateMap = new Map<string, number[]>();
const SUBSCRIBE_LIMIT = 5;
const SUBSCRIBE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (subscribeRateMap.get(ip) ?? []).filter(t => now - t < SUBSCRIBE_WINDOW_MS);
  subscribeRateMap.set(ip, [...times, now]);
  return times.length >= SUBSCRIBE_LIMIT;
}

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
  if (isRateLimited(ip)) {
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

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.error("RESEND_AUDIENCE_ID is not set — cannot subscribe contact.");
    return { status: "error", message: t.subscribeGenericError };
  }

  try {
    await resend.contacts.create({
      email: result.data.email,
      audienceId,
      unsubscribed: false,
    });
    return { status: "success", message: t.subscribeSuccess };
  } catch {
    return { status: "error", message: t.subscribeGenericError };
  }
}
