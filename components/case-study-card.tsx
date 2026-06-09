import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";
import type { CaseStudy } from "@/lib/works-data";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article aria-labelledby={`case-${study.id}`}>
      <div className="grid grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] md:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <div className="mb-7 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              {study.tier}
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              {study.number}
            </span>
          </div>

          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {study.location}
          </p>
          <h2
            id={`case-${study.id}`}
            className="font-serif text-[clamp(30px,4.2vw,54px)] font-medium leading-[1.06] tracking-tight"
          >
            {study.client}
          </h2>
          <p className="mt-5 max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim">
            {study.tagline}
          </p>

          <ul className="mt-7 space-y-2.5">
            {study.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-dim"
              >
                <span className="h-px w-5 shrink-0 bg-accent/50" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          {study.metrics && study.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-line bg-card px-4 py-3 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]"
                >
                  <p className="font-serif text-[clamp(22px,2.8vw,32px)] font-medium tracking-tight text-accent">
                    {m.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {study.liveUrl && (
            <Link
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
            >
              View live store
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2v6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {study.image ? (
            <div className="overflow-hidden rounded-xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
              <img
                src={study.image}
                alt={`${study.client} storefront`}
                className="w-full object-cover"
              />
            </div>
          ) : (
            <div className="grid gap-4 rounded-xl border border-line bg-card p-4 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] sm:grid-cols-2">
              {["Before", "After"].map((label) => (
                <div
                  key={label}
                  className="relative flex aspect-[4/5] min-h-[260px] flex-col justify-between overflow-hidden rounded-lg border border-line bg-surface p-5"
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
          )}
        </ScrollReveal>
      </div>
    </article>
  );
}
