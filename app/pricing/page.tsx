import type { Metadata } from "next";
import { CarePlan } from "@/components/pricing/care-plan";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { TierCards } from "@/components/pricing/tier-cards";
import { ValueCallout } from "@/components/pricing/value-callout";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Pricing — Luna Labs",
  description:
    "Four rungs, each one a conversion lever. Launch, Essential, and Growth builds — plus a Care Plan to keep the engine running.",
};

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
