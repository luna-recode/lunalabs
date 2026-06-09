"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const items = [
  "Custom-designed, mobile-first website",
  "Google Business Profile set up & optimized",
  "Contact form that reaches you instantly",
  "Online booking built in (Cal.com)",
  "On-page SEO + analytics",
  "Your domain connected and live",
  "Built and launched in about a week",
];

export function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      aria-labelledby="whats-included-heading"
      className="relative border-y border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
        <ScrollReveal>
          <h2
            id="whats-included-heading"
            className="font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            Everything you need to show up online.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4 px-6 py-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-[clamp(15px,1.8vw,18px)] font-light leading-[1.45] text-bone-dim">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
