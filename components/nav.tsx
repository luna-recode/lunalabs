"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { CalButton } from "./cal-button";

const links = [
  { href: "/#works", label: "Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[clamp(20px,5vw,64px)] transition-all duration-300 ${
          solid
            ? "border-b border-line bg-ink/92 py-[15px] backdrop-blur-[14px]"
            : "bg-gradient-to-b from-ink/85 via-ink/35 to-transparent py-5 backdrop-blur-[2px]"
        }`}
      >
        <Link href="/" className="transition-opacity hover:opacity-80" onClick={close}>
          <Brand />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-[38px] text-sm font-normal md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link relative text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <CalButton className="hidden cursor-pointer whitespace-nowrap rounded-[30px] border-none bg-bone px-5 py-[11px] text-[13px] font-medium tracking-wide text-ink transition-all hover:-translate-y-px hover:bg-white md:block">
          Book a revenue audit →
        </CalButton>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[201] -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
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
              className="font-serif text-[clamp(32px,9vw,44px)] font-medium tracking-tight text-bone transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <CalButton
              onClick={close}
              className="cursor-pointer rounded-[32px] border-none bg-bone px-[28px] py-[15px] text-sm font-medium text-ink transition-all active:scale-95"
            >
              Book a revenue audit →
            </CalButton>
          </div>
        </div>

        <p className="pb-10 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Revenue systems · Orange County, CA
        </p>
      </div>
    </>
  );
}
