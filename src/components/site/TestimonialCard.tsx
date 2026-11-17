import { Star } from "lucide-react";

import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-3xl p-7 shadow-soft ring-1 transition-transform duration-500 hover:-translate-y-1",
        featured ? "bg-ink text-ink-foreground ring-ink" : "bg-card text-foreground ring-border/70",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-mustard text-mustard" aria-hidden />
          ))}
        </div>
        {t.sample && (
          <span
            className={cn(
              "rounded-full border border-dashed px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider",
              featured
                ? "border-ink-foreground/30 text-ink-foreground/70"
                : "border-border text-muted-foreground",
            )}
          >
            Sample review
          </span>
        )}
      </div>
      <blockquote
        className={cn(
          "mt-5 flex-1 font-display leading-snug",
          featured ? "text-2xl sm:text-[1.7rem]" : "text-lg",
        )}
      >
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-current/10 pt-4">
        <p className="font-semibold">{t.label}</p>
        <p className={cn("text-sm", featured ? "text-ink-foreground/65" : "text-muted-foreground")}>
          {t.project}
        </p>
      </figcaption>
    </figure>
  );
}
