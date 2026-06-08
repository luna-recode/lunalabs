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

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[clamp(20px,5vw,64px)] transition-all duration-300 ${
        solid
          ? "border-b border-line bg-ink/92 py-[15px] backdrop-blur-[14px]"
          : "bg-gradient-to-b from-ink/85 via-ink/35 to-transparent py-5 backdrop-blur-[2px]"
      }`}
    >
      <Link href="/" className="transition-opacity hover:opacity-80">
        <Brand />
      </Link>

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

      <CalButton className="cursor-pointer whitespace-nowrap rounded-[30px] border-none bg-bone px-5 py-[11px] text-[13px] font-medium tracking-wide text-ink transition-all hover:-translate-y-px hover:bg-white">
        Book a revenue audit →
      </CalButton>
    </nav>
  );
}
