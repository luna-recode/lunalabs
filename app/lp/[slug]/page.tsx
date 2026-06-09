import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalButton } from "@/components/cal-button";
import { FaqSection } from "@/components/seo/faq-section";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import {
  getAllLandingPageSlugs,
  getLandingPage,
} from "@/lib/content/landing-pages-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
} from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllLandingPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/lp/${slug}`,
  });
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        serviceSchema({
          name: page.title,
          description: page.metaDescription,
          path: `/lp/${slug}`,
          serviceType: "Consultation",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.title, path: `/lp/${slug}` },
        ]),
        faqSchema(page.faqs),
      ]}
    >
      <PageHero h1={page.h1} intro={page.intro}>
        <CalButton className="btn-fill cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
          {page.cta} →
        </CalButton>
      </PageHero>

      <section className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-tight">
            What you get
          </h2>
          <ul className="space-y-3">
            {page.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-lg border border-line bg-card px-5 py-4"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-sm font-light text-bone-dim">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-tight">
            How it works
          </h2>
          <ol className="space-y-4">
            {page.process.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-lg border border-line bg-card px-5 py-4"
              >
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-light text-bone-dim">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-tight">
            {page.cta}
          </h2>
          <CalButton className="btn-fill mt-8 cursor-pointer rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5">
            Schedule now →
          </CalButton>
        </div>
      </section>

      <FaqSection faqs={page.faqs} />
    </PageShell>
  );
}
