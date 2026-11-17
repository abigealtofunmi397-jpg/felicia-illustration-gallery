import { createFileRoute } from "@tanstack/react-router";

import { UpworkButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES } from "@/data/services";
import { accentSoftBg, type Accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Illustration Services — Children’s Books, Covers & Characters | Adeniran Felicia" },
      {
        name: "description",
        content:
          "Children’s book illustration, book cover design, character design, storybook interiors, whimsical and educational illustration by Adeniran Felicia.",
      },
      { property: "og:title", content: "Illustration Services — Adeniran Felicia" },
      {
        property: "og:description",
        content: "Seven ways to bring your story to life, from character sheets to finished covers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const STEPS: { title: string; text: string; accent: Accent }[] = [
  {
    title: "Share your story",
    text: "Send your manuscript or idea, the number of illustrations, timeline and the style you love.",
    accent: "coral",
  },
  {
    title: "Characters & sketches",
    text: "We agree on how your characters look, then plan each page with rough sketches.",
    accent: "sky",
  },
  {
    title: "Colour & detail",
    text: "Approved sketches become finished, full-colour illustrations with room for your text.",
    accent: "lilac",
  },
  {
    title: "Final files",
    text: "You receive print- and screen-ready files in the sizes your publisher or printer needs.",
    accent: "mustard",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 sm:px-8 lg:pt-16">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="font-hand text-2xl text-coral">services</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-7xl">
            Illustration that <span className="italic font-wonky text-coral">supports</span> your story
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you’re an author with a finished manuscript, a publisher planning a series, or a
            brand creating something for children, here’s how I can help.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <UpworkButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="how it works"
            title="A simple, friendly process"
            intro="Every project is a collaboration. Clear stages mean you always know what’s next and get to give feedback before anything is final."
          />
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <li className="h-full rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border/70">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl font-display text-xl font-semibold text-foreground",
                    accentSoftBg[step.accent],
                  )}
                >
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <div className="pt-28">
        <CtaBanner />
      </div>
    </>
  );
}
