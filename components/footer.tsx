import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3.5 border-t border-line px-[clamp(20px,5vw,64px)] py-[34px] text-xs text-muted">
      <Brand size="sm" />
      <span className="font-mono tracking-widest">
        © 2026 · REVENUE SYSTEMS · ORANGE COUNTY, CA
      </span>
    </footer>
  );
}
