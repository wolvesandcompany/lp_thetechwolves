"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Palette, Check, ChevronDown } from "lucide-react";
import { DESIGN_SYSTEMS } from "@/lib/design-systems";
import { useDesignSystem } from "./DesignSystemProvider";

/**
 * Floating design-system dropdown for the main site. Selecting a style morphs
 * every surface live. Deliberately avoids the `.tw-glass` class so the control
 * itself stays visually stable across every design. Hidden on template demos.
 */
export function DesignSystemSwitcher() {
  const { design, setDesign, enabled } = useDesignSystem();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const current = DESIGN_SYSTEMS.find((d) => d.id === design) ?? DESIGN_SYSTEMS[0];

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="fixed bottom-5 left-5 z-[70] font-sans"
      data-ds-control
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="absolute bottom-[calc(100%+10px)] left-0 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0e]/95 p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            role="listbox"
            aria-label="Design system"
          >
            <p className="px-3 pb-1.5 pt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
              Design system
            </p>
            <div className="max-h-[60vh] overflow-y-auto">
              {DESIGN_SYSTEMS.map((d) => {
                const active = d.id === design;
                return (
                  <button
                    key={d.id}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setDesign(d.id);
                      setOpen(false);
                    }}
                    className={`group flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors ${
                      active ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 h-6 w-6 shrink-0"
                      style={d.chip}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className="truncate text-sm font-medium text-white/90">
                          {d.label}
                        </span>
                        {active && (
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        )}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] leading-snug text-white/45">
                        {d.blurb}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="tw-focus flex items-center gap-2 rounded-full border border-white/12 bg-[#0b0b0e]/90 px-4 py-2.5 text-sm font-medium text-white/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors hover:border-emerald-400/40 hover:text-white"
      >
        <Palette className="h-4 w-4 text-emerald-400" />
        <span className="hidden sm:inline text-white/55">Design:</span>
        <span className="max-w-[9rem] truncate">{current.label}</span>
        <ChevronDown
          className={`h-4 w-4 text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
