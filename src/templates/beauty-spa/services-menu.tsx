"use client";

/**
 * Signature interactive section for the Beauty Spa template.
 * Soft category tabs animate a treatment list (name, duration, price) in/out,
 * each with a "Book" affordance. Framer Motion + prefers-reduced-motion aware.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Sparkles, Flower2, Hand, Scissors, Clock, ArrowRight } from "lucide-react";
import { EXPO_OUT } from "../kit/motion";

type Treatment = { name: string; desc: string; duration: string; price: string };
type Category = { id: string; label: string; icon: typeof Sparkles; items: Treatment[] };

const CATEGORIES: Category[] = [
  {
    id: "facials",
    label: "Facials",
    icon: Sparkles,
    items: [
      { name: "Signature Glow Facial", desc: "Deep cleanse, exfoliation & vitamin-C radiance boost.", duration: "60 min", price: "$140" },
      { name: "Hydra-Dew Treatment", desc: "Hyaluronic infusion for plump, dewy skin.", duration: "75 min", price: "$175" },
      { name: "Gold Lift Ritual", desc: "24k gold mask with sculpting facial massage.", duration: "90 min", price: "$220" },
      { name: "Express Refresh", desc: "A quick reset between busy days.", duration: "30 min", price: "$80" },
    ],
  },
  {
    id: "massage",
    label: "Massage",
    icon: Flower2,
    items: [
      { name: "Serenity Aromatherapy", desc: "Warm oils & long, calming strokes.", duration: "60 min", price: "$150" },
      { name: "Deep Tissue Release", desc: "Targeted work for knots and tension.", duration: "75 min", price: "$185" },
      { name: "Hot Stone Journey", desc: "Basalt stones melt away deep stress.", duration: "90 min", price: "$210" },
      { name: "Couples Retreat", desc: "Side-by-side relaxation for two.", duration: "60 min", price: "$290" },
    ],
  },
  {
    id: "nails",
    label: "Nails",
    icon: Hand,
    items: [
      { name: "Luxe Gel Manicure", desc: "Long-lasting shine with cuticle care.", duration: "45 min", price: "$65" },
      { name: "Spa Pedicure", desc: "Soak, scrub, mask & mineral massage.", duration: "60 min", price: "$85" },
      { name: "French Artistry", desc: "Hand-painted classic or modern tips.", duration: "50 min", price: "$75" },
      { name: "Paraffin Add-On", desc: "Silky, deeply hydrated hands.", duration: "15 min", price: "$25" },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    icon: Scissors,
    items: [
      { name: "Cut & Blow-Dry", desc: "Tailored shape with a smooth finish.", duration: "60 min", price: "$95" },
      { name: "Balayage Illumination", desc: "Sun-kissed, hand-painted dimension.", duration: "150 min", price: "$260" },
      { name: "Gloss & Treatment", desc: "Shine, tone & bond-repair therapy.", duration: "45 min", price: "$110" },
      { name: "Bridal Styling", desc: "An elegant look for your day.", duration: "90 min", price: "$180" },
    ],
  },
];

export function ServicesMenu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const reduced = useReducedMotion();
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Soft category tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === active;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              aria-pressed={isActive}
              className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-white"
                  : "text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] shadow-lg shadow-[var(--tpl-primary)]/25"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 -z-10 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]" />
              )}
              <Icon className="h-4 w-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Treatment list */}
      <div className="mt-10 rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-3 shadow-[0_20px_60px_-30px_rgba(150,60,110,0.35)] sm:p-6">
        <AnimatePresence mode="wait">
          <motion.ul
            key={current.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EXPO_OUT }}
            className="divide-y divide-[var(--tpl-border)]"
          >
            {current.items.map((item, i) => (
              <motion.li
                key={item.name}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EXPO_OUT, delay: reduced ? 0 : i * 0.06 }}
                className="group flex flex-col gap-3 px-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-4"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h4 className="tpl-serif text-lg font-semibold text-[var(--tpl-fg)]">{item.name}</h4>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--tpl-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--tpl-fg-muted)]">
                      <Clock className="h-3 w-3" /> {item.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--tpl-fg-muted)]">{item.desc}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 sm:pl-6">
                  <span className="text-xl font-semibold tracking-tight text-[var(--tpl-primary)]">{item.price}</span>
                  <a
                    href="#booking"
                    aria-label={`Book ${item.name}`}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-2 text-sm font-semibold text-[var(--tpl-fg)] transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-[var(--tpl-primary)] hover:to-[var(--tpl-accent)] hover:text-white"
                  >
                    Book <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
