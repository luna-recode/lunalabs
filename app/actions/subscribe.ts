"use server";

import { Resend } from "resend";
import { z } from "zod";
import { translations } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

const schema = z.object({
  email: z.string().email(),
  locale: z.enum(["en", "es"]).optional(),
});

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
  const result = schema.safeParse({
    email: formData.get("email"),
    locale: formData.get("locale"),
  });

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
