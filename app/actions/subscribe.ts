"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export type SubscribeState = {
  status: "success" | "error";
  message: string;
} | null;

export async function subscribeEmail(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const result = schema.safeParse({ email: formData.get("email") });

  if (!result.success) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.create({
      email: result.data.email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    });
    return { status: "success", message: "You're in." };
  } catch {
    return { status: "error", message: "Something went wrong. Try again." };
  }
}
