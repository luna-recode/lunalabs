import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { DeviceFrame } from "@/components/device-frame";
import type { CaseStudy } from "@/lib/content/case-studies-data";

function displayUrl(liveUrl?: string) {
  if (!liveUrl) return undefined;
  return liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function FeaturedCaseStudy({ study }: { study: CaseStudy }) {
  const hasSlider = Boolean(study.beforeImage && study.afterImage);

  return (
    <article
      aria-labelledby={`featured-${study.slug}`}
      className="grid grid-cols-1 items-center gap-[clamp(36px,6vw,72px)] md:grid-cols-[0.95fr_1.05fr]"
    >
      <div>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {study.tier && (
            <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-dim">
              {study.tier}
            </span>
          )}
          {study.publishedAt && (
            <time
              dateTime={study.publishedAt}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            >
              {new Date(study.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </time>
          )}
        </div>

        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {study.location}
        </p>
        <h2
          id={`featured-${study.slug}`}
          className="font-serif text-[clamp(30px,4.2vw,54px)] font-medium leading-[1.06] tracking-tight"
        >
          {study.client}
        </h2>
        <p className="mt-5 max-w-[44ch] text-base font-light leading-[1.65] text-bone-dim">
          {study.tagline}
        </p>

        {study.metrics && study.metrics.length > 0 && (
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {study.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-line bg-card px-4 py-3 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.25)]"
              >
                <p className="font-serif text-[clamp(20px,2.4vw,28px)] font-medium tracking-tight text-accent">
                  {m.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={`/case-studies/${study.slug}`}
            className="btn-outline cursor-pointer rounded-[32px] px-[26px] py-[13px] text-sm font-medium transition-all hover:-translate-y-0.5"
          >
            View case study →
          </Link>
          {study.liveUrl && (
            <Link
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
            >
              Live store
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2 10L10 2M10 2H4M10 2v6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <div>
        {hasSlider ? (
          <BeforeAfterSlider
            before={study.beforeImage!}
            after={study.afterImage!}
            alt={`${study.client} storefront`}
          />
        ) : study.image ? (
          <DeviceFrame url={displayUrl(study.liveUrl)}>
            <div className="relative aspect-[16/10] bg-surface">
              <Image
                src={study.image}
                alt={`${study.client} storefront`}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </DeviceFrame>
        ) : (
          <DeviceFrame url={displayUrl(study.liveUrl)}>
            <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_35%_30%,rgba(156,193,238,0.18),transparent_55%),linear-gradient(160deg,rgba(239,216,154,0.10),transparent_50%)]">
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <span className="block h-3 w-2/3 rounded-full bg-bone/10" />
                <span className="block h-3 w-1/2 rounded-full bg-bone/8" />
                <span className="block h-16 rounded-lg border border-line bg-ink/20" />
                <span className="block h-8 w-1/3 rounded-full bg-accent/15" />
              </div>
            </div>
          </DeviceFrame>
        )}
      </div>
    </article>
  );
}
