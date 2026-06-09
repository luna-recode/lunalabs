import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { services } from "@/lib/content/services-data";
import { caseStudies } from "@/lib/content/case-studies-data";
import { SITE } from "@/lib/seo/site";

export function HomeSeoContent() {
  const activeStudies = caseStudies.filter((s) => !s.placeholder);

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
                  href="/services/ecommerce-optimization"
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
                  href="/services/conversion-websites"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  conversion websites
                </Link>
                ,{" "}
                <Link
                  href="/services/landing-page-design"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  landing page performance
                </Link>
                , and{" "}
                <Link
                  href="/services/ecommerce-optimization"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  ecommerce revenue systems
                </Link>{" "}
                including Klaviyo recovery and checkout optimization.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="services-overview-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Services
            </p>
            <h2
              id="services-overview-heading"
              className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
            >
              Ecommerce services built for revenue
            </h2>
          </ScrollReveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full rounded-lg border border-line bg-card p-6 transition-colors hover:border-accent/40"
                >
                  <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-[1.6] text-bone-dim">
                    {service.intro.slice(0, 140)}…
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="/services"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="metrics-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              Proof
            </p>
            <h2
              id="metrics-heading"
              className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
            >
              What conversion-focused design delivers
            </h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  metric: "↑ CVR",
                  label: "Higher conversion rate from optimized product pages and checkout",
                },
                {
                  metric: "↑ AOV",
                  label: "Increased average order value through shipping thresholds and offers",
                },
                {
                  metric: "↑ Recovery",
                  label: "Recovered revenue from abandoned-cart and welcome email flows",
                },
              ].map((item) => (
                <li
                  key={item.metric}
                  className="rounded-lg border border-line bg-card px-5 py-6"
                >
                  <p className="font-serif text-[clamp(28px,3.5vw,40px)] font-medium tracking-tight text-accent">
                    {item.metric}
                  </p>
                  <p className="mt-2 text-sm font-light leading-[1.6] text-bone-dim">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
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
                  key={study.slug}
                  className="rounded-lg border border-line bg-card p-6"
                >
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    <Link
                      href={`/case-studies/${study.slug}`}
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
                      href={`/case-studies/${study.slug}`}
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
                    >
                      View case study →
                    </Link>
                    <Link
                      href={`/case-studies/${study.slug}-revenue-increase`}
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
