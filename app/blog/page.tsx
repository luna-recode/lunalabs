import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/seo/cta-block";
import { PageHero } from "@/components/seo/page-hero";
import { PageShell } from "@/components/seo/page-shell";
import { fetchBlogPosts } from "@/lib/content/blog-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Ecommerce CRO, Shopify Optimization & Web Design",
  description:
    "Luna Labs blog: conversion rate optimization guides, Shopify CRO strategy, landing page checklists, and ecommerce web design insights.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  return (
    <PageShell
      schemas={[
        organizationSchema(),
        websiteSchema(),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ]}
    >
      <PageHero
        eyebrow="Blog"
        h1="Ecommerce CRO insights and Shopify optimization guides"
        intro="Practical articles on conversion rate optimization, landing page performance, and ecommerce revenue systems — written by the Luna Labs team."
      />

      <section
        aria-labelledby="articles-heading"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2 id="articles-heading" className="sr-only">
            Articles
          </h2>
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-lg border border-line bg-card p-6">
                  <time
                    dateTime={post.publishedAt}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.readingTime} read
                  </time>
                  <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm font-light leading-[1.65] text-bone-dim">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-accent hover:opacity-70"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        heading="Ready to apply these strategies?"
        body="Book a free revenue audit and we will identify the highest-impact CRO fixes for your store."
        secondaryHref="/services"
        secondaryLabel="View services"
      />
    </PageShell>
  );
}
