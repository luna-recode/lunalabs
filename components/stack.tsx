import { ScrollReveal } from "./scroll-reveal";

const tools = [
  {
    name: "Shopify",
    showName: true,
    role: "The storefront. Custom-designed, mobile-first, built to not lose the sale.",
    logo: "/shopify-icon.svg",
    logoClass: "h-10 w-auto",
    filterClass: "",
  },
  {
    name: "Klaviyo",
    showName: true,
    role: "The recovery layer. Welcome, abandoned-cart & post-purchase flows that print money.",
    logo: "/klaviyo-icon.svg",
    logoClass: "h-10 w-auto",
    filterClass: "invert",
  },
  {
    name: "Google Analytics",
    showName: true,
    role: "The proof. GA4 + clear reporting so results are visible from week one.",
    logo: "/google_analytics-icon.svg",
    logoClass: "h-10 w-auto",
    filterClass: "",
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
            className={`flex flex-col items-center gap-3 px-7 py-[clamp(24px,4vw,40px)] text-center transition-colors hover:bg-bone/[0.04] ${
              i < tools.length - 1 ? "border-b border-line md:border-b-0 md:border-r md:border-line" : ""
            }`}
          >
            <div className="flex h-[52px] items-center justify-center grayscale transition-[filter] duration-300 hover:grayscale-0">
              <img
                src={tool.logo}
                alt={tool.name}
                className={`${tool.logoClass} ${tool.filterClass}`}
              />
            </div>
            {tool.showName && (
              <span className="font-serif text-[21px] font-medium tracking-wide">{tool.name}</span>
            )}
            <span className="max-w-[24ch] text-[13px] font-light leading-normal text-muted">
              {tool.role}
            </span>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
