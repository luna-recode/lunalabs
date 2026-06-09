"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

const glassPill =
  "pointer-events-none absolute top-4 z-[2] rounded-full border border-white/50 bg-[#9cc1ee]/35 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#15233f] backdrop-blur-md";

export function BeforeAfterSlider({
  before,
  after,
  alt,
  beforeLabel = "Before",
  afterLabel = "After",
}: Props) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 5;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      setPos((p) => Math.max(0, p - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      setPos((p) => Math.min(100, p + step));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPos(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setPos(100);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={trackRef}
      className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Image
        src={after}
        alt={`${alt} — ${afterLabel.toLowerCase()}`}
        fill
        sizes="(min-width: 768px) 55vw, 100vw"
        className="object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={before}
          alt=""
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className={`${glassPill} left-4`}>{beforeLabel}</span>
      <span className={`${glassPill} right-4`}>{afterLabel}</span>

      {/* Divider + glass drag handle */}
      <div
        className="absolute inset-y-0 z-[2]"
        style={{ left: `${pos}%` }}
      >
        <div
          className="absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white/80 shadow-[0_0_12px_rgba(21,35,63,0.35)]"
          aria-hidden
        />
        <button
          type="button"
          role="slider"
          aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-white/60 bg-[#9cc1ee]/35 text-[#15233f] shadow-[0_8px_24px_-8px_rgba(21,35,63,0.45)] backdrop-blur-md transition-transform hover:scale-105"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
            <path
              d="M5 1L1 6l4 5M11 1l4 5-4 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
