import { ScrollReveal } from "@/components/scroll-reveal";

type ContentSectionProps = {
  eyebrow?: string;
  heading: string;
  children: React.ReactNode;
  id?: string;
};

export function ContentSection({
  eyebrow,
  heading,
  children,
  id,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          {eyebrow && (
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              {eyebrow}
            </p>
          )}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="mb-6 max-w-[30ch] font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.06] tracking-tight"
          >
            {heading}
          </h2>
          <div className="max-w-[65ch] space-y-4 text-base font-light leading-[1.7] text-bone-dim">
            {children}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
