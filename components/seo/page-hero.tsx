import { ScrollReveal } from "@/components/scroll-reveal";

type PageHeroProps = {
  eyebrow?: string;
  h1: React.ReactNode;
  intro: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, h1, intro, children }: PageHeroProps) {
  return (
    <section className="relative border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(64px,10vh,100px)] pt-[clamp(130px,18vh,180px)]">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          {eyebrow && (
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-[22ch] font-serif text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.04] tracking-tight">
            {h1}
          </h1>
          <p className="mt-6 max-w-[60ch] text-[clamp(15px,1.5vw,17px)] font-light leading-[1.65] text-bone-dim">
            {intro}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </ScrollReveal>
      </div>
    </section>
  );
}
