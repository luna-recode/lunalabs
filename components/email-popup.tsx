"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { usePathname } from "next/navigation";
import { subscribeEmail, type SubscribeState } from "@/app/actions/subscribe";
import { useLocale, useTranslations } from "@/lib/i18n/context";

const POPUP_KEY = "luna_popup_seen";

export function EmailPopup() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);
  const [state, formAction, pending] = useActionState<SubscribeState, FormData>(
    subscribeEmail,
    null,
  );

  useEffect(() => {
    // Never show on the Studio route
    if (pathname?.startsWith("/studio")) return;
    // Already seen/dismissed — never show again
    if (localStorage.getItem(POPUP_KEY)) return;

    const trigger = () => {
      if (triggered.current) return;
      triggered.current = true;
      setVisible(true);
    };

    const timer = setTimeout(trigger, 10000);

    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct >= 0.5) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (state?.status !== "success") return;
    localStorage.setItem(POPUP_KEY, "1");
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, [state]);

  const dismiss = () => {
    localStorage.setItem(POPUP_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#15233f]/35 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        className="relative z-10 w-full max-w-[420px] animate-rise overflow-hidden rounded-2xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

        <button
          onClick={dismiss}
          aria-label={t.popup.close}
            className="absolute right-4 top-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-bone"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="p-8">
          <Image
            src="/luna-labs-moon.svg"
            alt=""
            aria-hidden
            width={40}
            height={40}
            className="mb-5"
          />

          {state?.status === "success" ? (
            <div className="py-4 text-center">
              <p className="font-serif text-[22px] font-medium">{t.popup.successTitle}</p>
              <p className="mt-2 text-sm font-light text-bone-dim">
                {t.popup.successBody}
              </p>
            </div>
          ) : (
            <>
              <h2
                id="popup-heading"
                className="font-serif text-[22px] font-medium leading-[1.15] tracking-tight"
              >
                {t.popup.title}
              </h2>
              <p className="mt-2.5 text-[14px] font-light leading-[1.6] text-bone-dim">
                {t.popup.body}
              </p>

              <form action={formAction} className="mt-6">
                <input type="hidden" name="locale" value={locale} />
                <input name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="absolute opacity-0 pointer-events-none" />
                <div className="flex overflow-hidden rounded-xl border border-line bg-surface transition-colors focus-within:border-accent/40">
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
                    aria-label={t.forms.subscribe}
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
                {t.popup.noSpam}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
