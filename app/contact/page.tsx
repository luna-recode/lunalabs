import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/seo/schema";
import { SITE } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Luna Labs — Ecommerce CRO & Shopify Web Design",
  description:
    "Contact Luna Labs for conversion rate optimization, Shopify storefront design, and ecommerce revenue systems. We respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ]}
    >
      <PageHero
        eyebrow="Contact"
        h1="Let's talk about your store's revenue"
        intro="Tell us about your Shopify store and what you are trying to fix. We respond within 24 hours — or book a free consult for a faster conversation."
      >
        <Link
          href="/book-audit"
          className="btn-fill inline-block rounded-[32px] px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
        >
          Book a free revenue audit →
        </Link>
      </PageHero>

      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="mb-6 font-serif text-2xl font-medium tracking-tight">
              Get in touch
            </h2>
            <ul className="space-y-4 text-base font-light text-bone-dim">
              <li>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Email
                </span>
                <br />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Location
                </span>
                <br />
                {SITE.location}
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-8 shadow-[var(--card-shadow)]">
            <ContactForm variant="outlined" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
