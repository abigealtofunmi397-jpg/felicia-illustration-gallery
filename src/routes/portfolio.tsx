import { useCallback } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { CtaBanner } from "@/components/site/CtaBanner";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { PortfolioLightbox } from "@/components/site/PortfolioLightbox";
import { Reveal } from "@/components/site/Reveal";
import {
  CATEGORIES,
  categoryById,
  getItem,
  isCategory,
  itemsIn,
  PORTFOLIO,
  type CategoryId,
  type PortfolioItem,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

type PortfolioSearch = { category?: CategoryId | undefined; work?: string | undefined };

export const Route = createFileRoute("/portfolio")({
  validateSearch: (search: Record<string, unknown>): PortfolioSearch => ({
    category: isCategory(search["category"]) ? search["category"] : undefined,
    work:
      typeof search["work"] === "string" && getItem(search["work"]) ? search["work"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Portfolio — Book Covers, Characters & Storybook Art | Adeniran Felicia" },
      {
        name: "description",
        content:
          "Browse 40 illustration concepts by Adeniran Felicia: book cover designs, character designs, storybook interiors and whimsical art.",
      },
      { property: "og:title", content: "Portfolio — Adeniran Felicia" },
      {
        property: "og:description",
        content: "Book covers, character designs, storybook interiors and whimsical illustration concepts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { category, work } = Route.useSearch();
  const navigate = useNavigate({ from: "/portfolio" });
  const list = itemsIn(category);
  const open = getItem(work);
  // When opened from a link the piece may sit outside the active filter; browse the whole set then.
  const lightboxList = open && !list.some((i) => i.slug === open.slug) ? PORTFOLIO : list;

  const setCategory = (c: CategoryId | undefined) =>
    navigate({ search: { category: c, work: undefined }, resetScroll: false });
  const openItem = useCallback(
    (item: PortfolioItem) =>
      navigate({ search: (prev) => ({ ...prev, work: item.slug }), resetScroll: false, replace: !!work }),
    [navigate, work],
  );
  const close = () => navigate({ search: (prev) => ({ ...prev, work: undefined }), resetScroll: false });

  const tabs: { id: CategoryId | undefined; label: string; count: number }[] = [
    { id: undefined, label: "All work", count: PORTFOLIO.length },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.short, count: itemsIn(c.id).length })),
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
            <p className="font-hand text-2xl text-coral">the concept collection</p>
            <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-7xl">
              Portfolio
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Forty illustration concepts across book covers, characters, storybook interiors and
              whimsical worlds. Tap any piece to see it larger.
            </p>
          </div>
          <p className="flex gap-3 rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground shadow-soft ring-1 ring-border/70">
            <Info className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
            These pieces form a style and concept collection. They show the range of looks
            available for your project and are not presented as published client books.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter by category"
          className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {tabs.map((t) => {
            const active = t.id === category;
            return (
              <button
                key={t.label}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setCategory(t.id)}
                className={cn(
                  "inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  active
                    ? "bg-ink text-ink-foreground shadow-soft"
                    : "bg-card text-foreground ring-1 ring-border hover:-translate-y-0.5 hover:ring-ink/30",
                )}
              >
                {t.label}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs tabular-nums",
                    active ? "bg-ink-foreground/15" : "bg-muted text-muted-foreground",
                  )}
                >
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
        {category && (
          <p key={category} className="mt-4 animate-in fade-in text-muted-foreground duration-500">
            <span className="font-semibold text-foreground">{categoryById[category].label}.</span>{" "}
            {categoryById[category].blurb}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        {category ? (
          <Grid key={category} items={list} onOpen={openItem} />
        ) : (
          <div className="space-y-20">
            {CATEGORIES.map((c) => (
              <div key={c.id}>
                <Reveal className="mb-7 flex flex-col justify-between gap-3 border-b border-border pb-5 sm:flex-row sm:items-end">
                  <div>
                    <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{c.label}</h2>
                    <p className="mt-2 max-w-xl text-muted-foreground">{c.blurb}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className="cursor-pointer self-start text-sm font-semibold text-coral underline-offset-4 hover:underline sm:self-auto"
                  >
                    Only show {c.short.toLowerCase()} →
                  </button>
                </Reveal>
                <Grid items={itemsIn(c.id)} onOpen={openItem} />
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="pt-28">
        <CtaBanner
          title="Picture your story here"
          text="Like a style you see? Tell me about your book, cover or characters and we’ll shape a look that’s all yours."
        />
      </div>

      <PortfolioLightbox item={open} list={lightboxList} onClose={close} onNavigate={openItem} />
    </>
  );
}

function Grid({ items, onOpen }: { items: PortfolioItem[]; onOpen: (i: PortfolioItem) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={(i % 5) * 70}>
          <PortfolioCard item={item} onOpen={onOpen} />
        </Reveal>
      ))}
    </div>
  );
}
