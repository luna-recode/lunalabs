"use client";

import Link from "next/link";
import { useState } from "react";
import type { ServiceCategory } from "@/lib/content/services-data";

export function ServicesAccordion({
  categories,
}: {
  categories: ServiceCategory[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {categories.map((category, i) => {
        const isOpen = open === i;
        return (
          <div key={category.slug}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${category.slug}`}
              id={`service-trigger-${category.slug}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full cursor-pointer items-center gap-6 py-[clamp(28px,5vh,44px)] text-left"
            >
              <span className="w-10 shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                [{category.number}]
              </span>
              <span className="flex-1 font-serif text-[clamp(26px,4.5vw,48px)] font-medium leading-[1.06] tracking-tight transition-colors group-hover:text-accent">
                {category.title}
              </span>
              <span
                aria-hidden
                className="relative flex h-11 w-11 shrink-0 items-center justify-center"
              >
                <span
                  className={`absolute h-px w-5 bg-accent transition-all duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute h-px w-5 bg-accent transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "rotate-90"
                  }`}
                />
              </span>
            </button>

            <div
              id={`service-panel-${category.slug}`}
              role="region"
              aria-labelledby={`service-trigger-${category.slug}`}
              className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="pb-[clamp(32px,5vh,52px)] pl-[calc(2.5rem+24px)] pr-0 sm:pl-[calc(2.5rem+24px)]">
                  <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                    <ul className="space-y-3">
                      {category.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm font-light leading-[1.6] text-bone-dim"
                        >
                          <span
                            className="mt-[7px] h-0 w-0 shrink-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-accent"
                            aria-hidden
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p className="text-base font-medium leading-[1.65] text-bone">
                        {category.thesis}
                      </p>
                      <p className="mt-4 text-sm font-light leading-[1.75] text-bone-dim">
                        {category.description}
                      </p>
                      <Link
                        href={`/services/${category.slug}`}
                        className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-70"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
