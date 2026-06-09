"use client";

import { CalButton } from "@/components/cal-button";
import { ScrollReveal } from "@/components/scroll-reveal";

const audiences = [
  {
    id: "local-services",
    heading: "Local services",
    body: "For the trades, salons, studios, and service businesses that earn on reputation — a site that looks as professional as your work, ranks in local search, and turns visitors into booked jobs.",
    features: [
      "Click-to-call and directions front and center",
      "Service pages that rank in local search",
      "Inquiry form that reaches you instantly",
      "Reviews and photos of your work",
    ],
    variant: "default" as const,
  },
  {
    id: "b2b-professional",
    heading: "B2B & professional services",
    body: "For consultants, firms, and advisors who win on credibility — a sharp, fast presence that builds trust on first impression, with booking built in so qualified leads land straight on your calendar.",
    features: [
      "Credentials and case work presented cleanly",
      "Online booking straight to your calendar",
      "Fast loads and a polished first impression",
      "Contact paths for referrals and cold visitors",
    ],
    variant: "surface" as const,
  },
  {
    id: "restaurants-cafes",
    heading: "Restaurants & cafés",
    body: "For the spots people find on their phone — hours, location, one-tap contact, your menu presented cleanly, and a Google profile so you show up on Maps when someone nearby is deciding where to eat.",
    features: [
      "Menu presented cleanly on mobile",
      "Hours, location, and one-tap call & directions",
      "Google Maps presence for nearby searches",
      "Photos that make people want to come in",
    ],
    variant: "default" as const,
  },
];

export function AudienceSections() {
  return (
    <>
      {audiences.map((audience) => (
        <section
          key={audience.id}
          id={audience.id}
          aria-labelledby={`${audience.id}-heading`}
          className={
            audience.variant === "surface"
              ? "relative border-y border-line bg-surface px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
              : "relative px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
          }
        >
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] md:grid-cols-[1.1fr_1fr]">
            <ScrollReveal>
              <h2
                id={`${audience.id}-heading`}
                className="mb-6 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
              >
                {audience.heading}
              </h2>
              <p className="max-w-[58ch] text-base font-light leading-[1.65] text-bone-dim">
                {audience.body}
              </p>
              <CalButton className="mt-7 inline-flex cursor-pointer items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70">
                Book a free consult
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CalButton>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-2xl border border-line bg-card p-2 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.3)]">
                <ul className="divide-y divide-line">
                  {audience.features.map((item) => (
                    <li key={item} className="flex items-start gap-4 px-5 py-4">
                      <span
                        className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent/12"
                        aria-hidden
                      >
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" className="text-accent">
                          <path
                            d="M1 3.5l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[15px] font-light leading-[1.5] text-bone-dim">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}
