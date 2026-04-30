"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  spotlightColor?: string;
};

export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
  spotlightColor = "rgba(52, 211, 153, 0.18)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ ["--spot" as string]: spotlightColor }}
      className={cn(
        "group/spot tw-glass tw-light-leak relative isolate overflow-hidden rounded-2xl",
        "transition-transform duration-300 will-change-transform hover:-translate-y-[1px]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx, -200px) var(--my, -200px), var(--spot), transparent 70%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}
