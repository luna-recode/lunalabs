"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function PricingHero() {
  const t = useTranslations();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[140px] pb-[clamp(60px,10vh,100px)]"
    >
      <div className="hero-bg absolute inset-0 z-0 opacity-60" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />

      <div className="relative z-[2] mx-auto max-w-[1100px] px-[clamp(20px,5vw,64px)]">
        <ScrollReveal>
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-accent-dim">
            <span className="h-px w-[34px] bg-accent-dim" />
            {t.pricing.heroEyebrow}
          </div>
          <h1 className="max-w-[14ch] font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.02] tracking-tight">
            {t.pricing.heroTitleLine1}
            <br />
            <span className="italic text-accent">{t.pricing.heroTitleLine2}</span>
          </h1>
          <p className="mt-7 max-w-[52ch] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.6] text-bone-dim">
            {t.pricing.heroBody}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
