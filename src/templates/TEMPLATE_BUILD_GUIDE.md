# Tech Wolves Template — Build Guide (for all templates)

You are building ONE marketing website template inside an existing Next.js 16 + Tailwind v4 + Framer Motion repo. Follow this guide EXACTLY so every template in the library is consistent.

## Reference implementation (READ THESE FIRST)
- `src/templates/ai-agency/AiAgencyTemplate.tsx` — the canonical full template. Copy its structure, quality bar, and conventions.
- `src/templates/ai-agency/theme.css` — the scoped-theme pattern.
- `src/templates/ai-agency/automation-demo.tsx` — example of an interactive client component.
- `src/templates/kit/motion.tsx` — shared motion primitives. **Reuse these; do not re-implement.**

## Hard rules
1. **Reuse the shared kit** from `../kit/motion`: `Stagger`, `FadeUp`, `Reveal`, `Pressable`, `CountUp`. Import: `import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";`
2. **Scope your theme.** Create `theme.css` with all tokens under a unique root class `.tpl-<niche>` (e.g. `.tpl-restaurant`). Use CSS variables named `--tpl-bg`, `--tpl-surface`, `--tpl-fg`, `--tpl-fg-muted`, `--tpl-primary`, `--tpl-secondary`, `--tpl-accent`, `--tpl-border`. Reference them in JSX as `bg-[var(--tpl-primary)]`, `text-[var(--tpl-fg)]`, etc. This prevents leaking into the main site.
3. **Motion library import is `motion/react`** (NOT `framer-motion`). Always support `useReducedMotion`.
4. **Icons:** `lucide-react` only. No emojis as icons.
5. **All interactive/motion components need `"use client"`** at the top.
6. **Fonts:** load the specified Google Fonts via a `<link>`/`@import` in your `theme.css` (`@import url(...)` at top of file), and set `font-family` on the `.tpl-<niche>` root.
7. **Accessibility:** contrast ≥4.5:1 for body text, visible focus, `cursor-pointer` on clickables, `aria-label` on icon-only buttons, respect `prefers-reduced-motion`.
8. **Responsive:** mobile-first. Test mentally at 375 / 768 / 1024 / 1440. `max-w-6xl` containers, generous section padding (`py-24`).
9. **DO NOT** modify: `src/app/globals.css`, `src/app/layout.tsx`, `src/templates/kit/*`, or any other template's folder. Only create files in YOUR two folders.
10. **DO NOT start a dev server** (the port is in use). Just write clean, type-correct code.

## Files you create (exactly two folders)
1. `src/templates/<niche>/<Name>Template.tsx` — the `"use client"` template component (default sections below).
2. `src/templates/<niche>/theme.css` — scoped tokens + fonts.
3. Any extra sub-components (e.g. an interactive widget) in `src/templates/<niche>/`.
4. `src/app/templates/<niche>/page.tsx` — server component route with `metadata` that renders your template. Copy the shape of `src/app/templates/ai-agency/page.tsx`.

## Required sections (adapt copy to the niche)
Sticky glass nav → Hero (headline + sub + dual CTA + tasteful visual/motion) → Trust/social-proof strip → Features or Services (grid/bento) → **one signature interactive or visually-rich section** (e.g. menu/gallery/booking/listings/pricing toggle — make it feel alive) → Metrics with `CountUp` → Testimonials or Process → Pricing or Packages → Final CTA band → Footer.

## Quality bar (this is a showcase for Instagram + US/CA/EU clients)
- Premium, modern, "expensive" look. Big confident type, balanced whitespace, gradient or tasteful accent usage per the niche palette.
- Smooth entrance animations (FadeUp/Stagger/Reveal), hover states (Pressable) 150–300ms.
- Realistic, specific placeholder copy (names, numbers, quotes) — never lorem ipsum.
- Self-contained: no external images required. Use CSS gradients, solid color blocks, initials avatars, or inline SVG for imagery.

Return a short summary of what you built and the route path.
