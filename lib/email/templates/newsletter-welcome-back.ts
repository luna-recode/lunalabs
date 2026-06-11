import {
  type EmailTemplate,
  emailButton,
  emailParagraph,
  renderEmailLayout,
  unsubscribeFooterNote,
} from "@/lib/email/render";
import { SITE } from "@/lib/seo/site";

// Sent when someone who previously unsubscribed signs up again. Deliberately
// short — they already know who we are; acknowledge the return and move on.

const SUBJECT = "Good to have you back";
const PREHEADER = "Your subscription is live again. Here's what you missed.";
const BLOG_URL = `${SITE.url}/blog`;

export function newsletterWelcomeBackEmail(): EmailTemplate {
  const html = renderEmailLayout({
    preheader: PREHEADER,
    contentHtml: `
      ${emailParagraph("Welcome back — your subscription is live again.")}
      ${emailParagraph(
        "Same deal as before: we only write when there's something worth your time. Conversion mechanics, recovery flows, the details that make a store earn.",
      )}
      ${emailParagraph("Catch up on what you missed:")}
      ${emailButton(BLOG_URL, "Read the blog →")}
      ${emailParagraph("Talk soon,<br/>Luna<br/>Luna Labs")}
    `,
    footerNote: unsubscribeFooterNote(),
  });

  const text = `Welcome back — your subscription is live again.

Same deal as before: we only write when there's something worth your
time. Conversion mechanics, recovery flows, the details that make a
store earn.

Catch up on what you missed:
${BLOG_URL}

Talk soon,
Luna
Luna Labs
${SITE.email} · bylunalabs.com

You're getting this because you subscribed at bylunalabs.com.
Changed your mind? Reply "unsubscribe" and we'll take you off the list.`;

  return { subject: SUBJECT, html, text };
}
