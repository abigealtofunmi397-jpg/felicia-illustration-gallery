import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { BlogCard } from "@/components/site/BlogCard";
import { InquiryButton, UpworkButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { formatDate, getPost, POSTS } from "@/data/blog";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [
          { title: "Article not found — Adeniran Felicia" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} — Adeniran Felicia` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <header className="mx-auto max-w-4xl px-5 pt-8 sm:px-8 lg:pt-14">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden /> All articles
        </Link>
        <div className="mt-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="rounded-full bg-coral-soft px-3 py-1 text-xs font-semibold text-foreground">
            {post.tag}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 text-muted-foreground">
            By Adeniran Felicia · {formatDate(post.date)} · {post.readMinutes} min read
          </p>
        </div>
      </header>

      <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
        <div
          className={cn(
            "relative grid place-items-center overflow-hidden rounded-4xl px-6 py-12",
            accentSoftBg[post.accent],
          )}
        >
          <div className="absolute -left-10 -top-10 size-40 rounded-full bg-card/50" aria-hidden />
          <div
            className="absolute -bottom-12 -right-6 size-48 rounded-full bg-card/40"
            aria-hidden
          />
          <img
            src={post.cover}
            alt={post.coverAlt}
            className="relative h-72 w-auto -rotate-2 rounded-2xl object-contain shadow-book ring-8 ring-card sm:h-96"
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 pt-14 sm:px-8">
        <p className="font-display text-2xl leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-coral">
          {post.intro}
        </p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-3xl font-semibold leading-tight text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs.map((para) => (
              <p key={para.slice(0, 32)} className="mt-4 text-lg leading-[1.8] text-foreground/85">
                {para}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-coral" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <aside className="mt-16 rounded-4xl bg-lilac-soft p-8 sm:p-10">
          <p className="font-hand text-2xl text-coral">ready when you are</p>
          <h2 className="mt-1 text-3xl font-semibold text-foreground">
            Let’s bring your story to life
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{post.closing}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" />
            <UpworkButton size="lg" />
            <InquiryButton size="lg" />
          </div>
        </aside>
      </div>

      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <h2 className="text-3xl font-semibold text-foreground">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
