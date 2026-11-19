import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

import headshot from "@/assets/adeniran-felicia-headshot.png.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGETS,
  buildInquiryMessage,
  CONTACT_METHODS,
  inquirySchema,
  PROJECT_TYPES,
  type Inquiry,
} from "@/lib/inquiry";
import { SITE, bookingLink, whatsappLink, assetUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Adeniran Felicia — Start Your Illustration Project" },
      {
        name: "description",
        content:
          "Chat on WhatsApp, hire on Upwork or send a project inquiry to Adeniran Felicia, children’s book illustrator and character designer.",
      },
      { property: "og:title", content: "Contact Adeniran Felicia" },
      {
        property: "og:description",
        content: "Start your children’s book, cover or character design project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FieldErrors = Partial<Record<keyof Inquiry, string>>;

const fieldBase =
  "h-12 rounded-2xl border-input bg-background px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-ring";

function ContactPage() {
  const booking = bookingLink();
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:pt-16">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-3 duration-700">
            <p className="font-hand text-2xl text-coral">say hello</p>
            <h1 className="mt-2 text-5xl font-semibold leading-[1] text-foreground sm:text-7xl">
              Let’s talk about your story
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Choose whatever’s easiest for you — a quick WhatsApp chat, hiring through Upwork, or a
              detailed project inquiry.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-full bg-card py-2 pl-2 pr-6 shadow-soft ring-1 ring-border/70">
            <img
              src={assetUrl(headshot.url)}
              alt="Adeniran Felicia"
              className="size-14 rounded-full object-cover object-[50%_20%]"
            />
            <div>
              <p className="font-semibold text-foreground">Adeniran Felicia</p>
              <p className="text-sm text-muted-foreground">Illustrator & character designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <MethodCard
            icon={<MessageCircle className="size-5" />}
            tone="bg-leaf-soft text-whatsapp"
            title="WhatsApp"
            text={`Quick questions or a friendly first chat. ${SITE.whatsappDisplay}`}
            action={
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            }
          />
          <MethodCard
            icon={<ArrowUpRight className="size-5" />}
            tone="bg-sky-soft text-sky"
            title="Upwork"
            text="Prefer secure contracts and milestone payments? Hire me through my Upwork profile."
            action={
              <Button asChild variant="ink" size="lg">
                <a href={SITE.upworkUrl} target="_blank" rel="noopener noreferrer">
                  Hire Me on Upwork <ArrowUpRight />
                </a>
              </Button>
            }
          />
          <MethodCard
            icon={<CalendarDays className="size-5" />}
            tone="bg-mustard-soft text-foreground"
            title="Book a call"
            text={
              booking
                ? "Pick a time that suits you for a video call about your project."
                : "Online booking is coming soon. For now, send a WhatsApp message to arrange a call time."
            }
            action={
              booking ? (
                <Button asChild variant="paper" size="lg">
                  <a href={booking} target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
              ) : (
                <Button asChild variant="paper" size="lg">
                  <a
                    href={whatsappLink(
                      "Hi Adeniran Felicia, I’d like to arrange a call to discuss an illustration project. When are you available?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arrange a call on WhatsApp
                  </a>
                </Button>
              )
            }
          />
        </div>
      </section>

      <section id="inquiry" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-20 sm:px-8">
        <div className="grid gap-10 rounded-4xl bg-card p-6 shadow-soft ring-1 ring-border/70 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
          <div>
            <p className="font-hand text-2xl text-coral">project inquiry</p>
            <h2 className="mt-2 text-4xl font-semibold leading-tight text-foreground">
              Tell me about your project
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The more you share, the better I can suggest a style, timeline and price. Don’t worry
              if you haven’t decided everything yet.
            </p>
            <ul className="mt-8 space-y-4 text-muted-foreground">
              {[
                "Pressing send opens WhatsApp with your details already filled in.",
                "Just tap send in WhatsApp to deliver your message.",
                "Nothing is stored on this website.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}

function MethodCard({
  icon,
  tone,
  title,
  text,
  action,
}: {
  icon: ReactNode;
  tone: string;
  title: string;
  text: string;
  action: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border/70 transition-transform duration-500 hover:-translate-y-1">
      <span className={cn("grid size-12 place-items-center rounded-2xl", tone)}>{icon}</span>
      <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-6">{action}</div>
    </div>
  );
}

function InquiryForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [contactMethod, setContactMethod] = useState<(typeof CONTACT_METHODS)[number]>("WhatsApp");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = inquirySchema.safeParse({ ...data, projectType, budget, contactMethod });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]) as keyof Inquiry;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("A few details need attention.");
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setErrors({});
    window.open(whatsappLink(buildInquiryMessage(parsed.data)), "_blank", "noopener,noreferrer");
    toast.success("WhatsApp opened with your inquiry — just tap send there.");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Full name" error={errors.name}>
        <Input
          id="f-name"
          name="name"
          autoComplete="name"
          className={fieldBase}
          aria-invalid={!!errors.name}
        />
      </Field>
      <Field id="email" label="Email address" error={errors.email}>
        <Input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldBase}
          aria-invalid={!!errors.email}
        />
      </Field>
      <Field id="projectType" label="Project type" error={errors.projectType}>
        <Select value={projectType} onValueChange={setProjectType}>
          <SelectTrigger
            id="f-projectType"
            className={cn(fieldBase, "w-full")}
            aria-invalid={!!errors.projectType}
          >
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            {PROJECT_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field id="projectTitle" label="Book / brand / project title" optional>
        <Input id="f-projectTitle" name="projectTitle" className={fieldBase} />
      </Field>
      <Field
        id="description"
        label="Description of project"
        error={errors.description}
        className="sm:col-span-2"
      >
        <Textarea
          id="f-description"
          name="description"
          rows={5}
          placeholder="What’s the story about? Who is it for? Anything you already imagine?"
          className="rounded-2xl border-input bg-background px-4 py-3 text-base shadow-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-invalid={!!errors.description}
        />
      </Field>
      <Field id="illustrations" label="Number of illustrations needed" optional>
        <Input
          id="f-illustrations"
          name="illustrations"
          placeholder="e.g. 16 spreads + cover"
          className={fieldBase}
        />
      </Field>
      <Field id="style" label="Desired style" optional>
        <Input
          id="f-style"
          name="style"
          placeholder="e.g. warm storybook, whimsical"
          className={fieldBase}
        />
      </Field>
      <Field id="timeline" label="Deadline / timeline" optional>
        <Input
          id="f-timeline"
          name="timeline"
          placeholder="e.g. by March 2027"
          className={fieldBase}
        />
      </Field>
      <Field id="budget" label="Budget range" error={errors.budget}>
        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger
            id="f-budget"
            className={cn(fieldBase, "w-full")}
            aria-invalid={!!errors.budget}
          >
            <SelectValue placeholder="Choose a range" />
          </SelectTrigger>
          <SelectContent>
            {BUDGETS.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-semibold text-foreground">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CONTACT_METHODS.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setContactMethod(m)}
              aria-pressed={contactMethod === m}
              className={cn(
                "cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                contactMethod === m
                  ? "bg-ink text-ink-foreground"
                  : "bg-muted text-foreground hover:bg-secondary",
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" variant="coral" size="xl">
          <Send /> Send inquiry via WhatsApp
        </Button>
        <p className="text-sm text-muted-foreground">Opens WhatsApp in a new tab.</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={`f-${id}`} className="text-sm font-semibold text-foreground">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
