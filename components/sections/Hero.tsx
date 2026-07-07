"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download, MapPin, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

const CODE_LINES = [
  "const developer = {",
  "  name: 'Afaq Ahmad',",
  "  role: 'Full Stack Mobile Developer',",
  "  stack: ['Flutter', 'Node.js', '.NET Core', 'FastAPI'],",
  "  basedIn: 'Lahore, Pakistan',",
  "  available: true,",
  "};",
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const currentLine = CODE_LINES[visibleLines];
    if (charCount < currentLine.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  return (
    <div className="glass-strong w-full max-w-md overflow-hidden rounded-2xl shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-muted">profile.ts</span>
      </div>
      <pre className="min-h-[188px] p-5 font-mono text-[13px] leading-7 text-foreground/90">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <div>
            {CODE_LINES[visibleLines].slice(0, charCount)}
            <span className="animate-blink">▍</span>
          </div>
        )}
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-gradient-mesh" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container relative grid items-center gap-16 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-primary-300">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 font-display text-2xl font-medium text-gradient sm:text-3xl">
            {personalInfo.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {personalInfo.tagline} Based in {personalInfo.location}, I turn
            product ideas into scalable Flutter apps backed by clean, secure
            APIs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View my work <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
            >
              <Download className="h-4 w-4" /> Download resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-300" /> {personalInfo.location}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-10"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-40 blur-2xl" />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-primary p-[3px] sm:h-52 sm:w-52">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-surface-2">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-[center_25%]"
                  sizes="(max-width: 640px) 176px, 208px"
                  priority
                />
              </div>
            </div>
            <span className="glass absolute -right-2 bottom-2 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Lahore, PK
            </span>
          </div>

          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}
