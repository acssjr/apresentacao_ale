# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server (Vite, hot reload)
npm run build      # type-check + production build → dist/
npm run preview    # preview production build locally
```

No linter or test suite is configured.

## Architecture

This is a fullscreen interactive slide deck built in React + TypeScript + Vite. It renders a linear 16-slide sales presentation.

### Data flow

`App.tsx` owns the ordered slide array and passes it to `<Presentation>`. `Presentation.tsx` is the only stateful component — it tracks the current slide index, keyboard events (←/→/Space/F), fullscreen state, and auto-hiding controls. All slides are always mounted in the DOM; transitions are pure CSS `opacity` + `scale` on each slide's wrapper `div`.

### Slide structure

Each file in `src/slides/` is a self-contained, zero-prop component that fills `100vw × 100vh`. The typical layout pattern is:

```
<div> (full viewport, dark bg)
  [<VideoBackground />]   ← cover slide only
  <SlideHeader slideNum="01/15" />   ← top bar with branding
  <div> content area (z-10, absolute inset) </div>
</div>
```

To add a new slide: create `src/slides/NewSlide.tsx`, then add it to the array in `App.tsx` (order = presentation order).

### Shared components

| Component | Purpose |
|---|---|
| `Presentation` | Navigation controller — do not add slide content here |
| `VideoBackground` | HLS looping background video via Mux CDN (cover slide only) |
| `GlassCard` | Glassmorphism card; supports `accentColor` + `accentSide` (left/top) |
| `SlideHeader` | Top bar with "FC · Proposta Estratégica · slide number" |
| `IPhoneMockup` | SVG-based iPhone mockup (MagicUI pattern) — accepts `children` rendered inside screen |
| `ImageUpload` | Click-to-upload image with drag-to-reposition; `AvatarUpload` for circular variant |

### Styling conventions

- **No Tailwind for layout-critical sizing** — percentage-based inline styles (`5.2%` horizontal padding, `2.5%` vertical) keep proportions viewport-relative.
- **`clamp()` for all font sizes** — e.g. `clamp(36px, 7vw, 88px)`. Never use fixed `px` font sizes.
- **`.glass` CSS class** — defined in `src/index.css`. Use `<GlassCard>` instead of applying `.glass` directly when possible.
- **Brand colors** (defined in `tailwind.config.js`): `#00C8FF` (cyan), `#FF3B3B` (danger), `#00E676` (success), `#0A0A0A` (background).
- **Font**: Plus Jakarta Sans loaded from Google Fonts in `index.html`.
- **`.tabular`** CSS class for numeric counters (tabular-nums).
- **H2 titles**: always use `textTransform: 'uppercase'` — title case looks unprofessional.
- **Phone mockups**: use the SVG-based `IPhoneMockup` component (MagicUI pattern). Never build CSS phone mockups from scratch with side buttons — they look AI-generated. No side hardware buttons on the mockup.
- **Design aesthetic**: shadcn/glassmorphism — dark `#0A0A0A` bg, `.glass` cards, `#00C8FF` cyan accents.
