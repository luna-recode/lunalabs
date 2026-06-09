"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

export function GooglePresence() {
  return (
    <section
      id="google-presence"
      aria-labelledby="google-presence-heading"
      className="relative border-y border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
        <ScrollReveal>
          <h2
            id="google-presence-heading"
            className="mb-6 font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            Get found, not just built.
          </h2>
          <p className="max-w-[48ch] text-base font-light leading-[1.65] text-bone-dim">
            A great website that no one can find isn&apos;t doing its job. Every Launch build
            includes a Google Business Profile we set up and optimize for you — so when someone
            nearby searches for what you do, you show up on Google and Maps with your hours,
            photos, and a way to reach you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-lg border border-line bg-card p-8 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.4)]">
            <ul className="space-y-4">
              {[
                "Profile set up with accurate hours & location",
                "Photos and business details optimized",
                "Linked to your new website",
                "Ready for customers searching nearby",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="font-serif text-[clamp(18px,2vw,24px)] font-medium leading-[1.2] tracking-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mx-auto mt-[clamp(40px,7vh,64px)] max-w-[1200px]">
        <p className="border-t border-line pt-8 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Included in every build — Google Business Profile · Online booking
          (Cal.com) · GA4 analytics · On-page SEO
        </p>
      </ScrollReveal>
    </section>
  );
}
