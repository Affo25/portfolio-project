import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="pb-28">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
          {education.map((item) => (
            <Reveal key={item.school} className="sm:col-span-2">
              <div className="glass flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-500/10">
                  <GraduationCap className="h-7 w-7 text-primary-300" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-xs text-muted">{item.period}</p>
                    <p className="mt-1 font-mono text-xs text-primary-300">{item.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
