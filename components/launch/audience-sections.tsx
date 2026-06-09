"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const audiences = [
  {
    id: "local-services",
    heading: "Local services",
    body: "For the trades, salons, studios, and service businesses that earn on reputation — a site that looks as professional as your work, ranks in local search, and turns visitors into booked jobs. Click-to-call, directions, and inquiry forms front and center.",
    variant: "surface" as const,
  },
  {
    id: "b2b-professional",
    heading: "B2B & professional services",
    body: "For consultants, firms, and advisors who win on credibility — a sharp, fast presence that builds trust on first impression, with booking built in so qualified leads land straight on your calendar.",
    variant: "default" as const,
  },
  {
    id: "restaurants-cafes",
    heading: "Restaurants & cafés",
    body: "For the spots people find on their phone — hours, location, one-tap call and directions, your menu presented cleanly, and a Google profile so you show up on Maps when someone nearby is deciding where to eat.",
    variant: "surface" as const,
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
          <ScrollReveal className="mx-auto max-w-[1100px]">
            <h2
              id={`${audience.id}-heading`}
              className="mb-6 font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
            >
              {audience.heading}
            </h2>
            <p className="max-w-[58ch] text-base font-light leading-[1.65] text-bone-dim">
              {audience.body}
            </p>
          </ScrollReveal>
        </section>
      ))}
    </>
  );
}
