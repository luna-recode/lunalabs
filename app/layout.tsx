import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Luna Labs — Revenue Systems for Commerce Brands",
  description:
    "We turn the followers a fashion brand already has into buyers — recovery flows, social proof, and a checkout that doesn't leak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
