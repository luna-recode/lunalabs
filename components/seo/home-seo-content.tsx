import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ServiceCategory } from "@/lib/content/services-data";
import type { CaseStudy } from "@/lib/works-data";
import { SITE } from "@/lib/seo/site";

export function HomeSeoContent({
  studies,
  services,
}: {
  studies: CaseStudy[];
  services: ServiceCategory[];
}) {
  const activeStudies = studies.filter((s) => !s.placeholder);

  return (
    <>
      <section
        aria-labelledby="definition-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              What Luna Labs does
            </p>
            <h2
              id="definition-heading"
              className="mb-6 max-w-[28ch] font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
            >
              Conversion rate optimization for ecommerce brands
            </h2>
            <div className="max-w-[65ch] space-y-4 text-base font-light leading-[1.7] text-bone-dim">
              <p>
                <strong className="font-medium text-bone">{SITE.name}</strong>{" "}
                is an ecommerce web design agency that builds{" "}
                <Link
                  href="/services/conversion"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  conversion rate optimization
                </Link>{" "}
                systems for Shopify brands. We design storefronts, landing
                pages, and recovery flows that turn existing traffic into
                revenue — not just impressions.
              </p>
              <p>
                Our work covers{" "}
                <Link
                  href="/services/build"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Shopify store builds
                </Link>
                ,{" "}
                <Link
                  href="/services/design"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  storefront design
                </Link>
                , and{" "}
                <Link
                  href="/services/growth"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  ongoing revenue care
                </Link>{" "}
                including Klaviyo recovery and checkout optimization.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Services — sticky scroll stack ── */}
      <section
        aria-labelledby="services-overview-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[clamp(40px,6vw,80px)]">

            {/* Left: sticky copy */}
            <div className="py-[clamp(64px,10vh,100px)] lg:sticky lg:top-[120px] lg:w-[38%]">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Services
              </p>
              <h2
                id="services-overview-heading"
                className="font-serif text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.06] tracking-tight"
              >
                Revenue tools for{" "}
                <em className="italic text-accent">every stage.</em>
              </h2>
              <p className="mt-5 max-w-[36ch] text-base font-light leading-[1.7] text-bone-dim">
                Whether you need a full storefront build, targeted
                optimization, or a campaign-ready landing page — each service
                is built around one metric: revenue.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
              >
                View all services →
              </Link>
            </div>

            {/* Right: stacking cards */}
            <div className="flex-1 pb-[clamp(64px,10vh,100px)] lg:pt-[clamp(64px,10vh,100px)]">
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-card shadow-[0_24px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.65)]"
                  style={{
                    position: "sticky" as const,
                    top: `${120 + i * 16}px`,
                    zIndex: i + 1,
                    marginBottom: i < services.length - 1 ? "180px" : "165px",
                  }}
                >
                  {/* Card image from Sanity; placeholder circle until one is set */}
                  <div className="flex items-center justify-center bg-gradient-to-b from-surface/80 to-ink/20 py-[clamp(40px,7vh,64px)]">
                    <div className="relative flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-ink/50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-3 rounded-full border border-dashed border-white/[0.10]" />
                          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/20">
                            Image
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="border-t border-line px-8 py-7">
                    <h3 className="font-serif text-[clamp(22px,2.8vw,32px)] font-medium leading-[1.1] tracking-tight text-bone transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm font-light leading-[1.75] text-bone-dim">
                      {service.thesis}
                    </p>
                    <span className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {activeStudies.length > 0 && (
        <section
          aria-labelledby="case-previews-heading"
          className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
        >
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Case studies
              </p>
              <h2
                id="case-previews-heading"
                className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
              >
                Storefronts that earn
              </h2>
            </ScrollReveal>
            <ul className="space-y-6">
              {activeStudies.map((study) => (
                <li
                  key={study.id}
                  className="rounded-lg border border-line bg-card p-6"
                >
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="transition-colors hover:text-accent"
                    >
                      {study.client}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm font-light leading-[1.6] text-bone-dim">
                    {study.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
                    >
                      View case study →
                    </Link>
                    <Link
                      href={`/case-studies/${study.id}-revenue-increase`}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-accent"
                    >
                      Revenue impact →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/case-studies"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
              >
                All case studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section
        aria-labelledby="audit-cta-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[800px] text-center">
          <ScrollReveal>
            <h2
              id="audit-cta-heading"
              className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
            >
              Find out what your store is leaving behind
            </h2>
            <p className="mx-auto mt-4 max-w-[50ch] text-base font-light leading-[1.65] text-bone-dim">
              Book a free revenue audit. We will review your Shopify store and
              map the conversion fixes that matter most — no pitch deck, no
              pressure.
            </p>
            <Link
              href="/book-audit"
              className="btn-fill mt-8 inline-block rounded-[32px] px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              Book a free revenue audit →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
