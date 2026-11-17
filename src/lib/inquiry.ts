import { z } from "zod";

export const PROJECT_TYPES = [
  "Children’s book illustration",
  "Book cover design",
  "Character design",
  "Storybook interior illustrations",
  "Whimsical / cartoon illustration",
  "Dr. Seuss–inspired illustration",
  "Educational illustration",
  "Something else",
] as const;

export const BUDGETS = [
  "Under $300",
  "$300 – $800",
  "$800 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export const CONTACT_METHODS = ["WhatsApp", "Email", "Upwork"] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  projectType: z.enum(PROJECT_TYPES, { errorMap: () => ({ message: "Choose a project type" }) }),
  projectTitle: z.string().trim().max(150).optional().default(""),
  description: z
    .string()
    .trim()
    .min(20, "Tell me a little more (at least 20 characters)")
    .max(2000),
  illustrations: z.string().trim().max(50).optional().default(""),
  style: z.string().trim().max(150).optional().default(""),
  timeline: z.string().trim().max(100).optional().default(""),
  budget: z.enum(BUDGETS, { errorMap: () => ({ message: "Choose a budget range" }) }),
  contactMethod: z.enum(CONTACT_METHODS),
});

export type Inquiry = z.infer<typeof inquirySchema>;

/** Formats an inquiry as a WhatsApp-ready message. Empty optional fields are skipped. */
export function buildInquiryMessage(v: Inquiry): string {
  const lines: [string, string][] = [
    ["Name", v.name],
    ["Email", v.email],
    ["Project type", v.projectType],
    ["Project title", v.projectTitle],
    ["Illustrations needed", v.illustrations],
    ["Desired style", v.style],
    ["Timeline", v.timeline],
    ["Budget", v.budget],
    ["Preferred contact", v.contactMethod],
  ];
  return [
    "Hi Adeniran Felicia, I’d love to discuss a project. Here are the details:",
    "",
    ...lines
      .filter(([, value]) => value && value.length > 0)
      .map(([k, value]) => `• ${k}: ${value}`),
    "",
    "About the project:",
    v.description,
  ].join("\n");
}
