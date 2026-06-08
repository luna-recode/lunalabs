import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { buildTiers } from "@/lib/pricing-data";

export function TierCards() {
  return (
    <section className="px-[clamp(20px,5vw,64px)] pb-[clamp(70px,11vh,120px)]">
      <ScrollReveal className="mx-auto grid max-w-[1200px] grid-cols-1 gap-0 overflow-hidden rounded-lg border border-line md:grid-cols-3">
        {buildTiers.map((tier, i) => (
          <article
            key={tier.id}
            className={`relative flex flex-col ${
              tier.recommended
                ? "bg-bone/[0.06] md:-my-px md:border-x md:border-bone/20"
                : "bg-transparent"
            } ${i < buildTiers.length - 1 ? "border-b border-line md:border-b-0 md:border-r md:border-line" : ""}`}
          >
            {tier.recommended && (
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bone/40 to-transparent" />
            )}

            <div className="flex flex-1 flex-col p-[clamp(28px,4vw,40px)]">
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                    Tier {tier.number}
                  </span>
                  <h2 className="mt-2 font-serif text-[28px] font-medium tracking-wide">
                    {tier.name}
                  </h2>
                </div>
                {tier.recommended && (
                  <span className="shrink-0 rounded-full border border-bone/30 bg-bone/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-bone">
                    Recommended
                  </span>
                )}
              </div>

              <div className="mb-5">
                <p className="font-serif text-[clamp(28px,3vw,36px)] font-medium leading-none tracking-tight">
                  {tier.price}
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {tier.priceNote}
                </p>
              </div>

              <p className="mb-6 text-sm font-light leading-[1.6] text-bone-dim">
                {tier.tagline}
              </p>

              <div className="mb-6 space-y-3 border-y border-line py-5 text-[13px]">
                <div className="flex justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Lead
                  </span>
                  <span className="text-right text-bone-dim">{tier.lead}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Timeline
                  </span>
                  <span className="text-right text-bone-dim">{tier.timeline}</span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-2.5">
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[13px] font-light leading-normal text-bone-dim"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bone-dim" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-[13px] italic leading-normal text-muted">
                {tier.pitch}
              </p>

              <CalButton
                className={`w-full cursor-pointer rounded-[32px] px-6 py-[14px] text-sm font-medium transition-all ${
                  tier.recommended
                    ? "border-none bg-bone text-ink hover:-translate-y-0.5 hover:bg-white"
                    : "border border-line bg-transparent text-bone hover:border-bone hover:bg-bone/[0.06]"
                }`}
              >
                {tier.recommended ? "Book a revenue audit →" : "Talk about this tier"}
              </CalButton>
            </div>
          </article>
        ))}
      </ScrollReveal>
    </section>
  );
}
