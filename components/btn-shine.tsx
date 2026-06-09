"use client";

import { useEffect } from "react";

export function BtnShine() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const btn = (e.target as Element).closest<HTMLElement>(".btn-fill");
      if (!btn) return;
      const { left, width } = btn.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      btn.style.setProperty("--shine-x", `${x}%`);
    };

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
