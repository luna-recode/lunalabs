"use client";

import Image from "next/image";
import Link from "next/link";
import { CalButton } from "./cal-button";
import { Brand } from "./brand";
import { SubscribeForm } from "./subscribe-form";
import { useTranslations } from "@/lib/i18n/context";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/bylunalabs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@bylunalabs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/bylunalabs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  const t = useTranslations();
  const navigate = [
    { href: "/services", label: t.nav.services },
    { href: "/case-studies", label: t.nav.works },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/blog", label: t.nav.blog },
    { href: "/about", label: t.nav.about },
    { href: "/book-audit", label: t.nav.bookAudit },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-[#243450] bg-[#0f1a30] text-bone [--accent-dim:#9cc1ee] [--accent:#9cc1ee] [--bone-dim:#aebbd2] [--bone:#ffffff] [--gray:#aebbd2] [--line:#243450]">
      <div className="mx-auto max-w-[1400px] px-[clamp(20px,5vw,64px)] py-[clamp(60px,10vh,100px)]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.3fr_1fr_0.8fr_1fr] lg:gap-12">
          <div className="col-span-2 flex flex-col gap-7 lg:col-span-1">
            <div>
              <p className="mb-5 font-serif text-[clamp(22px,2.6vw,30px)] font-medium leading-[1.1] tracking-tight">
                {t.footer.headingLine1}
                <br />
                <em className="italic">{t.footer.headingEmphasis}</em>
              </p>
              <CalButton className="btn-outline cursor-pointer rounded-[30px] px-5 py-[11px] text-[13px] font-medium transition-all hover:-translate-y-px">
                {t.common.bookConsult}
              </CalButton>
            </div>
            <Link href="/" className="w-fit transition-opacity hover:opacity-70">
              <Brand />
            </Link>
            <Image
              src="/shopify-logo.svg"
              alt="Shopify"
              width={98}
              height={28}
              className="self-start opacity-60"
            />
          </div>

          <div>
            <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-bone">
              {t.footer.whatWeBuild}
            </h2>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm font-light text-bone-dim transition-colors hover:text-accent"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-bone">
              {t.footer.navigate}
            </h2>
            <ul className="space-y-3">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-bone-dim transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-bone">
              {t.footer.getInTouch}
            </h2>
            <ul className="space-y-3">
              <li>
                {/* TODO(owner): confirm contact email */}
                <a
                  href="mailto:hello@bylunalabs.com"
                  className="text-sm font-light text-bone-dim transition-colors hover:text-accent"
                >
                  hello@bylunalabs.com
                </a>
              </li>
              <li className="text-sm font-light text-bone-dim">
                Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-[clamp(20px,5vw,64px)] py-10">
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              {t.footer.subscribe}
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="border-t border-line px-[clamp(20px,5vw,64px)] py-5">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            <span>{t.footer.copyright}</span>
            <div className="flex gap-5">
              <a href="/terms" className="transition-colors hover:text-accent">
                {t.footer.terms}
              </a>
              <a href="/accessibility" className="transition-colors hover:text-accent">
                {t.footer.accessibility}
              </a>
              <a href="/privacy" className="transition-colors hover:text-accent">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
