import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentSection } from "@/components/seo/content-section";
import { CtaBlock } from "@/components/seo/cta-block";
import { FaqSection } from "@/components/seo/faq-section";
import { InternalLinks } from "@/components/seo/internal-links";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import {
  getAllServiceSlugs,
  getService,
} from "@/lib/content/services-data";
import { getCaseStudy } from "@/lib/content/case-studies-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedLinks = [
    ...service.relatedCategories
      .filter((s) => s !== slug)
      .map((s) => {
        const related = getService(s);
        return related
          ? {
              href: `/services/${s}`,
              label: related.title,
              description: related.thesis,
            }
          : null;
      })
      .filter(Boolean),
    ...service.relatedCaseStudies.map((cs) => {
      const study = getCaseStudy(cs);
      return study
        ? {
            href: `/case-studies/${cs}`,
            label: `${study.client} case study`,
            description: study.tagline,
          }
        : null;
    }).filter(Boolean),
  ] as { href: string; label: string; description?: string }[];

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        serviceSchema({
          name: service.title,
          description: service.metaDescription,
          path: `/services/${slug}`,
          serviceType: service.title,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ]),
        faqSchema(service.faqs),
      ]}
    >
      <PageHero eyebrow={`[${service.number}]`} h1={service.h1} intro={service.intro} />

      <ContentSection heading="What's included" id="included">
        <ul className="space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center gap-3 text-sm font-light text-bone-dim"
            >
              <span className="h-px w-5 shrink-0 bg-accent/50" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading="The problem" id="problem">
        <p>{service.problem}</p>
      </ContentSection>

      <ContentSection heading="Our solution" id="solution">
        <p>{service.solution}</p>
      </ContentSection>

      <section
        aria-labelledby="process-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="process-heading"
            className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            Our process
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2">
            {service.process.map((step, i) => (
              <li
                key={step.step}
                className="rounded-lg border border-line bg-card p-5"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-medium tracking-tight">
                  {step.step}
                </h3>
                <p className="mt-2 text-sm font-light leading-[1.65] text-bone-dim">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="outcomes-heading"
        className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="outcomes-heading"
            className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            Expected outcomes
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <li
                key={outcome.label}
                className="rounded-lg border border-line bg-card px-5 py-6 text-center"
              >
                <p className="font-serif text-[clamp(32px,4vw,48px)] font-medium text-accent">
                  {outcome.metric}
                </p>
                <p className="mt-2 text-sm font-light text-bone-dim">
                  {outcome.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={service.faqs} />
      <InternalLinks heading="Related resources" links={relatedLinks} />
      <CtaBlock
        heading={`Ready to start your ${service.title.toLowerCase()} project?`}
        body="Book a free revenue audit and we will map the exact build for your brand."
      />
    </PageShell>
  );
}
