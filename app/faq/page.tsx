import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { CtaBlock } from "@/components/seo/cta-block";
import { PageShell } from "@/components/seo/page-shell";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ — Luna Labs Shopify & Ecommerce Questions",
  description:
    "Answers to common questions about Luna Labs services — Shopify CRO, website builds, pricing, timelines, and what to expect working with us.",
  path: "/faq",
});

const faqs = [
  {
    question: "What exactly does Luna Labs do?",
    answer:
      "Luna Labs builds and optimizes Shopify storefronts for ecommerce brands. We focus on conversion rate optimization (CRO), revenue-driven website design, and local business web presence — everything from a full Shopify build to landing page optimization to Google Business Profile setup.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A Launch package (local business website) is typically live in about one week. A full Shopify storefront build or CRO engagement runs 2–6 weeks. We will give you a clear timeline before any work begins.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer three tiers — Launch, Essential, and Growth — each designed for a different stage of business. Pricing is fixed per project, not hourly, so you always know what you are paying before we start. See the Pricing page for full details.",
  },
  {
    question: "Do you work with brands outside of Los Angeles?",
    answer:
      "Yes. While we are based in Los Angeles, CA, we work with ecommerce brands across the United States and internationally. Our process is fully remote and async-friendly.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "Our core expertise is Shopify. For local business websites we build on Next.js. We do not build on Wix, Squarespace, or WordPress.",
  },
  {
    question: "Will my site be optimized for SEO?",
    answer:
      "Yes. Every site we build includes on-page SEO — semantic HTML, meta titles and descriptions, structured data (JSON-LD), sitemap, and performance optimization. For blog and service pages we also write content structured for search intent.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "We offer post-launch support as part of select packages. Ongoing CRO retainers — monthly experiments, email flow optimization, and conversion audits — are available for brands that want continuous improvement after launch.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free revenue audit through the 'Book a free consult' button anywhere on the site. We will review your store or project, identify the highest-impact opportunities, and walk you through which package fits best — no commitment required.",
  },
  {
    question: "What is conversion rate optimization (CRO)?",
    answer:
      "CRO is the practice of increasing the percentage of visitors who take a desired action — buying a product, filling out a form, or booking a call — without increasing ad spend. It covers product page structure, trust signals, checkout flow, mobile performance, and email recovery. Luna Labs treats CRO as the foundation of every project, not an add-on.",
  },
  {
    question: "My store gets traffic but very few sales. Can you help?",
    answer:
      "Yes — this is the most common problem we solve. Traffic without conversion usually means friction in the buying experience: unclear product pages, slow load times, hidden shipping costs, or no trust signals. We audit your funnel, identify the drop-off points, and fix them in order of revenue impact.",
  },
  {
    question: "Do I need a new website, or can you improve what I already have?",
    answer:
      "Both are valid paths. If your current site has a solid foundation, a CRO audit and targeted fixes often deliver faster results than a full rebuild. If the theme or structure is the root cause of poor performance, a rebuild makes more sense. We will tell you honestly which applies to your situation after reviewing your store.",
  },
  {
    question: "What is included in the free revenue audit?",
    answer:
      "We review your store's conversion funnel — homepage, product pages, cart, and checkout — and identify the top friction points costing you sales. You walk away with a prioritized list of fixes and a clear picture of which package addresses them. There is no pitch, no pressure, and no obligation to hire us afterward.",
  },
  {
    question: "Can you help with email marketing and Klaviyo?",
    answer:
      "Yes. Abandoned-cart sequences, post-purchase flows, welcome series, and win-back campaigns are part of our Growth package. We set up and optimize Klaviyo flows using your store's actual customer behavior, not generic templates.",
  },
  {
    question: "Will I own everything after the project ends?",
    answer:
      "Yes. You own your domain, your Shopify store, your code, and all content we produce. We do not lock you into proprietary systems. If you ever decide to work with another agency or go in-house, everything transfers cleanly.",
  },
  {
    question: "How do you measure whether the work was successful?",
    answer:
      "We agree on success metrics before the project starts — typically conversion rate, average order value, or revenue per session. We set up GA4 ecommerce tracking if it is not already in place and report against baseline numbers so improvements are measurable, not subjective.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        faqSchema(faqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ]}
    >
      {/* ── Header ── */}
      <header className="border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(48px,8vh,72px)] pt-[clamp(130px,18vh,180px)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            FAQ
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-[clamp(42px,7vw,88px)] font-medium leading-[1.0] tracking-tight">
              Common{" "}
              <em className="italic text-accent">questions.</em>
            </h1>
            <p className="max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim md:text-right">
              Everything you need to know about working with Luna Labs — services, timelines, pricing, and process.
            </p>
          </div>
        </div>
      </header>

      {/* ── Questions ── */}
      <section
        aria-label="Frequently asked questions"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[800px]">
          <Accordion items={faqs} />
        </div>
      </section>

      <CtaBlock
        heading="Still have questions?"
        body="Book a free consult and we will walk you through exactly what working with Luna Labs looks like for your project."
      />
    </PageShell>
  );
}
