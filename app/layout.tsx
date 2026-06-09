import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import { BtnShine } from "@/components/btn-shine";
import { EmailPopup } from "@/components/email-popup";
import { LocaleProvider } from "@/lib/i18n/context";
import { SkipLink } from "@/components/skip-link";
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
  metadataBase: new URL("https://bylunalabs.com"),
  title: "Luna Labs — Shopify Storefronts Built to Sell",
  description:
    "We design Shopify storefronts that look like your brand and are built to sell with recovery flows, trust signals, and friction-free checkout.",
  openGraph: {
    siteName: "Luna Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bylunalabs",
  },
  appleWebApp: {
    title: "Luna Labs",
  },
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
      <body className="grain antialiased">
        <LocaleProvider>
          <SkipLink />
          {children}
          <EmailPopup />
          <BtnShine />
        </LocaleProvider>
      </body>
    </html>
  );
}
