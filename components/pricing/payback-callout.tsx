import { RoiTable } from "@/components/roi-table";
import { ScrollReveal } from "@/components/scroll-reveal";

const rows = [
  { label: "Conversion rate", now: "1.0%", after: "2.2%" },
  { label: "Orders / month", now: "15", after: "33" },
  { label: "Recovered carts", now: "$0", after: "+$430" },
];

export function PaybackCallout() {
  return (
    <section
      aria-labelledby="payback-heading"
      className="border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,110px)] text-bone"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,80px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-accent-dim">
            The payback line that lands
          </div>
          <h2
            id="payback-heading"
            className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            Price is a number.
            <br />
            <em className="reframe-em relative italic">Payback period is a decision.</em>
          </h2>
          <p className="mt-6 max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            On a typical 12k-follower boutique, a revenue system adds roughly
            +$2,300/month — about $27k a year. Against a $3,800 Growth build,
            that&apos;s payback in under two months. Everything after is margin.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <RoiTable
            rows={rows}
            totalNow="$1,350"
            totalAfter="$3,665"
            variant="surface"
          />
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            Illustrative · rebuilt with your real numbers on every audit call
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
