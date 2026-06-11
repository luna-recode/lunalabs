import {
  type EmailTemplate,
  emailButton,
  emailParagraph,
  escapeHtml,
  renderEmailLayout,
} from "@/lib/email/render";
import { SITE } from "@/lib/seo/site";

// Sent to whoever submits the contact form, confirming we got their message.
// Transactional, so no unsubscribe footer.

const SUBJECT = "Got it — we'll be in touch within 24 hours";
const PREHEADER =
  "Your message came through. We read every inquiry personally.";
const CASE_STUDIES_URL = `${SITE.url}/case-studies`;
const CAL_LINK = "https://cal.com/lunalabs/free-consult";

function firstNameOrThere(name: string): string {
  const first = name.trim().split(/\s+/)[0];
  return first || "there";
}

export function contactConfirmationEmail(name: string): EmailTemplate {
  const firstName = firstNameOrThere(name);

  const html = renderEmailLayout({
    preheader: PREHEADER,
    contentHtml: `
      ${emailParagraph(`Hi ${escapeHtml(firstName)},`)}
      ${emailParagraph(
        "Thanks for reaching out to Luna Labs — your message came through. We read every inquiry personally, and we'll get back to you within one business day with next steps.",
      )}
      ${emailParagraph(
        "While we get back to you, see what this looks like in practice — real builds, and the revenue mechanics behind them:",
      )}
      ${emailButton(CASE_STUDIES_URL, "Check out our case studies →")}
      ${emailParagraph(
        `Prefer to grab a time now? <a href="${CAL_LINK}" style="color:#2f63d6">Book a free 15-minute consult</a> and we'll map out exactly how we can help.`,
      )}
      ${emailParagraph("Talk soon,<br/>Luna<br/>Luna Labs")}
    `,
  });

  const text = `Hi ${firstName},

Thanks for reaching out to Luna Labs — your message came through.
We read every inquiry personally, and we'll get back to you within
one business day with next steps.

While we get back to you, see what this looks like in practice —
real builds, and the revenue mechanics behind them:
${CASE_STUDIES_URL}

Prefer to grab a time now? Book a free 15-minute consult:
${CAL_LINK}

Talk soon,
Luna
Luna Labs
${SITE.email} · bylunalabs.com`;

  return { subject: SUBJECT, html, text };
}
