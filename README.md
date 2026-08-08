# FutureStack — Marketing Site

A React + Vite marketing site for FutureStack, a web development studio. Built with Tailwind CSS and React Router.

## Stack

- **React 18** + **Vite** — build tooling and dev server
- **React Router** — client-side routing (`/`, `/about`, `/services`, `/projects`, `/contact`)
- **Tailwind CSS** — utility-first styling, themed via `tailwind.config.js`

## Project structure

```
src/
├── components/   # Reusable UI primitives (Navbar, Button, ServiceCard, ...)
├── sections/     # Page sections composed from components (Hero, Services, ...)
├── pages/        # Route-level views composed from sections
├── data/         # Static content (services, projects, testimonials, tech)
├── hooks/        # Shared React hooks (useScrollAnimation)
└── utils/        # Constants and small helpers
```

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Environment variables

Copy `.env` and fill in real values:

```
VITE_SITE_NAME=FutureStack
VITE_CONTACT_EMAIL=hello@futurestack.dev
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

`VITE_FORM_ENDPOINT` powers the contact form in `src/components/ContactForm.jsx` — point it at your own
Formspree endpoint (or similar) before deploying.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Design notes

The visual identity is built around the site's own name: the hero and favicon render a literal
"stack" of horizontal layers (Frontend / Backend / Infra / Data), reused as a motif across the
process and technology sections. Palette: ink navy (`#0E1116`) background, signal violet
(`#7C5CFC`) and signal amber (`#FFB020`) accents. Type: Space Grotesk (display), Inter (body),
JetBrains Mono (data/labels).
