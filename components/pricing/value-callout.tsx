"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function ValueCallout() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="value-heading"
      className="border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,110px)] text-bone"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,80px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-dim">
            {t.pricing.valueEyebrow}
          </div>
          <h2
            id="value-heading"
            className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            {t.pricing.valueTitle}
          </h2>
          <p className="mt-6 max-w-[48ch] text-base font-light leading-[1.65] text-bone-dim">
            {t.pricing.valueBody}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-line-d bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
            {t.pricing.valueParts.map((part) => (
              <div
                key={part}
                className="flex items-center justify-between gap-5 border-b border-line-d px-6 py-5 last:border-b-0"
              >
                <span className="font-serif text-[clamp(20px,2.4vw,30px)] font-medium leading-[1.15] tracking-tight">
                  {part}
                </span>
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
