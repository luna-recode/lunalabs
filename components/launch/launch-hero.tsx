"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CalButton } from "@/components/cal-button";
import { useTranslations } from "@/lib/i18n/context";

export function LaunchHero() {
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
      className="relative flex min-h-screen flex-col justify-between overflow-hidden md:flex-row md:items-end md:justify-start"
    >
      {/* Mobile: in-flow media panel above the text; md+: full-bleed background video */}
      <div className="relative h-[42vh] w-full shrink-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center md:absolute md:inset-0 md:z-0 md:h-full md:bg-none">
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
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
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-ink md:hidden"
          aria-hidden
        />
      </div>

      <div className="hero-bg absolute inset-0 z-[1] hidden opacity-50 md:block" />
      <div className="absolute inset-0 z-[2] hidden bg-gradient-to-b from-ink/30 via-ink/20 to-ink/90 md:block" />

      <div className="relative z-[3] mx-auto w-full max-w-[1500px] px-[clamp(20px,5vw,64px)] pb-[clamp(96px,12vh,120px)] pt-6 md:pt-0">
        <div
          className={`animate-rise-delay-5 mb-[26px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-dim sm:tracking-[0.32em] ${reducedMotion ? "" : motionClass}`}
        >
          <span className="h-px w-[34px] bg-accent-dim" aria-hidden />
          Local business · Los Angeles, CA
        </div>

        <h1 className="max-w-[16ch] font-serif text-[clamp(40px,7.4vw,108px)] font-medium leading-[0.98] tracking-tight">
          <span className={`animate-rise-delay-1 block ${reducedMotion ? "" : motionClass}`}>
            Your business, online
          </span>
          <span
            className={`animate-rise-delay-2 block italic text-accent ${reducedMotion ? "" : motionClass}`}
          >
            and built to be found.
          </span>
        </h1>

        <p
          className={`animate-rise-delay-3 mt-7 max-w-[46ch] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.55] text-bone-dim ${reducedMotion ? "" : motionClass}`}
        >
          A clean, fast website that makes your business look as good as it is — plus a Google
          presence so customers can actually find you. Live in about a week.
        </p>

        <div
          className={`animate-rise-delay-4 mt-[38px] flex flex-wrap gap-3.5 ${reducedMotion ? "" : motionClass}`}
        >
          <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
            {t.common.bookConsult}
          </CalButton>
          <Link
            href="#whats-included"
            className="btn-outline cursor-pointer rounded-[32px] px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            See what&apos;s included →
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span>{t.common.scroll}</span>
        <span
          className="scroll-bar h-[34px] w-px bg-gradient-to-b from-muted to-transparent"
          aria-hidden
        />
      </div>
    </header>
  );
}
