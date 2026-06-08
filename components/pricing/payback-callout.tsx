"use client";

import { RoiTable } from "@/components/roi-table";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function PaybackCallout() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="payback-heading"
      className="border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,110px)] text-bone"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,80px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-dim">
            {t.pricing.paybackEyebrow}
          </div>
          <h2
            id="payback-heading"
            className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            {t.pricing.paybackTitleLine1}
            <br />
            <em className="reframe-em relative italic">{t.pricing.paybackTitleEmphasis}</em>
          </h2>
          <p className="mt-6 max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            {t.pricing.paybackBody}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <RoiTable
            rows={t.proof.rows}
            totalNow={t.proof.totalNow}
            totalAfter={t.proof.totalAfter}
            variant="surface"
          />
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {t.pricing.paybackNote}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
