"use client";

/**
 * Signature interactive section for the Restaurant template.
 * Category filter tabs animate the dish list on switch via Framer Motion.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../kit/motion";

type Category = "Starters" | "Mains" | "Desserts" | "Drinks";

type Dish = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

const CATEGORIES: Category[] = ["Starters", "Mains", "Desserts", "Drinks"];

const MENU: Record<Category, Dish[]> = {
  Starters: [
    { name: "Charred Heirloom Beets", description: "Whipped goat cheese, toasted hazelnut, orange zest, aged balsamic.", price: "$14" },
    { name: "Ember-Kissed Flatbread", description: "Wild mushroom, fontina, thyme, truffle honey drizzle.", price: "$16", tag: "House favorite" },
    { name: "Oak-Smoked Burrata", description: "Blistered cherry tomato, basil oil, grilled sourdough.", price: "$17" },
    { name: "Steak Tartare", description: "Hand-cut prime beef, cured yolk, capers, crisp shallot.", price: "$19" },
  ],
  Mains: [
    { name: "Wood-Fired Ribeye", description: "16oz dry-aged, bone marrow butter, charred scallion, sea salt.", price: "$48", tag: "Chef's pick" },
    { name: "Cast-Iron Branzino", description: "Whole roasted, salsa verde, fennel, lemon confit.", price: "$34" },
    { name: "Braised Short Rib", description: "Red wine reduction, roasted garlic mash, glazed root veg.", price: "$36" },
    { name: "Wild Mushroom Risotto", description: "Carnaroli rice, aged parmesan, truffle, crispy sage.", price: "$28" },
  ],
  Desserts: [
    { name: "Burnt Basque Cheesecake", description: "Caramelized crust, crème fraîche, macerated berries.", price: "$13", tag: "Most ordered" },
    { name: "Dark Chocolate Torte", description: "Smoked sea salt, olive oil, espresso gelato.", price: "$14" },
    { name: "Spiced Apple Galette", description: "Brown butter crust, bourbon caramel, vanilla bean cream.", price: "$12" },
  ],
  Drinks: [
    { name: "Ember Old Fashioned", description: "Oak-smoked bourbon, demerara, black walnut bitters.", price: "$16", tag: "Signature" },
    { name: "Garden Spritz", description: "Elderflower, prosecco, cucumber, fresh mint.", price: "$14" },
    { name: "Barrel-Aged Negroni", description: "Gin, Campari, sweet vermouth, aged 8 weeks in oak.", price: "$15" },
    { name: "Cold-Brew Affogato", description: "House cold brew, vanilla gelato, cocoa nib.", price: "$11" },
  ],
};

export function InteractiveMenu() {
  const [active, setActive] = useState<Category>("Starters");
  const reduced = useReducedMotion();

  return (
    <div className="mx-auto max-w-4xl">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-1.5 shadow-sm"
      >
        {CATEGORIES.map((cat) => {
          const selected = cat === active;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(cat)}
              className="relative flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              {selected && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)]"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${selected ? "text-white" : "text-[var(--tpl-fg-muted)]"}`}>
                {cat}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dish list */}
      <div className="mt-10 min-h-[22rem]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EXPO_OUT }}
            className="divide-y divide-[var(--tpl-border)]"
          >
            {MENU[active].map((dish, i) => (
              <motion.li
                key={dish.name}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EXPO_OUT, delay: reduced ? 0 : i * 0.06 }}
                className="flex items-start justify-between gap-6 py-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--tpl-fg)]">{dish.name}</h3>
                    {dish.tag && (
                      <span className="rounded-full bg-[var(--tpl-accent)]/12 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--tpl-accent)]">
                        {dish.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--tpl-fg-muted)]">{dish.description}</p>
                </div>
                <span className="shrink-0 pt-0.5 text-lg font-semibold text-[var(--tpl-primary)]">{dish.price}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
