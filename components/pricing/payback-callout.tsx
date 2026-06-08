import { ScrollReveal } from "@/components/scroll-reveal";

export function PaybackCallout() {
  return (
    <section className="border-y border-line bg-bone px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,110px)] text-ink">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,80px)] md:grid-cols-[1fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            The payback line that lands
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight">
            Price is a number.
            <br />
            <em className="reframe-em relative italic">Payback period is a decision.</em>
          </h2>
          <p className="mt-6 max-w-[42ch] text-base font-light leading-[1.65] text-muted-d">
            On a typical 12k-follower boutique, a revenue system adds roughly
            +$2,300/month — about $27k a year. Against a $3,800 Growth build,
            that&apos;s payback in under two months. Everything after is margin.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-line-d bg-ink/[0.03]">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center border-b border-line-d px-[22px] py-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              <span>Per month</span>
              <span className="text-right">Now</span>
              <span className="text-right">After</span>
            </div>
            {[
              { label: "Conversion rate", now: "1.0%", after: "2.2%" },
              { label: "Orders / month", now: "15", after: "33" },
              { label: "Recovered carts", now: "$0", after: "+$430" },
            ].map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center border-b border-line-d px-[22px] py-4 text-sm text-ink"
              >
                <span>{row.label}</span>
                <span className="text-right text-muted">{row.now}</span>
                <span className="text-right font-medium">{row.after}</span>
              </div>
            ))}
            <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] items-center bg-ink/[0.05] px-[22px] py-4 font-serif text-[17px] text-ink">
              <span>Monthly revenue</span>
              <span className="text-right text-muted">$1,350</span>
              <span className="text-right text-[19px] font-medium">$3,665</span>
            </div>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            Illustrative · rebuilt with your real numbers on every audit call
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
