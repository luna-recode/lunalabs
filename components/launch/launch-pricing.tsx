"use client";

import Link from "next/link";
import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

const promises = [
  "Fixed price — you know the number before we start",
  "No hourly billing, no subscriptions, no surprises",
  "You own the site, the domain, and everything in it",
];

export function LaunchPricing() {
  const t = useTranslations();

  return (
    <section
      id="pricing"
      aria-labelledby="launch-pricing-heading"
      className="relative px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <ScrollReveal className="mx-auto max-w-[1000px]">
        <div className="rounded-2xl border border-line bg-white/60 p-[clamp(28px,5vw,56px)] shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] backdrop-blur-xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                Simple pricing
              </p>
              <h2
                id="launch-pricing-heading"
                className="font-serif text-[clamp(34px,5vw,60px)] font-medium leading-[1.02] tracking-tight"
              >
                from <span className="text-accent">$1,200</span>
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                one-time build
              </p>

              <ul className="mt-7 space-y-3">
                {promises.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] font-light leading-[1.6] text-bone-dim"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
                {t.common.bookConsult}
              </CalButton>
              <Link
                href="/pricing"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
              >
                See full pricing →
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
