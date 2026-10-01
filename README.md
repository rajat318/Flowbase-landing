# Flowbase — Scroll-Animated SaaS Landing Page

A production-quality, single-page marketing site for **Flowbase**, a fictional
workflow-automation SaaS product. Built to demonstrate React component
architecture, Tailwind CSS, and Framer Motion scroll animation.

## Features

- Responsive navbar with animated mobile menu and smooth-scroll links
- Animated hero section (staggered text, floating product mockup, parallax shapes)
- Reusable `ScrollReveal` component powering fade/slide/scale-in animations across every section
- Parallax background shapes and mockup movement tied to scroll position
- Animated statistic counters that trigger on scroll into view (not on page load)
- Four-step "How it works" timeline with connecting line
- Interactive feature cards with hover elevation and icon color transitions
- Horizontally scrollable testimonials with rating stars and prev/next controls
- Three-tier pricing section with one plan visually highlighted
- Accessible FAQ accordion (single-open, animated height, ARIA attributes)
- Fully validated contact form (required fields, email format, minimum message length) with a success state — no backend, nothing is actually sent
- Light/dark theme toggle, persisted to `localStorage`, respecting the user's OS preference on first visit
- Fixed scroll-progress bar
- `prefers-reduced-motion` respected globally
- No horizontal overflow at any breakpoint (mobile through large desktop)

## Tech Stack

- React 19 + Vite
- Tailwind CSS (v3, class-based dark mode)
- Framer Motion (animations, scroll hooks, springs)
- Lucide React (icons)
- Plain JavaScript — no TypeScript

## Project Structure

\`\`\`
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Counter.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── TrustedBy.jsx
│       ├── Features.jsx
│       ├── Stats.jsx
│       ├── Timeline.jsx
│       ├── Testimonials.jsx
│       ├── Pricing.jsx
│       ├── FAQ.jsx
│       ├── Contact.jsx
│       └── CTA.jsx
├── data/
│   └── landingPageData.js   # all copy/content, rendered via map()
├── hooks/
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── index.css
\`\`\`

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open the printed local URL (usually `http://localhost:5173`).

### Build for production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Theming

Dark mode is class-based (`darkMode: 'class'` in `tailwind.config.js`). The
`useTheme` hook reads/writes `localStorage['flowbase-theme']` and falls back
to the OS-level `prefers-color-scheme` on first visit.

## Accessibility notes

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Visible focus states via `:focus-visible`
- Form fields have associated `<label>`s and `aria-describedby` error messages
- FAQ accordion uses `aria-expanded` / `aria-controls` / `role="region"`
- Respects `prefers-reduced-motion`

## Deployment

This is a static Vite build — deploy the `dist/` folder to Vercel, Netlify,
GitHub Pages, or any static host. No environment variables or backend are
required.

## Notes for reviewers

- All content lives in `src/data/landingPageData.js` and is rendered with
  `.map()` — no repeated/hardcoded JSX for lists of cards, plans, or testimonials.
- Every animation reuses the shared `ScrollReveal` component rather than
  duplicating Framer Motion `variants`/`viewport` boilerplate per section.
- The contact form and theme toggle are fully functional on the client;
  neither requires a backend to demo.
