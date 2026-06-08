import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Proof } from "@/components/proof";
import { Reframe } from "@/components/reframe";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Reframe />
        <Stack />
        <Proof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
