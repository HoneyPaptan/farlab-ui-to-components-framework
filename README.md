Screenshots in dark and light mode of different screens and components with FarLab dark and light theme and Typography:
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
