Screenshots in dark and light mode of different screens and components with FarLab dark and light theme and Typography:
<img width="2549" height="1274" alt="Screenshot from 2026-02-19 17-31-26" src="https://github.com/user-attachments/assets/b74369c1-748f-4a18-b275-75217cbe814a" />
<img width="2549" height="1274" alt="Screenshot from 2026-02-19 17-31-03" src="https://github.com/user-attachments/assets/ac2b2672-983b-43c7-8d40-709364e1cb7d" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-15-06" src="https://github.com/user-attachments/assets/8b5b0d03-42d7-44ad-b182-0ae87a901a88" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-15-00" src="https://github.com/user-attachments/assets/fefa0b0a-a38e-4aa4-9c36-42cab16e18a8" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-14-56" src="https://github.com/user-attachments/assets/c722b6b1-bd27-45d2-8964-cf9c100f8646" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-14-45" src="https://github.com/user-attachments/assets/6c09d6f5-9fcc-4220-ab63-d0fbd9c7e99c" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-14-33" src="https://github.com/user-attachments/assets/7b6bcc7b-bce0-477a-8b06-1f9234cd9780" />
<img width="2551" height="1331" alt="Screenshot from 2026-02-18 21-14-26" src="https://github.com/user-attachments/assets/ca8775df-1a08-4dad-aba4-fb0571272d22" />
<img width="2493" height="1164" alt="Screenshot from 2026-02-18 21-13-50" src="https://github.com/user-attachments/assets/2a427485-d547-4f24-ae91-e18e6ad017e7" />
# FAR AI Dashboard – UI System Setup


This project establishes a structured, repeatable UI framework for building the FAR AI dashboard using **shadcn/ui**, design tokens, and a controlled AI-assisted workflow.

The objective is to validate design consistency, token alignment, and scalable layout architecture before full feature implementation.

---

## What Has Been Completed

### 1. Design Token Integration

- Exported Figma design tokens (colors, typography, spacing).
- Mapped tokens into global CSS variables.
- Implemented theme support (`default` and `farlabs`).
- Ensured **no hardcoded colors** — only global variables are used.
- Verified dark mode behavior via CSS variables.
- Confirmed token-driven styling across all components.

---

### 2. Typography System Setup

- Integrated:
  - **Roboto Flex** (primary font)
  - **JetBrains Mono** (monospace)
- Configured via Next.js `next/font`.
- Bound to CSS variables:
  - `--font-sans`
  - `--font-mono`
- Ensured shadcn components inherit typography from global tokens.
- Aligned Tailwind typography scale with Figma definitions.
- Avoided manual font overrides in components.

---

### 3. shadcn Component System Validation

Installed and configured:

- Button (with controlled variants)
- Card
- Tabs
- Separator
- Badge
- Chart (shadcn charts only)

Created isolated validation screens for:

- Button variants
- Typography scale
- FAR AI themed dashboard layout
- Tabs usage
- Chart rendering using token-based colors

No component styling overrides were introduced.

All visuals strictly rely on:

- shadcn primitives
- Tailwind utilities
- Global design tokens

---

### 4. Figma → Code Workflow

Tools used:

- Figma MCP server (structured extraction)
- Token export for color and typography mapping
- Component hierarchy analysis before coding
- AI used as a constrained assistant (not an autonomous designer)

Workflow followed:

Design Structure  
→ Token Extraction  
→ Layout Mapping  
→ Component Assembly  
→ System Validation  

This ensures:

- Repeatability
- Scalability
- No UI drift
- Clear design-to-code traceability

---

## How to Run

```bash
npm install
npm run dev
```

Open in browser:

http://localhost:3000

## Framework Principles

- Use shadcn components only

- No hardcoded design values

- Only global CSS variables

- Responsive by default

- Structural fidelity to Figma

- AI used with explicit constraints

- Extendable to future screens without UI drift

---

## 5. FAR Labs Custom Component Library (`/components/farlab/`)

All components were built from scratch using Figma MCP extraction, mapped precisely to Figma node IDs.
No layout, spacing, or token decisions were made arbitrarily — every value traces back to the design file.

### Atomic Components

