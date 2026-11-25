"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Draggable before/after comparison slider for the AI Jewellery Photography page.
 * Left (clipped) = the customer's raw photo, right = the enhanced "Studio Shot".
 * A gradient label band across the bottom holds the two labels AND conceals the
 * AI generator's corner watermark, so no image editing is needed.
 */
export function JewelleryCompare({
  beforeSrc,
  afterSrc,
  variant = "card",
}: {
  beforeSrc: string;
  afterSrc: string;
  variant?: "hero" | "card";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
    move(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) move(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  const aspect = variant === "hero" ? "aspect-[3/4]" : "aspect-[4/5]";

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className={`relative w-full ${aspect} cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10]`}
    >
      {/* after (full) */}
      <img
        src={afterSrc}
        alt="Studio-enhanced jewellery photo"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* before (clipped to slider position) */}
      <img
        src={beforeSrc}
        alt="Original phone photo of the jewellery"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      {/* handle line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90"
        style={{ left: `${pos}%` }}
      />
      {/* knob */}
      <div
        className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/50 text-sm text-white backdrop-blur-sm"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        ‹›
      </div>
      {/* bottom label band — also conceals the AI corner watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-3.5 pb-3"
        style={{
          height: "26%",
          background:
            "linear-gradient(to top, rgba(0,0,0,.97) 0%, rgba(0,0,0,.97) 77%, rgba(0,0,0,.30) 94%, transparent 100%)",
        }}
      >
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Your Photo
        </span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          Studio Shot
        </span>
      </div>
    </div>
  );
}
