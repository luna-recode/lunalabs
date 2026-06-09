import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Luna Labs — Revenue Systems for Commerce Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const moonSvg = readFileSync(join(process.cwd(), "public/luna-labs-moon.svg"));
  const moonSrc = `data:image/svg+xml;base64,${moonSvg.toString("base64")}`;

  const fontNormal = readFileSync(join(process.cwd(), "public/fonts/cormorant-medium.ttf"));
  const fontItalic = readFileSync(join(process.cwd(), "public/fonts/cormorant-medium-italic.ttf"));

  const fonts = [
    { name: "Cormorant", data: fontNormal.buffer as ArrayBuffer, weight: 500 as const, style: "normal" as const },
    { name: "Cormorant", data: fontItalic.buffer as ArrayBuffer, weight: 500 as const, style: "italic" as const },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "#f4f8fd",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Warm radial glow upper-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: 280,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,99,214,0.16) 0%, rgba(47,99,214,0) 70%)",
            display: "flex",
          }}
        />

        {/* Large decorative moon — right side, faint */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 60,
            opacity: 0.1,
            display: "flex",
          }}
        >
          <img src={moonSrc} width={480} height={480} alt="" />
        </div>

        {/* Thin top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(198,161,78,0.55), transparent)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 72px",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Brand wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={moonSrc} width={38} height={38} alt="" />
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span
                style={{
                  fontFamily: "Cormorant, Georgia, serif",
                  fontSize: 26,
                  fontWeight: 500,
                  color: "#15233f",
                  lineHeight: 1,
                }}
              >
                Luna
              </span>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: "#21408f",
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Labs
              </span>
            </div>
          </div>

          {/* Hero headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: "#21408f",
                  display: "flex",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  color: "#21408f",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Revenue systems · Los Angeles, CA
              </span>
            </div>

            {/* Title */}
            <span
              style={{
                fontFamily: "Cormorant, Georgia, serif",
                fontSize: 98,
                fontWeight: 500,
                color: "#15233f",
                lineHeight: 0.93,
                letterSpacing: "-0.02em",
              }}
            >
              Your brand, online
            </span>
            <span
              style={{
                fontFamily: "Cormorant, Georgia, serif",
                fontSize: 98,
                fontWeight: 500,
                fontStyle: "italic",
                color: "#2f63d6",
                lineHeight: 0.93,
                letterSpacing: "-0.02em",
              }}
            >
              and built to sell.
            </span>
          </div>

          {/* Bottom — domain */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                color: "#445574",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              bylunalabs.com
            </span>
            <div
              style={{
                width: 44,
                height: 1,
                background: "rgba(198,161,78,0.35)",
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
