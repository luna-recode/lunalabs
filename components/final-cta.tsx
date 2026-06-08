import { CalButton } from "./cal-button";
import { ScrollReveal } from "./scroll-reveal";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(90px,16vh,180px)] text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_120%,rgba(120,120,124,0.22),transparent_60%)]" />

      <ScrollReveal className="relative z-[2] mx-auto max-w-[900px]">
        <div className="mb-[26px] font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          Let&apos;s find the leaks
        </div>
        <h2 className="mb-[18px] font-serif text-[clamp(34px,6vw,84px)] font-medium leading-[1.02] tracking-tight">
          How much revenue is
          <br />
          your audience <em className="italic">leaving behind?</em>
        </h2>
        <p className="mb-10 text-base font-light text-bone-dim">
          Free 20-minute teardown. We&apos;ll show you the gap on a call — no pitch
          deck, just your numbers.
        </p>
        <CalButton className="cursor-pointer rounded-[32px] border-none bg-bone px-[34px] py-[17px] text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-white">
          Book a revenue audit →
        </CalButton>
      </ScrollReveal>
    </section>
  );
}
