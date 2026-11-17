import { getItem } from "./portfolio";

export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  tag: string;
  cover: string;
  coverAlt: string;
  coverPosition?: string;
  intro: string;
  sections: BlogSection[];
  closing: string;
};

const cover = (slug: string) => getItem(slug)?.image ?? "";

export const POSTS: BlogPost[] = [
  {
    slug: "what-makes-a-childrens-book-illustration-memorable",
    title: "What Makes a Children’s Book Illustration Memorable?",
    excerpt:
      "The pictures children ask to see again and again share a few quiet ingredients. Here’s what they are — and how to build them into your book.",
    date: "2026-11-10",
    readMinutes: 6,
    tag: "Picture Books",
    cover: cover("moonlight-fireflies"),
    coverAlt: "A girl holding a glowing firefly under the moon",
    intro:
      "Think back to the picture books you loved as a child. Chances are you can still see a few of the pages in your mind — a particular sky, a funny face, a cosy room you wanted to climb into. Memorable illustrations aren’t an accident. They come from a handful of choices that work together to make a reader feel something.",
    sections: [
      {
        heading: "Emotion comes first",
        paragraphs: [
          "Children read faces before they read words. An illustration becomes memorable when the reader instantly understands how a character feels — excited, nervous, proud, sleepy. Clear, expressive faces and body language do more than any amount of background detail.",
          "When planning a spread, I always ask: what is the single feeling of this moment? Everything else on the page should support that feeling.",
        ],
      },
      {
        heading: "Characters children want to be friends with",
        paragraphs: [
          "Strong characters have a recognisable silhouette, a consistent colour palette and little quirks that make them feel real — a hat that’s always slightly too big, a favourite scarf, a particular way of standing.",
          "Consistency matters too. If a character looks different on every page, children notice. A simple character sheet created before the final art keeps them recognisable from cover to last page.",
        ],
      },
      {
        heading: "Pictures that add to the words",
        paragraphs: [
          "The best picture books don’t just repeat the text. The illustration shows what the words leave out: a cat sneaking off with a sandwich, a tiny snail travelling across every spread, a grandparent’s proud smile in the background.",
        ],
        bullets: [
          "Hidden details reward re-reading.",
          "Visual jokes let children feel clever.",
          "Background characters can tell their own small story.",
        ],
      },
      {
        heading: "Colour and light that set the mood",
        paragraphs: [
          "A warm golden glow says safe and cosy. Deep blues feel calm and dreamy. Bright, saturated colours bring energy. Thinking about colour across the whole book — not just page by page — creates a rhythm that carries readers from the opening to the final, satisfying moment.",
        ],
      },
      {
        heading: "Room to breathe",
        paragraphs: [
          "Memorable pages aren’t crowded. Clear composition guides the eye to what matters and leaves space for the text to sit comfortably. A quiet, simple page placed between two busy ones can become the moment readers remember most.",
        ],
      },
    ],
    closing:
      "If you have a story you’d love to see illustrated with warmth and personality, I’d be happy to talk through your ideas.",
  },
  {
    slug: "how-to-prepare-for-a-childrens-book-illustration-project",
    title: "How to Prepare for a Children’s Book Illustration Project",
    excerpt:
      "A little preparation makes the whole collaboration smoother, faster and more fun. Here’s a simple checklist before you reach out to an illustrator.",
    date: "2026-11-03",
    readMinutes: 7,
    tag: "Working Together",
    cover: cover("the-rabbit-library"),
    coverAlt: "A rabbit reading a book to two little bunnies in a library",
    intro:
      "Starting a picture book can feel exciting and a bit overwhelming. The good news: you don’t need to have everything figured out. But having a few things ready before you contact an illustrator will help you get accurate quotes, realistic timelines and artwork that matches your vision.",
    sections: [
      {
        heading: "1. Finish (or nearly finish) your manuscript",
        paragraphs: [
          "Illustrations are planned around the text, so a final or near-final manuscript is the most useful thing you can share. Small edits later are fine, but big changes to the story can mean redrawing pages.",
        ],
      },
      {
        heading: "2. Decide on your book format",
        paragraphs: [
          "Know roughly how your book will be printed or published. This affects page size, the number of illustrations and how the art is laid out.",
        ],
        bullets: [
          "Trim size (for example 8.5 × 8.5 in, or 8 × 10 in)",
          "Number of pages — picture books are often 24 or 32 pages",
          "Full spreads, single pages or spot illustrations",
          "Print, e-book, or both",
        ],
      },
      {
        heading: "3. Describe your characters",
        paragraphs: [
          "Share what you know about your main characters: age, personality, clothing, skin tone, hair, any important details. Reference photos are welcome. If you’re unsure, that’s what character design is for — we can explore options together.",
        ],
      },
      {
        heading: "4. Gather style references",
        paragraphs: [
          "Collect a few images of illustrations you love — and some you don’t. Pointing to what feels right is often easier than describing it. Mention the age group of your readers too, as that shapes the style.",
        ],
      },
      {
        heading: "5. Know your timeline and budget",
        paragraphs: [
          "A full picture book usually takes several weeks to a few months, depending on the number of illustrations and revision rounds. Having a target launch date and a budget range helps an illustrator suggest a realistic plan.",
        ],
      },
      {
        heading: "6. Plan for feedback",
        paragraphs: [
          "Most projects move through stages: character sketches, page roughs, then final colour. Decide who will give feedback (just you, or also an editor or co-author) so that comments arrive together and the project keeps moving.",
        ],
      },
    ],
    closing:
      "Ready to start, or still figuring things out? Send me what you have — I’m happy to help you shape the next steps.",
  },
  {
    slug: "what-makes-a-great-book-cover-for-a-childrens-story",
    title: "What Makes a Great Book Cover for a Children’s Story?",
    excerpt:
      "A cover has a few seconds to win over a child and the adult holding their hand. These principles help it do the job.",
    date: "2026-10-27",
    readMinutes: 5,
    tag: "Book Covers",
    cover: cover("zara-and-the-magic-map"),
    coverAlt: "A girl studying a glowing magic map on a book cover",
    coverPosition: "50% 70%",
    intro:
      "People really do judge a book by its cover — especially in children’s books, where the cover must appeal to two audiences at once: the young reader who’s drawn to colour and character, and the parent, teacher or librarian deciding what to buy.",
    sections: [
      {
        heading: "One clear focal point",
        paragraphs: [
          "Strong covers usually focus on one main idea: a character in a defining moment. Too many elements compete for attention and become confusing at thumbnail size, which is how most people first see a cover online.",
        ],
      },
      {
        heading: "A character with an invitation",
        paragraphs: [
          "Eye contact, an open gesture or a curious expression invites readers in. The main character should look like someone a child would want to follow into an adventure.",
        ],
      },
      {
        heading: "Space for the title",
        paragraphs: [
          "The title is part of the design, not an afterthought. I plan the composition with room for lettering from the start, so the words feel integrated and stay readable on shelves and small screens.",
        ],
      },
      {
        heading: "A colour story that sets expectations",
        paragraphs: [
          "Colour tells readers what kind of book this is. Deep blues and gold suggest bedtime magic; bright greens and sunshine suggest outdoor fun. A distinctive palette also helps your book stand out next to others in the same genre.",
        ],
      },
      {
        heading: "Test it small",
        paragraphs: [
          "Before finalising, view the cover at the size of a phone thumbnail. If the character and title still read clearly, the cover is doing its job.",
        ],
        bullets: [
          "Is the title readable at a glance?",
          "Can you tell who the main character is?",
          "Does it hint at the story’s mood?",
        ],
      },
    ],
    closing:
      "Need a cover that makes people stop scrolling? Let’s talk about your story and the feeling you want it to give.",
  },
  {
    slug: "why-character-design-matters-in-storytelling",
    title: "Why Character Design Matters in Storytelling",
    excerpt:
      "Great characters are the reason children return to a story. Here’s why investing in design early pays off on every page.",
    date: "2026-10-20",
    readMinutes: 6,
    tag: "Characters",
    cover: cover("joyful-girl-expressions"),
    coverAlt: "An expression sheet of a joyful girl character",
    intro:
      "Children don’t usually remember plot structure. They remember characters — the brave rabbit, the clumsy dragon, the girl with the yellow raincoat. A well-designed character becomes the emotional anchor of your story, and often the face of your brand.",
    sections: [
      {
        heading: "Shape tells personality",
        paragraphs: [
          "Rounded shapes feel friendly and soft. Tall, angular shapes can feel mischievous or energetic. Small, compact shapes read as young or cute. Choosing shapes deliberately helps children understand a character before a single word is read.",
        ],
      },
      {
        heading: "Expressions build connection",
        paragraphs: [
          "An expression sheet explores how a character looks when happy, worried, surprised or determined. This range lets the illustrations carry emotion clearly and keeps the character recognisable whatever they feel.",
        ],
      },
      {
        heading: "Consistency across pages",
        paragraphs: [
          "Turnarounds (front, side and back views) and colour references make sure your character looks the same on page 3 and page 30 — and in any future sequels, merchandise or classroom materials.",
        ],
      },
      {
        heading: "Room to grow",
        paragraphs: [
          "A clear, appealing design works beyond the book: on bookmarks, stickers, social media and school visits. Thinking about these uses early saves time later.",
        ],
        bullets: [
          "Simple silhouettes are easy to recognise.",
          "Limited, consistent colour palettes reproduce well.",
          "Signature details make a character memorable.",
        ],
      },
    ],
    closing:
      "If your story needs a cast with heart and personality, I’d love to help bring them to life.",
  },
  {
    slug: "whimsical-vs-traditional-childrens-illustration",
    title: "Whimsical Illustration vs. Traditional Children’s Illustration",
    excerpt:
      "Both styles can be beautiful — but they create very different reading experiences. Here’s how to choose the right one for your book.",
    date: "2026-10-13",
    readMinutes: 5,
    tag: "Style",
    cover: cover("floating-island-house"),
    coverAlt: "A whimsical house on a floating island among clouds",
    intro:
      "When authors describe the look they want, two words come up often: “traditional” and “whimsical”. They overlap, but understanding the difference helps you pick a style that suits your story and readers.",
    sections: [
      {
        heading: "Traditional children’s illustration",
        paragraphs: [
          "Traditional styles stay close to the real world: believable proportions, natural lighting and familiar settings. They work beautifully for gentle family stories, bedtime books and stories that help children understand everyday life.",
        ],
      },
      {
        heading: "Whimsical illustration",
        paragraphs: [
          "Whimsical styles stretch reality. Trees curl, houses lean, creatures have impossibly long legs. Inspired by the playful energy of classic rhyming books, this style suits humour, rhythm, nonsense verse and imaginative worlds.",
          "Whimsical doesn’t mean copying famous characters. Original work borrows the spirit — exaggeration, bold shapes, surprise — while creating something new.",
        ],
      },
      {
        heading: "How to choose",
        paragraphs: ["Ask yourself a few questions about your story:"],
        bullets: [
          "Is the tone cosy and reflective, or silly and energetic?",
          "Does the story happen in the real world or an invented one?",
          "Is the text rhyming and rhythmic?",
          "How old are your readers?",
        ],
      },
      {
        heading: "Mixing both",
        paragraphs: [
          "Many lovely books sit in between: realistic characters in a slightly exaggerated world, or a grounded story with whimsical dream sequences. A short style exploration at the start of a project helps find the right balance.",
        ],
      },
    ],
    closing:
      "Not sure which style fits your story? Share your manuscript and I’ll suggest a direction.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
