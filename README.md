# Afaq Ahmad — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, JSON-LD
  page.tsx           Assembles all sections in order
  globals.css        Tailwind base + glassmorphism utilities
  robots.ts          Dynamic robots.txt
  sitemap.ts         Dynamic sitemap.xml
  api/contact/       Contact form submission endpoint (stub)

components/
  ui/                Reusable shadcn-style primitives (Button, Card, Input, Badge, Reveal...)
  layout/             Navbar, Footer, PageLoader, ScrollToTop
  sections/           Hero, About, Experience, Education, Skills,
                      GithubActivity, Projects, Achievements, Services,
                      Interests, Contact

lib/
  data.ts            All content lives here — edit this file to update copy
  utils.ts           cn() classname helper
```

## Before you deploy

1. **Resume** — add your PDF resume at `public/resume.pdf` (the "Download resume" button already links here).
2. **OG image** — add a 1200×630 image at `public/og-image.png` for social share previews.
3. **Profile photo** — the hero currently shows a placeholder avatar icon. Swap the placeholder `<User />` block in `components/sections/Hero.tsx` for a `next/image` component pointing at your photo.
4. **Contact form email delivery** — `app/api/contact/route.ts` currently only logs submissions server-side. Wire it up to a provider such as [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com) to actually receive messages.
5. **Domain** — update `siteUrl` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` if your deployed URL changes.
6. **GitHub link** — update `personalInfo.github` in `lib/data.ts` with your actual GitHub profile URL.

## Editing content

Everything — name, summary, experience, education, skills with proficiency levels, projects, achievements, services, and interests — lives in `lib/data.ts` as typed exports. Update that file and every section re-renders automatically.

## Tech stack

- Next.js 15 (App Router, Server Components by default)
- TypeScript (strict mode)
- Tailwind CSS with a custom dark design system
- Framer Motion for scroll reveals and micro-interactions
- Lucide React for icons
- Hand-built shadcn-style UI primitives (no external UI package dependency)
