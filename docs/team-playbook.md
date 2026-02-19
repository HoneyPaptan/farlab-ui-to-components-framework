# FAR AI – Team Playbook

This guide ensures fast implementation without losing consistency.

---

## 1. For Designers

Before handing off Figma:

- Use shared component library
- Use token-based colors only
- Avoid manual spacing overrides
- Define responsive intent
- Keep consistent naming
- Group reusable blocks clearly

Ask yourself:
What is reusable?
What is structural?
What is variable?

Clarity in Figma = speed in code.

---

## 2. For Developers

When implementing:

1. Break screen into smallest components
2. Generate components individually
3. Validate visually
4. Wire them together
5. Refine layout
6. Only then polish details

Never:
- Hardcode colors
- Guess spacing
- Override shadcn styles blindly

AI helps generate.
Developer ensures system integrity.

---

## 3. Extending to New Screens

When building new features:

- Reuse farlab components
- Extend variants instead of duplicating UI
- Avoid new layout patterns unless necessary
- Keep tokens centralized
- Review for drift

The system should scale without redesigning fundamentals.

---

## Summary

Design clarity + token discipline + structured AI usage = predictable shipping.

The goal is not fast hacks.
The goal is fast, repeatable precision.
