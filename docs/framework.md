# FAR AI UI Framework
Design → AI-Assisted Build → Release

This document explains how we take a Figma screen and ship it fast with very high UI precision using shadcn, FarLabs theme, and AI as a controlled accelerator.

The goal is simple:

- Precise layout
- Consistent UI across screens
- No design drift
- Ready for real data
- Repeatable for future features

1. The Core Philosophy

We don't build screens.
We build systems that generate screens consistently.

Key principles:

    Use shadcn as the base (never reinvent primitives)

    Use design tokens only (no hardcoded values)

    Break UI into small reusable components

    Use AI with strict constraints

    Validate structure before polishing visuals

2. Design → Code Translation
Component Mapping

Every Figma block maps to:

    Either a shadcn primitive

    Or a wrapper component inside /components/farlab

Example:
Figma	Code
Card block	StatCard (built on <Card />)
Metrics panel	MetricsCard
Area chart	ChartCard using shadcn chart
Sidebar	Composed layout component

We never style raw divs when shadcn already provides structure.
Variants & States

Variants are handled using:

    shadcn variant pattern

    Tailwind utilities

    CSS variables from tokens

No inline styles.
No random color usage.
No guessing spacing.
Responsiveness

We follow structural rules from Figma:

    Sidebar fixed

    Content fluid

    4 cards row → responsive grid

    2 cards row below

    Layout adapts to large screens (2K, 4K)

We never limit layout using fixed container widths like max-w-[1280px].
3. AI Usage Strategy

AI is a productivity tool, not a designer.

We use AI for:

    Folder structure setup

    Component scaffolding

    Refactoring

    Documentation

    Test scaffolding

    Structural validation

We do NOT allow AI to:

    Introduce hardcoded values

    Override tokens

    Invent layout logic

    Replace shadcn primitives

AI output must follow our rules or it gets regenerated.
4. Precision Standard

"Very precise UI" means:

    Same structural layout as Figma

    Correct component grouping

    Proper spacing hierarchy

    Typography aligned with tokens

    Correct color usage

    Correct state behavior

    Responsive layout that scales cleanly

It does NOT mean 1px obsession.
It means structural and visual fidelity.
5. Preventing UI Drift

We prevent drift by:

    Exporting tokens from Figma

    Mapping tokens to CSS variables

    Creating reusable domain components

    Reviewing every PR for:

        hardcoded values

        layout hacks

        duplicated UI logic

Every new screen must reuse existing components first.
6. Data-Ready Architecture

All components accept props.
No UI logic tightly coupled to mock data.

Example:

interface StatCardProps {
  label: string
  value: string
  description?: string
}

Switching to real APIs later should require zero layout rewrites.
