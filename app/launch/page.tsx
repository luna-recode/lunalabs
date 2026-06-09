import type { Metadata } from "next";
import { AudienceSections } from "@/components/launch/audience-sections";
import { GooglePresence } from "@/components/launch/google-presence";
import { LaunchFaq, launchFaqs } from "@/components/launch/launch-faq";
import { LaunchFinalCta } from "@/components/launch/launch-final-cta";
import { LaunchHero } from "@/components/launch/launch-hero";
import { LaunchPricing } from "@/components/launch/launch-pricing";
import { LaunchProcess } from "@/components/launch/launch-process";
import { RecentLaunch } from "@/components/launch/recent-launch";
import { WhatsIncluded } from "@/components/launch/whats-included";
import { PageShell } from "@/components/seo/page-shell";
import { fetchCaseStudy } from "@/lib/content/case-studies-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Websites for Local Businesses",
  description:
    "Custom websites for restaurants, local services, and B2B professionals in Los Angeles — mobile-first design, Google Business Profile setup, online booking, and on-page SEO. Live in about a week.",
  path: "/launch",
});

export default async function LaunchPage() {
  const recentStudy = await fetchCaseStudy("dra-yesly-garcia");

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        serviceSchema({
          name: "Launch — Websites for Local Businesses",
          description:
            "Custom website builds for local businesses: mobile-first design, Google Business Profile setup, online booking, and on-page SEO — live in about a week, from $1,200.",
          path: "/launch",
          serviceType: "Website design and local SEO setup",
        }),
        faqSchema(launchFaqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Launch", path: "/launch" },
        ]),
      ]}
    >
      <LaunchHero />
      <WhatsIncluded />
      <RecentLaunch study={recentStudy} />
      <AudienceSections />
      <LaunchProcess />
      <LaunchPricing />
      <GooglePresence />
      <LaunchFaq />
      <LaunchFinalCta />
    </PageShell>
  );
}
