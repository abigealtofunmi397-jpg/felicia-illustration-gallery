import { assetUrl } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Palette, Sparkles } from "lucide-react";

import headshot from "@/assets/adeniran-felicia-headshot.png.asset.json";
import { InquiryButton, UpworkButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { getItem } from "@/data/portfolio";
import { accentSoftBg, accentText, type Accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adeniran Felicia — Children’s Book Illustrator" },
      {
        name: "description",
        content:
          "Meet Adeniran Felicia, a children’s book illustrator and character designer creating warm, expressive, story-led artwork.",
      },
      { property: "og:title", content: "About Adeniran Felicia" },
      {
        property: "og:description",
        content: "A children’s book illustrator focused on warmth, personality and storytelling.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const APPROACH: { icon: typeof Heart; title: string; text: string; accent: Accent }[] = [
  {
    icon: Heart,
    title: "Story before style",
    text: "Every illustration starts with the feeling of the moment. I read closely so the pictures add to your words rather than repeat them.",
    accent: "coral",
  },
  {
    icon: Sparkles,
    title: "Characters with personality",
    text: "Memorable characters are the heart of a children’s book. I design them to be expressive, consistent and easy to love.",
    accent: "mustard",
  },
  {
    icon: Palette,
    title: "Colour that sets the mood",
    text: "Thoughtful palettes carry readers from cosy bedtime scenes to bright, silly adventures — page after page.",
    accent: "sky",
  },
];

const HELPS = [
  "Self-publishing authors preparing their first picture book",
  "Publishers looking for cover art and interior spreads",
  "Educators creating learning materials and activity books",
  "Parents turning family stories into keepsake books",
  "Brands needing friendly, kid-focused illustration",
];

const STYLES = [
  "Warm storybook",
  "Whimsical & exaggerated",
  "Cartoon characters",
  "Cosy painterly scenes",
  "Bright educational",
  "Dr. Seuss–inspired (original)",
];

const strip = [
  "the-star-catchers",
  "fox-character-study",
  "polar-bear-and-puffin",
  "rainbow-road-village",
]
  .map((s) => getItem(s))
  .filter((i): i is NonNullable<typeof i> => !!i);

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:pt-16">
        <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000">
          <div className="absolute -inset-4 -rotate-3 rounded-[3rem] bg-lilac-soft" aria-hidden />
          <div
            className="absolute -right-6 -top-6 size-24 rounded-full bg-mustard-soft"
            aria-hidden
          />
          <img
            src={assetUrl(headshot.url)}
            alt="Portrait of Adeniran Felicia"
            className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-[50%_20%] shadow-lift"
          />
          <span className="absolute -bottom-6 left-6 -rotate-3 rounded-2xl bg-card px-5 py-3 shadow-lift">
            <span className="block font-hand text-2xl leading-none text-coral">
              Adeniran Felicia
            </span>
            <span className="text-sm text-muted-foreground">Illustrator & character designer</span>
          </span>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="font-hand text-2xl text-coral">about me</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-6xl">
            Turning ideas into visuals full of{" "}
            <span className="italic font-wonky text-coral">heart</span>
          </h1>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Adeniran Felicia is a children’s book illustrator and character designer who creates
              expressive, imaginative artwork for stories, books, and playful visual projects. Her
              work focuses on warmth, personality, and storytelling, combining charming characters
              with colorful, engaging scenes that connect with young audiences and the people
              creating for them.
            </p>
            <p>
              From book covers to interior illustrations and whimsical character design, her goal is
              to turn ideas into memorable visuals that feel alive, friendly, and full of heart.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton />
            <UpworkButton />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal>
          <SectionHeader eyebrow="creative approach" title="How I think about every page" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {APPROACH.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className="h-full rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border/70">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl",
                    accentSoftBg[a.accent],
                    accentText[a.accent],
                  )}
                >
                  <a.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-4xl bg-ink p-8 text-ink-foreground sm:p-12">
              <p className="font-hand text-2xl text-mustard">who I help</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                Made for people who create for children
              </h2>
              <ul className="mt-8 space-y-4">
                {HELPS.map((h) => (
                  <li key={h} className="flex gap-3 text-ink-foreground/85">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col rounded-4xl bg-card p-8 shadow-soft ring-1 ring-border/70 sm:p-12">
              <p className="font-hand text-2xl text-coral">illustration styles</p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
                A range of looks for every story
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {STYLES.map((s, i) => (
                  <li
                    key={s}
                    className={cn(
                      "rounded-full px-4 py-2 font-medium text-foreground",
                      accentSoftBg[
                        (["coral", "sky", "lilac", "mustard", "leaf"] as const)[i % 5] ?? "coral"
                      ],
                    )}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-auto grid grid-cols-4 gap-3 pt-10">
                {strip.map((item, i) => (
                  <img
                    key={item.slug}
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={cn(
                      "aspect-[3/4] w-full rounded-xl object-cover shadow-book transition-transform duration-500 hover:-translate-y-1 hover:rotate-0",
                      i % 2 ? "rotate-3" : "-rotate-3",
                    )}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pt-28 text-center sm:px-8">
        <Reveal>
          <p className="font-hand text-2xl text-coral">let’s talk</p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground sm:text-5xl">
            Have a story that needs pictures?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Tell me about your book, characters or cover. I’ll reply with ideas, a timeline and next
            steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton />
            <UpworkButton />
            <InquiryButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}
