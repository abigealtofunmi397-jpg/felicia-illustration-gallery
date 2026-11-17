import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { categoryById, FEATURED } from "@/data/portfolio";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";

const INTERVAL = 6000;

/** Animated "storybook stage": one featured piece at a time with a page-turn transition. */
export function FeaturedShowcase() {
  const items = FEATURED;
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [paused, setPaused] = useState(false);
  const item = items[index]!;
  const isCover = item.category === "covers";
  const running = !hovering && !paused;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % items.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [running, index, items.length]);

  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
      className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      {/* Stage */}
      <div className="relative">
        <div
          className={cn(
            "relative mx-auto grid aspect-[5/5.4] max-w-[520px] place-items-center overflow-hidden rounded-4xl p-8 transition-colors duration-700 sm:p-12",
            accentSoftBg[item.accent],
          )}
        >
          {/* stacked pages behind */}
          <div className="absolute inset-x-14 bottom-8 top-14 rotate-3 rounded-2xl bg-card/60 shadow-soft sm:inset-x-20" aria-hidden />
          <div className="absolute inset-x-12 bottom-10 top-12 -rotate-2 rounded-2xl bg-card/80 shadow-soft sm:inset-x-16" aria-hidden />

          <div
            key={item.slug}
            className={cn(
              "relative z-10 animate-page-turn page-origin",
              isCover ? "book w-[62%]" : "h-full w-auto",
            )}
          >
            <img
              src={item.image}
              alt={`${item.title} — ${item.type.toLowerCase()}`}
              className={cn(
                isCover
                  ? "block h-auto w-full"
                  : "h-full w-auto rounded-2xl object-contain shadow-book",
              )}
            />
          </div>
        </div>
        <span className="absolute -left-2 top-6 -rotate-6 rounded-full bg-mustard px-4 py-1.5 font-hand text-xl text-ink shadow-soft sm:left-2">
          featured!
        </span>
      </div>

      {/* Copy */}
      <div aria-live="polite">
        <div className="flex items-center gap-4 text-ink-foreground/60">
          <span className="font-display text-5xl font-semibold tabular-nums text-ink-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-ink-foreground/20" />
          <span className="text-sm tabular-nums">/ {String(items.length).padStart(2, "0")}</span>
        </div>

        <div key={item.slug} className="mt-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mustard">
            {categoryById[item.category].short}
          </p>
          <h3 className="mt-3 text-4xl font-semibold leading-tight text-ink-foreground sm:text-5xl">
            {item.title}
          </h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-foreground/75">
            {item.description}
          </p>
          <Link
            to="/portfolio"
            search={{ work: item.slug }}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-mustard underline-offset-4 hover:underline"
          >
            Open this piece <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        {/* Thumb rail */}
        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground transition hover:bg-ink-foreground/10"
            aria-label="Previous featured piece"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto py-1">
            {items.map((f, i) => (
              <button
                key={f.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${f.title}`}
                aria-current={i === index}
                className={cn(
                  "relative h-16 w-12 shrink-0 cursor-pointer overflow-hidden rounded-lg ring-2 ring-offset-2 ring-offset-ink transition-all duration-300",
                  i === index ? "ring-mustard" : "opacity-55 ring-transparent hover:opacity-100",
                )}
              >
                <img src={f.image} alt="" className="size-full object-cover" />
                {i === index && running && (
                  <span
                    key={`p-${index}`}
                    className="absolute inset-x-0 bottom-0 h-1 origin-left animate-progress bg-mustard"
                  />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-ink-foreground/25 text-ink-foreground transition hover:bg-ink-foreground/10"
            aria-label="Next featured piece"
          >
            <ChevronRight className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full text-ink-foreground/70 transition hover:bg-ink-foreground/10 hover:text-ink-foreground"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          >
            {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
