import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Adeniran Felicia on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-card px-4 py-2 text-sm font-semibold text-foreground opacity-0 shadow-lift transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-300 group-hover:scale-105">
        <span
          className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring"
          aria-hidden
        />
        <MessageCircle className="relative size-6" aria-hidden />
      </span>
    </a>
  );
}
