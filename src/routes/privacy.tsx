import { createFileRoute } from "@tanstack/react-router";

import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Adeniran Felicia" },
      {
        name: "description",
        content: "How Adeniran Felicia’s portfolio website handles your information when you get in touch.",
      },
      { property: "og:title", content: "Privacy Policy — Adeniran Felicia" },
      { property: "og:description", content: "How your information is handled when you get in touch." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "Who I am",
    body: [
      "This website is the personal portfolio of Adeniran Felicia, a children’s book illustrator and character designer. It showcases illustration work and explains how to get in touch about projects.",
    ],
  },
  {
    title: "Information you share",
    body: [
      "This website does not have user accounts and does not store the details you type into the inquiry form. When you press send, your details are placed into a WhatsApp message on your own device. Nothing is sent until you choose to send that message in WhatsApp.",
      "If you contact me through WhatsApp or Upwork, the information you share (such as your name, email address and project details) is handled by those services under their own privacy policies, and I use it only to reply to you and discuss your project.",
    ],
  },
  {
    title: "How I use your information",
    body: [
      "I use the details you send only to respond to your inquiry, prepare quotes and work on your project. I never sell your information or share it with anyone for marketing.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "Links on this site open WhatsApp and Upwork. Fonts are loaded from Google Fonts, which may receive basic technical information such as your IP address. Please review those services’ own privacy policies.",
    ],
  },
  {
    title: "Keeping and deleting information",
    body: [
      "Messages are kept only as long as needed to discuss and complete your project. You can ask me at any time to delete our conversation history or any project files that contain your personal details.",
    ],
  },
  {
    title: "Contact",
    body: [
      `For any privacy question, message me on WhatsApp at ${SITE.whatsappDisplay} or through my Upwork profile.`,
    ],
  },
];

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-10 sm:px-8 lg:pt-16">
      <p className="font-hand text-2xl text-coral">the small print</p>
      <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-6xl">Privacy Policy</h1>
      <p className="mt-5 text-muted-foreground">Last updated: 17 November 2026</p>
      <div className="mt-12 space-y-10 rounded-4xl bg-card p-7 shadow-soft ring-1 ring-border/70 sm:p-12">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-2xl font-semibold text-foreground">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-lg leading-relaxed text-foreground/80">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
