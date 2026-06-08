"use client";

import { ScrollReveal } from "./scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function Reframe() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="reframe-heading"
      className="relative border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(80px,14vh,150px)] text-bone"
    >
      <ScrollReveal className="mx-auto max-w-[1100px]">
        <div className="mb-[30px] font-mono text-[11px] uppercase tracking-[0.28em] text-accent-dim">
          {t.reframe.eyebrow}
        </div>
        <p className="mb-6 max-w-[32ch] font-serif text-[clamp(24px,3vw,40px)] font-medium leading-[1.1] tracking-tight text-bone">
          {t.reframe.thesis}
        </p>
        <h2
          id="reframe-heading"
          className="font-serif text-[clamp(30px,4.6vw,62px)] font-medium leading-[1.08] tracking-tight"
        >
          {t.reframe.titleBeforeLooks}
          <em className="reframe-em relative italic">{t.reframe.looks}</em>
          <br />
          {t.reframe.titleBeforeEarns}
          <em className="reframe-em relative italic">{t.reframe.earns}</em>
        </h2>
      </ScrollReveal>
    </section>
  );
}
