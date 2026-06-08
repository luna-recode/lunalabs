import { RoiTable } from "@/components/roi-table";
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
      aria-labelledby="proof-heading"
      className="relative px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            The conversation that closes
          </div>
          <h2
            id="proof-heading"
            className="mb-6 font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            You don&apos;t need more traffic. You need more of it to buy.
          </h2>
          <p className="max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            A 12k-follower boutique with no cart recovery is losing money every day.
            We rebuild this table live with your real numbers — and the price stops
            being the conversation.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <RoiTable rows={rows} totalNow="$1,350" totalAfter="$3,665" />
        </ScrollReveal>
      </div>
    </section>
  );
}
