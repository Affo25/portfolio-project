"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "afaq-ahmad", href: personalInfo.linkedin },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a mobile app or backend project in mind? Send a message and I'll get back to you within a day or two."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-8">
              <h3 className="font-display text-base font-semibold text-foreground">
                Contact details
              </h3>
              <ul className="mt-6 space-y-5">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                      <detail.icon className="h-4 w-4 text-primary-300" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-foreground transition-colors hover:text-primary-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-muted">
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs text-muted">
                  Subject
                </label>
                <Input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs text-muted">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm text-success"
                >
                  <CheckCircle2 className="h-4 w-4" /> Message sent — thanks for reaching out.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4" /> Something went wrong. Please email me directly.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
