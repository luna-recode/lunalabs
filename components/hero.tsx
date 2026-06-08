import Link from "next/link";
import { CalButton } from "./cal-button";

export function Hero() {
  return (
    <header className="relative flex min-h-screen items-end overflow-hidden">
      <div className="hero-bg absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/25 via-ink/15 to-ink/82" />

      <div className="relative z-[3] mx-auto w-full max-w-[1500px] px-[clamp(20px,5vw,64px)] pb-[clamp(56px,9vh,96px)]">
        <div className="animate-rise-delay-5 mb-[26px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-bone-dim opacity-0">
          <span className="h-px w-[34px] bg-bone-dim" />
          Revenue systems for commerce brands
        </div>

        <h1 className="max-w-[16ch] font-serif text-[clamp(40px,7.4vw,108px)] font-medium leading-[0.98] tracking-tight">
          <span className="animate-rise-delay-1 block opacity-0">We don&apos;t sell</span>
          <span className="animate-rise-delay-2 block italic opacity-0">redesigns.</span>
        </h1>

        <p className="animate-rise-delay-3 mt-7 max-w-[46ch] text-[clamp(15px,1.5vw,18px)] font-light leading-[1.55] text-bone-dim opacity-0">
          We turn the followers a fashion brand already has into buyers — recovery
          flows, social proof, and a checkout that doesn&apos;t leak. Looks are table
          stakes. Revenue is the job.
        </p>

        <div className="animate-rise-delay-4 mt-[38px] flex flex-wrap gap-3.5 opacity-0">
          <CalButton className="cursor-pointer rounded-[32px] border-none bg-bone px-[26px] py-[15px] text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-white">
            See what we&apos;d fix →
          </CalButton>
          <Link
            href="/#works"
            className="cursor-pointer rounded-[32px] border border-line bg-transparent px-[26px] py-[15px] text-sm font-normal text-bone transition-all hover:border-bone hover:bg-bone/[0.06]"
          >
            View the work
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
        <span>Scroll</span>
        <span className="scroll-bar h-[34px] w-px bg-gradient-to-b from-muted to-transparent" />
      </div>
    </header>
  );
}
