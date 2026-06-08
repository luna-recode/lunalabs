"use client";

import { ScrollReveal } from "./scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

export function Work() {
  const t = useTranslations();

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative border-b border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {t.work.eyebrow}
          </div>
          <h2
            id="works-heading"
            className="font-serif text-[clamp(30px,4.6vw,58px)] font-medium leading-[1.06] tracking-tight"
          >
            {t.work.client}
          </h2>
          <p className="mt-6 max-w-[42ch] text-base font-light leading-[1.65] text-bone-dim">
            {t.work.delivered}
          </p>
          {/* TODO(owner): provide Soleil & Stone build images (before/after or hero shots) and/or a live URL */}
          <p className="mt-8 rounded-lg border border-accent/25 bg-accent/[0.06] px-5 py-4 font-mono text-[10px] uppercase leading-[1.6] tracking-[0.16em] text-accent-dim">
            {t.work.imageTodo}
          </p>
          {/* TODO(owner): real client quote if available — otherwise omit, do not fabricate */}
          <p className="mt-3 rounded-lg border border-line bg-card px-5 py-4 text-[13px] italic leading-[1.6] text-muted">
            {t.work.quoteTodo}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="grid gap-4 rounded-lg border border-line bg-card p-4 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] sm:grid-cols-2"
            aria-label={t.work.imageTodo}
          >
            {[t.work.beforeLabel, t.work.afterLabel].map((label) => (
              <div
                key={label}
                className="relative flex aspect-[4/5] min-h-[260px] flex-col justify-between overflow-hidden rounded-md border border-line bg-surface p-5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(156,193,238,0.16),transparent_35%),linear-gradient(160deg,rgba(239,216,154,0.08),transparent_45%)]" />
                <div className="relative z-[1] flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {label}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                </div>
                <div className="relative z-[1] space-y-3">
                  <span className="block h-3 w-2/3 rounded-full bg-bone/15" />
                  <span className="block h-3 w-1/2 rounded-full bg-bone/10" />
                  <span className="block h-20 rounded-md border border-line bg-ink/30" />
                  <span className="block h-9 rounded-full bg-accent/20" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
