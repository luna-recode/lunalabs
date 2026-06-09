import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

type InternalLink = {
  href: string;
  label: string;
  description?: string;
};

type InternalLinksProps = {
  heading: string;
  links: InternalLink[];
};

export function InternalLinks({ heading, links }: InternalLinksProps) {
  return (
    <section
      aria-labelledby="related-links-heading"
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <h2
            id="related-links-heading"
            className="mb-6 font-serif text-[clamp(24px,3.5vw,40px)] font-medium leading-[1.06] tracking-tight"
          >
            {heading}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block rounded-lg border border-line bg-card p-5 transition-colors hover:border-accent/40 hover:bg-surface/50"
                >
                  <span className="font-serif text-lg font-medium tracking-tight text-bone transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  {link.description && (
                    <p className="mt-2 text-sm font-light leading-[1.6] text-bone-dim">
                      {link.description}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
