"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";
import type { Locale } from "@/lib/i18n/types";

export function LocaleSelector() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.language.label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation();
          setOpen((value) => !value);
        }}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-bone/[0.04] text-bone-dim transition-colors hover:border-accent/40 hover:bg-accent/[0.08] hover:text-bone"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute right-0 top-[calc(100%+8px)] z-[250] min-w-[148px] overflow-hidden rounded-xl border border-line bg-ink-2 py-1 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          {LOCALES.map((item) => {
            const selected = locale === item.code;
            return (
              <li key={item.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => selectLocale(item.code)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-bone/[0.06] ${
                    selected ? "text-accent" : "text-bone-dim"
                  }`}
                >
                  <span>{item.nativeLabel}</span>
                  {selected && (
                    <span aria-hidden className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      ✓
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
