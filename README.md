# Luna Labs — bylunalabs.com

Marketing site for Luna Labs, a conversion-rate-optimization and web design
studio for Shopify brands and local businesses (Los Angeles, CA).

**Stack:** Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Sanity CMS · Resend (email) · Cal.com (booking) · Vercel (hosting + analytics)

## Getting started

```bash
npm install
cp .env.example .env.local   # or create .env.local with the vars below
npm run dev                  # http://localhost:3000
```

| Command         | What it does                  |
| --------------- | ----------------------------- |
| `npm run dev`   | Dev server                    |
| `npm run build` | Production build — run before every push |
| `npm run lint`  | ESLint                        |

### Environment variables

The site runs without any of these (forms fail gracefully, Sanity falls back
to static content), but for full functionality:

| Variable | Used for |
| -------- | -------- |
| `RESEND_API_KEY` | Contact form + subscribe emails |
| `RESEND_NEWSLETTER_SEGMENT_ID` | Newsletter segment (falls back to legacy `RESEND_AUDIENCE_ID`) |
| `RESEND_CONTACT_SEGMENT_ID` | Segment for contact-form inquiries |
| `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` | Contact form sender/recipient (default `hello@bylunalabs.com`) |
| `SANITY_REVALIDATE_SECRET` | Auth for the `/api/revalidate` webhook from Sanity |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` | Sanity project (defaults to `mugt2oz4` / `production`) |

> **Note for AI-assisted development:** see `AGENTS.md` — this Next.js version
> is newer than most models' training data. Read the guides in
> `node_modules/next/dist/docs/` before writing framework code.

## Where things live

```
app/                  Routes (App Router). One folder per page.
  actions/            Server actions (contact, subscribe) — all form handling
  api/revalidate/     Sanity webhook → tag-based ISR revalidation
  studio/             Embedded Sanity Studio at /studio
components/           Shared React components
  launch/  pricing/  seo/   Page-scoped component groups
lib/
  content/            Content layer — Sanity-first with static fallback (see below)
  i18n/               EN/ES translations + LocaleProvider
  seo/                Metadata helpers, JSON-LD schema builders, SITE constants
  sanity/             Sanity client
sanity/schemaTypes/   CMS document schemas (blogPost, caseStudy)
public/               Static brand assets (logos, hero video/poster, icons)
.claude/skills/       UI/UX Pro Max design-audit skill (dev tooling, never shipped)
```

## The patterns (and why)

### Theme tokens — read this first

The site is a **light theme**, but the token names are inherited from an
earlier dark design and are **semantically inverted**:

- `--ink` (`bg-ink`) = near-white page background `#f4f8fd`
- `--bone` (`text-bone`) = dark navy text `#15233f`

All colors are defined once in `app/globals.css` (`:root` + `@theme inline`).
**Never hardcode colors in components** — use the utilities (`text-bone-dim`,
`text-muted`, `border-line`, `bg-card`…).

**Dark sections** (footer, final CTAs, featured pricing card) don't use a dark
variant — they locally override the CSS variables via Tailwind arbitrary
properties: `[--bone:#ffffff] [--gray:#aebbd2] …`. Two rules:

1. Override `--gray` (not `--text-faint`) to change `text-muted` — CSS custom
   properties resolve at definition point, so overriding the *referenced*
   variable does nothing.
2. If a dark section uses `btn-outline`/`btn-fill`, also override
   `--elevated`/`--card` or the button renders light-on-light (see footer).

### Accessibility — non-negotiable

These were audited and fixed deliberately; don't regress them:

- Text contrast ≥ 4.5:1. `--text-faint` is tuned to pass on all light
  surfaces — don't lighten it. Check any new color pair.
- Microcopy floor is **11px** — no `text-[10px]` or smaller.
- Every interactive element: `cursor-pointer`, visible `:focus-visible`
  outline (global), ≥ 44px touch targets.
- `prefers-reduced-motion` is respected globally (`globals.css`) and in the
  hero videos (component-level). New animation must honor it.
- No text over busy imagery without a solid scrim — on mobile the heroes
  *split* (media panel above, text on solid background) for exactly this reason.

### Content: Sanity-first, static fallback

`lib/content/*.ts` files each export typed static data **and** `fetch*()`
functions that query Sanity first and fall back to the static data if Sanity
is unreachable. Pages call the `fetch*()` functions only.

- Editors add/edit case studies and blog posts in `/studio` — no deploy needed.
  A Sanity webhook hits `/api/revalidate`, which revalidates by cache tag.
- When adding a CMS field: update the **Sanity schema**, the **GROQ queries**,
  and the **TypeScript type** together (all three live close to each other).

### i18n

All user-facing strings go through `useTranslations()` →
`lib/i18n/translations/{en,es}.ts`. Don't hardcode copy in components that
already receive `t`. (Some launch/SEO pages are EN-only by design.)

### SEO

Every page: `createPageMetadata()` for metadata + `PageShell` with the
relevant JSON-LD builders from `lib/seo/schema.ts` (breadcrumb at minimum;
service/FAQ/article where applicable). `lib/seo/site.ts` is the single source
of truth for name, URL, email, location, socials.

### Forms & anti-spam

Server actions in `app/actions/` implement layered bot protection. **Don't
remove any of it:**

