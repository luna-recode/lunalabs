import { FeaturedCaseStudy } from "@/components/featured-case-study";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { CaseStudy } from "@/lib/content/case-studies-data";

export function RecentLaunch({ study }: { study?: CaseStudy }) {
  if (!study) return null;

  return (
    <section
      id="recent-launch"
      aria-labelledby="recent-launch-heading"
      className="relative border-b border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Recent launch
          </p>
          <h2
            id="recent-launch-heading"
            className="mb-[clamp(36px,6vh,56px)] font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            Just shipped — from zero to{" "}
            <em className="italic text-accent">found.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedCaseStudy study={study} />
        </ScrollReveal>
      </div>
    </section>
  );
}
