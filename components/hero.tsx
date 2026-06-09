"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/lib/i18n/context";
import { CalButton } from "./cal-button";

export function Hero() {
  const t = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frame = requestAnimationFrame(() => setReducedMotion(mq.matches));

    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      cancelAnimationFrame(frame);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const motionClass = reducedMotion ? "" : "opacity-0";

  return (
    <header
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {!reducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/hero-video.mp4"
          poster="/hero-poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          tabIndex={-1}
        />
      )}

      <div className="hero-bg absolute inset-0 z-[1] opacity-50" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/30 via-ink/20 to-ink/90" />

      <div className="relative z-[3] mx-auto w-full max-w-[1500px] px-[clamp(20px,5vw,64px)] pb-[clamp(96px,12vh,120px)]">
        <div className={`animate-rise-delay-5 mb-[26px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-dim sm:tracking-[0.32em] ${reducedMotion ? "" : motionClass}`}>
          <span className="h-px w-[34px] bg-accent-dim" aria-hidden />
          {t.hero.eyebrow}
        </div>

        <h1 className="max-w-[16ch] font-serif text-[clamp(40px,7.4vw,108px)] font-medium leading-[0.98] tracking-tight">
          <span className={`animate-rise-delay-1 block ${reducedMotion ? "" : motionClass}`}>{t.hero.titleLine1}</span>
          <span className={`animate-rise-delay-2 block italic text-accent ${reducedMotion ? "" : motionClass}`}>{t.hero.titleLine2}</span>
        </h1>

        <p className={`animate-rise-delay-3 mt-7 max-w-[46ch] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.55] text-bone-dim ${reducedMotion ? "" : motionClass}`}>
          {t.hero.body}
        </p>

        <p className={`animate-rise-delay-4 mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted ${reducedMotion ? "" : motionClass}`}>
          {t.hero.recentWork}{" "}
          <Link href="/case-studies/dra-yesly-garcia" className="text-accent transition-colors hover:text-bone">
            {t.hero.recentWorkClient}
          </Link>
        </p>

        <div className={`animate-rise-delay-4 mt-[38px] flex flex-wrap gap-3.5 ${reducedMotion ? "" : motionClass}`}>
          <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
            {t.common.bookConsult}
          </CalButton>
          <Link
            href="/case-studies"
            className="btn-outline cursor-pointer rounded-[32px] px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            {t.common.viewWork}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span>{t.common.scroll}</span>
        <span className="scroll-bar h-[34px] w-px bg-gradient-to-b from-muted to-transparent" aria-hidden />
      </div>
    </header>
  );
}
