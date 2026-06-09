import type { Metadata, Viewport } from "next";
import { StudioWrapper } from "./_studio-wrapper";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "Sanity Studio — Luna Labs",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioPage() {
  return <StudioWrapper />;
}
