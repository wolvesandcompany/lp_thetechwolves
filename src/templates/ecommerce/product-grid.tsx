"use client";

/**
 * Signature interactive section — filterable product grid.
 * Category chips (All / Apparel / Home / Accessories) animate-filter the grid;
 * each card has a hover "Add to cart" that increments the nav cart badge.
 */

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus, Check } from "lucide-react";
import { useCart } from "./cart";

type Category = "Apparel" | "Home" | "Accessories";

type Product = {
  name: string;
  price: string;
  category: Category;
  /** two-stop gradient used as the "photo" block */
  from: string;
  to: string;
};

const PRODUCTS: Product[] = [
  { name: "Everyday Linen Shirt", price: "$68", category: "Apparel", from: "#c7d2fe", to: "#a5b4fc" },
  { name: "Stoneware Mug Set", price: "$42", category: "Home", from: "#fde68a", to: "#fca5a5" },
  { name: "Woven Tote Bag", price: "$54", category: "Accessories", from: "#bbf7d0", to: "#6ee7b7" },
  { name: "Merino Crew Sweater", price: "$120", category: "Apparel", from: "#fbcfe8", to: "#f9a8d4" },
  { name: "Ceramic Vase", price: "$38", category: "Home", from: "#a7f3d0", to: "#5eead4" },
  { name: "Leather Card Wallet", price: "$45", category: "Accessories", from: "#fed7aa", to: "#fdba74" },
  { name: "Relaxed Chino Pant", price: "$88", category: "Apparel", from: "#ddd6fe", to: "#c4b5fd" },
  { name: "Soft Wool Throw", price: "$96", category: "Home", from: "#bae6fd", to: "#7dd3fc" },
  { name: "Minimalist Watch", price: "$149", category: "Accessories", from: "#e2e8f0", to: "#cbd5e1" },
];

const FILTERS = ["All", "Apparel", "Home", "Accessories"] as const;
type Filter = (typeof FILTERS)[number];

export function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduced = useReducedMotion();

  const visible =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filter chips */}
      <div className="mt-10 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "text-white"
                  : "text-[var(--tpl-secondary)] hover:text-[var(--tpl-fg)]"
              }`}
              aria-pressed={active}
            >
              {active && (
                <motion.span
                  layoutId="chip-active"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--tpl-primary)]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {!active && (
                <span className="absolute inset-0 -z-10 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]" />
              )}
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.name}
              layout
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(17,24,39,0.35)]">
      {/* Gradient "photo" block */}
      <div
        className="relative aspect-[4/5] w-full overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${product.from}, ${product.to})` }}
      >
        <span className="absolute left-4 top-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--tpl-secondary)] backdrop-blur">
          {product.category}
        </span>

        {/* Hover add-to-cart */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
          <button
            onClick={handleAdd}
            className="pointer-events-auto inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--tpl-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.04] active:scale-95"
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> Add to cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <h3 className="text-sm font-semibold text-[var(--tpl-fg)]">{product.name}</h3>
        <span className="shrink-0 text-sm font-bold text-[var(--tpl-fg)]">{product.price}</span>
      </div>
    </div>
  );
}
