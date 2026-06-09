"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import { CalButton } from "./cal-button";
import { LocaleSelector } from "./locale-selector";
import { useTranslations } from "@/lib/i18n/context";

export function Nav() {
  const t = useTranslations();
  const links = [
    { href: "/services", label: t.nav.services },
    { href: "/case-studies", label: t.nav.works },
    { href: "/launch", label: t.nav.websites },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[clamp(20px,5vw,64px)] transition-all duration-300 ${
          solid
            ? "border-b border-line bg-ink/92 py-[15px] backdrop-blur-[14px]"
            : "bg-gradient-to-b from-ink/85 via-ink/35 to-transparent py-5 backdrop-blur-[2px]"
        }`}
      >
        <Link href="/" className="transition-opacity hover:opacity-80" onClick={close}>
          <Brand />
        </Link>

        <div className="hidden items-center gap-[38px] text-sm font-normal md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link relative text-bone-dim transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <div className="mr-4">
            <LocaleSelector />
          </div>
          <CalButton className="btn-fill cursor-pointer whitespace-nowrap rounded-[30px] border-none px-5 py-[11px] text-[13px] font-medium tracking-wide transition-all hover:-translate-y-px">
            {t.common.bookConsult}
          </CalButton>
        </div>

        <div className="relative z-[201] flex items-center gap-3 md:hidden">
          <LocaleSelector />
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px]"
          >
          <span
            aria-hidden
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
        className={`fixed inset-0 z-[199] flex flex-col bg-ink/[0.97] backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              tabIndex={menuOpen ? 0 : -1}
              className="font-serif text-[clamp(32px,9vw,44px)] font-medium tracking-tight text-bone transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <CalButton
              onClick={close}
              className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all active:scale-95"
            >
              {t.common.bookConsult}
            </CalButton>
          </div>
        </div>

        <p className="pb-10 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          {t.nav.mobileTagline}
        </p>
      </div>
    </>
  );
}
