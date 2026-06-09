import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { CreativeProcess } from "@/components/creative-process";
import { Reframe } from "@/components/reframe";
import { HomeSeoContent } from "@/components/seo/home-seo-content";
import { Stack } from "@/components/stack";
import { Work } from "@/components/work";
import { createPageMetadata } from "@/lib/seo/metadata";
import { fetchWorkStudies } from "@/lib/works-data";

export const metadata: Metadata = createPageMetadata({
  title:
    "Conversion Rate Optimization & Ecommerce Web Design for Shopify Brands",
  description:
    "Luna Labs builds conversion-focused Shopify storefronts and ecommerce revenue systems — CRO, landing page performance, recovery flows, and checkout optimization.",
  path: "/",
});

export default async function Home() {
  const studies = await fetchWorkStudies();
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Reframe />
        <Work studies={studies} />
        <Stack />
        <CreativeProcess />
        <HomeSeoContent studies={studies} />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
