type BrandProps = {
  size?: "default" | "sm";
};

export function Brand({ size = "default" }: BrandProps) {
  const markSize = size === "sm" ? "h-[18px] w-[18px]" : "h-[22px] w-[22px]";
  const textSize = size === "sm" ? "text-base" : "text-xl";
  const labelSize = size === "sm" ? "text-[9px]" : "text-[11px]";

  return (
    <div className={`flex items-center gap-2 font-serif tracking-wide ${textSize}`}>
      <span
        className={`brand-mark shrink-0 rounded-full border-[1.5px] border-bone ${markSize}`}
      />
      Luna&nbsp;
      <b
        className={`self-center font-mono font-medium uppercase tracking-[0.34em] text-bone-dim ${labelSize}`}
      >
        Recode
      </b>
    </div>
  );
}
