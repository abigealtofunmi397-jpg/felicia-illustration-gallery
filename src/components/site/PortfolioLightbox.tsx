import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Dialog, DialogDescription, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import { categoryById, type PortfolioItem } from "@/data/portfolio";
import { accentSoftBg } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { UpworkButton, WhatsAppButton } from "./ContactButtons";

type LightboxProps = {
  item: PortfolioItem | undefined;
  list: PortfolioItem[];
  onClose: () => void;
  onNavigate: (item: PortfolioItem) => void;
};

export function PortfolioLightbox({ item, list, onClose, onNavigate }: LightboxProps) {
  const index = item ? list.findIndex((i) => i.slug === item.slug) : -1;
  const prev = index >= 0 ? list[(index - 1 + list.length) % list.length] : undefined;
  const next = index >= 0 ? list[(index + 1) % list.length] : undefined;

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prev) onNavigate(prev);
      if (e.key === "ArrowRight" && next) onNavigate(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, prev, next, onNavigate]);

  const isCover = item?.category === "covers";

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-x-3 top-1/2 z-50 mx-auto max-h-[92vh] max-w-5xl -translate-y-1/2 overflow-y-auto rounded-4xl bg-card shadow-lift outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:inset-x-6">
          {item && (
            <div className="grid md:grid-cols-[1.15fr_1fr]">
              <div
                className={cn(
                  "relative grid min-h-[320px] place-items-center p-6 sm:p-10",
                  accentSoftBg[item.accent],
                )}
              >
                <div
                  key={item.slug}
                  className={cn(
                    "animate-page-turn page-origin",
                    isCover ? "book w-[62%] max-w-xs" : "w-full",
                  )}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.type.toLowerCase()}`}
                    className={cn(
                      "mx-auto block",
                      isCover
                        ? "block h-auto w-full"
                        : "max-h-[62vh] w-auto rounded-2xl object-contain shadow-book",
                    )}
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 flex justify-between md:inset-x-6">
                  <button
                    type="button"
                    onClick={() => prev && onNavigate(prev)}
                    className="grid size-11 cursor-pointer place-items-center rounded-full bg-card/90 text-foreground shadow-soft backdrop-blur transition hover:-translate-x-0.5"
                    aria-label={`Previous: ${prev?.title ?? ""}`}
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => next && onNavigate(next)}
                    className="grid size-11 cursor-pointer place-items-center rounded-full bg-card/90 text-foreground shadow-soft backdrop-blur transition hover:translate-x-0.5"
                    aria-label={`Next: ${next?.title ?? ""}`}
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-2 pr-12">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                    {categoryById[item.category].short}
                  </span>
                  <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    Concept study
                  </span>
                  <span className="ml-auto text-xs tabular-nums text-muted-foreground">
                    {index + 1} / {list.length}
                  </span>
                </div>
                <DialogTitle className="mt-5 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </DialogDescription>
                <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">Illustration type</dt>
                    <dd className="mt-1 text-muted-foreground">{item.type}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Style notes</dt>
                    <dd className="mt-1 text-muted-foreground">{item.style}</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-auto md:pt-8">
                  <WhatsAppButton
                    size="lg"
                    label="Discuss a similar piece"
                    message={`Hi Adeniran Felicia, I saw “${item.title}” in your portfolio and I’d love to discuss a project in a similar style.`}
                  />
                  <UpworkButton size="lg" label="Hire on Upwork" />
                </div>
              </div>
            </div>
          )}
          <DialogPrimitive.Close className="absolute right-4 top-4 grid size-10 cursor-pointer place-items-center rounded-full bg-card/90 text-foreground shadow-soft backdrop-blur transition hover:rotate-90">
            <X className="size-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
