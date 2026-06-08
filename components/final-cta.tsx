import { CalButton } from "./cal-button";
import { ContactForm } from "./contact-form";
import { ScrollReveal } from "./scroll-reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(90px,14vh,160px)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_120%,rgba(120,120,124,0.22),transparent_60%)]" />

      <div className="relative z-[2] mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-[clamp(48px,8vw,100px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-[26px] font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            Let&apos;s find the leaks
          </div>
          <h2 className="mb-[18px] font-serif text-[clamp(34px,5vw,64px)] font-medium leading-[1.02] tracking-tight">
            How much revenue is your audience{" "}
            <em className="italic">leaving behind?</em>
          </h2>
          <p className="mb-8 max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim">
            Free 20-minute teardown. We&apos;ll show you the gap on a call — no
            pitch deck, just your numbers.
          </p>
          <CalButton className="cursor-pointer rounded-[32px] border-none bg-bone px-[28px] py-[15px] text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-white">
            Book a revenue audit →
          </CalButton>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Or fill out the form — we&apos;ll reach out within 24h
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
