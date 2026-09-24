"use client";

/**
 * Signature interactive section for the Real Estate template.
 * Filter chips (All / For Sale / For Rent / Luxury) animate & filter a grid of
 * property cards. Each card is a CSS-gradient "photo" block with price, specs,
 * and location. Built on motion/react layout animations.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BedDouble, Bath, Maximize, MapPin, Heart } from "lucide-react";

type Category = "For Sale" | "For Rent" | "Luxury";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  cadence?: string;
  beds: number;
  baths: number;
  sqft: string;
  categories: Category[];
  gradient: string;
  tag: string;
};

const PROPERTIES: Property[] = [
  {
    id: "p1",
    title: "Cliffside Glass Villa",
    location: "Malibu, CA",
    price: "$4.85M",
    beds: 5,
    baths: 6,
    sqft: "6,400",
    categories: ["For Sale", "Luxury"],
    gradient: "from-[#0f172a] via-[#0e7490] to-[#0369a1]",
    tag: "New",
  },
  {
    id: "p2",
    title: "Harbor Loft 12B",
    location: "Brooklyn, NY",
    price: "$6,200",
    cadence: "/mo",
    beds: 2,
    baths: 2,
    sqft: "1,480",
    categories: ["For Rent"],
    gradient: "from-[#0369a1] via-[#0e7490] to-[#164e63]",
    tag: "Featured",
  },
  {
    id: "p3",
    title: "The Meridian Penthouse",
    location: "Chicago, IL",
    price: "$3.2M",
    beds: 3,
    baths: 4,
    sqft: "3,900",
    categories: ["For Sale", "Luxury"],
    gradient: "from-[#1e293b] via-[#334155] to-[#0e7490]",
    tag: "Luxury",
  },
  {
    id: "p4",
    title: "Garden Row Townhouse",
    location: "Austin, TX",
    price: "$980K",
    beds: 4,
    baths: 3,
    sqft: "2,750",
    categories: ["For Sale"],
    gradient: "from-[#0e7490] via-[#0891b2] to-[#155e75]",
    tag: "Open house",
  },
  {
    id: "p5",
    title: "Skyline Suite 41",
    location: "Seattle, WA",
    price: "$4,400",
    cadence: "/mo",
    beds: 1,
    baths: 1,
    sqft: "920",
    categories: ["For Rent"],
    gradient: "from-[#164e63] via-[#0369a1] to-[#0f172a]",
    tag: "Available",
  },
  {
    id: "p6",
    title: "Vineyard Estate",
    location: "Napa Valley, CA",
    price: "$7.9M",
    beds: 6,
    baths: 7,
    sqft: "9,100",
    categories: ["For Sale", "Luxury"],
    gradient: "from-[#0f172a] via-[#334155] to-[#0369a1]",
    tag: "Exclusive",
  },
];

const FILTERS = ["All", "For Sale", "For Rent", "Luxury"] as const;
type Filter = (typeof FILTERS)[number];

export function PropertyListings() {
  const [active, setActive] = useState<Filter>("All");
  const reduced = useReducedMotion();

  const visible =
    active === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.categories.includes(active as Category));

  return (
    <div>
      {/* Filter chips */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "border border-[var(--tpl-border)] bg-[var(--tpl-surface)] text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-[var(--tpl-secondary)] to-[var(--tpl-accent)]"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Gradient "photo" */}
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--tpl-primary)] backdrop-blur">
                  {p.tag}
                </span>
                <button
                  type="button"
                  aria-label={`Save ${p.title}`}
                  className="absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-white/90 text-[var(--tpl-secondary)] backdrop-blur transition-transform hover:scale-110"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-4 flex items-end gap-1 text-white">
                  <span className="text-2xl font-semibold tracking-tight">{p.price}</span>
                  {p.cadence && <span className="mb-0.5 text-sm opacity-80">{p.cadence}</span>}
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--tpl-fg)]">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--tpl-fg-muted)]">
                  <MapPin className="h-3.5 w-3.5 text-[var(--tpl-secondary)]" />
                  {p.location}
                </p>
                <div className="mt-4 flex items-center gap-4 border-t border-[var(--tpl-border)] pt-4 text-sm text-[var(--tpl-fg-muted)]">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4 text-[var(--tpl-accent)]" /> {p.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-[var(--tpl-accent)]" /> {p.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="h-4 w-4 text-[var(--tpl-accent)]" /> {p.sqft} sqft
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
