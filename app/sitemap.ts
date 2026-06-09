import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/content/blog-data";
import { getAllCaseStudySlugs } from "@/lib/content/case-studies-data";
import { getAllIndustrySlugs } from "@/lib/content/industries-data";
import { getAllLandingPageSlugs } from "@/lib/content/landing-pages-data";
import { getAllServiceSlugs } from "@/lib/content/services-data";
import { SITE } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    "",
    "/services",
    "/about",
    "/pricing",
    "/launch",
    "/contact",
    "/book-audit",
    "/case-studies",
    "/blog",
    "/terms",
    "/privacy",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseStudyPages = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages = getAllIndustrySlugs().map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const landingPages = getAllLandingPageSlugs().map((slug) => ({
    url: `${base}/lp/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...blogPages,
    ...industryPages,
    ...landingPages,
  ];
}
