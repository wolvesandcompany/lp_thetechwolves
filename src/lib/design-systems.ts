/**
 * Design-system switcher catalog. Selecting one sets `data-design="<id>"` on
 * <html>, and design-systems.css re-skins the shared `.tw-glass` surface (used
 * across the whole main site) into that aesthetic. Templates are unaffected —
 * they use their own scoped themes and none of the `tw-*` classes.
 *
 * Per-style surface specs are grounded in the ui-ux-pro-max style database
 * (backdrop-blur amounts, shadow stacks, radii, signature accents).
 */

import type { CSSProperties } from "react";

export type DesignId =
  | "default"
  | "neomorphism"
  | "glassmorphism"
  | "claymorphism"
  | "minimalism"
  | "maximalism"
  | "brutalism"
  | "liquid-glass"
  | "bento"
  | "skeuomorphism";

export type DesignSystem = {
  id: DesignId;
  label: string;
  blurb: string;
  /** inline style for a tiny chip that mimics the style in the dropdown */
  chip: CSSProperties;
};

export const DEFAULT_DESIGN: DesignId = "default";

export const DESIGN_SYSTEMS: DesignSystem[] = [
  {
    id: "default",
    label: "Wolves (default)",
    blurb: "The signature dark, emerald-accented Tech Wolves look.",
    chip: {
      background: "rgba(52,211,153,0.14)",
      border: "1px solid rgba(52,211,153,0.55)",
      borderRadius: 7,
      boxShadow: "0 0 10px rgba(52,211,153,0.35)",
    },
  },
  {
    id: "neomorphism",
    label: "Neomorphism",
    blurb: "Soft, extruded surfaces with dual light/dark shadows.",
    chip: {
      background: "#101014",
      borderRadius: 7,
      boxShadow:
        "3px 3px 6px rgba(0,0,0,0.6), -3px -3px 6px rgba(255,255,255,0.05)",
    },
  },
  {
    id: "glassmorphism",
    label: "Glassmorphism",
    blurb: "Frosted, translucent glass with a soft backdrop blur.",
    chip: {
      background: "rgba(255,255,255,0.16)",
      border: "1px solid rgba(255,255,255,0.32)",
      borderRadius: 7,
    },
  },
  {
    id: "claymorphism",
    label: "Claymorphism",
    blurb: "Puffy, tactile clay with inset highlights. Rounded and playful.",
    chip: {
      background: "#6d5bd0",
      borderRadius: 9,
      boxShadow:
        "inset 0 -3px 5px rgba(0,0,0,0.4), inset 0 3px 5px rgba(255,255,255,0.25)",
    },
  },
  {
    id: "minimalism",
    label: "Minimalism",
    blurb: "Flat, hairline borders, sharp corners, zero ornament.",
    chip: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.35)",
      borderRadius: 2,
    },
  },
  {
    id: "maximalism",
    label: "Maximalism",
    blurb: "Loud clashing gradients, bold borders, saturated glow.",
    chip: {
      background:
        "linear-gradient(135deg, #ec4899, #8b5cf6 55%, #22d3ee)",
      borderRadius: 7,
      boxShadow: "0 0 10px rgba(236,72,153,0.55)",
    },
  },
  {
    id: "brutalism",
    label: "Brutalism",
    blurb: "Raw, high-contrast. Hard offset shadows, 0px radius, acid accent.",
    chip: {
      background: "#0a0a0a",
      border: "2px solid #f4f4f5",
      borderRadius: 0,
      boxShadow: "2px 2px 0 0 #DFE104",
    },
  },
  {
    id: "liquid-glass",
    label: "Liquid Glass",
    blurb: "Apple-style deep glass with a glossy top highlight and heavy blur.",
    chip: {
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.05))",
      border: "1px solid rgba(255,255,255,0.38)",
      borderRadius: 8,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
    },
  },
  {
    id: "bento",
    label: "Bento Grid",
    blurb: "Modular, evenly rounded tiles with soft depth. Apple-like.",
    chip: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 8,
      boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
    },
  },
  {
    id: "skeuomorphism",
    label: "Skeuomorphism",
    blurb: "Realistic, glossy gradients with layered depth and inset sheen.",
    chip: {
      background: "linear-gradient(180deg, #2a2c32, #16181c)",
      border: "1px solid rgba(0,0,0,0.6)",
      borderRadius: 5,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.6)",
    },
  },
];
