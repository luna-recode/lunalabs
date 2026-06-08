"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { subscribeEmail, type SubscribeState } from "@/app/actions/subscribe";

const STORAGE_KEY = "ll_popup_v1";
const COOLDOWN_DAYS = 7;

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);
  const [state, formAction, pending] = useActionState<SubscribeState, FormData>(
    subscribeEmail,
    null,
  );

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const daysSince = (Date.now() - Number(stored)) / 86_400_000;
      if (daysSince < COOLDOWN_DAYS) return;
    }

    const trigger = () => {
      if (triggered.current) return;
      triggered.current = true;
      setVisible(true);
    };

    const timer = setTimeout(trigger, 4000);

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct >= 0.4) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Auto-close 2.5 s after success
  useEffect(() => {
    if (state?.status !== "success") return;
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, [state]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="relative z-10 w-full max-w-[420px] animate-rise overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl"
      >
        {/* Gold accent hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-bone/40 hover:text-bone"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="p-8">
          {/* Moon mark */}
          <img
            src="/luna-labs-moon.svg"
            alt=""
            aria-hidden
            className="mb-5 h-10 w-10"
          />

          {state?.status === "success" ? (
            <div className="py-4 text-center">
              <p className="font-serif text-[22px] font-medium">You&apos;re in. ✦</p>
              <p className="mt-2 text-sm font-light text-bone-dim">
                We&apos;ll be in your inbox soon — no fluff, just revenue signals.
              </p>
            </div>
          ) : (
            <>
              <h2
                id="popup-heading"
                className="font-serif text-[22px] font-medium leading-[1.15] tracking-tight"
              >
                Get more revenue from the store you already have.
              </h2>
              <p className="mt-2.5 text-[14px] font-light leading-[1.6] text-bone-dim">
                We send occasional breakdowns on Shopify, email flows, and conversion — the exact moves our clients use. No pitch decks. Unsubscribe any time.
              </p>

              <form action={formAction} className="mt-6">
                <div className="flex overflow-hidden rounded-xl border border-line bg-bone/[0.04] transition-colors focus-within:border-bone/30">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-muted focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={pending}
                    className="shrink-0 cursor-pointer bg-transparent px-4 text-muted transition-colors hover:text-bone disabled:opacity-40"
                    aria-label="Subscribe"
                  >
                    {pending ? (
                      <span className="block h-3.5 w-3.5 animate-spin rounded-full border border-muted border-t-bone" />
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>

                {state?.status === "error" && (
                  <p className="mt-2 text-center font-mono text-[10px] text-red-400">
                    {state.message}
                  </p>
                )}
              </form>

              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                No spam · Unsubscribe any time
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
