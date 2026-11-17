import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

export function Wordmark({ className, tone = "default" }: { className?: string; tone?: "default" | "inverse" }) {
  return (
    <Link
      to="/"
      aria-label="Adeniran Felicia — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 place-items-center rounded-full bg-coral text-accent-foreground shadow-soft transition-transform duration-500 group-hover:rotate-12">
        <span className="font-display text-lg font-semibold italic leading-none font-wonky">af</span>
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-mustard ring-2 ring-background" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold leading-none tracking-tight",
          tone === "inverse" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Adeniran <span className="italic font-wonky text-coral">Felicia</span>
      </span>
    </Link>
  );
}
