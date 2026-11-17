import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { SITE, whatsappLink } from "@/lib/site";
import { NAV } from "./SiteHeader";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark tone="inverse" />
          <p className="mt-5 max-w-sm text-ink-foreground/70">
            {SITE.title}. Whimsical illustrations, book covers and storybook characters that bring
            ideas to life.
          </p>
          <p className="mt-6 font-hand text-2xl text-mustard">Let’s make something magical.</p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-ink-foreground/80 transition-colors hover:text-mustard"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy"
                className="text-ink-foreground/80 transition-colors hover:text-mustard"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-mustard"
              >
                <MessageCircle className="size-4" aria-hidden /> WhatsApp · {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-mustard"
              >
                Hire me on Upwork <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-ink-foreground/80 transition-colors hover:text-mustard"
              >
                Send a project inquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-ink-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pr-28">
          <p>© {new Date().getFullYear()} Adeniran Felicia. All rights reserved.</p>
          <p>Portfolio pieces are presented as a concept collection.</p>
        </div>
      </div>
    </footer>
  );
}
