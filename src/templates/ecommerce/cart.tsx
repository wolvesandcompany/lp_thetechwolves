"use client";

/**
 * Lightweight cart state for the Kindred Goods template.
 * A React context holds the item count; the nav badge subscribes to it and
 * the product grid's "Add to cart" buttons increment it. Local state only.
 */

import { createContext, useContext, useState, type ReactNode } from "react";

type CartContextValue = {
  count: number;
  add: (qty?: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const add = (qty = 1) => setCount((c) => c + qty);
  return <CartContext.Provider value={{ count, add }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
