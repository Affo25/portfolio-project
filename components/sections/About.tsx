import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { personalInfo } from "@/lib/data";
import { Code2, ShieldCheck, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Cross-platform first",
    description: "One Flutter codebase shipping to iOS and Android alike.",
  },
  {
    icon: Layers,
    title: "Full stack by default",
    description: "Comfortable owning the API and database layer, not just the UI.",
  },
  {
    icon: ShieldCheck,
    title: "Security-minded",
    description: "Clean architecture and secure backend patterns as a baseline, not an afterthought.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Full stack, mobile first."
          description={personalInfo.summary}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <item.icon className="h-6 w-6 text-primary-300" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
