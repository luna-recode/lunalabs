"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/lib/i18n/context";

const SCROLL_THRESHOLD = 400;

function SkipToMain() {
  const t = useTranslations();

  return (
    <a
      href="#main-content"
      className="sr-only sr-only-focusable left-4 top-4 z-[10000] rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent"
    >
      {t.common.skipToMain}
    </a>
  );
}

function BackToTop() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (hero) {
      hero.scrollIntoView({ behavior, block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      type="button"
      onClick={scrollToHero}
      aria-label={t.common.backToTop}
      className={`fixed bottom-6 right-6 z-[150] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-accent text-on-accent shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-offset-4 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

export function SkipLink() {
  return (
    <>
      <SkipToMain />
      <BackToTop />
    </>
  );
}
