"use client";

import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function CarePlan() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="care-plan-heading"
      className="px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <ScrollReveal className="mx-auto max-w-[1200px]">
        <div className="mb-[clamp(40px,6vh,64px)] max-w-[640px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {t.pricing.careEyebrow}
          </span>
          <h2
            id="care-plan-heading"
            className="mt-4 font-serif text-[clamp(30px,4.6vw,52px)] font-medium leading-[1.08] tracking-tight"
          >
            {t.pricing.careTitle}
          </h2>
          <p className="mt-5 text-base font-light leading-[1.65] text-bone-dim">
            {t.pricing.careBody}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
          <div className="grid grid-cols-1 border-b border-line md:grid-cols-3">
            {t.pricing.careTiers.map((tier, i) => (
              <div
                key={tier.price}
                className={`px-7 py-8 text-center ${
                  i < t.pricing.careTiers.length - 1 ? "border-b border-line md:border-b-0 md:border-r md:border-line" : ""
                }`}
              >
                <p className="font-serif text-[clamp(28px,3vw,36px)] font-medium">{tier.price}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {t.pricing.perMonthMin}
                </p>
                <p className="mt-3 text-sm text-bone-dim">{tier.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_1.2fr]">
            <div className="border-b border-line p-7 md:border-b-0 md:border-r md:border-line">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {t.pricing.whatsIncluded}
              </p>
              <ul className="space-y-2.5">
                {t.pricing.careIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] font-light leading-normal text-bone-dim"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bone-dim" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between p-7">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {t.pricing.thePitch}
                </p>
                <p className="text-sm italic leading-[1.65] text-bone-dim">
                  {t.pricing.carePitchQuote}
                </p>
                <p className="mt-5 text-[13px] font-light leading-normal text-muted">
                  {t.pricing.carePitchNote}
                </p>
              </div>
              <CalButton className="mt-8 w-full cursor-pointer rounded-[32px] border border-line bg-transparent px-6 py-[14px] text-sm font-medium text-bone transition-all hover:border-accent hover:bg-accent/[0.06] md:mt-6 md:w-auto md:self-start">
                {t.pricing.askAboutCare}
              </CalButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
