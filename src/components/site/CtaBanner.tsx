import type { CSSProperties } from "react";

import { getItem } from "@/data/portfolio";
import { InquiryButton, UpworkButton, WhatsAppButton } from "./ContactButtons";

const pieces = ["floating-island-house", "the-star-catchers", "fox-character-study"]
  .map((s) => getItem(s))
  .filter((i): i is NonNullable<typeof i> => !!i);

export function CtaBanner({
  title = "Let’s Bring Your Story to Life",
  text = "If you’re looking for expressive illustrations, charming characters, or a beautiful children’s book visual style, I’d love to hear about your project.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-4xl bg-lilac-soft px-6 py-16 text-center sm:px-12 md:py-24">
        <div className="absolute -left-16 -top-16 size-64 rounded-full bg-coral-soft" aria-hidden />
        <div className="absolute -bottom-24 -right-10 size-72 rounded-full bg-mustard-soft" aria-hidden />
        {pieces[0] && (
          <img
            src={pieces[0].image}
            alt=""
            className="absolute left-[4%] top-10 hidden w-28 animate-float rounded-2xl shadow-book ring-4 ring-card lg:block"
            style={{ "--r": "-8deg" } as CSSProperties}
          />
        )}
        {pieces[1] && (
          <img
            src={pieces[1].image}
            alt=""
            className="book absolute bottom-10 right-[5%] hidden w-28 animate-float-slow lg:block"
            style={{ "--r": "7deg" } as CSSProperties}
          />
        )}
        {pieces[2] && (
          <img
            src={pieces[2].image}
            alt=""
            className="absolute bottom-12 left-[9%] hidden w-24 animate-float-slow rounded-2xl shadow-book ring-4 ring-card xl:block"
            style={{ "--r": "5deg" } as CSSProperties}
          />
        )}
        <div className="relative mx-auto max-w-2xl">
          <p className="font-hand text-2xl text-coral">your story, illustrated</p>
          <h2 className="mt-2 text-4xl font-semibold leading-[1.05] text-foreground sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppButton />
            <UpworkButton />
            <InquiryButton />
          </div>
        </div>
      </div>
    </section>
  );
}
