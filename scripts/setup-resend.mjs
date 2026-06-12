/**
 * Models the Luna Labs email system directly in Resend, so email copy and
 * flow logic live in the Resend dashboard — not in this repo.
 *
 *   Segments     Newsletter (existing "General") + "Contact inquiries"
 *   Templates    newsletter-welcome / newsletter-welcome-back /
 *                contact-confirmation — published, editable in the dashboard
 *   Events       newsletter.subscribed / newsletter.resubscribed /
 *                contact.submitted — fired by the app's server actions
 *   Automations  one per event: trigger → send the matching template
 *   Broadcast    a draft example newsletter issue to duplicate per issue
 *
 * Idempotent: existing resources are found by alias/name and left untouched,
 * so dashboard edits survive re-runs. Safe to run any time:
 *
 *   node --env-file=.env.local scripts/setup-resend.mjs
 */
import { Resend } from "resend";

const SITE_URL = "https://www.bylunalabs.com";
const FROM = `Luna Labs <${process.env.CONTACT_FROM_EMAIL ?? "hello@bylunalabs.com"}>`;
const REPLY_TO = process.env.CONTACT_TO_EMAIL ?? "hello@bylunalabs.com";

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set. Run with: node --env-file=.env.local scripts/setup-resend.mjs");
  process.exit(1);
}
const resend = new Resend(process.env.RESEND_API_KEY);

function unwrap(label, { data, error }) {
  if (error) throw new Error(`${label}: ${error.name} — ${error.message}`);
  return data;
}

/* ---------------------------------------------------------------- layout */
// Email-safe mirror of the site palette in app/globals.css (:root).
const C = { bg: "#f4f8fd", card: "#ffffff", ink: "#15233f", soft: "#445574", line: "#dbe6f4", accent: "#2f63d6" };

const p = (html) => `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${C.ink}">${html}</p>`;

const button = (href, label) => `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0">
    <tr><td style="border-radius:8px;background:${C.accent}">
      <a href="${href}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none">${label}</a>
    </td></tr>
  </table>`;

// {{{RESEND_UNSUBSCRIBE_URL}}} is a reserved variable Resend fills per
// contact on automation/broadcast sends.
const unsubscribeFooter = `You're getting this because you subscribed at bylunalabs.com. <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:${C.soft}">Unsubscribe</a> any time — no hard feelings.`;

const layout = ({ preheader, content, footerNote }) => `<!DOCTYPE html>
<html lang="en">
<body style="margin:0;padding:0;background:${C.bg}">
  <div style="display:none;max-height:0;overflow:hidden">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
        <tr><td style="padding:0 8px 20px">
          <a href="${SITE_URL}" style="font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:${C.ink};text-decoration:none">Luna Labs</a>
        </td></tr>
        <tr><td style="background:${C.card};border:1px solid ${C.line};border-radius:12px;padding:36px 32px">
          ${content}
        </td></tr>
        <tr><td style="padding:24px 8px 0;font-size:12px;line-height:1.6;color:${C.soft}">
          Luna Labs · Los Angeles, CA<br/>
          <a href="${SITE_URL}" style="color:${C.soft}">bylunalabs.com</a> · <a href="mailto:hello@bylunalabs.com" style="color:${C.soft}">hello@bylunalabs.com</a>
          ${footerNote ? `<br/><br/>${footerNote}` : ""}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

/* ------------------------------------------------------------- templates */
const TEMPLATES = [
  {
    alias: "newsletter-welcome",
    name: "Newsletter — Welcome",
    subject: "You're in — welcome to Luna Labs",
    html: layout({
      preheader: "No fluff, no spam. Just what actually makes online stores sell.",
      content: `
        ${p("Hey — welcome aboard.")}
        ${p("Here's the one idea everything we send rests on: <strong>we don't write about redesigns. We write about what makes a store earn.</strong> Conversion teardowns, recovery flows that print money, the checkout details that quietly lose sales — the mechanics, not the hype.")}
        ${p("Expect an email when we have something genuinely worth your time. No filler, no spam.")}
        ${p("While you're here, the blog is where the good stuff lives:")}
        ${button(`${SITE_URL}/blog`, "Read the blog →")}
        ${p("Talk soon,<br/>Luna<br/>Luna Labs")}`,
      footerNote: unsubscribeFooter,
    }),
    text: `Hey — welcome aboard.

Here's the one idea everything we send rests on: we don't write about
redesigns. We write about what makes a store earn. Conversion teardowns,
recovery flows that print money, the checkout details that quietly lose
sales — the mechanics, not the hype.

