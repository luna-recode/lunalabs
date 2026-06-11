import {
  type EmailTemplate,
  emailButton,
  emailParagraph,
  renderEmailLayout,
  unsubscribeFooterNote,
} from "@/lib/email/render";
import { SITE } from "@/lib/seo/site";

// Sent once, when someone joins the newsletter for the first time.
// To change the copy, edit SUBJECT / PREHEADER / the paragraphs below —
// keep html and text saying the same thing.

const SUBJECT = "You're in — welcome to Luna Labs";
const PREHEADER =
  "No fluff, no spam. Just what actually makes online stores sell.";
const BLOG_URL = `${SITE.url}/blog`;

export function newsletterWelcomeEmail(): EmailTemplate {
  const html = renderEmailLayout({
    preheader: PREHEADER,
    contentHtml: `
      ${emailParagraph("Hey — welcome aboard.")}
      ${emailParagraph(
        "Here's the one idea everything we send rests on: <strong>we don't write about redesigns. We write about what makes a store earn.</strong> Conversion teardowns, recovery flows that print money, the checkout details that quietly lose sales — the mechanics, not the hype.",
      )}
      ${emailParagraph(
        "Expect an email when we have something genuinely worth your time. No filler, no spam.",
      )}
      ${emailParagraph("While you're here, the blog is where the good stuff lives:")}
      ${emailButton(BLOG_URL, "Read the blog →")}
      ${emailParagraph("Talk soon,<br/>Luna<br/>Luna Labs")}
    `,
    footerNote: unsubscribeFooterNote(),
  });

  const text = `Hey — welcome aboard.

Here's the one idea everything we send rests on: we don't write about
redesigns. We write about what makes a store earn. Conversion teardowns,
recovery flows that print money, the checkout details that quietly lose
sales — the mechanics, not the hype.

Expect an email when we have something genuinely worth your time.
No filler, no spam.

While you're here, the blog is where the good stuff lives:
${BLOG_URL}

Talk soon,
Luna
Luna Labs
${SITE.email} · bylunalabs.com

You're getting this because you subscribed at bylunalabs.com.
Changed your mind? Reply "unsubscribe" and we'll take you off the list.`;

  return { subject: SUBJECT, html, text };
}
