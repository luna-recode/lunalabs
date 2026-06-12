import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { BtnShine } from "@/components/btn-shine";
import { EmailPopup } from "@/components/email-popup";
import { JsonLd } from "@/components/seo/json-ld";
import { LocaleProvider } from "@/lib/i18n/context";
import { SkipLink } from "@/components/skip-link";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { SITE } from "@/lib/seo/site";
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
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Luna Labs — Conversion Rate Optimization & Ecommerce Web Design",
    template: "%s | Luna Labs",
  },
  description: SITE.description,
  keywords: [
    "conversion rate optimization",
    "ecommerce web design",
    "Shopify optimization",
    "landing page performance",
    "ecommerce revenue systems",
  ],
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
  },
  appleWebApp: {
    title: SITE.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Analytics 4. The Measurement ID is a public value (it ships to the
  // browser), so it's safe to commit as the default; NEXT_PUBLIC_GA_ID still
  // overrides it. Only load it in real production so local dev and Vercel
  // preview deploys stay out of the production analytics.
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-5GXLY62ZQZ";
  const enableGA =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview";

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="grain antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LocaleProvider>
          <SkipLink />
          {children}
          <EmailPopup />
          <BtnShine />
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      {enableGA && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
