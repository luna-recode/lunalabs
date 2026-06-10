"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";
import { isRateLimited } from "@/lib/rate-limit";
import { getResendClient } from "@/lib/resend";

const schema = z.object({
  email:   z.string().email().max(254),
  locale:  z.enum(["en", "es"]).optional(),
  website: z.string().max(0).optional(), // honeypot — must be empty
});

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

  const result = schema.safeParse({
    email:   formData.get("email"),
    locale:  formData.get("locale"),
    website: formData.get("website"),
  });

  if (result.success && result.data.website) {
    return { status: "success", message: t.subscribeSuccess }; // silent honeypot reject
  }

  if (!result.success) {
    return { status: "error", message: t.subscribeInvalidError };
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.error("RESEND_AUDIENCE_ID is not set — cannot subscribe contact.");
    return { status: "error", message: t.subscribeGenericError };
  }

  try {
    await getResendClient().contacts.create({
      email: result.data.email,
      audienceId,
      unsubscribed: false,
    });
    return { status: "success", message: t.subscribeSuccess };
  } catch {
    return { status: "error", message: t.subscribeGenericError };
  }
}
