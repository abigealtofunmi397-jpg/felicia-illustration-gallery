/**
 * Contact and hiring links for the whole site. Edit values here only.
 * Leave BOOKING_URL empty until a real scheduling link exists: every
 * "Book a Call" button stays hidden (or falls back to WhatsApp) while it is empty.
 */
export const SITE = {
  name: "Adeniran Felicia",
  title: "Children’s Book Illustrator & Character Designer",
  tagline: "Whimsical Illustrations, Book Covers & Storybook Characters That Bring Ideas to Life",
  whatsappNumber: "2349019914329",
  whatsappDisplay: "+234 901 991 4329",
  whatsappMessage:
    "Hi Adeniran Felicia, I came across your illustration portfolio and I’d love to discuss a project.",
  upworkUrl: "https://www.upwork.com/freelancers/~01f1b8e43a3959e01c?mp_source=share",
  bookingUrl: "" as string,
} as const;

export function whatsappLink(message: string = SITE.whatsappMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Returns the booking link, or null while no real link is configured. */
export function bookingLink(url: string = SITE.bookingUrl): string | null {
  const trimmed = url.trim();
  return /^https?:\/\//.test(trimmed) ? trimmed : null;
}

/**
 * Images are stored on Lovable's file hosting, which only answers on Lovable
 * domains. Prefixing the stored path with a Lovable origin lets the same
 * pictures load when the site is hosted elsewhere (e.g. Vercel).
 * Override with VITE_ASSET_ORIGIN if the Lovable address changes.
 */
export const ASSET_ORIGIN: string =
  (import.meta.env["VITE_ASSET_ORIGIN"] as string | undefined)?.replace(/\/$/, "") ||
  "https://felicia-illustration-gallery.lovable.app";

export function assetUrl(path: string, origin: string = ASSET_ORIGIN): string {
  return path.startsWith("/__l5e/") ? `${origin}${path}` : path;
}
