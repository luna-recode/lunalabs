"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="rounded-2xl border border-line bg-white/60 p-2 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] backdrop-blur-xl sm:p-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`transition-all duration-300 ${
              isOpen
                ? "my-3 rounded-xl border border-accent/30 bg-card shadow-[0_18px_40px_-24px_rgba(33,64,143,0.5)] first:mt-0 last:mb-0"
                : "border-b border-line last:border-b-0"
            }`}
          >
            <dt>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span
                  className={`font-serif text-[clamp(15px,1.8vw,19px)] font-medium leading-[1.2] tracking-tight underline-offset-4 decoration-bone/40 transition-all duration-200 group-hover:underline ${isOpen ? "underline" : ""}`}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px]" : "max-h-0"}`}
            >
              <p className="mx-6 mb-5 mt-1 border-l-2 border-accent/40 py-3 pl-4 text-[15px] font-light leading-[1.75] text-bone-dim">
                {item.answer}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
