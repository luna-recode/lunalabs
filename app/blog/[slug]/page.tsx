import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/seo/cta-block";
import { FaqSection } from "@/components/seo/faq-section";
import { InternalLinks } from "@/components/seo/internal-links";
import { PageShell } from "@/components/seo/page-shell";
import {
  fetchAllBlogSlugs,
  fetchBlogPost,
  fetchBlogPosts,
} from "@/lib/content/blog-data";
import { getService } from "@/lib/content/services-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
} from "@/lib/seo/schema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    fetchBlogPost(slug),
    fetchBlogPosts(),
  ]);
  if (!post) notFound();

  const relatedLinks = post.relatedServices
    .map((s) => {
      const service = getService(s);
      return service
        ? {
            href: `/services/${s}`,
            label: service.title,
            description: service.intro.slice(0, 100) + "…",
          }
        : null;
    })
    .filter(Boolean) as { href: string; label: string; description?: string }[];

  const otherPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({
      href: `/blog/${p.slug}`,
      label: p.title,
      description: p.excerpt,
    }));

  return (
    <PageShell
      schemas={[
        organizationSchema(),
        articleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${slug}`,
          publishedAt: post.publishedAt,
          modifiedAt: post.modifiedAt,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]),
        ...(post.faqs.length > 0 ? [faqSchema(post.faqs)] : []),
      ]}
    >
      <article className="px-[clamp(20px,5vw,64px)] pb-[clamp(48px,8vh,80px)] pt-[clamp(130px,18vh,180px)]">
        <div className="mx-auto max-w-[800px]">
          <header>
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-accent"
            >
              ← Back to blog
            </Link>
            <time
              dateTime={post.publishedAt}
              className="mt-6 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            >
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime} read
            </time>
            <h1 className="mt-4 font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.06] tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg font-light leading-[1.65] text-bone-dim">
              {post.excerpt}
            </p>
          </header>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 font-serif text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.1] tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-base font-light leading-[1.75] text-bone-dim">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      {post.faqs.length > 0 && <FaqSection faqs={post.faqs} />}
      <InternalLinks heading="Related services" links={relatedLinks} />
      <InternalLinks heading="More articles" links={otherPosts} />
      <CtaBlock
        heading="Apply these strategies to your store"
        body="Book a free revenue audit and we will identify your highest-impact CRO opportunities."
      />
    </PageShell>
  );
}
