import { cache } from "react";
import { client } from "@/lib/sanity/client";

export type CaseStudyMetric = {
  label: string;
  value: string;
  before?: string;
  after?: string;
};

export type CaseStudy = {
  slug: string;
  brand: string;
  client: string;
  location: string;
  tier: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  deliverables: string[];
  metrics: CaseStudyMetric[];
  croExplanation: string;
  uxExplanation: string;
  relatedServices: string[];
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  liveUrl?: string;
  placeholder?: boolean;
  publishedAt?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dra-yesly-garcia",
    brand: "dra-yesly-garcia",
    client: "Dra. Yesly García",
    location: "Managua, Nicaragua",
    tier: "Launch",
    tagline:
      "From zero online presence to a full digital practice — domain, website, Google Maps, and patient communication.",
    summary:
      "Dra. Yesly Suyen García López is a pediatrician and pediatric hematologist with 17 years of experience across Nicaragua, Mexico, and Italy. Despite deep credentials and patients in four cities, she had no domain, no website, no Google Maps listing, and no reliable way for families to find her or book outside word-of-mouth.",
    challenge:
      "Parents of children with serious blood disorders and pediatric conditions needed a trusted, credible online destination — something that matched the doctor's level of expertise and gave families confidence before ever stepping into a clinic. Dra. García had exceptional qualifications but zero digital infrastructure: no domain, no website, no Google presence, and no structured path from discovery to appointment.",
    approach:
      "Luna Labs delivered a complete digital presence build from scratch. We secured the custom domain drayeslygarcia.com, architected and built a fast, mobile-first Next.js website in Spanish across nine pages, set up and optimized her Google Business Profile with all four clinic locations, and wired a multi-channel patient contact system — WhatsApp, Cal.com scheduling, and a dedicated contact page with a sticky float button on every screen.",
    results:
      "Dra. García went from no digital footprint to a fully operational online practice. Families can now learn about her credentials, explore services, read medical education articles, navigate to any of four clinic locations, and reach her instantly via WhatsApp or the appointment scheduler — with verified Google reviews and social proof on the homepage.",
    deliverables: [
      "Custom domain acquisition & DNS configuration",
      "9-page professional website (Next.js, Spanish)",
      "Google Business Profile setup & optimization",
      "WhatsApp, Cal.com & contact form integration",
      "Medical education blog & on-page SEO",
      "Instagram feed & Google Reviews integration",
    ],
    metrics: [
      { label: "Pages delivered", value: "9", before: "0", after: "9" },
      { label: "Cities on Maps", value: "4", before: "0", after: "4" },
      { label: "Online presence", value: "Live", before: "None", after: "Full practice" },
    ],
    croExplanation:
      "Every page drives toward patient contact with minimal friction — a sticky WhatsApp button on all screens, one-tap pre-filled messages, Cal.com slots for virtual appointments, and Google Maps links at every clinic touchpoint. Verified patient reviews are surfaced on the homepage so new families see social proof before they book.",
    uxExplanation:
      "The site is mobile-first and built entirely in Spanish for Nicaragua's patient base. A credentials timeline, services breakdown, four-city location directory, FAQ for new families, and a medical blog give parents the clarity they need — with fast loads, optimized images, and rich link previews when shared on WhatsApp or Facebook.",
    relatedServices: ["conversion-websites", "website-redesign", "landing-page-design"],
    liveUrl: "https://drayeslygarcia.com",
    publishedAt: "2026-01-15",
  },
  {
    slug: "placeholder-2",
    brand: "placeholder-2",
    client: "",
    location: "",
    tier: "",
    tagline: "",
    summary: "",
    challenge: "",
    approach: "",
    results: "",
    deliverables: [],
    metrics: [],
    croExplanation: "",
    uxExplanation: "",
    relatedServices: [],
    placeholder: true,
  },
  {
    slug: "placeholder-3",
    brand: "placeholder-3",
    client: "",
    location: "",
    tier: "",
    tagline: "",
    summary: "",
    challenge: "",
    approach: "",
    results: "",
    deliverables: [],
    metrics: [],
    croExplanation: "",
    uxExplanation: "",
    relatedServices: [],
    placeholder: true,
  },
  {
    slug: "placeholder-4",
    brand: "placeholder-4",
    client: "",
    location: "",
    tier: "",
    tagline: "",
    summary: "",
    challenge: "",
    approach: "",
    results: "",
    deliverables: [],
    metrics: [],
    croExplanation: "",
    uxExplanation: "",
    relatedServices: [],
    placeholder: true,
  },
];

export function getCaseStudy(slug: string) {
  const baseSlug = slug.replace(/-revenue-increase$/, "");
  return caseStudies.find((c) => c.slug === baseSlug);
}

export function isRevenueIncreaseSlug(slug: string) {
  return slug.endsWith("-revenue-increase");
}

export function getAllCaseStudySlugs() {
  const slugs: string[] = [];
  for (const study of caseStudies) {
    if (study.placeholder) continue;
    slugs.push(study.slug);
    slugs.push(`${study.slug}-revenue-increase`);
  }
  return slugs;
}

// ─── Sanity-first async API ───────────────────────────────────────────────────

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc) {
  "slug": slug.current,
  "brand": slug.current,
  client,
  location,
  tier,
  tagline,
  summary,
  challenge,
  approach,
  results,
  deliverables,
  "metrics": metrics[] { label, value, before, after },
  croExplanation,
  uxExplanation,
  relatedServices,
  "image": image.asset->url,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  liveUrl,
  publishedAt,
}`;

const SINGLE_CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  "slug": slug.current,
  "brand": slug.current,
  client,
  location,
  tier,
  tagline,
  summary,
  challenge,
  approach,
  results,
  deliverables,
  "metrics": metrics[] { label, value, before, after },
  croExplanation,
  uxExplanation,
  relatedServices,
  "image": image.asset->url,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  liveUrl,
  publishedAt,
}`;

export const fetchCaseStudies = cache(async (): Promise<CaseStudy[]> => {
  try {
    const data = await client.fetch<CaseStudy[]>(
      CASE_STUDIES_QUERY,
      {},
      { next: { tags: ["caseStudy"] } },
    );
    if (data && data.length > 0) return data;
  } catch {
    // Sanity unavailable — fall back to static data
  }
  return caseStudies.filter((s) => !s.placeholder);
});

// Fetches a single document by slug — avoids pulling the full collection
// just to resolve one page. React.cache deduplicates calls within a render.
export const fetchCaseStudy = cache(async (
  slug: string,
): Promise<CaseStudy | undefined> => {
  const baseSlug = slug.replace(/-revenue-increase$/, "");
  try {
    const data = await client.fetch<CaseStudy | null>(
      SINGLE_CASE_STUDY_QUERY,
      { slug: baseSlug },
      { next: { tags: ["caseStudy"] } },
    );
    if (data) return data;
  } catch {
    // Sanity unavailable — fall back to static data
  }
  return caseStudies.find((c) => c.slug === baseSlug && !c.placeholder);
});

export async function fetchAllCaseStudySlugs(): Promise<string[]> {
  const data = await fetchCaseStudies();
  const slugs: string[] = [];
  for (const study of data) {
    slugs.push(study.slug);
    slugs.push(`${study.slug}-revenue-increase`);
  }
  return slugs;
}
