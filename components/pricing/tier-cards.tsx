"use client";

import Link from "next/link";
import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function TierCards() {
  const t = useTranslations();

  return (
    <section className="px-[clamp(20px,5vw,64px)] pb-[clamp(70px,11vh,120px)]">
      <ScrollReveal className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-3 md:py-6">
        {t.pricing.buildTiers.map((tier) => (
          <article
            key={tier.id}
            className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 ${
              tier.recommended
                ? "border-[#243450] bg-[#16243f] shadow-[0_28px_60px_-12px_rgba(33,64,143,0.6)] md:-my-6 [--accent:#9cc1ee] [--accent-dim:#9cc1ee] [--bone:#ffffff] [--bone-dim:#aebbd2] [--gold:#c6a14e] [--line:#2d4060] [--gray:#8595b1]"
                : "border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.3)]"
            }`}
          >
            {/* Folder-tab corner decoration on featured card */}
            {tier.recommended && (
              <div
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 overflow-hidden rounded-tr-2xl"
                aria-hidden
              >
                <div
                  className="absolute inset-0 opacity-[0.1]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #9cc1ee 0, #9cc1ee 1.5px, transparent 1.5px, transparent 10px)",
                  }}
                />
              </div>
            )}

            {/* Tier number + badge */}
            <div className="relative z-[1] mb-5 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                {t.pricing.tierLabel} {tier.number}
              </span>
              {(tier.recommended || tier.badge) && (
                <span
                  className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    tier.recommended ? "text-gold" : "text-accent-dim"
                  }`}
                >
                  {tier.recommended ? t.pricing.recommended : tier.badge}
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      tier.recommended ? "bg-gold" : "bg-accent"
                    }`}
                    aria-hidden
                  />
                </span>
              )}
            </div>

            {/* Name */}
            <h2 className="relative z-[1] font-serif text-[clamp(26px,2.4vw,30px)] font-medium tracking-tight text-bone">
              {tier.name}
            </h2>

            {/* Price */}
            <div className="mt-4 mb-5">
              <p
                className={`font-serif text-[clamp(30px,3vw,42px)] font-medium leading-none tracking-tight ${
                  tier.recommended ? "text-gold" : "text-bone"
                }`}
              >
                {tier.price}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {tier.priceNote}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-sm font-light leading-[1.65] text-bone-dim">
              {tier.tagline}
            </p>

            {/* Dashed separator */}
            <div className="my-6 border-t border-dashed border-line" />

            {/* Includes list */}
            <ul className="mb-6 flex-1 space-y-3">
              {tier.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] font-light leading-normal text-bone-dim"
                >
                  <span
                    className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                      tier.recommended ? "bg-accent/25" : "bg-accent/12"
                    }`}
                  >
                    <svg
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                      className="text-accent"
                      aria-hidden
                    >
                      <path
                        d="M1 3.5l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Pitch */}
            <p className="mb-6 text-[12px] italic leading-[1.65] text-muted">
              {tier.pitch}
            </p>

            {/* CTA */}
            <CalButton
              className={`w-full cursor-pointer rounded-[32px] px-6 py-[14px] text-sm font-medium transition-all ${
                tier.recommended
                  ? "btn-fill border-none hover:-translate-y-0.5"
                  : "btn-outline hover:-translate-y-0.5"
              }`}
            >
              {tier.recommended ? t.common.bookConsult : t.pricing.talkAboutTier}
            </CalButton>

            {tier.id === "launch" && (
              <Link
                href="/launch"
                className="mt-4 text-center text-[13px] font-light text-accent transition-colors hover:text-bone"
              >
                Learn more →
              </Link>
            )}
          </article>
        ))}
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center gap-5 rounded-2xl border border-line bg-card px-[clamp(24px,5vw,60px)] py-[clamp(32px,5vh,52px)] text-center shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-[clamp(18px,2vw,24px)] font-medium leading-[1.2] tracking-tight">
            {t.pricing.undecidedTitle}
          </p>
          <p className="mt-2 max-w-[52ch] text-sm font-light leading-[1.6] text-bone-dim">
            {t.pricing.undecidedBody}
          </p>
        </div>
        <Link
          href="/#contact"
          className="btn-outline shrink-0 cursor-pointer rounded-[32px] px-6 py-[13px] text-sm font-medium transition-all hover:-translate-y-0.5"
        >
          {t.pricing.undecidedCta}
        </Link>
      </ScrollReveal>
    </section>
  );
}
