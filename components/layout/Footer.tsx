import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-10 py-14 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="font-display text-lg font-semibold text-foreground">
            Afaq<span className="text-gradient">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Full Stack Mobile Developer building scalable apps and the APIs
            behind them, from Lahore, Pakistan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-300/40 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-300/40 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary-300/40 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="container text-center font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
