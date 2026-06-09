import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSection } from "@/components/seo/content-section";
import { CtaBlock } from "@/components/seo/cta-block";
import { InternalLinks } from "@/components/seo/internal-links";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import {
  fetchAllCaseStudySlugs,
  fetchCaseStudy,
  isRevenueIncreaseSlug,
} from "@/lib/content/case-studies-data";
import { getService } from "@/lib/content/services-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  organizationSchema,
} from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await fetchCaseStudy(slug);
  if (!study) return {};

  const isRevenue = isRevenueIncreaseSlug(slug);
  const title = isRevenue
    ? `${study.client} Revenue Increase — Shopify CRO Case Study`
    : `${study.client} Case Study — Shopify Conversion Design`;
  const description = isRevenue
    ? `How Luna Labs improved ${study.client}'s ecommerce revenue through conversion rate optimization, UX improvements, and Shopify storefront design.`
    : study.summary;

  return createPageMetadata({
    title,
    description,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await fetchCaseStudy(slug);
  if (!study) notFound();

  const isRevenue = isRevenueIncreaseSlug(slug);

  const relatedLinks = study.relatedServices
    .map((s) => {
      const service = getService(s);
      return service
        ? {
            href: `/services/${s}`,
            label: service.title,
            description: service.intro.slice(0, 100) + "…",
          }
        : null;
    })
    .filter(Boolean) as { href: string; label: string; description?: string }[];

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        creativeWorkSchema({
          name: isRevenue
            ? `${study.client} Revenue Increase`
            : `${study.client} Case Study`,
          description: study.summary,
          path: `/case-studies/${slug}`,
          client: study.client,
          datePublished: study.publishedAt,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          {
            name: isRevenue ? `${study.client} Revenue` : study.client,
            path: `/case-studies/${slug}`,
          },
        ]),
      ]}
    >
      <PageHero
        eyebrow={isRevenue ? "Revenue impact" : "Case study"}
        h1={
          isRevenue
            ? `${study.client}: revenue increase through conversion optimization`
            : study.client
        }
        intro={isRevenue ? study.results : study.summary}
      />

      {!isRevenue && (
        <>
          <ContentSection heading="The challenge" id="challenge">
            <p>{study.challenge}</p>
          </ContentSection>

          <ContentSection heading="Our approach" id="approach">
            <p>{study.approach}</p>
          </ContentSection>
        </>
      )}

      <ContentSection
        heading={isRevenue ? "Revenue impact" : "Results"}
        id="results"
      >
        <p>{study.results}</p>
      </ContentSection>

      <section
        aria-labelledby="metrics-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="metrics-heading"
            className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            Before &amp; after metrics
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded-lg border border-line bg-card px-5 py-6"
              >
                <p className="font-serif text-[clamp(24px,3vw,36px)] font-medium text-accent">
                  {metric.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {metric.label}
                </p>
                {metric.before && metric.after && (
                  <p className="mt-2 text-xs font-light text-bone-dim">
                    {metric.before} → {metric.after}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContentSection heading="UX explanation" id="ux">
        <p>{study.uxExplanation}</p>
      </ContentSection>

      <ContentSection heading="CRO explanation" id="cro">
        <p>{study.croExplanation}</p>
      </ContentSection>

      <section className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(32px,5vh,48px)]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-4 font-serif text-xl font-medium tracking-tight">
            Deliverables
          </h2>
          <ul className="space-y-2">
            {study.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-light text-bone-dim"
              >
                <span className="h-px w-5 shrink-0 bg-accent/50" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          {!isRevenue && (
            <Link
              href={`/case-studies/${study.slug}-revenue-increase`}
              className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
            >
              View revenue impact →
            </Link>
          )}
          {isRevenue && (
            <Link
              href={`/case-studies/${study.slug}`}
              className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
            >
              View full case study →
            </Link>
          )}
        </div>
      </section>

      <InternalLinks heading="Related services" links={relatedLinks} />
      <CtaBlock
        heading="Want similar results for your brand?"
        body="Book a free revenue audit and we will map the conversion build for your store."
      />
    </PageShell>
  );
}
