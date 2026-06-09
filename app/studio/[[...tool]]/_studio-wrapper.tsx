"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(() => import("./_studio-client"), { ssr: false });

export function StudioWrapper() {
  return <Studio />;
}
