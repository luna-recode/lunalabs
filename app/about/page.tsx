import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/seo/content-section";
import { CtaBlock } from "@/components/seo/cta-block";
import { FaqSection } from "@/components/seo/faq-section";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { SITE } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Luna Labs — Ecommerce CRO & Shopify Web Design Agency",
  description:
    "Luna Labs is an Los Angeles ecommerce agency specializing in conversion rate optimization, Shopify storefronts, and ecommerce revenue systems for DTC brands.",
  path: "/about",
});

const aboutFaqs = [
  {
    question: "What is Luna Labs?",
    answer:
      "Luna Labs is an ecommerce web design agency that builds conversion rate optimization systems for Shopify brands. We design storefronts, landing pages, and recovery flows focused on revenue — not just aesthetics.",
  },
  {
    question: "What does Luna Labs specialize in?",
    answer:
      "Conversion rate optimization, Shopify optimization, landing page performance, and ecommerce revenue systems including Klaviyo email recovery and checkout flow improvements.",
  },
  {
    question: "Where is Luna Labs located?",
    answer: `Luna Labs is based in ${SITE.location} and works with ecommerce brands nationwide.`,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        websiteSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
        faqSchema(aboutFaqs),
      ]}
    >
      <PageHero
        eyebrow="About"
        h1="We build ecommerce revenue systems, not just websites"
        intro="Luna Labs is a conversion rate optimization agency for Shopify brands. We change how stores earn — through conversion websites, landing page performance, recovery flows, and checkout optimization."
      />

      <ContentSection heading="What we believe" id="belief">
        <p>
          A theme changes how a store looks. We change how it earns. Every
          project starts with a gap between what the store looks like and what it
          is making — and we build the mechanics to close that gap.
        </p>
        <p>
          Our work spans{" "}
          <Link
            href="/services/build"
            className="text-accent underline-offset-2 hover:underline"
          >
            store builds
          </Link>
          ,{" "}
          <Link
            href="/services/conversion"
            className="text-accent underline-offset-2 hover:underline"
          >
            conversion optimization
          </Link>
          , and{" "}
          <Link
            href="/services/design"
            className="text-accent underline-offset-2 hover:underline"
          >
            storefront design
          </Link>{" "}
          — all on Shopify with Klaviyo recovery and GA4 measurement.
        </p>
      </ContentSection>

      <ContentSection heading="Who we work with" id="clients">
        <p>
          DTC brands, fashion labels, beauty companies, and Shopify merchants
          who have an audience but need higher conversion rates. Explore our{" "}
          <Link
            href="/industries/dtc-brands"
            className="text-accent underline-offset-2 hover:underline"
          >
            industry expertise
          </Link>{" "}
          and{" "}
          <Link
            href="/case-studies"
            className="text-accent underline-offset-2 hover:underline"
          >
            case studies
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection heading="How we work" id="approach">
        <p>
          No pitch decks. No inflated promises. We audit your store, identify
          conversion leaks, and build the specific system that fixes them —
          whether that is a new storefront, recovery flows, or a campaign
          landing page. See our{" "}
          <Link
            href="/pricing"
            className="text-accent underline-offset-2 hover:underline"
          >
            pricing
          </Link>{" "}
          for build tiers.
        </p>
      </ContentSection>

      <FaqSection faqs={aboutFaqs} />
      <CtaBlock
        heading="Want to see if we are a fit?"
        body="Book a free revenue audit. We will review your store and give you a straight answer."
      />
    </PageShell>
  );
}
