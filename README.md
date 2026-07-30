# Iqshant Bawa — Portfolio

A single-page portfolio built with React, Tailwind CSS, Framer Motion, and
Lenis for smooth scrolling. Inspired by the interaction language of
benorth.studio — physics-based drag/inertia, oversized reveal type, and a
signature checkerboard grain that nods to the chess-engine work at the core
of the projects section.

## Stack

- **React 18** + **Vite** — app shell and dev server
- **Tailwind CSS** — utility styling, with custom tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, drag/inertia carousel, magnetic hovers
- **Lenis** — buttery smooth scrolling
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build into /dist
npm run preview   # preview the production build locally
```

## Structure

```
src/
  components/
    Hero.jsx              — oversized name, mouse-parallax intro
    About.jsx              — education timeline + coursework marquee
    CourseMarquee.jsx       — infinite drag-to-scroll coursework strip
    Skills.jsx              — draggable floating skill tags, grouped
    Projects.jsx           — inertia-based draggable project carousel
    Extracurriculars.jsx  — accordion list
    Footer.jsx              — contact section
    Nav.jsx / Magnetic.jsx — fixed nav + reusable magnetic-hover wrapper
  hooks/
    useLenis.js            — Lenis smooth-scroll setup
```

## Design tokens

| Token       | Value      | Use                                   |
| ----------- | ---------- | -------------------------------------- |
| `ink`       | `#0A0A0B`  | Background                             |
| `graphite`  | `#18181A`  | Card / surface fill                    |
| `paper`     | `#EEEAE2`  | Primary text                           |
| `chalk`     | `#96917F`  | Secondary text                         |
| `felt`      | `#3E5B44`  | Deep accent (chess-felt green)         |
| `square`    | `#D9C36A`  | Highlight — the "active square" color used on chess boards, applied to hovers, drag handles, and active states |

Fonts: **Bricolage Grotesque** (display), **General Sans** (body),
**JetBrains Mono** (data / coursework / captions), loaded via Google Fonts
and Fontshare in `index.html`.

## Notes

- All drag interactions (`Skills`, `CourseMarquee`, `Projects`) use pointer
  events under the hood via Framer Motion, so they work the same on
  touchscreens as with a mouse.
- Reduced-motion preference is respected: Lenis is skipped and CSS
  transitions collapse to near-zero duration.
- Update contact details, links, and copy directly in `Hero.jsx` and
  `Footer.jsx`.
