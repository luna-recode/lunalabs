import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/seo/cta-block";
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
      {/* ── Header ── */}
      <header className="border-b border-line px-[clamp(20px,5vw,64px)] pb-[clamp(48px,8vh,72px)] pt-[clamp(130px,18vh,180px)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            Blog
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-[clamp(42px,7vw,88px)] font-medium leading-[1.0] tracking-tight">
              Ecommerce CRO{" "}
              <em className="italic text-accent">insights.</em>
            </h1>
            <p className="max-w-[40ch] text-base font-light leading-[1.65] text-bone-dim md:text-right">
              Practical articles on conversion rate optimization, landing page
              performance, and ecommerce revenue systems — written by the Luna
              Labs team.
            </p>
          </div>
        </div>
      </header>

      {/* ── Grid ── */}
      <section
        aria-label="Articles"
        className="px-[clamp(20px,5vw,64px)] py-[clamp(64px,10vh,100px)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_14px_30px_-22px_rgba(33,64,143,0.25)] transition-shadow hover:shadow-[0_20px_40px_-18px_rgba(33,64,143,0.38)]"
                >
                  {/* Accent bar */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-accent/40 via-accent/70 to-accent/40" />

                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={post.publishedAt}
                      className="mb-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      · {post.readingTime} read
                    </time>

                    <h2 className="font-serif text-[clamp(18px,2vw,22px)] font-medium leading-[1.15] tracking-tight">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm font-light leading-[1.65] text-bone-dim">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-opacity group-hover:opacity-70">
                        Read article
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
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
