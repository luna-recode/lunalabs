import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/seo/cta-block";
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
  const visible = studies.filter((s) => !s.placeholder);

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
      {/* ── Header ── */}
      <header className="border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(48px,8vh,72px)] pt-[clamp(130px,18vh,180px)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Case studies
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-[clamp(42px,7vw,88px)] font-medium leading-[1.0] tracking-tight">
              Storefronts that{" "}
              <em className="italic text-accent">earn.</em>
            </h1>
            <p className="max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim md:text-right">
              Every project started with a gap between what the store looked
              like and what it was making. Here is what we built to close it.
            </p>
          </div>
        </div>
      </header>

      {/* ── Grid ── */}
      <section
        aria-label="Case studies"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          {visible.length === 0 ? (
            <p className="text-center text-sm text-muted">
              No case studies yet — check back soon.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.25)] transition-shadow hover:shadow-[0_20px_40px_-18px_rgba(33,64,143,0.38)]"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                      {study.image ? (
                        <img
                          src={study.image}
                          alt={`${study.client} project`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(156,193,238,0.18),transparent_55%),linear-gradient(160deg,rgba(239,216,154,0.10),transparent_50%)]">
                          <div className="absolute bottom-6 left-6 right-6 space-y-3">
                            <span className="block h-3 w-2/3 rounded-full bg-bone/10" />
                            <span className="block h-3 w-1/2 rounded-full bg-bone/8" />
                            <span className="block h-16 rounded-lg border border-line bg-ink/20" />
                            <span className="block h-8 rounded-full bg-accent/15" />
                          </div>
                        </div>
                      )}
                      {/* Tier badge */}
                      {study.tier && (
                        <span className="absolute left-4 top-4 rounded-full border border-line bg-card/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
                          {study.tier}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {study.publishedAt && (
                        <time
                          dateTime={study.publishedAt}
                          className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                        >
                          {new Date(study.publishedAt).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </time>
                      )}
                      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {study.location}
                      </p>
                      <h2 className="font-serif text-[clamp(20px,2.2vw,26px)] font-medium leading-[1.1] tracking-tight">
                        {study.client}
                      </h2>
                      <p className="mt-3 line-clamp-2 text-sm font-light leading-[1.6] text-bone-dim">
                        {study.tagline}
                      </p>

                      {/* Metrics row */}
                      {study.metrics && study.metrics.length > 0 && (
                        <div className="mt-5 flex gap-4 border-t border-line pt-5">
                          {study.metrics.slice(0, 3).map((m) => (
                            <div key={m.label} className="flex-1 min-w-0">
                              <p className="font-serif text-[clamp(18px,2vw,22px)] font-medium text-accent">
                                {m.value}
                              </p>
                              <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-opacity group-hover:opacity-70">
                          View case study
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                            <path d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBlock
        heading="Want results like these?"
        body="Book a free revenue audit and we will map the conversion fixes for your brand."
      />
    </PageShell>
  );
}
