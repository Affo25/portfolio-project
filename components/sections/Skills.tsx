"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Server, LayoutGrid, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups, type SkillGroup } from "@/lib/data";

const icons: Record<SkillGroup["icon"], typeof Smartphone> = {
  smartphone: Smartphone,
  server: Server,
  layout: LayoutGrid,
  wrench: Wrench,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I build with every day."
          description="A cross-platform mobile toolkit paired with the backend skills to ship a product end to end."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, gi) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.category} delay={gi * 0.1}>
                <div className="glass h-full rounded-2xl p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10">
                      <Icon className="h-5 w-5 text-primary-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-6 space-y-5">
                    {group.skills.map((skill, si) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={si * 0.08}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
