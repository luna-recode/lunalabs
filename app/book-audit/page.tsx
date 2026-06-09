import type { Metadata } from "next";
import Link from "next/link";
import { CalButton } from "@/components/cal-button";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/seo/faq-section";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Book a Free Revenue Audit — Shopify Conversion Assessment",
  description:
    "Book a free 15-minute revenue audit with Luna Labs. We identify conversion leaks in your Shopify store and map what to build — no pitch deck, no pressure.",
  path: "/book-audit",
});

const auditFaqs = [
  {
    question: "What is a revenue audit?",
    answer:
      "A revenue audit is a 15-minute review of your Shopify storefront, checkout flow, and recovery systems. We identify where revenue is leaking and recommend the specific build to fix it.",
  },
  {
    question: "Is the audit free?",
    answer:
      "Yes. No cost, no obligation. The audit helps us determine if Luna Labs is the right fit and which service tier will deliver the highest impact.",
  },
  {
    question: "What should I prepare?",
    answer:
      "Have your Shopify store URL ready and any analytics you can share. We will review your live store during the call and follow up with recommendations within 24 hours.",
  },
];

export default function BookAuditPage() {
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        serviceSchema({
          name: "Free Revenue Audit",
          description:
            "Free 15-minute Shopify revenue audit identifying conversion leaks and build recommendations.",
          path: "/book-audit",
          serviceType: "Consultation",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book Audit", path: "/book-audit" },
        ]),
        faqSchema(auditFaqs),
      ]}
    >
      <PageHero
        eyebrow="Free audit"
        h1="Book a free revenue audit for your Shopify store"
        intro="A 15-minute call where we review your storefront, checkout, and recovery systems — then map exactly what to build. No pitch deck, no pressure."
      >
        <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
          Schedule your audit →
        </CalButton>
      </PageHero>

      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-8 font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-tight">
            What we cover in the audit
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Product page conversion assessment",
              "Checkout friction analysis",
              "Abandoned-cart recovery gaps",
              "Mobile performance review",
              "Build tier recommendation",
              "Prioritized action plan",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-line bg-card px-5 py-4"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-sm font-light text-bone-dim">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-light text-bone-dim">
            Prefer to start with a form? Fill it out below and we will reach out
            within 24 hours. Or explore our{" "}
            <Link
              href="/services"
              className="text-accent underline-offset-2 hover:underline"
            >
              services
            </Link>{" "}
            and{" "}
            <Link
              href="/pricing"
              className="text-accent underline-offset-2 hover:underline"
            >
              pricing
            </Link>{" "}
            first.
          </p>
        </div>
      </section>

      <section className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-6 text-center font-serif text-2xl font-medium tracking-tight">
            Or send us a message
          </h2>
          <div className="rounded-2xl border border-line bg-card p-8 shadow-[var(--card-shadow)]">
            <ContactForm variant="outlined" />
          </div>
        </div>
      </section>

      <FaqSection faqs={auditFaqs} />
    </PageShell>
  );
}
