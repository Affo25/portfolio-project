import { Smartphone, Layers, Server, Shuffle, Gauge, Cloud, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data";

const icons = {
  smartphone: Smartphone,
  layers: Layers,
  server: Server,
  shuffle: Shuffle,
  gauge: Gauge,
  cloud: Cloud,
} as const;

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help."
          description="From a single Flutter screen to the full backend behind it — here's where I typically plug in."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.title} delay={i * 0.07}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary-300/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="h-5 w-5 text-primary-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
