"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { toast } from "sonner";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]';

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

type Ripple = { id: number; x: number; y: number };

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [aurora, setAurora] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28, mass: 0.5 });

  const konamiBuffer = useRef<string[]>([]);

  // Capability + reduced-motion check
  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(isFine && !isReduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("tw-no-cursor");

    const onMove = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      setHover(!!target.closest?.(INTERACTIVE_SELECTOR));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    const onClick = (e: PointerEvent) => {
      const id = Date.now() + Math.random();
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((rp) => rp.id !== id));
      }, 700);
    };

    const onKey = (e: KeyboardEvent) => {
      const buf = konamiBuffer.current;
      buf.push(e.key);
      if (buf.length > KONAMI.length) buf.shift();
      if (buf.length === KONAMI.length && buf.every((k, i) => k.toLowerCase() === KONAMI[i].toLowerCase())) {
        konamiBuffer.current = [];
        triggerAurora();
      }
    };

    const triggerAurora = () => {
      setAurora(true);
      toast.success("🐺 Aurora mode unlocked", {
        description: "The pack runs at midnight.",
        duration: 3500,
      });
      window.setTimeout(() => setAurora(false), 4500);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("click", onClick as unknown as EventListener);
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.classList.remove("tw-no-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("click", onClick as unknown as EventListener);
      window.removeEventListener("keydown", onKey);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: dotX, y: dotY }}
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
          style={{
            width: pressed ? 4 : 6,
            height: pressed ? 4 : 6,
            transition: "width 0.15s ease, height 0.15s ease",
          }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            width: hover ? 56 : pressed ? 22 : 32,
            height: hover ? 56 : pressed ? 22 : 32,
            backgroundColor: hover ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0)",
            borderColor: hover ? "rgba(52,211,153,0.7)" : "rgba(255,255,255,0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-md"
        />
      </motion.div>

      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed z-[9997] block h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 [box-shadow:0_0_30px_-5px_rgba(52,211,153,0.6)_inset]"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {aurora && (
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none fixed inset-0 z-[9996] overflow-hidden"
          >
            <div className="tw-aurora-band tw-aurora-1" />
            <div className="tw-aurora-band tw-aurora-2" />
            <div className="tw-aurora-band tw-aurora-3" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
