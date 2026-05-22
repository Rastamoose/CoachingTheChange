# Coaching The Change — Project Guide

Pixel-perfect replica of www.coachingthechange.com. Always reference the scraped source in `copy/www.coachingthechange.com/` for content. Request a screenshot from the user before implementing any visual detail you're unsure about.

## Stack

- **React + Vite + TypeScript** — scaffolded in `site/`
- **Tailwind CSS v3** — custom colors, fonts, gradients configured in `tailwind.config.js`
- **React Router DOM** — client-side routing
- **Lucide React** — icons
- **Formspree** — contact form submission (no backend)

## Dev server

```bash
cd site && npm run dev
```

Runs on `http://localhost:5173` (or next available port).

## Custom design tokens (tailwind.config.js)

| Token | Hex | Usage |
|---|---|---|
| `pastel-green` | `#c5e1a5` | CTA buttons, "Book a Call", accent text |
| `pastel-blue` | `#d3e4fd` | Card accents |
| `pastel-purple` | `#e5deff` | Card accents, hero tagline bg |
| `pastel-yellow` | `#fef7cd` | Card accents |
| `pastel-pink` | `#ffdee2` | Card accents |
| `pastel-peach` | `#fde1d3` | Hero section gradient |
| `gradient-mint` | `linear-gradient(90deg, #eed891, #caf7f4)` | Testimonials section bg |

## Fonts

- **Playfair Display** — ALL headings and card/component titles (`font-playfair font-bold`). Never use `font-lora`.
- **Lato** — ALL body text, descriptions, labels (default, no class needed).

Loaded via Google Fonts in `src/index.css`.

## Typography scale — MANDATORY, do not deviate

| Element | Classes |
|---|---|
| Page h1 | `font-playfair text-4xl md:text-5xl font-bold` |
| Section h2 | `font-playfair text-3xl md:text-4xl font-bold` |
| Card / panel title h3 | `font-playfair font-bold text-xl` |
| Sub-section heading h4 | `font-playfair font-bold text-lg` |
| Body / card description | `text-base leading-relaxed` (minimum — never `text-sm` for content) |
| Secondary labels / metadata | `text-sm` (stat labels, attribution, badges only) |
| Fine print / legal / captions | `text-xs` |
| Form input text | `text-base` |

**Rules enforced site-wide:**
- All content-facing text is `text-base` minimum. `text-sm` is reserved for non-content UI (labels, badges, timestamps, footer links).
- `font-lora` is BANNED — replace any occurrence with `font-playfair`.
- Every heading uses `font-playfair font-bold`, no exceptions.

## Routes (public only)

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/pricing` | Pricing |
| `/faq` | FAQ |
| `/testimonials` | Testimonials |
| `/terms-of-service` | Terms of Service |
| `/cookie-policy` | Cookie Policy |
| `/privacy-policy` | Privacy Policy |
| `/fulfillment` | Fulfillment |

Admin routes (`/admin/*`) are **not replicated** — they were abandoned Supabase scaffolding in the original.

## Image hosting

All images are served directly from the live site CDN:

```
https://www.coachingthechange.com/lovable-uploads/<uuid>.png
```

Key images:
- **Hero / Coach Halima photo**: `754fc39f-d73d-4cc8-8e64-d97e2e182065.png`
- **Logo carousel**: See `LogoCarousel.tsx` for all 20 company logos

## Project structure

```
site/src/
  components/
    Navbar.tsx         — fixed sticky nav, "Book a Call" → /pricing
    Hero.tsx           — hero with Halima photo, two CTA buttons
    LogoCarousel.tsx   — paginated logo carousel (5 per page, dots)
    MeetCoachHalima.tsx — bio section with stats
    Services.tsx       — 11-card grid with colored top-border accents
    Testimonials.tsx   — paginated 3-up testimonial cards on gradient bg
    ContactForm.tsx    — Formspree form with 8 fields
    Footer.tsx         — dark footer, 3 columns + GDPR bar
  pages/
    Home.tsx           — composes all home page sections
```

## Contact form

Uses Formspree. Replace `YOUR_FORMSPREE_ID` in `ContactForm.tsx` with the actual form ID from formspree.io.

Form fields: Name, Email, Timezone, Type of Coaching, Timeframe, Worked with coach before (radio), Goals (textarea), Additional Message (optional textarea).

## Key content sources

All text, service descriptions, testimonials, and logo data were extracted from the minified bundle at:
`copy/www.coachingthechange.com/assets/index-CMyA8EvN.js`

CSS design tokens (colors, gradients, fonts) from:
`copy/www.coachingthechange.com/assets/index-BkfRJbkj.css`

## Workflow

1. User provides screenshots → implement matching layout
2. Skip animations/dynamic behavior until static layout is approved per page
3. Then add animations (fade-in, slide-up, carousel transitions) in a second pass
4. Always ask for screenshot if visual detail is unclear
