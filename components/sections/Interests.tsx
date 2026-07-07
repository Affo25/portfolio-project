import { Code, Plane, Target, Mountain, Clapperboard } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { interests } from "@/lib/data";

const icons = {
  code: Code,
  plane: Plane,
  target: Target,
  mountain: Mountain,
  clapperboard: Clapperboard,
} as const;

export function Interests() {
  return (
    <section className="pb-28">
      <div className="container">
        <SectionHeading eyebrow="Beyond code" title="What keeps me going." center />

        <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
          {interests.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <span
                key={item.label}
                className="glass flex items-center gap-2.5 rounded-full px-5 py-3 text-sm text-foreground transition-colors hover:border-primary-300/40"
              >
                <Icon className="h-4 w-4 text-primary-300" strokeWidth={1.5} />
                {item.label}
              </span>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