| File | Figma Node | Purpose |
|---|---|---|
| `sidebar-header.tsx` | `36616:2785` | FAR AI logo — swaps `lightmode-logo.png` / `darkmode-logo.png` via Tailwind `dark:` |
| `sidebar-nav-item.tsx` | `36616:2791` | Single nav row — active bg, destructive color, separator variant, `gap-0.5` between items |
| `sidebar-nav.tsx` | `36616:2791` | Maps route array → `SidebarNavItem` list |
| `sidebar-footer.tsx` | `36616:2810` | Username, role, version, build date — pinned to sidebar bottom |
| `sidebar.tsx` | `36616:2785` | Full sidebar shell — `w-[255px]`, accepts `className` override for mobile full-width |
| `navbar-action-button.tsx` | `36616:2827` | Ghost button used for "Restart" / "Pause node" |
| `top-navbar.tsx` | `36616:2827` | Header bar — `PanelLeft` toggle button, `DotBadge` status, action buttons, `ThemeToggle` |
| `dot-badge.tsx` | `36616:2829` | Coloured dot + label — uses `style={{ backgroundColor: "var(--chart-N)" }}` (no hardcoded hex) |
| `page-header.tsx` | `36616:2836` | Section `<h1>` title |
| `stat-card.tsx` | `36616:2838` | KPI card — title, large value, subtitle; `w-full` so it stretches inside grid columns |
| `stat-cards-row.tsx` | — | Row wrapper (kept for reuse; layout is now handled directly in the page) |
| `circular-metric.tsx` | `36616:2866` | SVG ring progress, 56×56 px — `style={{ stroke: progressColor }}` accepts CSS variable strings |
| `metric-label-block.tsx` | `36616:2866` | Label + sublabel text block aligned next to the ring |
| `metrics-card.tsx` | `36616:2866` | Live metrics card — three `CircularMetric` + `MetricLabelBlock` rows; accepts `className` prop |
| `jobs-area-chart.tsx` | `36616:2897` | Recharts `AreaChart` inside shadcn `ChartContainer` — Y-axis aligned to card title via `dx: 20`, `width: 68`; `padding={{ left: 20 }}` on XAxis |
| `chart-card.tsx` | `36616:2897` | Card shell wrapping `JobsAreaChart`; `flex-1` so it fills remaining row width |
| `dashboard-container.tsx` | `36616:2785` | Full-width flex shell (no `max-w`, no `mx-auto`) |

### Barrel Export

All components are re-exported from `components/farlab/index.ts` for clean single-import usage:

```ts
import { Sidebar, TopNavbar, StatCard, MetricsCard, ChartCard, ... } from "@/components/farlab";
```

---

## 6. Overview Dashboard (`/app/overview/page.tsx`)

### Layout Structure

The page is a `"use client"` component with sidebar toggle state.

#### Desktop (lg+) — 4-column CSS grid, 2 rows

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  Stat Card 1 │  Stat Card 2 │  Stat Card 3 │  Stat Card 4 │
├──────────────┼──────────────────────────────────────────────┤
│ Live Metrics │          Jobs per hour chart (col-span-3)    │
└──────────────┴──────────────────────────────────────────────┘
```

Column 1 is identical width for both the first stat card and the live metrics card — matching Figma proportions exactly.

#### Tablet (sm–lg) — 2-column grid for stat cards, stacked or side-by-side for row 2

#### Mobile (< sm) — single column, all cards full-width

### Sidebar Behaviour

| Breakpoint | Behaviour |
|---|---|
| `md+` (desktop/tablet) | Inline sidebar, toggles between `w-[255px]` and `w-0` with CSS transition |
| `< md` (mobile) | shadcn `Sheet` drawer, full-width, slides in from the left |

The `PanelLeft` toggle button in the navbar routes the click to the correct state based on `window.innerWidth`.

### Color Tokens Used

| UI Element | CSS Variable |
|---|---|
| Status dot (running) | `var(--chart-2)` |
| Utilization ring | `var(--chart-2)` |
| Temperature ring | `var(--chart-3)` |
| VRAM usage ring | `var(--chart-4)` |
| Chart line + fill | `var(--primary)` |
| Muted labels | `var(--muted-foreground)` |

### Key Technical Decisions

- **No hardcoded hex or Tailwind color classes** for dynamic brand colors — all resolved through CSS variables at runtime, enabling full dark/light theme switching with zero JS.
- **`style={{ stroke }}` on SVG arcs** instead of Tailwind `stroke-*` classes — Tailwind stroke utilities use `currentColor` shorthand which cannot resolve arbitrary CSS variables directly on SVG properties.
- **`style={{ backgroundColor }}` on dot badge** — same reason; Tailwind `bg-*` utilities don't support `var()` expressions for custom per-instance colors.
- **Recharts margin + YAxis `dx`** — `margin.left: 0`, `width: 68`, `dx: 20` aligns the Y-axis label left edge to exactly 20px from the card border, matching the card title's `px-5` padding.
- **`className` prop on `MetricsCard` and `Sidebar`** — allows layout overrides (full-width on mobile) without mutating component internals.

---

## Documentation

- [Framework](/docs/framework.md)
- [Team Playbook](/docs/team-playbook.md)
