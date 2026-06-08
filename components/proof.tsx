"use client";

import { RoiTable } from "@/components/roi-table";
import { ScrollReveal } from "./scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function Proof() {
  const t = useTranslations();

  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="relative px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {t.proof.eyebrow}
          </div>
          <h2
            id="proof-heading"
            className="mb-6 font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            {t.proof.heading}
          </h2>
          <p className="max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            {t.proof.body}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <RoiTable
            rows={t.proof.rows}
            totalNow={t.proof.totalNow}
            totalAfter={t.proof.totalAfter}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
