"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { faqs } from "@/lib/pricing-data";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,120px)]">
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal className="mb-[clamp(40px,6vh,56px)] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Before you ask
          </span>
          <h2 className="mt-4 font-serif text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-tight">
            The reframes we use on every call
          </h2>
        </ScrollReveal>

        <ScrollReveal className="divide-y divide-line overflow-hidden rounded-lg border border-line">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-bone/[0.03]"
                  aria-expanded={open}
                >
                  <span className="font-serif text-lg font-medium leading-snug">
                    &ldquo;{faq.question}&rdquo;
                  </span>
                  <span
                    className={`mt-1 shrink-0 font-mono text-sm text-muted transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm font-light leading-[1.65] text-bone-dim">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
