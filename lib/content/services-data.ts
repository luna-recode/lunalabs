export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problem: string;
  solution: string;
  process: { step: string; description: string }[];
  outcomes: { metric: string; label: string }[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudies: string[];
  relatedServices: string[];
};

export const services: ServicePage[] = [
  {
    slug: "conversion-websites",
    title: "Conversion Websites",
    metaTitle:
      "Conversion Website Design for Ecommerce Brands | Shopify CRO",
    metaDescription:
      "Luna Labs builds conversion-focused websites for Shopify brands — structured for trust, speed, and checkout completion. Turn traffic into revenue.",
    h1: "Conversion websites built to turn traffic into revenue",
    intro:
      "A conversion website is an ecommerce storefront engineered for conversion rate optimization — not just aesthetics. Luna Labs designs Shopify sites where every page, product layout, and checkout step is built to reduce friction and increase completed purchases.",
    problem:
      "Most Shopify stores look acceptable but leak revenue at every step: unclear value propositions, weak trust signals, slow mobile performance, and checkout flows that abandon buyers before they pay.",
    solution:
      "We rebuild the storefront as an ecommerce revenue system — custom design, conversion-ready product pages, mobile-first performance, and on-page trust signals that move visitors from browse to buy.",
    process: [
      {
        step: "Audit",
        description:
          "We map conversion leaks across homepage, collection, product, and checkout pages using GA4 and session behavior.",
      },
      {
        step: "Architecture",
        description:
          "We define page hierarchy, messaging, and CRO elements — reviews, guarantees, shipping clarity, and urgency without gimmicks.",
      },
      {
        step: "Build",
        description:
          "Custom Shopify storefront with mobile-first optimization, structured data, and semantic HTML for search and AI visibility.",
      },
      {
        step: "Launch & measure",
        description:
          "Pre-launch QA, analytics setup, and a baseline conversion report so improvements are measurable from week one.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Conversion rate lift" },
      { metric: "↓", label: "Checkout abandonment" },
      { metric: "↑", label: "Mobile purchase rate" },
    ],
    faqs: [
      {
        question: "What is a conversion website?",
        answer:
          "A conversion website is an ecommerce storefront designed around conversion rate optimization — clear messaging, trust signals, fast load times, and friction-free checkout — so more visitors become paying customers.",
      },
      {
        question: "How is this different from a Shopify theme?",
        answer:
          "A theme changes appearance. A conversion website changes revenue mechanics — product page structure, social proof placement, checkout flow, and recovery systems that themes do not include.",
      },
      {
        question: "How long does a conversion website build take?",
        answer:
          "Most Essential builds launch in 1–2 weeks. Growth builds with email flows and CRO landing pages take 2–3 weeks.",
      },
    ],
    relatedCaseStudies: ["dra-yesly-garcia"],
    relatedServices: ["ecommerce-optimization", "landing-page-design"],
  },
  {
    slug: "ecommerce-optimization",
    title: "Ecommerce Optimization",
    metaTitle:
      "Ecommerce Optimization & Shopify CRO Services",
    metaDescription:
      "Improve Shopify conversion rates with ecommerce optimization — abandoned-cart recovery, trust signals, AOV lifts, and checkout flow fixes that compound revenue.",
    h1: "Ecommerce optimization for Shopify stores that already have traffic",
    intro:
      "Ecommerce optimization is the practice of improving an existing Shopify store's conversion rate, average order value, and customer lifetime value — without requiring more ad spend or influencer traffic.",
    problem:
      "Brands with real audiences still leave revenue on the table: no abandoned-cart recovery, weak product page proof, no AOV strategy, and no systematic CRO testing.",
    solution:
      "Luna Labs implements ecommerce revenue systems — Klaviyo automations, on-page trust signals, shipping threshold nudges, and monthly CRO experiments that compound over time.",
    process: [
      {
        step: "Revenue audit",
        description:
          "We identify the highest-impact leaks: cart abandonment, low AOV, weak email capture, and underperforming product pages.",
      },
      {
        step: "Quick wins",
        description:
          "Trust signals, checkout simplification, and first-order offers deployed in the first sprint.",
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
      { metric: "↑", label: "Recovered cart revenue" },
      { metric: "↑", label: "Average order value" },
      { metric: "↑", label: "Email-attributed revenue" },
    ],
    faqs: [
      {
        question: "What is ecommerce optimization?",
        answer:
          "Ecommerce optimization is the systematic improvement of a store's conversion rate, average order value, and customer retention through CRO, email recovery, and checkout improvements.",
      },
      {
        question: "Do I need more traffic before optimizing?",
        answer:
          "No. If you have an audience — even a few thousand followers — optimization captures revenue from traffic you already have. More traffic without optimization just scales the leak.",
      },
      {
        question: "What tools does Luna Labs use for optimization?",
        answer:
          "Shopify for storefront, Klaviyo for email/SMS recovery, and GA4 for conversion tracking and experiment reporting.",
      },
    ],
    relatedCaseStudies: ["dra-yesly-garcia"],
    relatedServices: ["conversion-websites", "website-redesign"],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    metaTitle:
      "High-Converting Landing Page Design for Ecommerce Campaigns",
    metaDescription:
      "Landing page design built for campaign conversion — single-focus pages for product drops, paid social, and email campaigns that turn clicks into purchases.",
    h1: "Landing page design for campaigns that need to convert on first visit",
    intro:
      "Landing page performance is measured by one metric: conversion rate. Luna Labs designs single-focus pages for product launches, paid social campaigns, and email promotions — built to convert cold and warm traffic in one session.",
    problem:
      "Sending campaign traffic to a generic homepage dilutes intent. Visitors arrive with a specific offer in mind and leave because the page does not match the ad, email, or post that sent them.",
    solution:
      "We build campaign-specific landing pages with matched messaging, social proof, a single CTA, and mobile-first load performance — so every click has a clear path to purchase.",
    process: [
      {
        step: "Intent mapping",
        description:
          "We align page messaging with the ad, email, or post that drives traffic — headline, offer, and proof match the source.",
      },
      {
        step: "Structure",
        description:
          "Single-column flow: hero → proof → offer → FAQ → CTA. No navigation distractions.",
      },
      {
        step: "Build & test",
        description:
          "Responsive page with fast load, on-page SEO, and analytics events for conversion tracking.",
      },
      {
        step: "Iterate",
        description:
          "Post-launch CRO adjustments based on scroll depth, click-through, and conversion data.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Campaign conversion rate" },
      { metric: "↓", label: "Cost per acquisition" },
      { metric: "↑", label: "Landing page performance score" },
    ],
    faqs: [
      {
        question: "What makes a high-converting landing page?",
        answer:
          "Message match with the traffic source, a single clear CTA, social proof above the fold, fast mobile load, and no navigation that pulls visitors away from the offer.",
      },
      {
        question: "When should I use a landing page instead of my homepage?",
        answer:
          "Use a landing page for paid ads, product drops, email promotions, and any campaign where visitors arrive with a specific intent that your homepage does not address directly.",
      },
      {
        question: "How fast can a landing page launch?",
        answer:
          "Our Launch tier delivers a conversion-minded single page in approximately one week.",
      },
    ],
    relatedCaseStudies: ["dra-yesly-garcia"],
    relatedServices: ["conversion-websites", "ecommerce-optimization"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    metaTitle:
      "Revenue-Focused Website Redesign for Shopify Brands",
    metaDescription:
      "Website redesign that changes how your store earns — not just how it looks. Luna Labs rebuilds Shopify storefronts for conversion rate optimization and revenue growth.",
    h1: "Website redesign focused on revenue, not just aesthetics",
    intro:
      "A revenue-focused website redesign rebuilds your Shopify storefront around conversion rate optimization — new information architecture, updated brand expression, and the CRO mechanics that a cosmetic refresh never touches.",
    problem:
      "Stores outgrow their original design: outdated UX, broken mobile experience, inconsistent branding, and no connection between how the site looks and how it performs.",
    solution:
      "Luna Labs delivers a full storefront redesign with custom design system, conversion-ready templates, platform migration if needed, and launch analytics so the before/after is measurable.",
    process: [
      {
        step: "Discovery",
        description:
          "Brand audit, competitor review, and conversion baseline from current analytics.",
      },
      {
        step: "Design system",
        description:
          "Typography, color, component library, and page templates built for your brand and conversion goals.",
      },
      {
        step: "Rebuild",
        description:
          "Custom Shopify storefront with up to 5 core pages, product merchandising, and mobile-first QA.",
      },
      {
        step: "Migration & launch",
        description:
          "Platform migration, domain setup, SEO redirects, and a launch report with conversion benchmarks.",
      },
    ],
    outcomes: [
      { metric: "↑", label: "Brand perception" },
      { metric: "↑", label: "Conversion rate" },
      { metric: "↑", label: "Time on site" },
    ],
    faqs: [
      {
        question: "Is a website redesign worth it for a small brand?",
        answer:
          "Yes, when the redesign targets revenue mechanics — not just visual refresh. A store that finally looks like the brand and does not lose sales at checkout pays for itself in recovered revenue.",
      },
      {
        question: "Can you migrate from Square, Wix, or Etsy to Shopify?",
        answer:
          "Yes. Our Essential tier includes platform migration, product upload, and merchandising for your launch catalog.",
      },
      {
        question: "How do you measure redesign success?",
        answer:
          "GA4 baseline before launch, conversion rate and revenue tracking from week one, and monthly reporting on key metrics.",
      },
    ],
    relatedCaseStudies: ["dra-yesly-garcia"],
    relatedServices: ["conversion-websites", "ecommerce-optimization"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}
