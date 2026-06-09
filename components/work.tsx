"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/works-data";

const MAX_VISIBLE = 4;

const placeholderGradients = [
  "radial-gradient(circle at 22% 28%, rgba(47,99,214,0.52), transparent 55%), linear-gradient(155deg, #192c50 0%, #0e1922 100%)",
  "radial-gradient(circle at 74% 30%, rgba(198,161,78,0.34), transparent 55%), linear-gradient(155deg, #1d2c44 0%, #0d1826 100%)",
  "radial-gradient(circle at 40% 70%, rgba(156,193,238,0.28), transparent 55%), linear-gradient(140deg, #152234 0%, #0c1720 100%)",
];

function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  const gradient = placeholderGradients[index % placeholderGradients.length];

  return (
    <article className="group relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-2xl">
      {study.image ? (
        <img
          src={study.image}
          alt={`${study.client} storefront`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ background: gradient }}
          aria-hidden
        />
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden
      />

      {!study.placeholder && (
        <div className="absolute bottom-[68px] left-5 right-5 z-[1]">
          <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
            {study.location}
          </p>
          <p className="font-serif text-[18px] font-medium leading-tight text-white">
            {study.client}
          </p>
        </div>
      )}

      {study.placeholder && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
            Coming soon
          </span>
        </div>
      )}

      <div className="absolute inset-x-4 bottom-4 z-[2]">
        {study.placeholder ? (
          <div
            aria-hidden
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] py-3 text-[13px] text-white/20 backdrop-blur-sm"
          >
            —
          </div>
        ) : (
          <Link
            href={study.liveUrl ?? `/case-studies/${study.id}`}
            {...(study.liveUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 py-3 text-[13px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/[0.18]"
          >
            View Case Study
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5v6"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}

export function Work({ studies }: { studies: CaseStudy[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const showArrows = studies.length > MAX_VISIBLE;

  useEffect(() => {
    if (!showArrows) return;
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [showArrows]);

  const handleScroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth / 4;
    el.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });
  };

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="relative border-b border-line px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,120px)]"
    >
      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2
            id="works-heading"
            className="font-serif text-[clamp(22px,2.8vw,34px)] font-medium tracking-tight"
          >
            Recent Works
          </h2>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden
            className="shrink-0 text-bone-dim"
          >
            <circle
              cx="13"
              cy="13"
              r="12"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M13 8v10M9 14l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link
          href="/case-studies"
          className="hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent sm:flex"
        >
          View all
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 8L8 2M8 2H3M8 2v5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="mb-7 h-px bg-line" aria-hidden />

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {studies.map((study, i) => (
            <div
              key={study.id}
              className="w-[82vw] shrink-0 snap-start sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]"
            >
              <WorkCard study={study} index={i} />
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all disabled:pointer-events-none disabled:opacity-0"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 2L4 7l5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all disabled:pointer-events-none disabled:opacity-0"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
