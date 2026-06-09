import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBlock } from "@/components/seo/cta-block";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { fetchCaseStudies } from "@/lib/content/case-studies-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies — Shopify Conversion & Revenue Results",
  description:
    "See how Luna Labs builds conversion-focused Shopify storefronts for ecommerce brands — before/after metrics, CRO improvements, and revenue impact.",
  path: "/case-studies",
});

export default async function CaseStudiesPage() {
  const studies = await fetchCaseStudies();
  const legacyStudies = studies.map((study, index) => ({
    id: study.slug,
    number: String(index + 1).padStart(2, "0"),
    client: study.client,
    location: study.location,
    tier: study.tier,
    tagline: study.tagline,
    deliverables: study.deliverables,
    metrics: study.metrics,
    image: study.image,
    liveUrl: study.liveUrl,
    placeholder: study.placeholder,
  }));

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        websiteSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]),
      ]}
    >
      <PageHero
        eyebrow="Case studies"
        h1={
          <>
            Storefronts that{" "}
            <em className="italic text-accent">earn.</em>
          </>
        }
        intro="Every project started with a gap between what the store looked like and what it was making. Here is what we built to close it — with conversion rate optimization, UX improvements, and measurable revenue impact."
      />

      <section
        aria-label="Case studies"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
      >
        <div className="mx-auto max-w-[1200px] space-y-[clamp(80px,12vh,140px)]">
          {legacyStudies.filter((s) => !s.placeholder).map((study) => (
            <div key={study.id}>
              <CaseStudyCard study={study} />
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href={`/case-studies/${study.id}`}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
                >
                  Full case study →
                </Link>
                <Link
                  href={`/case-studies/${study.id}-revenue-increase`}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-accent"
                >
                  Revenue impact →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock
        heading="Want results like these?"
        body="Book a free revenue audit and we will map the conversion fixes for your brand."
      />
    </PageShell>
  );
}
