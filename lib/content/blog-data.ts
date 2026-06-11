import { cache } from "react";
import { client } from "@/lib/sanity/client";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt?: string;
  readingTime: string;
  relatedServices: string[];
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-increase-conversion-rate-on-shopify",
    title: "How to Increase Conversion Rate on Shopify",
    metaTitle:
      "How to Increase Conversion Rate on Shopify — CRO Guide",
    metaDescription:
      "A practical guide to Shopify conversion rate optimization — product pages, checkout flow, trust signals, and recovery emails that turn traffic into revenue.",
    excerpt:
      "Conversion rate optimization on Shopify starts with fixing the pages you already have — not buying more traffic.",
    publishedAt: "2025-12-01",
    readingTime: "8 min",
    relatedServices: ["conversion", "build"],
    sections: [
      {
        heading: "What is Shopify conversion rate optimization?",
        content:
          "Shopify conversion rate optimization (CRO) is the practice of increasing the percentage of store visitors who complete a purchase. It covers product page structure, trust signals, checkout flow, mobile performance, and post-visit recovery through email. Luna Labs defines CRO as changing how a store earns — not just how it looks.",
      },
      {
        heading: "Start with product page trust signals",
        content:
          "Reviews, UGC photos, shipping timelines, and return policies belong above the fold on every product page. Visitors decide within seconds whether your store is trustworthy. Generic theme defaults bury this information below the add-to-cart button, which directly increases bounce rate.",
      },
      {
        heading: "Fix checkout friction",
        content:
          "Every extra field, surprise shipping cost, and forced account creation loses buyers. Audit your Shopify checkout for guest checkout availability, shipping cost transparency on the cart page, and mobile tap-target sizing. These fixes often deliver the fastest conversion lift.",
      },
      {
        heading: "Deploy abandoned-cart recovery",
        content:
          "If you have traffic but no abandoned-cart email flow, you are leaving recoverable revenue on the table every day. A three-email Klaviyo sequence — sent at 1 hour, 24 hours, and 72 hours — typically recovers 5–15% of abandoned carts without additional ad spend.",
      },
      {
        heading: "Measure with GA4 from day one",
        content:
          "Set up GA4 ecommerce events before making changes. Track add-to-cart rate, checkout initiation, and purchase completion by device. CRO without measurement is guessing.",
      },
    ],
    faqs: [
      {
        question: "What is a good conversion rate for Shopify?",
        answer:
          "Average Shopify conversion rates range from 1.4% to 3.2% depending on industry. Fashion and beauty brands with strong social audiences often underperform because their storefronts are not built for conversion. A focused CRO program typically lifts rates 20–50% from baseline.",
      },
      {
        question: "Should I optimize mobile or desktop first?",
        answer:
          "Mobile. Over 70% of ecommerce traffic is mobile, and mobile conversion rates are typically 30–50% lower than desktop. Fixing mobile product pages and checkout delivers the highest-impact lift.",
      },
    ],
  },
  {
    slug: "ecommerce-cro-strategy",
    title: "Ecommerce CRO Strategy: A Framework for Revenue Growth",
    metaTitle:
      "Ecommerce CRO Strategy — Revenue Growth Framework",
    metaDescription:
      "Build an ecommerce CRO strategy that compounds revenue — audit, quick wins, recovery systems, and monthly experiments for Shopify brands.",
    excerpt:
      "A CRO strategy is not a one-time redesign. It is a system of audits, fixes, and measured experiments.",
    publishedAt: "2025-12-15",
    readingTime: "7 min",
    relatedServices: ["conversion", "design"],
    sections: [
      {
        heading: "Define your CRO baseline",
        content:
          "Before any changes, document current conversion rate, average order value, cart abandonment rate, and email list growth. This baseline makes every future improvement measurable and prevents false wins from seasonal traffic shifts.",
      },
      {
        heading: "Prioritize by revenue impact",
        content:
          "Rank fixes by estimated revenue impact: checkout abandonment > product page bounce > homepage engagement > blog traffic. A store losing 70% of carts at checkout will gain more from a shipping transparency fix than from a homepage hero image swap.",
      },
      {
        heading: "Build recovery layers",
        content:
          "CRO does not end at the storefront. Welcome emails, abandoned-cart sequences, and post-purchase flows recover revenue from visitors who did not convert on first visit. These systems run automatically and compound monthly.",
      },
      {
        heading: "Run one experiment per month",
        content:
          "Sustainable CRO means one focused test per month with a clear hypothesis, success metric, and reported result. Testing headline copy, shipping threshold, or social proof placement beats redesigning the entire site every quarter.",
      },
    ],
    faqs: [
      {
        question: "How is CRO different from a website redesign?",
        answer:
          "A redesign changes appearance. CRO changes revenue mechanics — trust signals, checkout flow, recovery emails, and AOV strategy. The best results combine both: a redesign built on CRO principles with ongoing optimization after launch.",
      },
    ],
  },
  {
    slug: "landing-page-optimization-checklist",
    title: "Landing Page Optimization Checklist for Ecommerce",
    metaTitle:
      "Landing Page Optimization Checklist — Ecommerce CRO",
    metaDescription:
      "Use this landing page optimization checklist to improve campaign conversion rates — message match, speed, proof, CTA, and mobile performance.",
    excerpt:
      "Every item on this checklist directly affects landing page performance and campaign ROI.",
    publishedAt: "2026-01-10",
    readingTime: "6 min",
    relatedServices: ["design", "build"],
    sections: [
      {
        heading: "Message match with traffic source",
        content:
          "The landing page headline must match the ad, email subject, or social post that sent the visitor. Mismatched messaging is the number one cause of high bounce rates on campaign pages.",
      },
      {
        heading: "Single CTA above the fold",
        content:
          "One primary action per page. Remove navigation menus, footer links, and secondary CTAs that compete for attention. The visitor should know exactly what to do within three seconds.",
      },
      {
        heading: "Social proof placement",
        content:
          "Place reviews, customer photos, or press mentions directly below the hero section. Cold traffic needs proof before it will click buy. Warm traffic from email or retargeting still converts higher with visible proof.",
      },
      {
        heading: "Mobile load speed under 3 seconds",
        content:
          "Compress images, defer non-critical scripts, and test on real mobile devices. A one-second delay in load time reduces conversion rate by up to 7%. Landing page performance is a conversion metric, not a technical nice-to-have.",
      },
      {
        heading: "FAQ section for objection handling",
        content:
          "Address shipping, returns, sizing, and product quality questions on the page itself. Visitors who scroll to FAQ are close to converting — give them answers without sending them back to the main store.",
      },
    ],
    faqs: [
      {
        question: "What is landing page performance?",
        answer:
          "Landing page performance measures how effectively a single-focus page converts campaign traffic — typically tracked by conversion rate, cost per acquisition, and revenue per visit. High performance means the page matches visitor intent and removes friction to purchase.",
      },
    ],
  },
  {
    slug: "website-design-that-increases-sales",
    title: "Website Design That Increases Sales — Not Just Impressions",
    metaTitle:
      "Website Design That Increases Sales — Ecommerce CRO",
    metaDescription:
      "Revenue-focused website design for ecommerce — how structure, trust signals, and checkout flow increase sales without more traffic.",
    excerpt:
      "Website design that increases sales prioritizes conversion mechanics over visual trends.",
    publishedAt: "2026-02-01",
    readingTime: "7 min",
    relatedServices: ["build", "design"],
    sections: [
      {
        heading: "Design for the purchase decision",
        content:
          "Every design choice should answer: does this help a visitor decide to buy? Large hero images without product context, trendy animations that slow load, and hidden pricing all decrease conversion rate. Revenue-focused design puts product value, proof, and CTA in the visual hierarchy.",
      },
      {
        heading: "Information architecture drives revenue",
        content:
          "How collections are organized, how products are grouped, and how navigation guides discovery directly affects average order value. A store with clear category paths and cross-sell sections on product pages sells more per session than one with beautiful but confusing navigation.",
      },
      {
        heading: "Trust is a design element",
        content:
          "Reviews, guarantees, secure checkout badges, and clear return policies are design components — not afterthoughts. Place them where the eye naturally rests during the purchase decision: near the add-to-cart button and in the checkout summary.",
      },
      {
        heading: "Mobile-first is revenue-first",
        content:
          "Design mobile layouts first, then scale to desktop. Mobile visitors have less patience, smaller screens, and thumb-based navigation. A desktop-first design that shrinks to mobile almost always loses mobile conversions.",
      },
    ],
    faqs: [
      {
        question: "Can good design alone increase sales?",
        answer:
          "Good visual design builds brand trust, but sales increase requires conversion mechanics — recovery emails, checkout optimization, social proof, and AOV strategy. Design and CRO together deliver the highest revenue lift.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

// ─── Sanity-first async API ───────────────────────────────────────────────────

const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  metaTitle,
  metaDescription,
  excerpt,
  publishedAt,
  modifiedAt,
  readingTime,
  relatedServices,
  "sections": sections[] { heading, content },
  "faqs": faqs[] { question, answer },
}`;

const SINGLE_BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  metaTitle,
  metaDescription,
  excerpt,
  publishedAt,
  modifiedAt,
  readingTime,
  relatedServices,
  "sections": sections[] { heading, content },
  "faqs": faqs[] { question, answer },
}`;

export const fetchBlogPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    const data = await client.fetch<BlogPost[]>(
      BLOG_POSTS_QUERY,
      {},
      { next: { tags: ["blogPost"] } },
    );
    if (data && data.length > 0) return data;
  } catch {
    // Sanity unavailable — fall back to static data
  }
  return blogPosts;
});

// Fetches a single document by slug — avoids pulling the full collection
// just to resolve one page. React.cache deduplicates calls within a render.
export const fetchBlogPost = cache(async (
  slug: string,
): Promise<BlogPost | undefined> => {
  try {
    const data = await client.fetch<BlogPost | null>(
      SINGLE_BLOG_POST_QUERY,
      { slug },
      { next: { tags: ["blogPost"] } },
    );
    if (data) return data;
  } catch {
    // Sanity unavailable — fall back to static data
  }
  return blogPosts.find((p) => p.slug === slug);
});

export async function fetchAllBlogSlugs(): Promise<string[]> {
  const posts = await fetchBlogPosts();
  return posts.map((p) => p.slug);
}
