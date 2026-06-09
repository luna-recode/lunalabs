export type LandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "revenue-audit",
    title: "Free Revenue Audit",
    metaTitle:
      "Free Shopify Revenue Audit — Find Conversion Leaks",
    metaDescription:
      "Book a free 15-minute revenue audit. Luna Labs will identify conversion leaks in your Shopify store and map exactly what to build — no pitch deck, no pressure.",
    h1: "Free revenue audit for your Shopify store",
    intro:
      "Luna Labs offers a free 15-minute revenue audit for Shopify brands. We review your storefront, checkout flow, and recovery systems to identify where revenue is leaking — and map the specific build to fix it.",
    benefits: [
      "Identify top 3 conversion leaks in your store",
      "Get a clear recommendation on which tier fits your brand",
      "Understand what recovery flows you are missing",
      "No pitch deck, no pressure — just a straight answer",
    ],
    process: [
      "Book a 15-minute call via our calendar",
      "We review your live store and analytics",
      "You receive a clear action plan within 24 hours",
    ],
    faqs: [
      {
        question: "What happens in a revenue audit?",
        answer:
          "We look at your Shopify storefront, product pages, checkout flow, and email setup. We identify the highest-impact conversion leaks and recommend a specific build tier — Launch, Essential, or Growth.",
      },
      {
        question: "Is the audit really free?",
        answer:
          "Yes. No cost, no obligation. The audit is how we determine whether Luna Labs is the right fit for your brand and which services will deliver the highest revenue impact.",
      },
    ],
    cta: "Book your free revenue audit",
  },
  {
    slug: "shopify-conversion-review",
    title: "Shopify Conversion Review",
    metaTitle:
      "Free Shopify Conversion Review — CRO Assessment",
    metaDescription:
      "Get a free Shopify conversion review from Luna Labs. We assess your product pages, checkout, mobile performance, and recovery systems for CRO opportunities.",
    h1: "Free Shopify conversion review",
    intro:
      "A Shopify conversion review is a focused assessment of your store's conversion rate optimization opportunities. Luna Labs evaluates product pages, checkout friction, mobile performance, and email recovery — then delivers actionable recommendations.",
    benefits: [
      "Product page CRO assessment",
      "Checkout friction analysis",
      "Mobile performance review",
      "Recovery flow gap analysis",
    ],
    process: [
      "Share your store URL and book a call",
      "We run a structured CRO review",
      "Receive prioritized recommendations within 24 hours",
    ],
    faqs: [
      {
        question: "What is a Shopify conversion review?",
        answer:
          "A conversion review is a structured assessment of your Shopify store's ability to convert visitors into buyers. We evaluate product pages, trust signals, checkout flow, mobile UX, and abandoned-cart recovery.",
      },
      {
        question: "How is this different from a revenue audit?",
        answer:
          "The conversion review focuses specifically on CRO mechanics — product pages, checkout, and recovery. The revenue audit is broader and includes strategic recommendations on build tier and overall ecommerce systems.",
      },
    ],
    cta: "Book your conversion review",
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((lp) => lp.slug === slug);
}

export function getAllLandingPageSlugs() {
  return landingPages.map((lp) => lp.slug);
}
