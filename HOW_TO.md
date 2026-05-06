# Adriana's Resume & Blog

This is Adriana's personal site — a resume and blog built with Next.js, Tailwind CSS, and MDX, hosted on GitHub Pages.

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Running Locally

```bash
npm install       # Install dependencies (run once)
npm run dev       # Start the development server
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## How to Update Your Resume

All of Adriana's shared personal info (name, email, phone, links) lives in one file:

**`src/components/resume/globals.ts`**

```ts
export const personalInfo = {
  name: "Adriana ...",
  email: "adriana@example.com",
  phone: "+55 (00) 00000-0000",
  location: "City -- State",
  linkedin: "https://linkedin.com/in/adriana",
  github: "https://github.com/adriana",
};
```

Change these values and they will update on both the English (`/resume`) and Portuguese (`/resume-br`) pages.

### Updating Sections (Experience, Education, Skills, etc.)

Each section's content is stored in:

**`src/components/resume/data.ts`**

This file has two objects — `resumeEN` (English) and `resumeBR` (Portuguese). Edit the relevant one for the language you want to change.

#### Experience

```ts
experience: [
  {
    title: "QA Analyst",
    company: "Company Name",
    duration: "Jan 2024 -- Present",
    bullets: [
      "Wrote automated tests using Cypress",
      "Reduced bug leakage by 30%",
    ],
  },
],
```

#### Education

```ts
education: [
  {
    title: "Bachelor of Computer Science",
    institution: "University Name",
    year: "2022",
  },
],
```

#### Certifications

```ts
certifications: [
  {
    title: "ISTQB Foundation Level",
    institution: "ISTQB",
  },
],
```

#### Languages

```ts
languages: ["Portuguese -- Native", "English -- Fluent"],
```

#### Skills

```ts
skills: ["Cypress", "Selenium", "Jest", "API Testing", "SQL"],
```

To add a new item to any list, just add a new object (or string for languages/skills) to the array.

## How to Add a Blog Post

Blog posts are written in **MDX** (Markdown + JSX) and live in the `content/blog/` folder.

### File Naming

- `my-post_en.mdx` — English version → appears at `/blog/my-post`
- `my-post_br.mdx` — Portuguese version → appears at `/blog/my-post/br`

The base name (before `_en` or `_br`) must match for the two versions to be grouped together on the blog index.

If you only create one language, just name it without a suffix (e.g. `my-post.mdx`) — it will default to English.

### Post Format

Every post starts with a frontmatter block at the top:

```mdx
---
title: "My Post Title"
date: "2026-05-03"
description: "A short summary of the post"
tags: ["testing", "qa", "automation"]
---

Your markdown content goes here.

You can use **bold**, *italic*, lists, code blocks, headings, and more.
```

### Example

Create `content/blog/automation-tips_en.mdx`:

```mdx
---
title: "5 Automation Tips for QA Analysts"
date: "2026-05-03"
description: "Practical tips for getting started with test automation"
tags: ["qa", "automation", "testing"]
---

## Tip 1: Start Small

Don't try to automate everything at once. Pick the most critical flows first.

## Tip 2: Use Page Objects

...
```

Then create the Portuguese version at `content/blog/automation-tips_br.mdx` with the same structure.

### Previewing

Run `npm run dev` and visit `/blog` to see the new post in the list.

## Deployment

Every time you push to the `main` branch, GitHub Actions automatically builds and deploys the site to GitHub Pages. No manual steps needed.

1. Make your changes
2. Commit: `git commit -m "update resume"`
3. Push: `git push`
4. Wait ~2 minutes — the site is live!

## Tech Stack

- **Next.js 16** — React framework
- **Tailwind CSS** — Styling
- **MDX** — Blog posts in markdown
- **TypeScript** — Type safety
- **GitHub Pages** — Hosting

---

*Adriana, this site was built with love for you. May it be the perfect stage to showcase your talent as a QA analyst and share your thoughts with the world. Wishing you all the best in your career and in life. You deserve it all!*
