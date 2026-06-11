import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.119"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bylunalabs.com" }],
        destination: "https://www.bylunalabs.com/:path*",
        permanent: true,
      },
      {
        source: "/works",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/services/conversion-websites",
        destination: "/services/build",
        permanent: true,
      },
      {
        source: "/services/website-redesign",
        destination: "/services/design",
        permanent: true,
      },
      {
        source: "/services/landing-page-design",
        destination: "/services/design",
        permanent: true,
      },
      {
        source: "/services/ecommerce-optimization",
        destination: "/services/conversion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
