import { MessageCircle } from "lucide-react";

import type { Service } from "@/data/services";
import { accentSoftBg, accentText } from "@/lib/accents";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div
        className={cn(
          "absolute -right-10 -top-10 size-40 rounded-full transition-transform duration-700 group-hover:scale-125",
          accentSoftBg[service.accent],
        )}
        aria-hidden
      />
      {service.sample && (
        <img
          src={service.sample}
          alt=""
          loading="lazy"
          className="absolute right-5 top-5 h-20 w-16 rotate-6 rounded-xl object-cover shadow-book ring-4 ring-card transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
        />
      )}
      <div className="relative">
        <span
          className={cn(
            "grid size-12 place-items-center rounded-2xl bg-card shadow-soft ring-1 ring-border",
            accentText[service.accent],
          )}
        >
          <Icon className="size-5" aria-hidden />
        </span>
        {typeof index === "number" && (
          <span className="mt-6 block font-hand text-xl text-muted-foreground">
            no. {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className={cn("relative font-display text-2xl font-semibold leading-tight text-foreground", typeof index === "number" ? "mt-1" : "mt-12")}>
        {service.name}
      </h3>
      <p className="relative mt-3 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
      <a
        href={whatsappLink(
          `Hi Adeniran Felicia, I’d like to ask about your ${service.name} service for my project.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-ink hover:bg-ink hover:text-ink-foreground"
      >
        <MessageCircle className="size-4" aria-hidden />
        Ask About This Service
      </a>
    </article>
  );
}
