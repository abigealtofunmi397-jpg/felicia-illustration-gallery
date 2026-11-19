import { assetUrl } from "@/lib/site";

type AssetPointer = { default: { url: string } };

const assets = import.meta.glob<AssetPointer>("../assets/portfolio/*.asset.json", {
  eager: true,
});

function art(file: string): string {
  const hit = assets[`../assets/portfolio/${file}.jpg.asset.json`];
  if (!hit) throw new Error(`Missing portfolio asset: ${file}`);
  return assetUrl(hit.default.url);
}

export type CategoryId = "covers" | "characters" | "interiors" | "whimsical";

export const CATEGORIES: { id: CategoryId; label: string; short: string; blurb: string }[] = [
  {
    id: "covers",
    label: "Book Cover Designs",
    short: "Book Covers",
    blurb: "Illustrated covers with title lettering, built to stand out on a shelf or a screen.",
  },
  {
    id: "characters",
    label: "Character Designs",
    short: "Characters",
    blurb: "Character sheets, expressions and turnarounds that keep a cast consistent.",
  },
  {
    id: "interiors",
    label: "Children’s Book / Interior Illustrations",
    short: "Interiors",
    blurb: "Full storybook scenes with light, mood and room for the words.",
  },
  {
    id: "whimsical",
    label: "Whimsical / Dr. Seuss–Inspired Illustrations",
    short: "Whimsical",
    blurb: "Playful, exaggerated worlds full of curly shapes and humour — original, never copied.",
  },
];

export const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CategoryId,
  (typeof CATEGORIES)[number]
>;

export type PortfolioItem = {
  slug: string;
  title: string;
  category: CategoryId;
  image: string;
  line: string;
  description: string;
  style: string;
  type: string;
  featured?: boolean;
  accent: "coral" | "sky" | "lilac" | "mustard" | "leaf";
};

