"use client";

/**
 * Shared motion primitives for The Tech Wolves in-house template library.
 *
 * Every template composes these instead of re-declaring variants. They all
 * honour prefers-reduced-motion and use spring/expo easing per the
 * ui-ux-pro-max motion spec (Bezier(0.16, 1, 0.3, 1) "expo.out").
 */

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
export const SPRING = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

/** Container that staggers its direct children into view. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : gap } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

/** A single item that fades + rises. Use inside <Stagger> or standalone. */
export function FadeUp({
  children,
  className,
  y = 24,
  delay = 0,
  once = true,
  standalone = false,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  once?: boolean;
  /** true = animate on its own viewport trigger, false = inherit parent Stagger */
  standalone?: boolean;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EXPO_OUT, delay },
    },
  };
  const trigger = standalone
    ? { initial: "hidden" as const, whileInView: "show" as const, viewport: { once, amount: 0.3 } }
    : { variants };
  return (
    <motion.div className={className} variants={variants} {...(standalone ? trigger : {})}>
      {children}
    </motion.div>
  );
}

/** Blur-in reveal for hero headlines and premium accents. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: EXPO_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Subtle press/hover scale wrapper for cards and buttons. */
export function Pressable({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING}
    >
      {children}
    </motion.div>
  );
}

/** Count-up number for stats/metrics sections. */
export { CountUp } from "./count-up";
