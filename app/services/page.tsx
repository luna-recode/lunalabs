import type { Metadata } from "next";
import { ServicesAccordion } from "@/components/services-accordion";
import { CtaBlock } from "@/components/seo/cta-block";
import { FaqSection } from "@/components/seo/faq-section";
import { PageShell } from "@/components/seo/page-shell";
import { serviceCategories } from "@/lib/content/services-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Services — Build, Design, Conversion & Growth for Shopify Brands",
  description:
    "Luna Labs offers four service pillars for creative brands — build & development, design & experience, conversion & revenue, and growth & ongoing care.",
  path: "/services",
  keywords: [
    "Shopify store build",
    "conversion rate optimization",
    "ecommerce web design",
    "Klaviyo automation",
  ],
});

const servicesFaqs = [
  {
    question: "What services does Luna Labs offer?",
    answer:
      "Four pillars: Build & Development (Shopify stores, migrations, professional websites), Design & Experience (redesigns, product pages, landing pages), Conversion & Revenue (CRO, cart recovery, email automation), and Growth & Ongoing (analytics, SEO, monthly care).",
  },
  {
    question: "Who are Luna Labs services for?",
    answer:
      "Creative brands, DTC merchants, and service businesses with an audience or traffic who need a credible store, better conversion, or ongoing revenue systems — not just a prettier website.",
  },
  {
    question: "How do I choose the right service?",
    answer:
      "Book a free revenue audit. We will review your store or project and recommend the pillar and build tier that delivers the highest impact for where you are today.",
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
      <header className="border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(48px,8vh,72px)] pt-[clamp(130px,18vh,180px)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Services
          </p>
          <h1 className="font-serif text-[clamp(42px,7vw,88px)] font-medium leading-[1.0] tracking-tight">
            What we{" "}
            <em className="italic text-accent">do.</em>
          </h1>
          <p className="mt-6 max-w-[52ch] text-base font-light leading-[1.7] text-bone-dim">
            Four pillars — from building your first store to compounding revenue
            month over month. Open a category to see what&apos;s included.
          </p>
        </div>
      </header>

      <section
        aria-label="Service categories"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <ServicesAccordion categories={serviceCategories} />
        </div>
      </section>

      <FaqSection faqs={servicesFaqs} />
      <CtaBlock
        heading="Not sure which pillar fits?"
        body="Book a free revenue audit and we will map the right category and build tier for your brand."
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
      />
    </PageShell>
  );
}
