import type { Resend } from "resend";

// Event names must match the automation triggers modeled in Resend by
// scripts/setup-resend.mjs. The dashboard (Automations + Templates) owns
// what each event sends — the app only announces that something happened.
export const EMAIL_EVENTS = {
  newsletterSubscribed: "newsletter.subscribed",
  newsletterResubscribed: "newsletter.resubscribed",
  contactSubmitted: "contact.submitted",
} as const;

export type EmailEvent = (typeof EMAIL_EVENTS)[keyof typeof EMAIL_EVENTS];

// The contact must already exist (see upsertContactIntoSegment) — Resend
// resolves the event against the contact to run the automation.
export async function fireEmailEvent(
  resend: Resend,
  event: EmailEvent,
  email: string,
  payload?: Record<string, unknown>,
): Promise<void> {
  const { error } = await resend.events.send({ event, email, payload });
  if (error) {
    throw new Error(`Resend event "${event}" failed (${error.name}): ${error.message}`);
  }
}
