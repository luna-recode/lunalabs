"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

const schema = z.object({
  name:     z.string().min(1).max(100),
  email:    z.string().email().max(254),
  phone:    z.string().max(30).optional(),
  brand:    z.string().min(1).max(200),
  followers: z.string().max(50).optional(),
  message:  z.string().min(1).max(5000),
  locale:   z.enum(["en", "es"]).optional(),
  website:  z.string().max(0).optional(), // honeypot — must be empty
});

// Simple in-process rate limiter: max 3 submissions per IP per 10 minutes
const contactRateMap = new Map<string, number[]>();
const CONTACT_LIMIT = 3;
const CONTACT_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (contactRateMap.get(ip) ?? []).filter(t => now - t < CONTACT_WINDOW_MS);
  contactRateMap.set(ip, [...times, now]);
  return times.length >= CONTACT_LIMIT;
}

export type ContactState = {
  status: "success" | "error";
  message: string;
} | null;

function getLocale(value: FormDataEntryValue | null): Locale {
  return value === "es" ? "es" : "en";
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const locale = getLocale(formData.get("locale"));
  const t = translations[locale].forms;

  // Rate limit by IP
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Too many requests. Please wait a few minutes." };
  }

  const result = schema.safeParse(Object.fromEntries(formData));

  // Honeypot: bot filled the hidden field
  if (result.success && result.data.website) {
    return { status: "success", message: t.contactSuccess }; // silent reject
  }

  if (!result.success) {
    return { status: "error", message: t.contactRequiredError };
  }

  const { name, email, phone, brand, followers, message } = result.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Luna Labs <${process.env.CONTACT_FROM_EMAIL ?? "hello@bylunalabs.com"}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "hello@bylunalabs.com",
      replyTo: email,
      subject: `New inquiry — ${brand} (${name})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#15233f">
          <h2 style="margin-bottom:4px">${name}</h2>
          <p style="margin:0;color:#445574">${brand}${followers ? ` · ${followers} followers` : ""}</p>
          <hr style="border:none;border-top:1px solid #dbe6f4;margin:20px 0"/>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <hr style="border:none;border-top:1px solid #dbe6f4;margin:20px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return { status: "success", message: t.contactSuccess };
  } catch {
    return { status: "error", message: t.contactGenericError };
  }
}
