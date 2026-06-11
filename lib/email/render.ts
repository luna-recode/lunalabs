import type { Resend } from "resend";
import { contactFromAddress, contactToAddress } from "@/lib/resend";
import { SITE } from "@/lib/seo/site";

// Every outbound email is a template: subject + html + text (plain-text
// fallback keeps deliverability high). Templates live in lib/email/templates/
// and build their html with renderEmailLayout() so they all share one shell.
export type EmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Email-safe mirror of the site palette in globals.css (:root, Variant C).
export const emailColors = {
  bg: "#f4f8fd",
  card: "#ffffff",
  ink: "#15233f",
  soft: "#445574",
  line: "#dbe6f4",
  accent: "#2f63d6",
} as const;

export function emailParagraph(html: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${emailColors.ink}">${html}</p>`;
}

export function emailButton(href: string, label: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0">
      <tr>
        <td style="border-radius:8px;background:${emailColors.accent}">
          <a href="${href}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none">${escapeHtml(label)}</a>
        </td>
      </tr>
    </table>`;
}

// Shared shell: preheader (inbox preview text), wordmark header, white card
// with the template's content, and a brand footer.
export function renderEmailLayout(opts: {
  preheader: string;
  contentHtml: string;
  footerNote?: string;
}): string {
  const { bg, card, ink, soft, line } = emailColors;
  return `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:${bg}">
  <div style="display:none;max-height:0;overflow:hidden">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${bg};padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
          <tr>
            <td style="padding:0 8px 20px">
              <a href="${SITE.url}" style="font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:${ink};text-decoration:none">Luna Labs</a>
            </td>
          </tr>
          <tr>
            <td style="background:${card};border:1px solid ${line};border-radius:12px;padding:36px 32px">
              ${opts.contentHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 8px 0;font-size:12px;line-height:1.6;color:${soft}">
              Luna Labs · ${SITE.location}<br/>
              <a href="${SITE.url}" style="color:${soft}">bylunalabs.com</a> · <a href="mailto:${SITE.email}" style="color:${soft}">${SITE.email}</a>
              ${opts.footerNote ? `<br/><br/>${opts.footerNote}` : ""}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Footer for list emails (welcome, newsletter). Transactional confirmations
// (e.g. contact receipts) don't need it.
export function unsubscribeFooterNote(): string {
  return `You're getting this because you subscribed at bylunalabs.com. Changed your mind? Reply &ldquo;unsubscribe&rdquo; and we'll take you off the list — no hard feelings.`;
}

export async function sendTemplateEmail(
  resend: Resend,
  to: string,
  template: EmailTemplate,
): Promise<void> {
  const { error } = await resend.emails.send({
    from: contactFromAddress(),
    to,
    replyTo: contactToAddress(),
    subject: template.subject,
    html: template.html,
    text: template.text,
  });
  if (error) {
    throw new Error(`Resend send failed (${error.name}): ${error.message}`);
  }
}
