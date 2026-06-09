"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  heading?: string;
  eyebrow?: string;
  faqs: FaqItem[];
};

export function FaqSection({
  heading = "Frequently asked questions",
  eyebrow = "FAQ",
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            {eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mb-8 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            {heading}
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-line rounded-lg border border-line bg-card">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/50"
                >
                  <span className="font-serif text-[clamp(18px,2.2vw,24px)] font-medium leading-[1.2] tracking-tight">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 font-mono text-sm text-muted"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="px-6 pb-5 text-base font-light leading-[1.7] text-bone-dim"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
