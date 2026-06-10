export type ServiceCategory = {
  slug: string;
  number: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  thesis: string;
  description: string;
  bullets: string[];
  problem: string;
  solution: string;
  process: { step: string; description: string }[];
  outcomes: { metric: string; label: string }[];
  faqs: { question: string; answer: string }[];
  relatedCategories: string[];
  relatedCaseStudies: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "build",
    number: "01",
    title: "Build & Development",
    metaTitle: "Shopify Store Build & Web Development for Creative Brands",
    metaDescription:
      "Luna Labs builds Shopify stores, migrates platforms, and sets up domains and technical infrastructure — so your audience has somewhere real to buy.",
    h1: "Build & development for brands ready to sell online",
    intro:
      "You have the audience. We build the store — Shopify architecture, platform migration, professional websites, and the domain and technical layer that makes it all work.",
    thesis:
      "Your audience is real — your store should be too.",
    description:
      "We build revenue-ready storefronts from scratch, migrate brands off Square or Wix, and handle the technical setup most agencies skip: domains, DNS, analytics containers, and launch infrastructure.",
    bullets: [
      "Shopify Store Build",
      "Platform Migration",
      "Professional & Service Websites",
      "Domain & Technical Setup",
    ],
    problem:
      "Creative brands spend years building an audience on Instagram or TikTok but have nowhere credible to send them — a link-in-bio that goes nowhere, a Square shop that doesn't match the brand, or no store at all.",
    solution:
      "Luna Labs delivers full Shopify builds, clean platform migrations, and professional websites with custom domains, mobile-first design, and checkout flows that don't leak sales on day one.",
    process: [
      {
        step: "Discovery",
        description:
          "We map your audience, catalog, revenue goals, and current platform gaps before writing a line of code.",
      },
      {
        step: "Architecture",
        description:
          "Collection structure, page hierarchy, domain strategy, and technical setup planned around how your buyers actually shop.",
      },
      {
        step: "Build",
        description:
          "Custom Shopify storefront or professional website — product upload, merchandising, mobile QA, and analytics wired from launch.",
      },
      {
        step: "Launch",
        description:
          "Domain connected, redirects in place, tracking live, and a clear handoff so you can manage the store independently.",
      },
    ],
    outcomes: [
      { metric: "Live", label: "Storefront on custom domain" },
      { metric: "↑", label: "Brand credibility at checkout" },
      { metric: "0→1", label: "Revenue infrastructure" },
    ],
    faqs: [
      {
        question: "Can you migrate from Square, Wix, or Etsy to Shopify?",
        answer:
          "Yes. Platform migration is included in our Essential tier — product catalog, collection structure, and a storefront that finally matches your brand.",
      },
      {
        question: "Do you build non-Shopify websites?",
        answer:
          "Yes. For professional and service businesses — doctors, consultants, studios — we build fast Next.js sites with booking, maps, contact flows, and SEO built in.",
      },
      {
        question: "How long does a new store build take?",
        answer:
          "Most Essential builds launch in 1–2 weeks. Growth builds with email flows and additional pages take 2–3 weeks.",
      },
    ],
    relatedCategories: ["design", "conversion"],
    relatedCaseStudies: ["nocturne-shadows", "dra-yesly-garcia"],
  },
  {
    slug: "design",
    number: "02",
    title: "Design & Experience",
    metaTitle: "Storefront Design & UX for Shopify Brands | Luna Labs",
    metaDescription:
      "Revenue-focused storefront redesign, product page optimization, collection architecture, and campaign landing pages — design that converts, not just impresses.",
    h1: "Design & experience built to convert, not just impress",
    intro:
      "A beautiful store that doesn't convert is an expensive gallery. We redesign storefronts, optimize product pages, architect collections, and build campaign landing pages with one lens: revenue.",
    thesis:
      "Design should move visitors toward a purchase — not just win a mood board.",
    description:
      "We refresh outdated storefronts, sharpen product page hierarchy, segment collections by buyer type, and build single-focus landing pages for drops and paid campaigns.",
    bullets: [
      "Storefront Redesign",
      "Product Page Optimization",
      "Collection & Catalog Architecture",
      "Campaign Landing Pages",
    ],
    problem:
      "Stores outgrow their original design — inconsistent branding, buried pricing, confusing navigation, and product pages that look good in a screenshot but don't close sales.",
    solution:
      "Luna Labs delivers a conversion-minded design system: clear product hierarchy, immediate pricing, segmented collections, and landing pages matched to the ad or email that sent the traffic.",
    process: [
      {
        step: "Audit",
        description:
          "We review your current UX, brand expression, and where visitors drop off — homepage through checkout.",
      },
      {
        step: "Design system",
        description:
          "Typography, components, product cards, and page templates built for your brand and buyer types.",
      },
      {
        step: "Rebuild",
        description:
          "Storefront redesign or targeted page builds — mobile-first, with trust signals and clear CTAs on every template.",
      },
      {
        step: "Launch & measure",
        description:
          "Before/after baseline from GA4 so design improvements are tied to conversion, not opinion.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Product page clarity" },
      { metric: "↑", label: "Brand perception" },
      { metric: "↓", label: "Browse-to-buy friction" },
    ],
    faqs: [
      {
        question: "Is a redesign different from a new store build?",
        answer:
          "Yes. A redesign refreshes an existing store — new design system, updated templates, better hierarchy. A build is for brands starting from zero or migrating platforms.",
      },
      {
        question: "When do I need a campaign landing page?",
        answer:
          "When traffic arrives with specific intent — a product drop, paid ad, or email promo. Sending that traffic to a generic homepage dilutes conversion.",
      },
      {
        question: "How do you handle dark or niche aesthetics?",
        answer:
          "We preserve brand identity while keeping pricing, navigation, and CTAs commercially clear — mood and usability are not mutually exclusive.",
      },
    ],
    relatedCategories: ["build", "conversion"],
    relatedCaseStudies: ["nocturne-shadows"],
  },
  {
    slug: "conversion",
    number: "03",
    title: "Conversion & Revenue",
    metaTitle: "Shopify CRO & Conversion Optimization Services | Luna Labs",
    metaDescription:
      "Conversion rate optimization, checkout recovery, and email/SMS automation for Shopify brands — turn existing traffic into revenue without more ad spend.",
    h1: "Conversion & revenue for stores that already have traffic",
    intro:
      "More followers won't fix a leaking funnel. We optimize conversion paths, recover abandoned carts, and wire Klaviyo flows that turn existing visitors into paying customers.",
    thesis:
      "You don't need more traffic — you need more of what you already have to convert.",
    description:
      "We audit your full purchase journey, fix checkout friction, deploy abandoned-cart and post-purchase email flows, and run monthly CRO experiments measured against a real baseline.",
    bullets: [
      "Conversion Rate Optimization (CRO)",
      "Checkout & Cart Recovery",
      "Email & SMS Automation",
    ],
    problem:
      "Brands with real audiences still lose revenue at every step — weak trust signals, no cart recovery, unclear shipping, and checkout flows that abandon buyers before they pay.",
    solution:
      "Luna Labs implements revenue systems: on-page CRO, Klaviyo welcome and abandoned-cart flows, shipping threshold nudges, and checkout simplification — all measured from week one.",
    process: [
      {
        step: "Revenue audit",
        description:
          "We identify the highest-impact leaks across homepage, collection, product, cart, and checkout using GA4 and session behavior.",
      },
      {
        step: "Quick wins",
        description:
          "Trust signals, shipping clarity, first-order offers, and checkout fixes deployed in the first sprint.",
      },
      {
        step: "Recovery systems",
        description:
          "Welcome, abandoned-cart, and post-purchase Klaviyo flows that recover revenue automatically.",
      },
      {
        step: "Ongoing CRO",
        description:
          "Monthly experiments with reported results — one test at a time, measured against baseline.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Conversion rate" },
      { metric: "↑", label: "Recovered cart revenue" },
      { metric: "↑", label: "Email-attributed sales" },
    ],
    faqs: [
      {
        question: "Do I need more traffic before optimizing?",
        answer:
          "No. If you have an audience — even a few thousand followers — optimization captures revenue from traffic you already have. More traffic without optimization just scales the leak.",
      },
      {
        question: "What tools do you use for conversion work?",
        answer:
          "Shopify for the storefront, Klaviyo for email and SMS recovery, and GA4 for conversion tracking and experiment reporting.",
      },
      {
        question: "How is CRO different from a redesign?",
        answer:
          "CRO fixes how your store earns — funnel leaks, recovery flows, checkout friction. A redesign fixes how it looks and is structured. Many projects need both, but they are different jobs.",
      },
    ],
    relatedCategories: ["design", "growth"],
    relatedCaseStudies: ["nocturne-shadows", "dra-yesly-garcia"],
  },
  {
    slug: "growth",
    number: "04",
    title: "Growth & Ongoing",
    metaTitle: "Ongoing Ecommerce Growth, Analytics & Revenue Care | Luna Labs",
    metaDescription:
      "Analytics setup, SEO foundation, and ongoing revenue care for Shopify brands — monthly CRO, email campaigns, and performance reporting that compounds.",
    h1: "Growth & ongoing care that compounds over time",
    intro:
      "Launch is day one, not the finish line. We set up analytics and SEO foundations, then run ongoing revenue care — email calendars, CRO experiments, and monthly reporting.",
    thesis:
      "Revenue systems need maintenance — not just a launch day.",
    description:
      "We configure GA4 and GTM, establish SEO and indexing foundations, and offer monthly care plans with email campaigns, store edits, CRO tests, and clear performance reports.",
    bullets: [
      "Analytics & Performance Reporting",
      "SEO Foundation",
      "Ongoing Revenue Care",
    ],
    problem:
      "Most brands launch and stall — no baseline metrics, no indexing strategy, no email calendar, and no one running monthly experiments to keep revenue growing.",
    solution:
      "Luna Labs sets up tracking from day one and offers ongoing care: scheduled email/SMS campaigns, one CRO experiment per month, store updates, and a performance report you can actually read.",
    process: [
      {
        step: "Instrumentation",
        description:
          "GA4, GTM, conversion events, and Search Console — a baseline before any optimization begins.",
      },
      {
        step: "SEO foundation",
        description:
          "Meta tags, OG previews, sitemap, structured data, and indexing setup so the store is discoverable.",
      },
      {
        step: "Care plan",
        description:
          "Monthly email calendar, CRO experiment, store edits, and a performance report on revenue, conversion, and list growth.",
      },
      {
        step: "Iterate",
        description:
          "Each month builds on the last — compounding improvements instead of one-off fixes.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Measurable month-over-month growth" },
      { metric: "↑", label: "Email list & attributed revenue" },
      { metric: "↓", label: "Guesswork in decisions" },
    ],
    faqs: [
      {
        question: "What is included in ongoing revenue care?",
        answer:
          "Email/SMS campaign calendar, one CRO experiment per month with reported results, a block of store edits, and a performance report covering revenue, conversion, and list growth.",
      },
      {
        question: "Do I need growth services if I just launched?",
        answer:
          "Analytics and SEO foundation should be set up at launch. Ongoing care makes sense once the store is live and you want compounding improvements without hiring in-house.",
      },
      {
        question: "Can you manage paid ads as part of care?",
        answer:
          "Yes, at the $1,100/mo care tier and above. Ad spend is billed separately — we manage and optimize against your goals.",
      },
    ],
    relatedCategories: ["conversion", "build"],
    relatedCaseStudies: ["dra-yesly-garcia"],
  },
];

/** @deprecated Use serviceCategories — kept for imports that expect `services` */
export const services = serviceCategories;

export type ServicePage = ServiceCategory;

export function getService(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return serviceCategories.map((s) => s.slug);
}
