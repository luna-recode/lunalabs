import type { MetadataRoute } from "next";
import { fetchAllBlogSlugs } from "@/lib/content/blog-data";
import { fetchAllCaseStudySlugs } from "@/lib/content/case-studies-data";
import { getAllIndustrySlugs } from "@/lib/content/industries-data";
import { getAllLandingPageSlugs } from "@/lib/content/landing-pages-data";
import { fetchAllServiceSlugs } from "@/lib/content/services-data";
import { SITE } from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url;
  const now = new Date();

  // Fetch Sanity-sourced slugs in parallel with the static ones
  const [blogSlugs, caseStudySlugs, serviceSlugs] = await Promise.all([
    fetchAllBlogSlugs(),
    fetchAllCaseStudySlugs(),
    fetchAllServiceSlugs(),
  ]);

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
    "/faq",
    "/terms",
    "/privacy",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseStudyPages = caseStudySlugs.map((slug) => ({
    url: `${base}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
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