export const PORTFOLIO: PortfolioItem[] = [
  // ---------- Children's Book / Interior Illustrations ----------
  {
    slug: "moonlight-fireflies",
    title: "Moonlight Fireflies",
    category: "interiors",
    image: art("01-01-moonlight-fireflies"),
    line: "A quiet night of wonder in the orchard.",
    description:
      "A little girl cups a glowing firefly under a big golden moon — a bedtime scene about small, magical moments.",
    style: "Warm night palette, glowing light sources, soft painterly texture.",
    type: "Picture book spread",
    featured: true,
    accent: "mustard",
  },
  {
    slug: "little-baker-otter",
    title: "Little Baker Otter",
    category: "interiors",
    image: art("01-02-little-baker-otter"),
    line: "Fresh buns, flour clouds and a proud chef.",
    description:
      "A cheerful otter shows off a tray of warm bread in a cosy stone kitchen, ready for a story about trying new things.",
    style: "Golden kitchen light, rich browns, storybook detail.",
    type: "Interior scene",
    accent: "coral",
  },
  {
    slug: "backyard-rocket",
    title: "Backyard Rocket",
    category: "interiors",
    image: art("01-03-backyard-rocket"),
    line: "Big space dreams built from cardboard and paint.",
    description:
      "A young inventor paints a homemade rocket in the garden — imagination turning an ordinary afternoon into an adventure.",
    style: "Bright daylight greens, playful props, expressive pose.",
    type: "Interior scene",
    accent: "coral",
  },
  {
    slug: "grandmas-sunflower-garden",
    title: "Grandma’s Sunflower Garden",
    category: "interiors",
    image: art("01-04-grandmas-sunflower-garden"),
    line: "Planting seeds and stories across generations.",
    description:
      "A grandmother and granddaughter plant sunflowers together, a gentle scene about family, patience and growing things.",
    style: "Sun-washed yellows, tender expressions, textured foliage.",
    type: "Picture book spread",
    accent: "mustard",
  },
  {
    slug: "polar-bear-and-puffin",
    title: "Polar Bear and Puffin",
    category: "interiors",
    image: art("01-05-polar-bear-and-puffin"),
    line: "An unlikely friendship on the ice.",
    description:
      "A fluffy polar bear cub and a curious puffin meet among glittering icebergs — a friendship story with a cool, calm palette.",
    style: "Icy blues and whites, soft fur rendering, gentle humour.",
    type: "Interior scene",
    accent: "sky",
  },
  {
    slug: "underwater-explorer",
    title: "Underwater Explorer",
    category: "interiors",
    image: art("01-06-underwater-explorer"),
    line: "Diving into a reef full of colour.",
    description:
      "A young diver swims alongside a sea turtle and clownfish through a vibrant coral reef, inviting readers to explore.",
    style: "Saturated reef colours, movement, layered depth.",
    type: "Picture book spread",
    accent: "sky",
  },
  {
    slug: "the-bicycle-parade",
    title: "The Bicycle Parade",
    category: "interiors",
    image: art("01-07-the-bicycle-parade"),
    line: "Bunting, blossoms and friends on wheels.",
    description:
      "Children ride decorated bicycles through a sunny village street — a celebration scene full of community and joy.",
    style: "Pastel village palette, busy-but-clear composition.",
    type: "Interior scene",
    accent: "coral",
  },
  {
    slug: "young-dragon-flight",
    title: "Young Dragon Flight",
    category: "interiors",
    image: art("01-08-young-dragon-flight"),
    line: "A first flight over the valley.",
    description:
      "A small, delighted dragon soars above mountains and waterfalls, capturing the thrill of trying something brave.",
    style: "Wide landscape, airy light, energetic character.",
    type: "Picture book spread",
    accent: "leaf",
  },
  {
    slug: "the-rabbit-library",
    title: "The Rabbit Library",
    category: "interiors",
    image: art("01-09-the-rabbit-library"),
    line: "Story time in the coziest burrow.",
    description:
      "A spectacled rabbit reads to two little bunnies among towering bookshelves, glowing with lamplight and autumn leaves.",
    style: "Amber lamplight, cosy textures, warm character acting.",
    type: "Interior scene",
    featured: true,
    accent: "mustard",
  },
  {
    slug: "whale-under-the-stars",
    title: "Whale Under the Stars",
    category: "interiors",
    image: art("01-10-whale-under-the-stars"),
    line: "A boy, the sea and a sky full of stars.",
    description:
      "A boy sits on a rock as a great whale rises beneath the Milky Way — a dreamy, quiet moment of awe.",
    style: "Deep night blues, sparkling highlights, cinematic scale.",
    type: "Picture book spread",
    featured: true,
    accent: "sky",
  },

  // ---------- Book Cover Designs ----------
  {
    slug: "lola-and-the-lantern-garden",
    title: "Lola and the Lantern Garden",
    category: "covers",
    image: art("02-01-lola-and-the-lantern-garden"),
    line: "A glowing invitation into a magical garden.",
    description:
      "Lola carries a lantern through a garden of floating lights. The title sits in warm gold above a deep blue night.",
    style: "Midnight blue with lantern gold, centred heroine, classic title lockup.",
    type: "Book cover concept",
    featured: true,
    accent: "mustard",
  },
  {
    slug: "the-brave-little-explorer",
    title: "The Brave Little Explorer",
    category: "covers",
    image: art("02-02-the-brave-little-explorer"),
    line: "Adventure starts at the edge of the meadow.",
    description:
      "A cheerful explorer strides into a sunny landscape — a cover that promises gentle adventure and courage.",
    style: "Fresh greens and sky blue, dynamic walking pose.",
    type: "Book cover concept",
    accent: "leaf",
  },
  {
    slug: "milo-and-the-talking-tree",
    title: "Milo and the Talking Tree",
    category: "covers",
    image: art("02-03-milo-and-the-talking-tree"),
    line: "A friendly tree with a secret to share.",
    description:
      "Milo meets a smiling old tree glowing with forest light. The cover balances wonder with a cosy, safe feeling.",
    style: "Forest greens, glowing centre, expressive tree character.",
    type: "Book cover concept",
    accent: "leaf",
  },
  {
    slug: "the-star-catchers",
    title: "The Star Catchers",
    category: "covers",
    image: art("02-04-the-star-catchers"),
    line: "Two friends reaching for a shining star.",
    description:
      "Two girls reach up to catch a bright star in a sky full of sparkles — a cover about friendship and big dreams.",
    style: "Starry indigo, sparkle accents, upward composition.",
    type: "Book cover concept",
    accent: "lilac",
  },
  {
    slug: "timi-builds-a-rocket",
    title: "Timi Builds a Rocket",
    category: "covers",
    image: art("02-05-timi-builds-a-rocket"),
    line: "Goggles on — it’s launch day!",
    description:
      "Timi stands proudly beside the rocket he built. Bold lettering and a deep space backdrop make the cover pop.",
    style: "Space navy with sunny yellow, bold title stack.",
    type: "Book cover concept",
    accent: "mustard",
  },
  {
    slug: "the-forest-picnic-club",
    title: "The Forest Picnic Club",
    category: "covers",
    image: art("02-06-the-forest-picnic-club"),
    line: "A fox, a bear and a bunny share a feast.",
    description:
      "Woodland friends gather on a picnic blanket in a sun-dappled forest — a warm cover for a story about sharing.",
    style: "Soft woodland palette, animal ensemble, friendly title.",
    type: "Book cover concept",
    accent: "leaf",
  },
  {
    slug: "my-feelings-have-colors",
    title: "My Feelings Have Colors",
    category: "covers",
    image: art("02-07-my-feelings-have-colors"),
    line: "A rainbow swirl of emotions.",
    description:
      "A joyful girl surrounded by flowing rainbow colour — a cover for an emotional-learning picture book.",
    style: "Rainbow swirls, high-key palette, playful lettering.",
    type: "Book cover concept",
    accent: "coral",
  },
  {
    slug: "the-secret-of-the-blue-door",
    title: "The Secret of the Blue Door",
    category: "covers",
    image: art("02-08-the-secret-of-the-blue-door"),
    line: "What waits behind the glowing door?",
    description:
      "A mysterious blue door glows inside an overgrown stone arch, inviting readers into a gentle mystery.",
    style: "Teal and emerald, magical glow, intrigue without fright.",
    type: "Book cover concept",
    accent: "sky",
  },
  {
    slug: "the-day-the-clouds-learned-to-laugh",
    title: "The Day the Clouds Learned to Laugh",
    category: "covers",
    image: art("02-09-the-day-the-clouds-learned-to-laugh"),
    line: "A giggling cloud and the children below.",
    description:
      "A big smiling cloud floats above children in a meadow — a light-hearted cover full of sky and sunshine.",
    style: "Airy blues, soft whites, humorous character.",
    type: "Book cover concept",
    accent: "sky",
  },
  {
    slug: "zara-and-the-magic-map",
    title: "Zara and the Magic Map",
    category: "covers",
    image: art("02-10-zara-and-the-magic-map"),
    line: "A glowing map and a girl ready to follow it.",
    description:
      "Zara studies a shimmering treasure map lit from within — a cover that sparks curiosity and adventure.",
    style: "Plum and amber glow, close-up heroine, rich title.",
    type: "Book cover concept",
    featured: true,
    accent: "lilac",
  },

  // ---------- Character Designs ----------
  {
    slug: "curious-schoolboy-turnaround",
    title: "Curious Schoolboy Turnaround",
    category: "characters",
    image: art("03-01-curious-schoolboy-turnaround"),
    line: "Front, side and back views for consistency.",
    description:
      "A character turnaround of a curious schoolboy in a yellow hoodie, showing how he looks from every angle.",
    style: "Clean turnaround layout, consistent proportions.",
    type: "Character turnaround",
    accent: "mustard",
  },
  {
    slug: "joyful-girl-expressions",
    title: "Joyful Girl Expressions",
    category: "characters",
    image: art("03-02-joyful-girl-expressions"),
    line: "Four moods, one memorable face.",
    description:
      "An expression sheet exploring joy, surprise, thoughtfulness and mischief for a lively young heroine.",
    style: "Expression sheet, consistent features, warm skin tones.",
    type: "Expression sheet",
    featured: true,
    accent: "coral",
  },
  {
    slug: "young-forest-explorer",
    title: "Young Forest Explorer",
    category: "characters",
    image: art("03-03-young-forest-explorer"),
    line: "Colour design beside a clean line study.",
    description:
      "A safari-hat explorer shown in full colour alongside a line drawing, ready to be posed across a book.",
    style: "Colour + line pairing, outdoorsy palette.",
    type: "Character sheet",
    accent: "leaf",
  },
  {
    slug: "fox-character-study",
    title: "Fox Character Study",
    category: "characters",
    image: art("03-04-fox-character-study"),
    line: "A clever fox in colour and sketch.",
    description:
      "A friendly fox explored in two colour poses and two sketches, focusing on silhouette and personality.",
    style: "Warm orange palette, sketch studies, appealing shapes.",
    type: "Character study",
    accent: "coral",
  },
  {
    slug: "friendly-robot-design",
    title: "Friendly Robot Design",
    category: "characters",
    image: art("03-05-friendly-robot-design"),
    line: "A round, huggable helper bot.",
    description:
      "A cute robot character with big screen eyes, plus construction sketches showing its simple, rounded build.",
    style: "Soft whites and blue accents, rounded geometry.",
    type: "Character sheet",
    accent: "sky",
  },
  {
    slug: "bear-in-raincoat",
    title: "Bear in Raincoat",
    category: "characters",
    image: art("03-06-bear-in-raincoat"),
    line: "Ready for puddles in sunny yellow.",
    description:
      "A cuddly bear in a bright yellow raincoat and hat, with sketch variations for a rainy-day story.",
    style: "Cheerful yellow against warm browns, cosy textures.",
    type: "Character sheet",
    featured: true,
    accent: "mustard",
  },
  {
    slug: "fantasy-dragon-character",
    title: "Fantasy Dragon Character",
    category: "characters",
    image: art("03-07-fantasy-dragon-character"),
    line: "A goofy purple dragon with big heart.",
    description:
      "A friendly purple dragon in colour with a row of head sketches exploring different expressions.",
    style: "Purple and gold, comedic expressions, sketch row.",
    type: "Character study",
    accent: "lilac",
  },
  {
    slug: "grandfather-scientist",
    title: "Grandfather Scientist",
    category: "characters",
    image: art("03-08-grandfather-scientist"),
    line: "Wild hair, lab coat, endless curiosity.",
    description:
      "A warm, eccentric grandfather scientist in a lab coat, with a line sketch showing his face in detail.",
    style: "Neutral lab tones, expressive face, gentle humour.",
    type: "Character sheet",
    accent: "sky",
  },
  {
    slug: "ocean-mermaid-character",
    title: "Ocean Mermaid Character",
    category: "characters",
    image: art("03-09-ocean-mermaid-character"),
    line: "A joyful mermaid with a shimmering tail.",
    description:
      "A cheerful mermaid with curly hair and a teal tail, paired with a pencil study of her face.",
    style: "Teal and coral, flowing hair, playful pose.",
    type: "Character sheet",
    accent: "sky",
  },
  {
    slug: "rabbit-adventurer",
    title: "Rabbit Adventurer",
    category: "characters",
    image: art("03-10-rabbit-adventurer"),
    line: "A dapper bunny with expression sketches.",
    description:
      "A rabbit in a blue jacket, with sketched head studies capturing a range of reactions.",
    style: "Soft beige and denim blue, expressive ears.",
    type: "Character study",
    accent: "sky",
  },

  // ---------- Whimsical / Dr. Seuss–Inspired ----------
  {
    slug: "the-crooked-lighthouse",
    title: "The Crooked Lighthouse",
    category: "whimsical",
    image: art("04-01-the-crooked-lighthouse"),
    line: "A wobbly lighthouse on a curly hill.",
    description:
      "A leaning striped lighthouse rises from a swirly hill under purple tufty trees — whimsy built from exaggerated shapes.",
    style: "Curvy architecture, candy stripes, bold sky.",
    type: "Whimsical scene",
    featured: true,
    accent: "coral",
  },
  {
    slug: "the-traveling-storyteller",
    title: "The Traveling Storyteller",
    category: "whimsical",
    image: art("04-02-the-traveling-storyteller"),
    line: "A tall-hatted wanderer with a windblown scarf.",
    description:
      "A lanky storyteller in a tall striped hat and fluttering scarf, drawn with exaggerated, playful proportions.",
    style: "Red and white accents, windswept movement, comic energy.",
    type: "Whimsical character",
    accent: "coral",
  },
  {
    slug: "candy-colored-trees",
    title: "Candy-Colored Trees",
    category: "whimsical",
    image: art("04-03-candy-colored-trees"),
    line: "A walk beneath fluffy, sherbet-toned trees.",
    description:
      "A child looks up at tall, tufted trees in sherbet colours — a dreamy landscape with an imaginative twist.",
    style: "Tufted shapes, sherbet palette, tall verticals.",
    type: "Whimsical scene",
    accent: "mustard",
  },
  {
    slug: "the-long-legged-bird",
    title: "The Long-Legged Bird",
    category: "whimsical",
    image: art("04-04-the-long-legged-bird"),
    line: "A gangly bird with a big personality.",
    description:
      "A tall, fluffy bird with spindly legs perches on a rock, all feathers and attitude.",
    style: "Exaggerated proportions, feathery texture, sky blues.",
    type: "Whimsical character",
    accent: "mustard",
  },
  {
    slug: "silly-forest-creatures",
    title: "Silly Forest Creatures",
    category: "whimsical",
    image: art("04-05-silly-forest-creatures"),
    line: "A fuzzy, giggling creature tower.",
    description:
      "Furry, googly-eyed creatures stacked on top of each other — pure silliness designed to make kids laugh.",
    style: "Fuzzy textures, bright contrast, comic stacking.",
    type: "Whimsical characters",
    accent: "lilac",
  },
  {
    slug: "rainbow-road-village",
    title: "Rainbow Road Village",
    category: "whimsical",
    image: art("04-06-rainbow-road-village"),
    line: "A winding striped road to a faraway town.",
    description:
      "A candy-striped road curls through rolling hills toward a whimsical hilltop village.",
    style: "Swirling perspective, pastel stripes, rolling hills.",
    type: "Whimsical landscape",
    accent: "leaf",
  },
  {
    slug: "blue-furry-bookworm",
    title: "Blue Furry Bookworm",
    category: "whimsical",
    image: art("04-07-blue-furry-bookworm"),
    line: "A shaggy blue creature who loves to read.",
    description:
      "A fluffy blue monster happily clutching a red book — perfect for a story that celebrates reading.",
    style: "Shaggy fur, blue and red contrast, friendly grin.",
    type: "Whimsical character",
    accent: "sky",
  },
  {
    slug: "floating-island-house",
    title: "Floating Island House",
    category: "whimsical",
    image: art("04-08-floating-island-house"),
    line: "A little house drifting through the clouds.",
    description:
      "A crooked cottage sits on a floating island with curly roots, surrounded by soft clouds and odd little plants.",
    style: "Floating composition, curly roots, airy sky palette.",
    type: "Whimsical scene",
    accent: "sky",
  },
  {
    slug: "golden-dragon-over-hills",
    title: "Golden Dragon Over Hills",
    category: "whimsical",
    image: art("04-09-golden-dragon-over-hills"),
    line: "A golden flyer above a topsy-turvy town.",
    description:
      "A golden, fish-like dragon glides over swirly hills and wonky houses in a bright, playful sky.",
    style: "Golden accents, wonky buildings, rolling hills.",
    type: "Whimsical scene",
    accent: "mustard",
  },
  {
    slug: "wandering-magician",
    title: "Wandering Magician",
    category: "whimsical",
    image: art("04-10-wandering-magician"),
    line: "Mid-stride with a flourish and a grin.",
    description:
      "A lanky magician strides across a golden hill, coat flapping, full of exaggerated storybook energy.",
    style: "Elastic pose, warm oranges, dynamic diagonal.",
    type: "Whimsical character",
    accent: "coral",
  },
];

export const FEATURED = PORTFOLIO.filter((item) => item.featured);

export function getItem(slug: string | undefined): PortfolioItem | undefined {
  return slug ? PORTFOLIO.find((item) => item.slug === slug) : undefined;
}

export function itemsIn(category: CategoryId | undefined): PortfolioItem[] {
  return category ? PORTFOLIO.filter((item) => item.category === category) : PORTFOLIO;
}

export function isCategory(value: unknown): value is CategoryId {
  return typeof value === "string" && CATEGORIES.some((c) => c.id === value);
}
