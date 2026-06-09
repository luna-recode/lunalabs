"use client";

import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function LaunchFinalCta() {
  const t = useTranslations();

  return (
    <section
      id="contact"
      aria-labelledby="launch-contact-heading"
      className="relative overflow-hidden border-t border-[#243450] bg-[linear-gradient(150deg,#16243f,#21408f)] px-[clamp(20px,5vw,64px)] py-[clamp(90px,14vh,160px)] text-bone [--accent-dim:#9cc1ee] [--accent:#9cc1ee] [--bone-dim:#aebbd2] [--bone:#ffffff] [--gray:#aebbd2] [--line:#243450]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_120%,rgba(156,193,238,0.35),transparent_60%)]" />

      <ScrollReveal className="relative z-[2] mx-auto max-w-[1200px] text-center md:text-left">
        <h2
          id="launch-contact-heading"
          className="mb-[18px] font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-tight"
        >
          Ready to get your business online?
        </h2>
        <p className="mx-auto mb-8 max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim md:mx-0">
          Book a free consult and we&apos;ll walk through what your business needs to show up
          online — website, Google presence, and booking. No jargon, no pressure.
        </p>
        <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
          {t.common.bookConsult}
        </CalButton>
      </ScrollReveal>
    </section>
  );
}
