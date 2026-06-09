import Link from "next/link";
import type { BlogPost } from "@/lib/content/blog-data";

export function BlogStrip({
  posts,
  heading = "From the blog",
}: {
  posts: BlogPost[];
  heading?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section
      aria-label={heading}
      className="border-t border-line px-[clamp(20px,5vw,64px)] py-[clamp(48px,8vh,80px)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="font-serif text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.06] tracking-tight">
            {heading}
          </h2>
          <Link
            href="/blog"
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-70"
          >
            All articles →
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-[0_14px_30px_-22px_rgba(33,64,143,0.25)] transition-shadow hover:shadow-[0_20px_40px_-18px_rgba(33,64,143,0.38)]"
              >
                <time
                  dateTime={post.publishedAt}
                  className="mb-3 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
                >
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="font-serif text-[clamp(18px,2vw,22px)] font-medium leading-[1.2] tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm font-light leading-[1.6] text-bone-dim">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent transition-opacity group-hover:opacity-70">
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 9.5l7-7M9.5 9.5V2.5H2.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
