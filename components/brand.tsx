import Image from "next/image";

type BrandProps = {
  size?: "default" | "sm";
};

export function Brand({ size = "default" }: BrandProps) {
  const px = size === "sm" ? 28 : 36;
  const textSize = size === "sm" ? "text-lg" : "text-2xl";
  const labelSize = size === "sm" ? "text-[9px]" : "text-[11px]";

  return (
    <div className={`flex items-center gap-2.5 font-serif tracking-wide ${textSize}`}>
      <Image
        src="/luna-labs-moon.svg"
        alt="Luna Labs mark"
        width={px}
        height={px}
        className="shrink-0"
        priority
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