- Honeypot field `company_ref` (hidden; named so autofill never touches it)
- Time trap `form_ts` (render timestamp; too-fast submissions rejected)
- Both reject with a **fake success** — never tell bots they failed
- Per-IP rate limiting (in-process; TODO: swap to `@upstash/ratelimit` when
  Upstash is provisioned — marked in the code)
- Zod validation + HTML escaping on everything user-supplied

### Email automations — modeled in Resend, not in code

Email copy and flow logic live in the **Resend dashboard** (Templates +
Automations), seeded by `scripts/setup-resend.mjs`. The app only does two
things per form submission (`lib/email/`):

1. **Upserts the contact into a segment** —
   `lib/email/segments.ts#upsertContactIntoSegment` handles dedupe (returns
   `created | joined | resubscribed | already-member`).
2. **Fires an event** — `lib/email/events.ts`. Resend automations react:

| Event | Fired when | Automation sends template |
| ----- | ---------- | ------------------------- |
| `newsletter.subscribed` | new newsletter signup | `newsletter-welcome` |
| `newsletter.resubscribed` | unsubscriber returns | `newsletter-welcome-back` |
| `contact.submitted` | contact form sent | `contact-confirmation` |

An already-subscribed email fires **no** event (no duplicate welcomes). All
of it is best-effort: failures log but never fail the form for the user. The
internal "new inquiry" notification email stays in `app/actions/contact.ts`
(it carries the message body).

- **Change email copy:** Resend dashboard → Templates → edit → publish. No
  deploy. Variables use `{{{NAME}}}`; `FIRST_NAME`/`RESEND_UNSUBSCRIBE_URL`
  are auto-filled per contact, `GREETING_NAME` is mapped from the event
  payload by the Contact confirmation automation.
- **Change flow** (add a delay, a follow-up email, a condition): dashboard →
  Automations → edit the graph.
- **Add a new email:** add it to `TEMPLATES`/`AUTOMATIONS` in
  `scripts/setup-resend.mjs`, run it (`node --env-file=.env.local
  scripts/setup-resend.mjs` — idempotent, never overwrites existing
  resources), then fire the new event from a server action via
  `fireEmailEvent`. Upsert the contact into a segment **before** firing —
  automations resolve events against the contact record.
- **Send a newsletter (broadcast):** dashboard → Broadcasts → duplicate
  "Example — newsletter issue", edit, send to the Newsletter segment.

### Assets

- **Editor-managed images** (case studies, blog, team photos) → upload in
  Sanity (`/studio`). CDN, `next/image` optimization, and hotspot cropping
  come free. `cdn.sanity.io` is already whitelisted in `next.config.ts`.
- **Developer-managed assets** (logos, hero video) → `public/`, versioned
  with the code.
- **Hero video rules:** always muted → strip the audio track
  (`ffmpeg -an -c:v copy`); regenerate `hero-poster.jpg` from the new footage
  (`ffmpeg -i hero-video.mp4 -frames:v 1 -q:v 3 hero-poster.jpg`); keep it
  ~1MB and ≥ 720p. Avoid WhatsApp/iMessage transfers — they recompress.

## Dos and don'ts

**Do**

- Run `npm run build && npm run lint` before pushing — pages prerender at
  build time, so data/typing mistakes fail the build, which is the point.
- Reuse the established primitives: `ScrollReveal`, `Accordion`,
  `DeviceFrame`, `BeforeAfterSlider`, `BlogStrip`, `CalButton`, `btn-fill` /
  `btn-outline`, glass panels (`bg-white/60 backdrop-blur-xl border-line`).
- Keep the visual language: serif (`font-serif`) display headings, mono
  uppercase microcopy labels, gold reserved for primary CTAs and the
  "Recommended" badge, rounded-2xl cards with the soft blue shadow.

**Don't**

- Don't use `bg-white/10`-style glass or `border-white/*` on light
  backgrounds — invisible. (Light-mode glass = `bg-white/60`+.)
- Don't add `overflow-hidden` to cards that have floating/straddling children
  (e.g. the featured pricing badge).
- Don't bypass `lib/content` fetchers to query Sanity directly from pages.
- Don't add npm dependencies for things already in the stack (forms, email,
  validation, CMS, booking are all covered).
- Don't create PRs/deploys with a red build, and don't push to `main` —
  branch + PR.

## Common tasks

- **New page:** folder under `app/`, `createPageMetadata`, wrap in
  `PageShell` with schemas, add to `app/sitemap.ts` if static.
- **New case study:** add in `/studio` (preferred) or extend the static array
  in `lib/content/case-studies-data.ts`. Upload `beforeImage` + `afterImage`
  to get the drag comparison slider automatically. The `/case-studies` page
  switches from featured rows to a grid at 3+ studies on its own.
- **Pricing change:** tiers live in the i18n translation files
  (`pricing.buildTiers`) — update **both** `en.ts` and `es.ts`, plus the
  `/launch` pricing section and FAQ if the Launch tier changed.
- **Redirects:** `next.config.ts` (`redirects()`).

## Deployment

Pushes to `main` deploy to Vercel. The apex domain 301s to
`www.bylunalabs.com` (configured in `next.config.ts`). Vercel Analytics and
Speed Insights are wired in `app/layout.tsx` — no setup needed.
