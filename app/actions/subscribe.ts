"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

const schema = z.object({
  email:   z.string().email().max(254),
  locale:  z.enum(["en", "es"]).optional(),
  website: z.string().max(0).optional(), // honeypot — must be empty
});

// Max 5 subscribe attempts per IP per 10 minutes
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

  // Rate limit by IP
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Too many requests. Please wait a few minutes." };
  }

  const result = schema.safeParse({
    email:   formData.get("email"),
    locale:  formData.get("locale"),
    website: formData.get("website"),
  });

  // Honeypot: silent reject for bots
  if (result.success && result.data.website) {
    return { status: "success", message: t.subscribeSuccess };
  }

  if (!result.success) {
    return { status: "error", message: t.subscribeInvalidError };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.create({
      email: result.data.email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    });
    return { status: "success", message: t.subscribeSuccess };
  } catch {
    return { status: "error", message: t.subscribeGenericError };
  }
}
