export type Accent = "coral" | "sky" | "lilac" | "mustard" | "leaf";

/** Literal class maps so Tailwind can see every accent class. */
export const accentSoftBg: Record<Accent, string> = {
  coral: "bg-coral-soft",
  sky: "bg-sky-soft",
  lilac: "bg-lilac-soft",
  mustard: "bg-mustard-soft",
  leaf: "bg-leaf-soft",
};

export const accentText: Record<Accent, string> = {
  coral: "text-coral",
  sky: "text-sky",
  lilac: "text-lilac",
  mustard: "text-mustard",
  leaf: "text-leaf",
};

export const accentSolidBg: Record<Accent, string> = {
  coral: "bg-coral",
  sky: "bg-sky",
  lilac: "bg-lilac",
  mustard: "bg-mustard",
  leaf: "bg-leaf",
};