Expect an email when we have something genuinely worth your time.
No filler, no spam.

While you're here, the blog is where the good stuff lives:
${SITE_URL}/blog

Talk soon,
Luna
Luna Labs

Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`,
  },
  {
    alias: "newsletter-welcome-back",
    name: "Newsletter — Welcome back",
    subject: "Good to have you back",
    html: layout({
      preheader: "Your subscription is live again. Here's what you missed.",
      content: `
        ${p("Welcome back — your subscription is live again.")}
        ${p("Same deal as before: we only write when there's something worth your time. Conversion mechanics, recovery flows, the details that make a store earn.")}
        ${p("Catch up on what you missed:")}
        ${button(`${SITE_URL}/blog`, "Read the blog →")}
        ${p("Talk soon,<br/>Luna<br/>Luna Labs")}`,
      footerNote: unsubscribeFooter,
    }),
    text: `Welcome back — your subscription is live again.

Same deal as before: we only write when there's something worth your
time. Conversion mechanics, recovery flows, the details that make a
store earn.

Catch up on what you missed:
${SITE_URL}/blog

Talk soon,
Luna
Luna Labs

Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`,
  },
  {
    alias: "contact-confirmation",
    name: "Contact — Confirmation",
    subject: "Got it — we'll be in touch within 24 hours",
    // Filled from the contact.submitted event payload by the automation
    // (variables mapping below); falls back to "there" if absent.
    variables: [{ key: "GREETING_NAME", type: "string", fallbackValue: "there" }],
    html: layout({
      preheader: "Your message came through. We read every inquiry personally.",
      content: `
        ${p("Hi {{{GREETING_NAME}}},")}
        ${p("Thanks for reaching out to Luna Labs — your message came through. We read every inquiry personally, and we'll get back to you within one business day with next steps.")}
        ${p("While we get back to you, see what this looks like in practice — real builds, and the revenue mechanics behind them:")}
        ${button(`${SITE_URL}/case-studies`, "Check out our case studies →")}
        ${p(`Prefer to grab a time now? <a href="https://cal.com/lunalabs/free-consult" style="color:${C.accent}">Book a free 15-minute consult</a> and we'll map out exactly how we can help.`)}
        ${p("Talk soon,<br/>Luna<br/>Luna Labs")}`,
    }),
    text: `Hi {{{GREETING_NAME}}},

Thanks for reaching out to Luna Labs — your message came through.
We read every inquiry personally, and we'll get back to you within
one business day with next steps.

While we get back to you, see what this looks like in practice —
real builds, and the revenue mechanics behind them:
${SITE_URL}/case-studies

Prefer to grab a time now? Book a free 15-minute consult:
https://cal.com/lunalabs/free-consult

