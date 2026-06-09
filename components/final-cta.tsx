"use client";

import { CalButton } from "./cal-button";
import { ContactForm } from "./contact-form";
import { ScrollReveal } from "./scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function FinalCta() {
  const t = useTranslations();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-[#243450] bg-[linear-gradient(150deg,#16243f,#21408f)] px-[clamp(20px,5vw,64px)] py-[clamp(90px,14vh,160px)] text-bone [--accent-dim:#9cc1ee] [--accent:#9cc1ee] [--bone-dim:#aebbd2] [--bone:#ffffff] [--gray:#aebbd2] [--line:#243450]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_120%,rgba(156,193,238,0.35),transparent_60%)]" />

      <div className="relative z-[2] mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-[clamp(48px,8vw,100px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-[26px] font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            {t.finalCta.eyebrow}
          </div>
          <h2
            id="contact-heading"
            className="mb-[18px] font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-tight"
          >
            {t.finalCta.headingBefore}
            <em className="reframe-em relative italic">{t.finalCta.headingEmphasis}</em>
          </h2>
          <p className="mb-8 max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim">
            {t.finalCta.body}
          </p>
          <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
            {t.common.bookConsult}
          </CalButton>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {t.finalCta.formNote}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl border border-white/10 bg-white/[0.09] p-8 backdrop-blur-md">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
