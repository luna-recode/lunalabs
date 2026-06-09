import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSection } from "@/components/seo/content-section";
import { CtaBlock } from "@/components/seo/cta-block";
import { FaqSection } from "@/components/seo/faq-section";
import { InternalLinks } from "@/components/seo/internal-links";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import {
  getAllIndustrySlugs,
  getIndustry,
} from "@/lib/content/industries-data";
import { getService } from "@/lib/content/services-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return createPageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedLinks = industry.relatedServices.map((s) => {
    const service = getService(s);
    return service
      ? {
          href: `/services/${s}`,
          label: service.title,
          description: service.intro.slice(0, 100) + "…",
        }
      : null;
  }).filter(Boolean) as { href: string; label: string; description?: string }[];

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        serviceSchema({
          name: `${industry.title} Ecommerce Services`,
          description: industry.metaDescription,
          path: `/industries/${slug}`,
          serviceType: `Ecommerce CRO for ${industry.title}`,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: industry.title, path: `/industries/${slug}` },
        ]),
        faqSchema(industry.faqs),
      ]}
    >
      <PageHero
        eyebrow={industry.title}
        h1={industry.h1}
        intro={industry.intro}
      />

      <section
        aria-labelledby="challenges-heading"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="challenges-heading"
            className="mb-6 font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-tight"
          >
            Industry challenges
          </h2>
          <ul className="space-y-3">
            {industry.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex items-start gap-3 text-base font-light leading-[1.65] text-bone-dim"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContentSection heading="How Luna Labs solves them" id="solutions">
        <ul className="space-y-3">
          {industry.solutions.map((solution) => (
            <li key={solution} className="flex items-start gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {solution}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          See our work in{" "}
          <Link
            href="/case-studies"
            className="text-accent underline-offset-2 hover:underline"
          >
            case studies
          </Link>{" "}
          or explore{" "}
          <Link
            href="/services"
            className="text-accent underline-offset-2 hover:underline"
          >
            all services
          </Link>
          .
        </p>
      </ContentSection>

      <FaqSection faqs={industry.faqs} />
      <InternalLinks heading="Recommended services" links={relatedLinks} />
      <CtaBlock
        heading={`Ready to optimize your ${industry.title.toLowerCase()} store?`}
        body="Book a free revenue audit tailored to your industry and conversion goals."
      />
    </PageShell>
  );
}
