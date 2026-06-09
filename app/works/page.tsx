import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/final-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/works-data";

export const metadata: Metadata = {
  title: "Works — Luna Labs",
  description:
    "Shopify storefronts and revenue systems we've built for real brands.",
};

export default function WorksPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(64px,10vh,100px)] pt-[clamp(130px,18vh,180px)]">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Selected work
              </div>
              <h1 className="max-w-[18ch] font-serif text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.04] tracking-tight">
                Storefronts that{" "}
                <em className="italic text-accent">earn.</em>
              </h1>
              <p className="mt-6 max-w-[50ch] text-[clamp(15px,1.5vw,17px)] font-light leading-[1.65] text-bone-dim">
                Every project started with a gap between what the store looked
                like and what it was making. Here&apos;s what we built to close
                it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-label="Case studies"
          className="px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
        >
          <div className="mx-auto max-w-[1200px] space-y-[clamp(80px,12vh,140px)]">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
