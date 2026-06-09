"use client";

import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { useTranslations } from "@/lib/i18n/context";

const toolAssets = [
  { logo: "/shopify-icon.svg", width: 35, height: 40 },
  { logo: "/klaviyo-icon.svg", width: 60, height: 40 },
  { logo: "/google_analytics-icon.svg", width: 40, height: 40 },
];

export function Stack() {
  const t = useTranslations();

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative border-y border-line px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,120px)]"
    >
      <ScrollReveal className="mb-[clamp(46px,7vh,72px)] flex flex-col items-center gap-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          {t.stack.eyebrow}
        </span>
        <h2
          id="stack-heading"
          className="max-w-[18ch] font-serif text-[clamp(24px,3.4vw,42px)] font-medium leading-[1.12]"
        >
          {t.stack.heading}
        </h2>
      </ScrollReveal>

      <ScrollReveal className="mx-auto grid max-w-[1100px] grid-cols-1 overflow-hidden rounded-md border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)] md:grid-cols-3">
        {t.stack.tools.map((tool, i) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center gap-3 px-7 py-[clamp(24px,4vw,40px)] text-center transition-colors hover:bg-surface ${
              i < t.stack.tools.length - 1 ? "border-b border-line md:border-b-0 md:border-r md:border-line" : ""
            }`}
          >
            <div className="flex h-[52px] items-center justify-center grayscale transition-[filter] duration-300 hover:grayscale-0">
              <Image
                src={toolAssets[i].logo}
                alt={tool.name}
                width={toolAssets[i].width}
                height={toolAssets[i].height}
              />
            </div>
            <span className="font-serif text-[21px] font-medium tracking-wide">{tool.name}</span>
            <span className="max-w-[24ch] text-[13px] font-light leading-normal text-muted">
              {tool.role}
            </span>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
