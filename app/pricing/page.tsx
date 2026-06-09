import type { Metadata } from "next";
import { CarePlan } from "@/components/pricing/care-plan";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { TierCards } from "@/components/pricing/tier-cards";
import { ValueCallout } from "@/components/pricing/value-callout";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing — Shopify CRO & Conversion Website Builds",
  description:
    "Transparent pricing for conversion-focused Shopify builds — Launch, Essential, Growth tiers plus Care Plans for ongoing ecommerce optimization.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <PricingHero />
        <TierCards />
        <ValueCallout />
        <CarePlan />
        <PricingFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
