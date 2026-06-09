"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

type Step = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  gradient: string;
  visual: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Audit",
    tagline: "Find what's costing you revenue.",
    description:
      "We review your store's conversion funnel, traffic sources, and revenue gaps — identifying exactly where visitors drop off and why. You leave the audit with a ranked list of fixes tied to estimated revenue impact.",
    gradient:
      "radial-gradient(ellipse at 20% 20%, rgba(156,193,238,0.22) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(33,64,143,0.35) 0%, transparent 55%)",
    visual: (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden>
        {[40, 60, 80, 100, 120].map((r, i) => (
          <circle key={r} cx="80" cy="80" r={r / 2} stroke="rgba(156,193,238,0.18)" strokeWidth="1" strokeDasharray={i % 2 === 0 ? "4 6" : "none"} />
        ))}
        <circle cx="80" cy="80" r="6" fill="rgba(156,193,238,0.6)" />
        <line x1="80" y1="80" x2="118" y2="42" stroke="rgba(156,193,238,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="120" cy="40" r="10" stroke="rgba(156,193,238,0.5)" strokeWidth="1.5" />
        <line x1="126" y1="46" x2="134" y2="54" stroke="rgba(156,193,238,0.5)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    tagline: "A fix plan built on your numbers.",
    description:
      "We map every identified issue to a revenue outcome and sequence the work by impact. Every change has a clear hypothesis, a success metric, and a rationale before we write a single line of code.",
    gradient:
      "linear-gradient(135deg, rgba(33,64,143,0.4) 0%, rgba(156,193,238,0.12) 50%, rgba(239,216,154,0.1) 100%)",
    visual: (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden>
        {[
          { x: 20, h: 50 },
          { x: 46, h: 80 },
          { x: 72, h: 60 },
          { x: 98, h: 100 },
          { x: 124, h: 130 },
        ].map(({ x, h }) => (
          <rect key={x} x={x} y={150 - h} width="18" height={h} rx="3" fill="rgba(156,193,238,0.15)" stroke="rgba(156,193,238,0.3)" strokeWidth="1" />
        ))}
        <polyline points="29,100 55,70 81,90 107,50 133,20" stroke="rgba(239,216,154,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {[29, 55, 81, 107, 133].map((x, i) => (
          <circle key={x} cx={x} cy={[100, 70, 90, 50, 20][i]} r="3.5" fill="rgba(239,216,154,0.7)" />
        ))}
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    tagline: "Every decision runs through conversion.",
    description:
      "We design and implement — new pages, optimized checkout flows, email sequences, trust signals — with conversion as the primary lens. You see progress in real time and approve before anything goes live.",
    gradient:
      "radial-gradient(ellipse at 60% 30%, rgba(33,64,143,0.45) 0%, transparent 65%), linear-gradient(200deg, rgba(156,193,238,0.08) 0%, transparent 70%)",
    visual: (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden>
        <rect x="15" y="30" width="130" height="100" rx="8" stroke="rgba(156,193,238,0.25)" strokeWidth="1.5" />
        <rect x="15" y="30" width="130" height="22" rx="8" fill="rgba(156,193,238,0.1)" />
        {[30, 42, 54].map((cx) => (
          <circle key={cx} cx={cx} cy="41" r="4" fill="rgba(156,193,238,0.3)" />
        ))}
        <rect x="28" y="66" width="50" height="6" rx="3" fill="rgba(156,193,238,0.2)" />
        <rect x="28" y="78" width="35" height="6" rx="3" fill="rgba(156,193,238,0.15)" />
        <rect x="28" y="96" width="104" height="24" rx="6" fill="rgba(156,193,238,0.12)" stroke="rgba(156,193,238,0.25)" strokeWidth="1" />
        <text x="80" y="112" textAnchor="middle" fontSize="9" fill="rgba(156,193,238,0.5)" fontFamily="monospace">Add to cart</text>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Measure",
    tagline: "Live performance, measured against baseline.",
    description:
      "We deploy, monitor performance against your baseline metrics, and deliver a clear report on revenue impact. No guesswork, no vanity metrics — just what moved and by how much.",
    gradient:
      "linear-gradient(160deg, rgba(239,216,154,0.12) 0%, rgba(33,64,143,0.4) 60%, rgba(156,193,238,0.15) 100%)",
    visual: (
      <svg viewBox="0 0 160 160" fill="none" className="h-full w-full" aria-hidden>
        <polyline points="15,130 40,110 65,115 90,75 115,55 145,25" stroke="rgba(156,193,238,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="4 3" />
        <polyline points="15,130 40,100 65,85 90,55 115,35 145,15" stroke="rgba(239,216,154,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="145" cy="15" r="5" fill="rgba(239,216,154,0.8)" />
        <line x1="145" y1="15" x2="145" y2="5" stroke="rgba(239,216,154,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="140" y1="10" x2="145" y2="5" stroke="rgba(239,216,154,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="150" y1="10" x2="145" y2="5" stroke="rgba(239,216,154,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="135" x2="150" y2="135" stroke="rgba(156,193,238,0.2)" strokeWidth="1" />
        <line x1="15" y1="135" x2="15" y2="10" stroke="rgba(156,193,238,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
];

function FlipCard({ step }: { step: Step }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: "1200px" }} className="h-[480px]">
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.7s ease-in-out",
        }}
        className="relative h-full w-full"
      >
        {/* ── Front ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            background: step.gradient,
            pointerEvents: flipped ? "none" : "auto",
          }}
          className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10"
        >
          {/* Background number */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-4 -right-2 select-none font-serif text-[140px] font-medium leading-none tracking-tighter text-white/[0.05]"
          >
            {step.number}
          </span>

          {/* Visual */}
          <div className="absolute bottom-16 right-6 h-[160px] w-[160px] opacity-80">
            {step.visual}
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col p-8">
            <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-bone/40">
              Step {step.number}
            </span>
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] font-medium leading-[1.06] tracking-tight text-bone">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[22ch] text-sm font-light leading-[1.6] text-bone/60">
              {step.tagline}
            </p>

            {/* + button */}
            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-label={`Learn more about ${step.title}`}
              className="absolute bottom-6 right-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-ink/70 text-bone backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Back ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: flipped ? "auto" : "none",
          }}
          className="absolute inset-0 overflow-hidden rounded-2xl border border-line bg-card"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative flex h-full flex-col p-8">
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              Step {step.number}
            </span>
            <h3 className="mb-6 font-serif text-[clamp(22px,2.8vw,30px)] font-medium leading-[1.1] tracking-tight text-accent">
              {step.title}
            </h3>
            <p className="text-sm font-light leading-[1.8] text-bone-dim">
              {step.description}
            </p>

            {/* − button */}
            <button
              type="button"
              onClick={() => setFlipped(false)}
              aria-label="Flip back"
              className="absolute bottom-6 right-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-surface text-muted transition-all hover:scale-110 hover:text-bone active:scale-95"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreativeProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Our process
          </div>
          <div className="flex flex-col gap-6 border-b border-line pb-[clamp(48px,7vh,72px)] md:flex-row md:items-end md:justify-between">
            <h2
              id="process-heading"
              className="font-serif text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.04] tracking-tight"
            >
              Our creative{" "}
              <em className="italic text-accent">process.</em>
            </h2>
            <p className="max-w-[38ch] text-base font-light leading-[1.65] text-bone-dim md:text-right">
              Every engagement follows the same four-step framework — built around your numbers, not our assumptions.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-[clamp(48px,7vh,72px)] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <ScrollReveal key={step.number}>
              <FlipCard step={step} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
