import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Where I've built it."
          description="A timeline of the teams and products I've shipped for."
        />

        <div className="relative mt-16 border-l border-border pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-surface-2 ring-4 ring-background sm:-left-[49px]">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-primary" />
              </span>

              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-primary-300">
                      <Briefcase className="h-3.5 w-3.5" /> {job.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-muted">{job.period}</p>
                    <p className="mt-1 flex items-center justify-end gap-1.5 text-xs text-muted">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
