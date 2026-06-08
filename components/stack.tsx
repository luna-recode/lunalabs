import { ScrollReveal } from "./scroll-reveal";

const tools = [
  {
    name: "Shopify",
    role: "The storefront. Custom-designed, mobile-first, built to not lose the sale.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M15.3 5.1c-.1 0-.3 0-.4.1l-1 .3c-.4-1.1-1-1.9-1.9-1.9h-.2C11.5 3.2 11.3 3 11 3c-2 0-3 2.6-3.3 3.9l-1.4.4c-.4.1-.5.2-.5.6L4.6 19.6 14 21l5.1-1.1S15.4 5.2 15.3 5.1zm-2.5.7-1.1.3c0-.2 0-.4 0-.7 0-.6-.1-1.1-.2-1.5.6.1 1 .9 1.3 1.9zM11 4.1c.1 0 .3.1.4.2-.4.2-.8.7-1 1.6-.3.1-.6.2-.9.3.3-1 .9-2.1 1.5-2.1zM10.8 11l.6 2.2s-.7-.4-1.5-.4c-1.2 0-1.3.8-1.3 1 0 1.1 2.8 1.5 2.8 4 0 1.9-1.2 3.2-2.9 3.2-2 0-3-1.3-3-1.3l.5-1.8s1 .9 1.9.9c.6 0 .8-.4.8-.8 0-1.4-2.3-1.5-2.3-3.8 0-1.9 1.3-3.7 4.2-3.9l.2.5z" />
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    role: "The recovery layer. Welcome, abandoned-cart & post-purchase flows that print money.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    role: "The proof. GA4 + clear reporting so results are visible from week one.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="3" y="11" width="4.2" height="10" rx="1.4" />
        <rect x="10" y="6" width="4.2" height="15" rx="1.4" opacity="0.75" />
        <rect x="17" y="3" width="4.2" height="18" rx="1.4" opacity="0.5" />
      </svg>
    ),
  },
];

export function Stack() {
  return (
    <section
      id="works"
      className="relative border-y border-line px-[clamp(20px,5vw,64px)] py-[clamp(70px,11vh,120px)]"
    >
      <ScrollReveal className="mb-[clamp(46px,7vh,72px)] flex flex-col items-center gap-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          The engine we build on
        </span>
        <h3 className="max-w-[18ch] font-serif text-[clamp(24px,3.4vw,42px)] font-medium leading-[1.12]">
          Built on the tools that actually move revenue.
        </h3>
      </ScrollReveal>

      <ScrollReveal className="mx-auto grid max-w-[1100px] grid-cols-1 overflow-hidden rounded-md border border-line md:grid-cols-3">
        {tools.map((tool, i) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center gap-[18px] px-7 py-[clamp(34px,6vw,58px)] text-center transition-colors hover:bg-bone/[0.04] ${
              i < tools.length - 1 ? "border-b border-line md:border-b-0 md:border-r md:border-line" : ""
            }`}
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center text-bone grayscale transition-[filter] hover:grayscale-0">
              {tool.icon}
            </div>
            <span className="font-serif text-[21px] font-medium tracking-wide">{tool.name}</span>
            <span className="max-w-[24ch] text-[13px] font-light leading-normal text-muted">
              {tool.role}
            </span>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
