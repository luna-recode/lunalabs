type BrandProps = {
  size?: "default" | "sm";
};

export function Brand({ size = "default" }: BrandProps) {
  const markSize = size === "sm" ? "h-[28px] w-[28px]" : "h-[36px] w-[36px]";
  const textSize = size === "sm" ? "text-lg" : "text-2xl";
  const labelSize = size === "sm" ? "text-[9px]" : "text-[11px]";

  return (
    <div className={`flex items-center gap-2.5 font-serif tracking-wide ${textSize}`}>
      <img
        src="/luna-labs-moon.svg"
        alt="Luna Labs mark"
        className={`shrink-0 ${markSize}`}
      />
      Luna
      <b
        className={`self-center font-mono font-medium uppercase tracking-[0.34em] text-accent-dim ${labelSize}`}
      >
        Labs
      </b>
    </div>
  );
}
