import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

type CtaBlockProps = {
  heading: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBlock({
  heading,
  body,
  primaryHref = "/book-audit",
  primaryLabel = "Book a free revenue audit →",
  secondaryHref,
  secondaryLabel,
}: CtaBlockProps) {
  return (
    <section
      aria-labelledby="cta-block-heading"
      className="border-t border-line bg-surface/30 px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
    >
      <div className="mx-auto max-w-[800px] text-center">
        <ScrollReveal>
          <h2
            id="cta-block-heading"
            className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-base font-light leading-[1.65] text-bone-dim">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className="btn-fill rounded-[32px] px-[26px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="rounded-[32px] border border-line px-[26px] py-[15px] text-sm font-normal text-bone transition-all hover:border-accent hover:bg-accent/[0.06]"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
