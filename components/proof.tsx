import { ScrollReveal } from "./scroll-reveal";

const rows = [
  { label: "Conversion rate", now: "1.0%", after: "2.2%" },
  { label: "Orders / month", now: "15", after: "33" },
  { label: "Recovered carts", now: "$0", after: "+$430" },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            The conversation that closes
          </div>
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight">
            You don&apos;t need more traffic. You need more of it to buy.
          </h2>
          <p className="max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            A 12k-follower boutique with no cart recovery is losing money every day.
            We rebuild this table live with your real numbers — and the price stops
            being the conversation.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-line bg-bone/[0.02]">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center border-b border-line px-[22px] py-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              <span>Per month</span>
              <span className="text-right">Now</span>
              <span className="text-right">After</span>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center border-b border-line px-[22px] py-4 text-sm"
              >
                <span>{row.label}</span>
                <span className="text-right text-muted">{row.now}</span>
                <span className="text-right font-medium text-accent">{row.after}</span>
              </div>
            ))}

            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center bg-accent/[0.06] px-[22px] py-4 font-serif text-[17px]">
              <span>Monthly revenue</span>
              <span className="text-right text-muted">$1,350</span>
              <span className="text-right text-[19px] font-medium text-accent">$3,665</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
