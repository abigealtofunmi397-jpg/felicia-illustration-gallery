import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BlogCard } from "@/components/site/BlogCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { formatDate, POSTS } from "@/data/blog";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Illustration Notes & Creative Insights — Blog | Adeniran Felicia" },
      {
        name: "description",
        content:
          "Thoughts, inspiration and helpful guidance on children’s illustration, picture books, character design and visual storytelling.",
      },
      { property: "og:title", content: "Illustration Notes & Creative Insights" },
      {
        property: "og:description",
        content: "Helpful guidance on picture books, book covers and character design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [lead, ...rest] = POSTS;
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:pt-16">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="font-hand text-2xl text-coral">the studio journal</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-7xl">
            Illustration Notes & Creative Insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Thoughts, inspiration, and helpful guidance on children’s illustration, picture books,
            character design, and visual storytelling.
          </p>
        </div>
      </section>

      {lead && (
        <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8">
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: lead.slug }}
              className="group grid overflow-hidden rounded-4xl bg-card shadow-soft ring-1 ring-border/70 transition-shadow duration-500 hover:shadow-lift md:grid-cols-2"
            >
              <div
                className={cn(
                  "grid min-h-72 place-items-center overflow-hidden p-10",
                  accentSoftBg[lead.accent],
                )}
              >
                <img
                  src={lead.cover}
                  alt={lead.coverAlt}
                  className="max-h-96 w-auto -rotate-3 rounded-2xl object-contain shadow-book ring-8 ring-card transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="self-start rounded-full bg-coral-soft px-3 py-1 text-xs font-semibold text-foreground">
                  Latest · {lead.tag}
                </span>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  {lead.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lead.excerpt}</p>
                <p className="mt-6 text-sm text-muted-foreground">
                  {formatDate(lead.date)} · {lead.readMinutes} min read
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-coral">
                  Read the article
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
