import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MessageCircle, Send } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { SITE, bookingLink, whatsappLink } from "@/lib/site";

type Size = ButtonProps["size"];

export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  size = "xl",
  className,
}: {
  message?: string;
  label?: string;
  size?: Size;
  className?: string;
}) {
  return (
    <Button asChild variant="whatsapp" size={size} className={className}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden />
        {label}
      </a>
    </Button>
  );
}

export function UpworkButton({
  label = "Hire Me on Upwork",
  size = "xl",
  variant = "paper",
  className,
}: {
  label?: string;
  size?: Size;
  variant?: ButtonProps["variant"];
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={SITE.upworkUrl} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowUpRight aria-hidden />
      </a>
    </Button>
  );
}

/** Renders only when a real booking link is configured in src/lib/site.ts. */
export function BookCallButton({ size = "xl", className }: { size?: Size; className?: string }) {
  const href = bookingLink();
  if (!href) return null;
  return (
    <Button asChild variant="quiet" size={size} className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <CalendarDays aria-hidden />
        Book a Call
      </a>
    </Button>
  );
}

export function InquiryButton({ size = "xl", className }: { size?: Size; className?: string }) {
  return (
    <Button asChild variant="ink" size={size} className={className}>
      <Link to="/contact" hash="inquiry">
        <Send aria-hidden />
        Send an Inquiry
      </Link>
    </Button>
  );
}
