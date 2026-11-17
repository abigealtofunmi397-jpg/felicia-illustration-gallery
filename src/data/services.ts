import type { LucideIcon } from "lucide-react";
import { BookOpen, BookMarked, Smile, Layers, Sparkles, Wand2, GraduationCap } from "lucide-react";

import { getItem } from "./portfolio";

export type Service = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  accent: "coral" | "sky" | "lilac" | "mustard" | "leaf";
  sample: string;
};

const sample = (slug: string) => getItem(slug)?.image ?? "";

export const SERVICES: Service[] = [
  {
    slug: "childrens-book-illustration",
    name: "Children’s Book Illustration",
    description:
      "Illustrations for picture books and children’s stories that are expressive, imaginative, and designed to support storytelling.",
    icon: BookOpen,
    accent: "coral",
    sample: sample("moonlight-fireflies"),
  },
  {
    slug: "book-cover-design",
    name: "Book Cover Design",
    description:
      "Eye-catching illustrated covers for children’s books and related story-driven publishing projects.",
    icon: BookMarked,
    accent: "lilac",
    sample: sample("lola-and-the-lantern-garden"),
  },
  {
    slug: "character-design",
    name: "Character Design",
    description:
      "Original character concepts with personality, expression, and consistency for books, storytelling, and kid-friendly projects.",
    icon: Smile,
    accent: "mustard",
    sample: sample("bear-in-raincoat"),
  },
  {
    slug: "storybook-interiors",
    name: "Storybook Interior Illustrations",
    description:
      "Interior scenes, picture book spreads, and sequential illustrations that bring a narrative to life.",
    icon: Layers,
    accent: "sky",
    sample: sample("the-rabbit-library"),
  },
  {
    slug: "whimsical-cartoon",
    name: "Whimsical & Cartoon Illustration",
    description:
      "Charming, playful illustrations with personality, vibrant color, and a storybook feel.",
    icon: Sparkles,
    accent: "leaf",
    sample: sample("blue-furry-bookworm"),
  },
  {
    slug: "seuss-inspired",
    name: "Dr. Seuss–Inspired Illustration",
    description:
      "Playful, imaginative, whimsical illustrations inspired by exaggerated shapes, fantasy environments, and humorous storytelling energy — always original, never copying copyrighted characters.",
    icon: Wand2,
    accent: "coral",
    sample: sample("the-crooked-lighthouse"),
  },
  {
    slug: "educational",
    name: "Educational & Kid-Friendly Illustration",
    description:
      "Illustrations for learning materials, activity books, and educational storytelling resources.",
    icon: GraduationCap,
    accent: "sky",
    sample: sample("friendly-robot-design"),
  },
];
