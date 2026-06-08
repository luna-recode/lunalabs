import { ScrollReveal } from "./scroll-reveal";

export function Reframe() {
  return (
    <section className="relative bg-bone px-[clamp(20px,5vw,64px)] py-[clamp(80px,14vh,150px)] text-ink">
      <ScrollReveal className="mx-auto max-w-[1100px]">
        <div className="mb-[30px] font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          The one idea everything rests on
        </div>
        <h2 className="font-serif text-[clamp(30px,4.6vw,62px)] font-medium leading-[1.08] tracking-tight">
          A theme changes how it{" "}
          <em className="reframe-em relative italic">looks.</em>
          <br />
          We change how it <em className="reframe-em relative italic">earns.</em>
        </h2>
      </ScrollReveal>
    </section>
  );
}
