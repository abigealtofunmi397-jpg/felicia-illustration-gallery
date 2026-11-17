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
