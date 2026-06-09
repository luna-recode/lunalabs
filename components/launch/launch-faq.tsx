import { Accordion } from "@/components/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";

export const launchFaqs = [
  {
    question: "How much does it cost?",
    answer:
      "Launch builds start at $1,200 as a one-time, fixed price — you know the exact number before we start, and there is no hourly billing or subscription. If your business needs more (a larger site, ecommerce, ongoing optimization), we will tell you upfront and point you to the right tier.",
  },
  {
    question: "How long does it take?",
    answer:
      "About a week from our first call to your site being live. Day 1 is a free consult, days 2–3 are design, days 4–6 are the build, and day 7 we connect your domain, publish your Google Business Profile, and launch.",
  },
  {
    question: "Do I need to write the content?",
    answer:
      "No. We shape the content with you — a short call and a questionnaire give us what we need, and we write the pages in your voice. You review everything before launch. If you have photos of your work, your space, or your team, those make the site noticeably stronger.",
  },
  {
    question: "I already have a domain or an old website. Can you work with that?",
    answer:
      "Yes. If you own a domain, we connect it to the new site — nothing to re-buy. If you have an existing website, we migrate what is worth keeping and redirect the old pages so you do not lose any Google ranking you have built up.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The site is yours — you own the domain, the code, and the content. If you want help after launch, our care plan covers updates, content changes, and monitoring for a flat monthly rate, but it is optional and there is no lock-in.",
  },
  {
    question: "Will I show up on Google?",
    answer:
      "Every build includes a Google Business Profile set up and optimized — that is what puts you on Google Maps and local search — plus on-page SEO on the site itself. Rankings grow over weeks, not days, but the foundation is done right from day one.",
  },
];

export function LaunchFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="launch-faq-heading"
      className="relative border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(80px,13vh,140px)]"
    >
      <div className="mx-auto max-w-[800px]">
        <ScrollReveal>
          <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Common questions
          </p>
          <h2
            id="launch-faq-heading"
            className="mb-[clamp(36px,6vh,56px)] text-center font-serif text-[clamp(28px,4vw,52px)] font-medium leading-[1.06] tracking-tight"
          >
            Before you ask.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <Accordion items={launchFaqs} />
        </ScrollReveal>
      </div>
    </section>
  );
}
