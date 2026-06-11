import { LunaLabsLogo } from "./luna-labs-logo";

type BrandProps = {
  size?: "default" | "sm";
  variant?: "default" | "light";
};

export function Brand({ size = "default", variant = "default" }: BrandProps) {
  const height = size === "sm" ? 28 : 36;
  const colorClass = variant === "light" ? "text-white" : "text-bone";

  return <LunaLabsLogo className={`shrink-0 ${colorClass}`} height={height} />;
}
