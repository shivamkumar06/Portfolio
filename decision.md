# Portfolio redesign decisions

Living record of choices for the Vite + hybrid hire/share rebuild. Update when a decision locks or changes.

## Context

- Surface: personal portfolio (Experience mode).
- Goal: new theme and tooling; keep features, copy facts, and images.
- Audiences: hiring managers and social-share visitors - **best of both** in one layout.

## Locked product / stack

| Decision | Choice |
|----------|--------|
| Stack | Vite + React (drop CRA / `react-scripts`) |
| UI kit | Custom CSS tokens; **no** Bootstrap / react-bootstrap |
| Remove | `react-tsparticles`, `react-parallax-tilt`, purple particle template look |
| Keep / upgrade | `react-router-dom`, `react-icons`, `typewriter-effect`, `react-pdf`, `react-github-calendar` |
| Deploy | Netlify; publish `dist/`; SPA fallback `/*` → `/` 200 |
| Build path (this session) | **Code-led** - existing assets are law; no standing `buildPath` written to config |
| Impeccable mode | Experience |

## Preserve

- Routes: `/`, `/about`, `/project`, `/resume`
- Preloader, sticky nav, typewriter roles, intro copy, projects + links, tech/tools, GitHub calendar, PDF resume + download, socials
- Assets required: project PNGs, used TechIcons, resume PDF, `public/favicon.png`
- Removed unused: `logo.png`, `home-main.svg`, `avatar.png`, `about.png`, `home-bg.jpg`, `pre.svg`, unused TechIcons (Next, Python, Haskell, go)
- Factual copy (name, employer, education, project descriptions, social URLs)

## Replace

- Visual world (palette, type, motion, chrome)
- Particle background and parallax tilt
- Bootstrap layout primitives
- CRA public HTML entry → Vite root `index.html`

## Hybrid layout contract

1. **First viewport (share):** Oversized name; one hard fact; dual CTAs; CSS glow only (no hero illustration).
2. **Hiring path:** Sticky nav; Resume primary; Projects proof with screenshots; About is text + skills.
3. **Below fold on Home:** Introduce + facts panel + socials (no avatar asset).

## Visual direction (current)

| Field | Value |
|-------|--------|
| Direction | **Modern type-led software portfolio** (user override of Service Timetable) |
| Thesis | Content and proof lead; chrome is quiet; motion makes it feel finished |
| Palette | `#F5F4EF` bg, `#121212` ink, `#0F766E` teal accent, `#D7F3EF` soft |
| Type | Sora (display) + Source Sans 3 (body) |
| Materials | Soft paper, white surfaces, pill controls, light shadows |
| Motion | Hero stagger, route transition, scroll reveal, hover lift + image zoom |
| Assets | Projects + resume (+ tech icons); no decorative home/about art |

## Viewer count

- Netlify Function `netlify/functions/views.mjs` + Netlify Blobs store `portfolio-views`
- Footer `ViewerCount`: increments once per browser session (`sessionStorage`), then reads total
- Hidden locally when the function is unavailable (plain `vite` / `preview`)

## Out of scope

- New projects or invented testimonials/metrics
- Changing bio/employer/education facts without user request
- Native apps
- Keeping Bootstrap “for speed”

## Changelog

- 2026-11-09: Initial locks from redesign brief (1A + best-of-both layouts).
- 2026-11-09: Locked Service Timetable (`seed:8faebf3e6f93f10d`); Vite migration shipped; Bootstrap/particles/tilt removed; DESIGN.md written from built world.
- 2026-11-09: Decision-page `--wait` blocked by harness - proceeded with assigned direction + code-led build.
- 2026-11-09: Composition pass - dark departure-board hero, destination table, project rows (not cards), red masthead, dossier About. Same content/images.
- 2026-11-09: User asked for fresh modern look; dropped decorative assets outside Projects/Resume; type-led teal system + transitions.
