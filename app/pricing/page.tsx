import type { Metadata } from "next";
import { CarePlan } from "@/components/pricing/care-plan";
import { PaybackCallout } from "@/components/pricing/payback-callout";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { TierCards } from "@/components/pricing/tier-cards";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Pricing — Luna Labs",
  description:
    "Four rungs, each one a conversion lever. Essential, Growth, and Scale builds — plus a Care Plan to keep the engine running.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PricingHero />
        <TierCards />
        <PaybackCallout />
        <CarePlan />
        <PricingFaq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
