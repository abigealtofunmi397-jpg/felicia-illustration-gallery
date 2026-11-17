/**
 * SAMPLE reviews for layout only. They are shown with a visible "Sample review"
 * label and must be replaced with verified client wording before being presented as real.
 */
export type Testimonial = { quote: string; label: string; project: string; sample: boolean };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Communication was clear from the first message, and every round of sketches moved the book closer to what I had pictured. The final illustrations felt warm and full of life.",
    label: "Children’s Book Client",
    project: "Picture book illustrations",
    sample: true,
  },
  {
    quote:
      "The cover concept captured the mood of the story straight away. Colours, lettering space and the main character all worked together beautifully.",
    label: "Book Cover Client",
    project: "Illustrated cover",
    sample: true,
  },
  {
    quote:
      "Our main character finally has a personality! The expression sheet made it easy to keep him consistent across every page.",
    label: "Character Design Client",
    project: "Character sheet",
    sample: true,
  },
  {
    quote:
      "Professional, patient and genuinely creative. Deadlines were met and feedback was always welcomed with a smile.",
    label: "Self-Publishing Author",
    project: "Storybook interiors",
    sample: true,
  },
  {
    quote:
      "Exactly the playful, whimsical energy we were hoping for — kids light up when they see the artwork.",
    label: "Illustration Client",
    project: "Whimsical spot illustrations",
    sample: true,
  },
];
