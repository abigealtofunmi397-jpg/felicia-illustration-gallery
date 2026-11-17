import { Expand } from "lucide-react";

import { categoryById, type PortfolioItem } from "@/data/portfolio";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { useTilt } from "./useTilt";

type PortfolioCardProps = {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
  className?: string;
};

export function PortfolioCard({ item, onOpen, className }: PortfolioCardProps) {
  const tilt = useTilt(7);
  const isCover = item.category === "covers";

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      {...tilt}
      className={cn(
        "group tilt-card block w-full cursor-pointer rounded-3xl bg-card p-3 text-left shadow-soft ring-1 ring-border/70 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label={`Open ${item.title}`}
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-2xl",
          isCover ? cn(accentSoftBg[item.accent], "grid place-items-center") : "bg-muted",
        )}
      >
        {isCover ? (
          <div className="book w-[68%] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-2">
            <img
              src={item.image}
              alt={`${item.title} — book cover concept`}
              loading="lazy"
              className="block h-auto w-full"
            />
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${item.title} — ${item.type.toLowerCase()}`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        )}
        <span className="absolute right-3 top-3 grid size-9 scale-75 place-items-center rounded-full bg-card/90 text-foreground opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <Expand className="size-4" aria-hidden />
        </span>
      </div>
      <div className="px-2 pb-2 pt-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-coral">
          {categoryById[item.category].short}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{item.line}</p>
      </div>
    </button>
  );
}
