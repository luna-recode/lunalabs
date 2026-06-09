import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/works",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
