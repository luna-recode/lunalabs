import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { AudienceSections } from "@/components/launch/audience-sections";
import { GooglePresence } from "@/components/launch/google-presence";
import { LaunchFinalCta } from "@/components/launch/launch-final-cta";
import { LaunchHero } from "@/components/launch/launch-hero";
import { WhatsIncluded } from "@/components/launch/whats-included";
import { Nav } from "@/components/nav";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Websites for Local Businesses",
  description:
    "Custom websites for restaurants, local services, and B2B professionals in Los Angeles — mobile-first design, Google Business Profile setup, online booking, and on-page SEO. Live in about a week.",
  path: "/launch",
});

export default function LaunchPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <LaunchHero />
        <WhatsIncluded />
        <AudienceSections />
        <GooglePresence />
        <LaunchFinalCta />
      </main>
      <Footer />
    </>
  );
}
