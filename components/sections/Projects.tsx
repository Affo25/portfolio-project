import Image from "next/image";
import { ExternalLink, Smartphone, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Featured work"
          title="Products shipped to real users."
          description="Apps and web products I've taken from architecture diagram to production."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary-300/30">
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-mesh">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-surface-2/40" />
                      <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-2/80 px-6 py-4 backdrop-blur">
                        <Smartphone className="h-6 w-6 text-primary-300" strokeWidth={1.5} />
                        <span className="font-mono text-sm text-muted">App preview</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition-colors hover:text-accent"
                  >
                    {project.linkLabel} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
