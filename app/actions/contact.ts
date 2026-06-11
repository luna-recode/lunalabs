"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { escapeHtml, sendTemplateEmail } from "@/lib/email/render";
import { contactSegmentId, upsertContactIntoSegment } from "@/lib/email/segments";
import { contactConfirmationEmail } from "@/lib/email/templates/contact-confirmation";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";
import { isRateLimited } from "@/lib/rate-limit";
import {
  contactFromAddress,
  contactToAddress,
  getResendClient,
} from "@/lib/resend";

const schema = z.object({
  name:      z.string().min(1).max(100),
  email:     z.string().email().max(254),
  phone:     z.string().max(30).optional(),
  brand:     z.string().min(1).max(200),
  followers: z.string().max(50).optional(),
  message:   z.string().min(1).max(5000),
  locale:    z.enum(["en", "es"]).optional(),
});

// Bots fill forms instantly — humans need at least a few seconds.
const MIN_FILL_MS = 3000;

const CONTACT_LIMIT = 3;
const CONTACT_WINDOW_MS = 10 * 60 * 1000;

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

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited("contact", ip, { limit: CONTACT_LIMIT, windowMs: CONTACT_WINDOW_MS })) {
    return { status: "error", message: "Too many requests. Please wait a few minutes." };
  }

  // Bot checks run before validation so bots always see a fake success and
  // never learn they were rejected: a filled honeypot field, or a submission
  // faster than any human could fill the form.
  const honeypot = formData.get("company_ref");
  const renderedAt = Number(formData.get("form_ts"));
  if (honeypot || !renderedAt || Date.now() - renderedAt < MIN_FILL_MS) {
    console.warn("Bot submission silently rejected", {
      form: "contact",
      ip,
      honeypot: Boolean(honeypot),
    });
    return { status: "success", message: t.contactSuccess };
  }

  const result = schema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { status: "error", message: t.contactRequiredError };
  }

  const { name, email, phone, brand, followers, message } = result.data;
  const resend = getResendClient();

  try {
    await resend.emails.send({
      from: contactFromAddress(),
      to: contactToAddress(),
      replyTo: email,
      subject: `New inquiry — ${escapeHtml(brand)} (${escapeHtml(name)})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#15233f">
          <h2 style="margin-bottom:4px">${escapeHtml(name)}</h2>
          <p style="margin:0;color:#445574">${escapeHtml(brand)}${followers ? ` · ${escapeHtml(followers)} followers` : ""}</p>
          <hr style="border:none;border-top:1px solid #dbe6f4;margin:20px 0"/>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #dbe6f4;margin:20px 0"/>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    // Confirmation + audience add are best-effort: the inquiry already
    // reached us, so neither failing should surface an error to the user.
    try {
      await sendTemplateEmail(resend, email, contactConfirmationEmail(name));
    } catch (error) {
      console.error("Failed to send contact confirmation email:", error);
    }

    const segmentId = contactSegmentId();
    if (segmentId) {
      const [firstName, ...rest] = name.trim().split(/\s+/);
      try {
        await upsertContactIntoSegment(resend, {
          email,
          segmentId,
          firstName,
          lastName: rest.join(" ") || undefined,
        });
      } catch (error) {
        console.error("Failed to add inquiry to contact audience:", error);
      }
    } else {
      console.warn(
        "RESEND_CONTACT_SEGMENT_ID is not set — inquiry not added to contact audience.",
      );
    }

    return { status: "success", message: t.contactSuccess };
  } catch {
    return { status: "error", message: t.contactGenericError };
  }
}
