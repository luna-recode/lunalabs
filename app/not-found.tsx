import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex min-h-screen flex-col">
        <section className="flex flex-1 items-center px-[clamp(20px,5vw,64px)] pb-[clamp(64px,10vh,100px)] pt-[clamp(130px,18vh,180px)]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              404
            </div>
            <h1 className="max-w-[18ch] font-serif text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.04] tracking-tight">
              This page{" "}
              <em className="italic text-accent">doesn&apos;t exist.</em>
            </h1>
            <p className="mt-6 max-w-[44ch] text-[clamp(15px,1.5vw,17px)] font-light leading-[1.65] text-bone-dim">
              The page you&apos;re looking for has moved, been removed, or never
              existed. Let&apos;s get you back on track.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="btn-fill rounded-[32px] border-none px-[28px] py-[15px] text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                Back to home
              </Link>
              <Link
                href="/case-studies"
                className="rounded-[32px] border border-line px-[28px] py-[15px] text-sm font-normal text-bone transition-all hover:border-accent hover:bg-accent/[0.06]"
              >
                View our work →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
