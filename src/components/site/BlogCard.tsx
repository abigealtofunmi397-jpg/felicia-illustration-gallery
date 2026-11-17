import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { formatDate, type BlogPost } from "@/data/blog";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div
        className={cn(
          "relative grid aspect-[16/10] place-items-center overflow-hidden",
          accentSoftBg[post.accent],
        )}
      >
        <img
          src={post.cover}
          alt={post.coverAlt}
          loading="lazy"
          className="h-[80%] w-auto -rotate-3 rounded-xl object-cover shadow-book ring-4 ring-card transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          {post.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-muted-foreground">
          {formatDate(post.date)} · {post.readMinutes} min read
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-foreground">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-muted-foreground">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
          Read article
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
