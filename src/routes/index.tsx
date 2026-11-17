import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";

import headshot from "@/assets/adeniran-felicia-headshot.png.asset.json";
import { BlogCard } from "@/components/site/BlogCard";
import { BookCallButton, UpworkButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { CtaBanner } from "@/components/site/CtaBanner";
import { FeaturedShowcase } from "@/components/site/FeaturedShowcase";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ServiceCard } from "@/components/site/ServiceCard";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { Button } from "@/components/ui/button";
import { POSTS } from "@/data/blog";
import { getItem } from "@/data/portfolio";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeniran Felicia — Children’s Book Illustrator & Character Designer" },
      {
        name: "description",
        content:
          "Warm, expressive illustrations for children’s books, book covers and character design. Explore Adeniran Felicia’s portfolio and start your project.",
      },
      { property: "og:title", content: "Adeniran Felicia — Illustrations That Make Stories Feel Alive" },
      {
        property: "og:description",
        content:
          "Children’s book illustration, book covers, character design and whimsical storybook art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const heroArt = {
  cover: getItem("lola-and-the-lantern-garden"),
  character: getItem("bear-in-raincoat"),
  scene: getItem("moonlight-fireflies"),
  whimsy: getItem("the-crooked-lighthouse"),
};

function HomePage() {
  return (
    <>
      <Hero />

      {/* B — Featured showcase */}
      <section id="featured" className="px-3 pt-10 sm:px-5">
        <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-4xl bg-ink px-6 py-16 sm:px-12 md:py-24">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-lilac/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 left-10 size-96 rounded-full bg-coral/15 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                tone="inverse"
                eyebrow="a peek inside the sketchbook"
                title="Featured work"
                intro="A quick, animated preview of eight favourite pieces from the concept collection — covers, characters and storybook scenes."
              />
              <Button asChild variant="paper" size="xl" className="shrink-0">
                <Link to="/portfolio">
                  See all 40 pieces <ArrowRight />
                </Link>
              </Button>
            </div>
            <FeaturedShowcase />
          </div>
        </div>
      </section>

      {/* C — Services preview */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="how I can help"
              title={
                <>
                  Illustration for every <span className="italic font-wonky text-coral">chapter</span>
                </>
              }
              intro="From the first character sketch to the finished cover, I create artwork that supports your story and delights young readers."
            />
          </Reveal>
          <Button asChild variant="paper" size="xl" className="shrink-0 self-start md:self-auto">
            <Link to="/services">
              All 7 services <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* D — About preview */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <div className="grid items-center gap-12 rounded-4xl bg-card p-6 shadow-soft ring-1 ring-border/70 sm:p-10 md:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:p-14">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-sky-soft" aria-hidden />
            <img
              src={headshot.url}
              alt="Portrait of Adeniran Felicia"
              loading="lazy"
              className="relative aspect-square w-full rounded-[2.25rem] object-cover object-[50%_25%] shadow-lift"
            />
            <span className="absolute -bottom-5 -right-3 rotate-3 rounded-2xl bg-mustard px-4 py-2 font-hand text-2xl text-ink shadow-soft">
              hello, friend!
            </span>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeader
              eyebrow="about me"
              title="Stories first, pictures with heart"
              intro="I’m a children’s book illustrator and character designer who creates expressive, imaginative artwork for stories, books and playful visual projects. My work focuses on warmth, personality and storytelling — charming characters in colourful scenes that connect with young audiences and the people creating for them."
            />
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Picture books", "Book covers", "Character sheets", "Whimsical worlds", "Educational art"].map(
                (chip) => (
                  <li key={chip} className="rounded-full bg-muted px-3.5 py-1.5 text-sm font-medium text-foreground">
                    {chip}
                  </li>
                ),
              )}
            </ul>
            <Button asChild variant="ink" size="xl" className="mt-8">
              <Link to="/about">
                More about me <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* E — Testimonials */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="kind words"
            title="What working together feels like"
            intro="Sample reviews shown for layout — they’ll be replaced with verified client reviews."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <TestimonialCard t={TESTIMONIALS[0]!} featured />
          </Reveal>
          {TESTIMONIALS.slice(1).map((t, i) => (
            <Reveal key={t.label} delay={(i + 1) * 80}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* F — Blog preview */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="from the studio journal"
              title="Illustration notes & creative insights"
            />
          </Reveal>
          <Button asChild variant="paper" size="xl" className="shrink-0 self-start md:self-auto">
            <Link to="/blog">
              Visit the blog <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* G — Final CTA */}
      <div className="pt-28">
        <CtaBanner />
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-14">
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow-soft ring-1 ring-border/70">
            <span className="size-2 rounded-full bg-leaf" aria-hidden />
            Hi, I’m Adeniran Felicia — a Children’s Book Illustrator & Character Designer.
          </p>
          <h1 className="mt-7 text-[3.2rem] font-semibold leading-[0.98] text-foreground sm:text-7xl lg:text-[5.4rem]">
            Illustrations That Make Stories{" "}
            <span className="squiggle italic font-wonky text-coral">Feel Alive</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I create warm, expressive, and imaginative illustrations for children’s books, book
            covers, character design, and whimsical storytelling projects. My work is designed to
            bring charm, personality, and visual magic to every idea.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="ink" size="xl">
              <a href="#featured">
                View My Work <ArrowDown />
              </a>
            </Button>
            <WhatsAppButton />
            <UpworkButton />
            <BookCallButton />
          </div>
        </div>

        <HeroArtwork />
      </div>
    </section>
  );
}

function HeroArtwork() {
  return (
    <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[560px]">
      {/* backdrop shapes */}
      <div className="absolute inset-[8%] rounded-full bg-lilac-soft" aria-hidden />
      <div className="absolute right-[4%] top-[6%] size-24 rounded-full bg-mustard-soft" aria-hidden />

      {/* portrait */}
      <div className="absolute inset-x-[17%] bottom-[4%] top-[3%] arch overflow-hidden bg-lilac-soft shadow-lift ring-8 ring-card">
        <img
          src={headshot.url}
          alt="Adeniran Felicia, children’s book illustrator"
          className="size-full object-cover object-[50%_22%]"
          fetchPriority="high"
        />
      </div>

      <svg
        viewBox="0 0 200 200"
        className="absolute -left-1 bottom-[14%] z-10 w-24 drop-shadow-md animate-spin-slow text-coral sm:w-28"
        aria-hidden
      >
        <defs>
          <path id="circle-text" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <circle cx="100" cy="100" r="96" className="fill-card" />
        <text className="fill-current font-sans text-[19px] font-semibold uppercase tracking-[0.32em]">
          <textPath href="#circle-text">picture books · covers · characters ·</textPath>
        </text>
        <path d="M100 82 l5 13 14 1 -11 9 4 14 -12 -8 -12 8 4 -14 -11 -9 14 -1z" className="fill-mustard" />
      </svg>

      {/* floating art cards */}
      {heroArt.cover && (
        <div
          className="book absolute left-0 top-[8%] w-[24%] animate-float"
          style={{ "--r": "-9deg" } as CSSProperties}
        >
          <img src={heroArt.cover.image} alt="Book cover concept: Lola and the Lantern Garden" className="block h-auto w-full" />
        </div>
      )}
      {heroArt.scene && (
        <img
          src={heroArt.scene.image}
          alt="Storybook scene: Moonlight Fireflies"
          className="absolute right-0 top-[30%] w-[25%] animate-float-slow rounded-2xl shadow-book ring-4 ring-card"
          style={{ "--r": "8deg", animationDelay: "-2s" } as CSSProperties}
        />
      )}
      {heroArt.character && (
        <img
          src={heroArt.character.image}
          alt="Character design: Bear in Raincoat"
          className="absolute bottom-[2%] right-[6%] w-[21%] animate-float rounded-2xl bg-card shadow-book ring-4 ring-card"
          style={{ "--r": "-5deg", animationDelay: "-4s" } as CSSProperties}
        />
      )}

      {/* hand-written note */}
      <div className="absolute -top-2 right-[8%] hidden rotate-6 sm:block">
        <p className="font-hand text-2xl text-foreground">storybook magic!</p>
        <svg viewBox="0 0 120 60" className="ml-6 w-20 text-coral" aria-hidden>
          <path
            d="M10 8 C 40 10, 70 20, 80 50 M80 50 l-12 -6 M80 50 l4 -13"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="400"
            className="animate-draw"
          />
        </svg>
      </div>
    </div>
  );
}
