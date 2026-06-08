"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { faqs } from "@/lib/pricing-data";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,120px)]"
    >
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal className="mb-[clamp(40px,6vh,56px)] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Before you ask
          </span>
          <h2
            id="faq-heading"
            className="mt-4 font-serif text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-tight"
          >
            The reframes we use on every call
          </h2>
        </ScrollReveal>

        <ScrollReveal className="divide-y divide-line overflow-hidden rounded-lg border border-line">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const triggerId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  id={triggerId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-bone/[0.03]"
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <span className="font-serif text-lg font-medium leading-snug">
                    &ldquo;{faq.question}&rdquo;
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 shrink-0 font-mono text-sm text-muted transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                  <span className="sr-only">{open ? "Collapse" : "Expand"}</span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!open}
                  className={open ? "block" : "hidden"}
                >
                  <p className="px-6 pb-5 text-sm font-light leading-[1.65] text-bone-dim">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
