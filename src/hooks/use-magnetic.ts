"use client";
import { useEffect, useRef } from "react";
import { animate } from "motion/react";

const SPRING = { type: "spring" as const, stiffness: 300, damping: 30 };

export function useMagnetic<T extends HTMLElement>(radius = 50, max = 8) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const halfMax = Math.max(rect.width, rect.height) / 2;

        if (dist < radius + halfMax) {
          const factor = Math.min(1, dist / (radius + halfMax));
          const x = (dx / (dist || 1)) * max * factor;
          const y = (dy / (dist || 1)) * max * factor;
          animate(el, { x, y }, SPRING);
        } else {
          animate(el, { x: 0, y: 0 }, SPRING);
        }
      });
    };

    const onLeave = () => animate(el, { x: 0, y: 0 }, SPRING);

    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [radius, max]);

  return ref;
}
