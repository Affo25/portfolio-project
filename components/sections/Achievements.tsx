import { Layers, Smartphone, Server, Boxes, Shuffle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { achievements } from "@/lib/data";

const icons = {
  layers: Layers,
  smartphone: Smartphone,
  server: Server,
  boxes: Boxes,
  shuffle: Shuffle,
  sparkles: Sparkles,
} as const;

export function Achievements() {
  return (
    <section className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Strengths"
          title="What I bring to a team."
          center
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="glass group flex flex-col items-center gap-4 rounded-2xl p-8 text-center transition-transform hover:-translate-y-1.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary/20 transition-colors group-hover:bg-gradient-primary/30">
                    <Icon className="h-6 w-6 text-primary-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
