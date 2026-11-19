import { describe, expect, it } from "vitest";

import { CATEGORIES, FEATURED, PORTFOLIO, itemsIn } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import { buildInquiryMessage } from "@/lib/inquiry";
import { SITE, assetUrl, bookingLink, whatsappLink } from "@/lib/site";

describe("portfolio rules", () => {
  it("has exactly 40 pieces", () => {
    expect(PORTFOLIO).toHaveLength(40);
  });

  it("puts exactly 10 pieces in each of the 4 categories", () => {
    expect(CATEGORIES).toHaveLength(4);
    for (const c of CATEGORIES) expect(itemsIn(c.id)).toHaveLength(10);
  });

  it("never reuses an image or slug", () => {
    expect(new Set(PORTFOLIO.map((i) => i.image)).size).toBe(40);
    expect(new Set(PORTFOLIO.map((i) => i.slug)).size).toBe(40);
  });

  it("features 7 to 8 pieces on the home page", () => {
    expect(FEATURED.length).toBeGreaterThanOrEqual(7);
    expect(FEATURED.length).toBeLessThanOrEqual(8);
  });
});

describe("contact rules", () => {
  it("opens WhatsApp on +2349019914329 with the agreed greeting", () => {
    const url = whatsappLink();
    expect(url.startsWith("https://wa.me/2349019914329?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1]!)).toBe(
      "Hi Adeniran Felicia, I came across your illustration portfolio and I’d love to discuss a project.",
    );
  });

  it("links to the agreed Upwork profile", () => {
    expect(SITE.upworkUrl).toBe(
      "https://www.upwork.com/freelancers/~01f1b8e43a3959e01c?mp_source=share",
    );
  });

  it("hides Book a Call until a real link is set", () => {
    expect(bookingLink("")).toBeNull();
    expect(bookingLink("coming soon")).toBeNull();
    expect(bookingLink("https://cal.com/felicia")).toBe("https://cal.com/felicia");
  });

  it("marks every placeholder review as a sample", () => {
    expect(TESTIMONIALS).toHaveLength(5);
    expect(TESTIMONIALS.every((t) => t.sample)).toBe(true);
  });

  it("puts the inquiry details into the WhatsApp message and skips empty fields", () => {
    const msg = buildInquiryMessage({
      name: "Ada",
      email: "ada@example.com",
      projectType: "Book cover design",
      projectTitle: "",
      description: "A cover for my bedtime story about a brave owl.",
      illustrations: "1",
      style: "",
      timeline: "",
      budget: "Not sure yet",
      contactMethod: "Email",
    });
    expect(msg).toContain("• Name: Ada");
    expect(msg).toContain("• Project type: Book cover design");
    expect(msg).toContain("• Preferred contact: Email");
    expect(msg).not.toContain("Project title");
  });
});

describe("image links work outside Lovable hosting", () => {
  it("prefixes stored image paths with the Lovable site address", () => {
    expect(assetUrl("/__l5e/assets-v1/abc/x.jpg")).toBe(
      "https://felicia-illustration-gallery.lovable.app/__l5e/assets-v1/abc/x.jpg",
    );
  });
  it("leaves full links untouched", () => {
    expect(assetUrl("https://example.com/a.png")).toBe("https://example.com/a.png");
  });
});
