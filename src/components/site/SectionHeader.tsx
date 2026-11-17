import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "inverse" ? "text-ink-foreground" : "text-foreground",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-hand text-2xl leading-none",
            tone === "inverse" ? "text-mustard" : "text-coral",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-semibold leading-[1.05] sm:text-5xl">{title}</h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-balance-pretty",
            tone === "inverse" ? "text-ink-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
