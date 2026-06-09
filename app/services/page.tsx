import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/seo/cta-block";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { services } from "@/lib/content/services-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { FaqSection } from "@/components/seo/faq-section";

export const metadata: Metadata = createPageMetadata({
  title: "Ecommerce Services — Conversion Websites & Shopify CRO",
  description:
    "Luna Labs offers conversion rate optimization services for Shopify brands — conversion websites, ecommerce optimization, landing page design, and revenue-focused redesigns.",
  path: "/services",
  keywords: [
    "conversion rate optimization",
    "ecommerce web design",
    "Shopify optimization",
    "landing page performance",
  ],
});

const servicesFaqs = [
  {
    question: "What services does Luna Labs offer?",
    answer:
      "Luna Labs offers conversion websites, ecommerce optimization, landing page design, and website redesign — all built on Shopify with Klaviyo recovery and GA4 tracking.",
  },
  {
    question: "Who are Luna Labs services for?",
    answer:
      "DTC brands, fashion labels, beauty companies, and Shopify merchants who have traffic or an audience but need higher conversion rates and recovered revenue.",
  },
  {
    question: "How do I choose the right service?",
    answer:
      "Book a free revenue audit. We will review your store and recommend the specific service and build tier that delivers the highest revenue impact for your brand.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        websiteSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
        faqSchema(servicesFaqs),
      ]}
    >
      <PageHero
        eyebrow="Services"
        h1="Ecommerce services built for conversion rate optimization"
        intro="Luna Labs builds ecommerce revenue systems for Shopify brands — conversion websites, landing page performance, checkout optimization, and recovery flows that turn traffic into revenue."
      />

      <section
        aria-labelledby="service-list-heading"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 id="service-list-heading" className="sr-only">
            Our services
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <article className="flex h-full flex-col rounded-lg border border-line bg-card p-6">
                  <h3 className="font-serif text-2xl font-medium tracking-tight">
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-[1.65] text-bone-dim">
                    {service.intro}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
                  >
                    Learn more →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={servicesFaqs} />
      <CtaBlock
        heading="Not sure which service fits?"
        body="Book a free revenue audit and we will map the right service and build tier for your brand."
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
      />
    </PageShell>
  );
}