Talk soon,
Luna
Luna Labs`,
  },
];

/* ----------------------------------------------------- automations/events */
// Event names fired by app/actions/*; lib/email/events.ts must match.
const AUTOMATIONS = [
  { event: "newsletter.subscribed",   name: "Newsletter welcome",      templateAlias: "newsletter-welcome" },
  { event: "newsletter.resubscribed", name: "Newsletter welcome back", templateAlias: "newsletter-welcome-back" },
  {
    event: "contact.submitted",
    name: "Contact confirmation",
    templateAlias: "contact-confirmation",
    // Pull the form's first name out of the event payload into the template.
    variables: { GREETING_NAME: { var: "event.firstName" } },
  },
];

const CONTACT_SEGMENT_NAME = "Contact inquiries";
const EXAMPLE_BROADCAST_NAME = "Example — newsletter issue (duplicate me, don't send)";

/* ------------------------------------------------------------------ main */
async function main() {
  // Segments
  const segments = unwrap("segments.list", await resend.segments.list()).data;
  const newsletterSegment =
    segments.find((s) => s.id === (process.env.RESEND_NEWSLETTER_SEGMENT_ID ?? process.env.RESEND_AUDIENCE_ID)) ??
    segments.find((s) => /newsletter|general/i.test(s.name));
  if (!newsletterSegment) throw new Error("No newsletter segment found — set RESEND_NEWSLETTER_SEGMENT_ID.");
  console.log(`✓ newsletter segment: "${newsletterSegment.name}" (${newsletterSegment.id})`);

  let contactSegment = segments.find((s) => s.name === CONTACT_SEGMENT_NAME);
  if (!contactSegment) {
    contactSegment = unwrap("segments.create", await resend.segments.create({ name: CONTACT_SEGMENT_NAME }));
    console.log(`+ created segment "${CONTACT_SEGMENT_NAME}" (${contactSegment.id})`);
  } else {
    console.log(`✓ segment "${CONTACT_SEGMENT_NAME}" exists (${contactSegment.id})`);
  }

  // Templates — never overwrite an existing one; the dashboard owns the copy.
  const existingTemplates = unwrap("templates.list", await resend.templates.list({ limit: 100 })).data;
  const templateIdByAlias = {};
  for (const t of TEMPLATES) {
    const existing = existingTemplates.find((e) => e.alias === t.alias);
    if (existing) {
      templateIdByAlias[t.alias] = existing.id;
      console.log(`✓ template "${t.alias}" exists (${existing.id}, ${existing.status})`);
      continue;
    }
    const created = unwrap(
      `templates.create ${t.alias}`,
      await resend.templates.create({
        name: t.name,
        alias: t.alias,
        subject: t.subject,
        from: FROM,
        replyTo: REPLY_TO,
        html: t.html,
        text: t.text,
        ...(t.variables ? { variables: t.variables } : {}),
      }),
    );
    unwrap(`templates.publish ${t.alias}`, await resend.templates.publish(created.id));
    templateIdByAlias[t.alias] = created.id;
    console.log(`+ created + published template "${t.alias}" (${created.id})`);
  }

  // Events
  const existingEvents = unwrap("events.list", await resend.events.list({ limit: 100 })).data;
  for (const { event } of AUTOMATIONS) {
    if (existingEvents.some((e) => e.name === event)) {
      console.log(`✓ event "${event}" exists`);
    } else {
      unwrap(`events.create ${event}`, await resend.events.create({ name: event }));
      console.log(`+ created event "${event}"`);
    }
  }

  // Automations: trigger(event) → send_email(template)
  const existingAutomations = unwrap("automations.list", await resend.automations.list({ limit: 100 })).data;
  for (const a of AUTOMATIONS) {
    if (existingAutomations.some((e) => e.name === a.name)) {
      console.log(`✓ automation "${a.name}" exists`);
      continue;
    }
    const created = unwrap(
      `automations.create ${a.name}`,
      await resend.automations.create({
        name: a.name,
        status: "enabled",
        steps: [
          { key: "trigger", type: "trigger", config: { eventName: a.event } },
          {
            key: "send",
            type: "send_email",
            config: {
              template: {
                id: templateIdByAlias[a.templateAlias],
                ...(a.variables ? { variables: a.variables } : {}),
              },
              from: FROM,
              replyTo: REPLY_TO,
            },
          },
        ],
        connections: [{ from: "trigger", to: "send" }],
      }),
    );
    console.log(`+ created automation "${a.name}" (${created.id}): ${a.event} → ${a.templateAlias}`);
  }

  // Example broadcast (draft, never sent): duplicate it in the dashboard for
  // each newsletter issue, edit, and send to the newsletter segment.
  const existingBroadcasts = unwrap("broadcasts.list", await resend.broadcasts.list({ limit: 100 })).data;
  if (existingBroadcasts.some((b) => b.name === EXAMPLE_BROADCAST_NAME)) {
    console.log(`✓ example broadcast exists`);
  } else {
    const created = unwrap(
      "broadcasts.create",
      await resend.broadcasts.create({
        name: EXAMPLE_BROADCAST_NAME,
        segmentId: newsletterSegment.id,
        from: FROM,
        replyTo: REPLY_TO,
        subject: "[Edit me] This week: one thing that makes stores earn",
        previewText: "[Edit me] One conversion mechanic worth stealing.",
        html: layout({
          preheader: "[Edit me] One conversion mechanic worth stealing.",
          content: `
            ${p("<strong>[This is the example issue — duplicate it, edit, and send. Don't send this one.]</strong>")}
            ${p("Hey,")}
            ${p("[The one idea this issue rests on — a teardown, a mechanic, a number from a real build.]")}
            ${p("[Body: what it is, why it earns, how to apply it this week.]")}
            ${button(`${SITE_URL}/blog`, "Read the full breakdown →")}
            ${p("Talk soon,<br/>Luna<br/>Luna Labs")}`,
          footerNote: unsubscribeFooter,
        }),
      }),
    );
    console.log(`+ created draft example broadcast (${created.id})`);
  }

  console.log(`
Done. Set these env vars (local .env.local + Vercel):
  RESEND_NEWSLETTER_SEGMENT_ID=${newsletterSegment.id}
  RESEND_CONTACT_SEGMENT_ID=${contactSegment.id}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
