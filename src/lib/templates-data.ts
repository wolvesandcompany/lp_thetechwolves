/**
 * Single source of truth for the in-house template library.
 * Consumed by the homepage showcase (components/templates.tsx),
 * the /templates page, and the library gallery (templates/library).
 *
 * Each entry mirrors the real theme tokens defined in
 * src/templates/<slug>/theme.css so previews look on-brand.
 */

export type Pillar = "Websites" | "SaaS" | "Automation & AI";

export type TemplateColors = {
  bg: string;
  surface: string;
  fg: string;
  muted: string;
  primary: string;
  accent: string;
};

export type TemplateMeta = {
  slug: string;
  brand: string;
  niche: string;
  pillar: Pillar;
  blurb: string;
  /** whether the template's own theme is dark */
  dark: boolean;
  colors: TemplateColors;
  /** two-stop gradient for compact gallery tiles */
  gradient: { from: string; to: string };
};

export const IN_HOUSE_TEMPLATES: TemplateMeta[] = [
  {
    slug: "ai-agency",
    brand: "NovaAI",
    niche: "AI Agency",
    pillar: "Automation & AI",
    blurb:
      "Cinematic AI automation studio with a live, runnable workflow demo and a 3D hero.",
    dark: true,
    colors: {
      bg: "#07060d",
      surface: "#12101d",
      fg: "#f5f3ff",
      muted: "#a09bbd",
      primary: "#7c3aed",
      accent: "#ec4899",
    },
    gradient: { from: "#7C3AED", to: "#EC4899" },
  },
  {
    slug: "saas",
    brand: "Flowdesk",
    niche: "SaaS Product",
    pillar: "SaaS",
    blurb:
      "Glassmorphic SaaS landing with an interactive, animated product dashboard preview.",
    dark: true,
    colors: {
      bg: "#0b0f17",
      surface: "#151a24",
      fg: "#f1f5f9",
      muted: "#94a3b8",
      primary: "#6366f1",
      accent: "#22c55e",
    },
    gradient: { from: "#6366F1", to: "#22C55E" },
  },
  {
    slug: "ecommerce",
    brand: "Kindred Goods",
    niche: "E-commerce",
    pillar: "Websites",
    blurb:
      "Editorial retail storefront with a filterable product grid and a live cart.",
    dark: false,
    colors: {
      bg: "#ffffff",
      surface: "#f9fafb",
      fg: "#111827",
      muted: "#6b7280",
      primary: "#111827",
      accent: "#4f46e5",
    },
    gradient: { from: "#111827", to: "#4F46E5" },
  },
  {
    slug: "restaurant",
    brand: "Ember & Oak",
    niche: "Restaurant",
    pillar: "Websites",
    blurb:
      "Warm, upscale-casual dining site with an interactive menu and reservations.",
    dark: false,
    colors: {
      bg: "#FDF8F3",
      surface: "#FFFFFF",
      fg: "#1C1410",
      muted: "#7A6A5C",
      primary: "#B91C1C",
      accent: "#A16207",
    },
    gradient: { from: "#B91C1C", to: "#A16207" },
  },
  {
    slug: "real-estate",
    brand: "Meridian Estates",
    niche: "Real Estate",
    pillar: "Websites",
    blurb:
      "Elegant luxury property brand with filterable listings and a mortgage teaser.",
    dark: false,
    colors: {
      bg: "#f8fafc",
      surface: "#ffffff",
      fg: "#0f172a",
      muted: "#64748b",
      primary: "#0f172a",
      accent: "#0369a1",
    },
    gradient: { from: "#0F172A", to: "#0369A1" },
  },
  {
    slug: "fitness",
    brand: "Ironpeak",
    niche: "Fitness & Gym",
    pillar: "Websites",
    blurb:
      "Bold, high-energy gym site with a weekly class schedule and memberships.",
    dark: true,
    colors: {
      bg: "#0a0a0a",
      surface: "#141414",
      fg: "#fafafa",
      muted: "#a3a3a3",
      primary: "#f97316",
      accent: "#22c55e",
    },
    gradient: { from: "#F97316", to: "#22C55E" },
  },
  {
    slug: "beauty-spa",
    brand: "Lumière Spa",
    niche: "Beauty & Spa",
    pillar: "Websites",
    blurb:
      "Soft, luxurious wellness site with a services menu and a booking teaser.",
    dark: false,
    colors: {
      bg: "#FCF7FA",
      surface: "#FFFFFF",
      fg: "#2A1A24",
      muted: "#8A7A82",
      primary: "#DB2777",
      accent: "#8B5CF6",
    },
    gradient: { from: "#DB2777", to: "#8B5CF6" },
  },
  {
    slug: "law-firm",
    brand: "Sterling & Vance",
    niche: "Law Firm",
    pillar: "Websites",
    blurb:
      "Authoritative, high-trust firm site with practice areas and attorney profiles.",
    dark: false,
    colors: {
      bg: "#FBFAF7",
      surface: "#FFFFFF",
      fg: "#1A202C",
      muted: "#64748B",
      primary: "#1E293B",
      accent: "#B45309",
    },
    gradient: { from: "#1E293B", to: "#B45309" },
  },
];

export const TEMPLATE_FILTERS: ("All" | Pillar)[] = [
  "All",
  "Websites",
  "SaaS",
  "Automation & AI",
];

/** Absolute URL for a template preview route. */
export const templateHref = (slug: string) => `/templates/${slug}`;
