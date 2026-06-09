"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    day: "Day 1",
    title: "Consult",
    body: "A free 30-minute call. We learn how your business works, what customers need from you, and map out your pages.",
  },
  {
    day: "Days 2–3",
    title: "Design",
    body: "We design the site around your brand — your colors, your photos, your voice — and you approve the direction.",
  },
  {
    day: "Days 4–6",
    title: "Build",
    body: "Pages built, content in place, contact form and online booking wired up and tested on real phones.",
  },
  {
    day: "Day 7",
    title: "Launch",
    body: "Domain connected, Google Business Profile live, analytics on. Your business is online and findable.",
  },
];

export function LaunchProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            How it works
          </p>
          <h2
            id="process-heading"
            className="mb-[clamp(36px,6vh,56px)] font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            Live in about a week.
          </h2>
        </ScrollReveal>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <ScrollReveal className="h-full">
              <div className="relative h-full rounded-2xl border border-line bg-card p-7 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.25)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-mono text-[13px] text-accent-dim">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {step.day}
                  </span>
                </div>
                <h3 className="font-serif text-[clamp(20px,2.2vw,26px)] font-medium leading-[1.1] tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-[1.65] text-bone-dim">
                  {step.body}
                </p>
              </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
