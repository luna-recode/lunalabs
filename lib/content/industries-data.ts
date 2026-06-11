export type IndustryPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
};

export const industries: IndustryPage[] = [
  {
    slug: "fashion-brands",
    title: "Fashion Brands",
    metaTitle:
      "Conversion Rate Optimization for Fashion Brands on Shopify",
    metaDescription:
      "Luna Labs builds conversion-focused Shopify storefronts for fashion brands — lookbook UX, size guides, mobile-first shopping, and recovery flows.",
    h1: "Ecommerce revenue systems for fashion brands on Shopify",
    intro:
      "Fashion brands on Shopify face unique conversion challenges: size uncertainty, high return rates, and mobile-first shopping behavior. Luna Labs builds storefronts and CRO systems designed for how fashion customers actually buy.",
    challenges: [
      "Size and fit uncertainty reduces add-to-cart rates",
      "Lookbook-style browsing without clear paths to purchase",
      "High mobile traffic with low mobile conversion",
      "No abandoned-cart recovery for considered purchases",
    ],
    solutions: [
      "Size guides and fit information on product pages",
      "Collection pages structured for discovery and conversion",
      "Mobile-first product imagery and tap-friendly navigation",
      "Klaviyo recovery flows for high-consideration purchases",
    ],
    relatedServices: ["build", "conversion"],
    faqs: [
      {
        question: "How do you improve conversion for fashion brands?",
        answer:
          "We focus on size clarity, mobile product page performance, social proof from UGC, and abandoned-cart recovery — the four levers that move fashion conversion rates most.",
      },
    ],
  },
  {
    slug: "dtc-brands",
    title: "DTC Brands",
    metaTitle:
      "Shopify CRO & Web Design for DTC Brands",
    metaDescription:
      "Direct-to-consumer brands need conversion rate optimization, not just branding. Luna Labs builds DTC revenue systems on Shopify.",
    h1: "Conversion rate optimization for direct-to-consumer brands",
    intro:
      "DTC brands sell directly to consumers without retail intermediaries. That means every visitor must convert at a rate that sustains customer acquisition costs. Luna Labs builds DTC ecommerce revenue systems — storefront, recovery, and landing page performance.",
    challenges: [
      "CAC pressure requires higher conversion rates",
      "Paid social traffic needs matched landing pages",
      "No retail shelf presence — the website is the entire brand experience",
      "Email list is the primary retention channel but often underbuilt",
    ],
    solutions: [
      "Campaign-specific landing pages for paid social",
      "Conversion-ready product pages with UGC and reviews",
      "Welcome and abandoned-cart Klaviyo automations",
      "Monthly CRO experiments to improve unit economics",
    ],
    relatedServices: ["design", "conversion"],
    faqs: [
      {
        question: "What CRO metrics matter most for DTC?",
        answer:
          "Conversion rate, average order value, cost per acquisition, and email-attributed revenue. These four metrics determine whether your DTC unit economics work.",
      },
    ],
  },
  {
    slug: "shopify-stores",
    title: "Shopify Stores",
    metaTitle:
      "Shopify Store Optimization & Conversion Web Design",
    metaDescription:
      "Luna Labs specializes in Shopify store optimization — conversion websites, checkout fixes, email recovery, and landing page performance for Shopify merchants.",
    h1: "Shopify optimization for stores ready to convert more traffic",
    intro:
      "Luna Labs is a Shopify-focused agency. We build conversion rate optimization systems exclusively on Shopify — custom storefronts, Klaviyo recovery, GA4 tracking, and landing pages engineered for ecommerce revenue.",
    challenges: [
      "Generic themes that look fine but do not convert",
      "Shopify app bloat slowing page load",
      "Checkout customization limits without Plus",
      "No systematic approach to CRO testing",
    ],
    solutions: [
      "Custom-designed Shopify storefronts on premium themes",
      "Lean app stack focused on conversion, not feature count",
      "Checkout optimization within Shopify's native flow",
      "Monthly CRO experiments with GA4 reporting",
    ],
    relatedServices: ["build", "design"],
    faqs: [
      {
        question: "Do you only work with Shopify?",
        answer:
          "Yes. Shopify is our platform of focus. We build conversion websites, recovery flows, and landing pages exclusively on Shopify and its ecosystem (Klaviyo, GA4).",
      },
    ],
  },
  {
    slug: "beauty-brands",
    title: "Beauty Brands",
    metaTitle:
      "Ecommerce Web Design for Beauty Brands on Shopify",
    metaDescription:
      "Beauty brand Shopify storefronts built for conversion — ingredient transparency, shade matching UX, subscription flows, and social proof.",
    h1: "Shopify storefronts and CRO for beauty brands",
    intro:
      "Beauty brands need storefronts that build trust fast — ingredient lists, shade information, before/after proof, and subscription options. Luna Labs designs beauty ecommerce experiences that convert social followers into repeat buyers.",
    challenges: [
      "Shade and ingredient questions block purchases",
      "Subscription and replenishment flows often missing",
      "UGC and before/after proof not leveraged on product pages",
      "High influencer traffic with low on-site conversion",
    ],
    solutions: [
      "Ingredient and shade information above the fold",
      "UGC galleries and review integration on product pages",
      "Subscription and replenishment flow setup",
      "Influencer traffic landing pages with matched messaging",
    ],
    relatedServices: ["build", "design"],
    faqs: [
      {
        question: "How do beauty brands improve Shopify conversion?",
        answer:
          "Trust signals (ingredients, reviews, UGC), shade/fit clarity, subscription options, and abandoned-cart recovery are the highest-impact levers for beauty ecommerce.",
      },
    ],
  },
  {
    slug: "luxury-ecommerce",
    title: "Luxury Ecommerce",
    metaTitle:
      "Luxury Ecommerce Web Design & Conversion Optimization",
    metaDescription:
      "Luxury ecommerce requires premium UX without sacrificing conversion. Luna Labs builds high-end Shopify storefronts with CRO mechanics that protect brand perception.",
    h1: "Luxury ecommerce design that converts without compromising brand",
    intro:
      "Luxury ecommerce balances premium brand expression with conversion rate optimization. Luna Labs builds high-end Shopify storefronts where design quality and revenue mechanics work together — not in tension.",
    challenges: [
      "Premium aesthetics often sacrifice usability",
      "High price points require stronger trust signals",
      "Long consideration cycles without recovery systems",
      "Mobile experience that does not match brand quality",
    ],
    solutions: [
      "Custom design systems that feel premium on every device",
      "Editorial product pages with proof and craftsmanship storytelling",
      "Considered-purchase abandoned-cart sequences",
      "White-glove checkout experience with transparent policies",
    ],
    relatedServices: ["design", "build"],
    faqs: [
      {
        question: "Can luxury brands use conversion optimization without looking cheap?",
        answer:
          "Yes. CRO for luxury means clarity, trust, and friction removal — not discount banners or urgency timers. Premium brands convert higher when shipping, returns, and product details are transparent and beautifully presented.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs() {
  return industries.map((i) => i.slug);
}
