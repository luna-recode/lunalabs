"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  brand: z.string().min(1, "Brand name is required"),
  followers: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactState = {
  status: "success" | "error";
  message: string;
} | null;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const result = schema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const { name, email, phone, brand, followers, message } = result.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Luna Recode <${process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "lunarecode@gmail.com",
      replyTo: email,
      subject: `New inquiry — ${brand} (${name})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0a0a0b">
          <h2 style="margin-bottom:4px">${name}</h2>
          <p style="margin:0;color:#666">${brand}${followers ? ` · ${followers} followers` : ""}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return { status: "success", message: "Got it — we'll be in touch within 24 hours." };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again or email us directly." };
  }
}
