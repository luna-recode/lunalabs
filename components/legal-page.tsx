"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { useTranslations } from "@/lib/i18n/context";
import type { LegalPageContent } from "@/lib/i18n/types";

type LegalPageKey = "privacy" | "terms" | "accessibility";

export function LegalPage({ page }: { page: LegalPageKey }) {
  const t = useTranslations();
  const content: LegalPageContent = t.legal[page];

  useEffect(() => {
    document.title = content.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", content.metaDescription);
    }
  }, [content.metaTitle, content.metaDescription]);

  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="relative overflow-hidden pt-[140px] pb-[clamp(60px,8vh,90px)]">
          <div className="hero-bg absolute inset-0 z-0 opacity-40" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
          <div className="relative z-[2] mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
              <span className="h-px w-[34px] bg-muted" />
              {content.eyebrow}
            </div>
            <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-medium leading-[1.02] tracking-tight">
              {content.title}
            </h1>
            <p className="mt-5 max-w-[52ch] text-[clamp(14px,1.4vw,16px)] font-light leading-[1.6] text-bone-dim">
              {content.subtitle}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {content.lastUpdated}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-[clamp(20px,5vw,64px)] pb-[clamp(80px,12vh,140px)]">
          <nav
            aria-label={content.contents}
            className="mb-16 rounded-lg border border-line bg-card px-8 py-7 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]"
          >
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
              {content.contents}
            </p>
            <ol className="space-y-2">
              {content.sections.map((section, index) => (
                <li key={section.id} className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${section.id}`}
                    className="text-sm font-light text-bone-dim transition-colors hover:text-bone"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-14">
            {content.sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>
                <h2 className="mb-4 font-serif text-[22px] font-medium leading-[1.1]">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.split("\n\n").map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-[15px] font-light leading-[1.7] text-bone-dim"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-line bg-card px-8 py-6 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              {content.alsoWorthReading}
            </p>
            <Link
              href={content.crossLinkHref}
              className="font-serif text-[18px] font-medium transition-colors hover:text-bone"
            >
              {content.crossLinkTitle}
            </Link>
            <p className="mt-1 text-sm font-light text-bone-dim">
              {content.crossLinkDescription}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
