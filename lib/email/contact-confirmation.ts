import type { Resend } from "resend";

const CAL_LINK = "https://cal.com/lunalabs/free-consult";

function firstNameOrThere(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "there";
  const first = trimmed.split(/\s+/)[0];
  return first || "there";
}

function buildConfirmationBody(firstName: string): string {
  return `Hi ${firstName},

Thanks for reaching out to Luna Labs — your message came through.

We read every inquiry personally and we'll get back to you within one
business day with next steps. If it's a fit, we'll set up a free
15-minute call to look at what you're building and map out exactly
how we can help.

Prefer to grab a time now? Book a free consult:
${CAL_LINK}

Talk soon,
Luna
Luna Labs
hello@bylunalabs.com · bylunalabs.com`;
}

export async function sendContactConfirmation(
  resend: Resend,
  email: string,
  name: string,
): Promise<void> {
  const firstName = firstNameOrThere(name);

  await resend.emails.send({
    from: "Luna Labs <hello@bylunalabs.com>",
    to: email,
    replyTo: "hello@bylunalabs.com",
    subject: "Got it — we'll be in touch within 24 hours",
    text: buildConfirmationBody(firstName),
  });
}
