import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Proof } from "@/components/proof";
import { Reframe } from "@/components/reframe";
import { Stack } from "@/components/stack";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Reframe />
        <Work />
        <Stack />
        <Proof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
