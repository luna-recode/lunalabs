import { Resend } from "resend";

let client: Resend | undefined;

export function getResendClient(): Resend {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export function contactFromAddress(): string {
  const email = process.env.CONTACT_FROM_EMAIL ?? "hello@bylunalabs.com";
  return `Luna Labs <${email}>`;
}

export function contactToAddress(): string {
  return process.env.CONTACT_TO_EMAIL ?? "hello@bylunalabs.com";
}
