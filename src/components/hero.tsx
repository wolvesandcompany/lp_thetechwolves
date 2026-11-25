"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useMagnetic } from "@/hooks/use-magnetic";
import { BackgroundBeams } from "./ui/background-beams";

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };
const STAGGER = 0.06;

export function Hero() {
  const reduced = useReducedMotion();
  const ctaRef = useMagnetic<HTMLAnchorElement>(50, 8);

  const baseTransition = reduced ? { duration: 0 } : ENTRANCE;
  const baseInitial = reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 };
  const baseAnimate = reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <section
      aria-labelledby="hero-title"
      className="tw-noise relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]"
    >
      <BackgroundBeams className="opacity-60 motion-reduce:hidden" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 z-[1] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6">
        <motion.div
          initial={baseInitial}
          animate={baseAnimate}
          transition={{ ...baseTransition, delay: 0 }}
          className="tw-glass tw-light-leak inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-white/80">The Tech Wolves</span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={baseInitial}
          animate={baseAnimate}
          transition={{ ...baseTransition, delay: reduced ? 0 : STAGGER }}
          className="mt-7 text-center text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="tw-display-gradient block">Empowering ideas with</span>
          <span className="tw-shimmer block">cutting-edge technology.</span>
        </motion.h1>

        <motion.p
          initial={baseInitial}
          animate={baseAnimate}
          transition={{ ...baseTransition, delay: reduced ? 0 : STAGGER * 2 }}
          className="mt-6 max-w-[65ch] text-center text-base leading-[1.6] text-white/70 md:text-lg"
        >
          A team of senior engineers and designers transforming AI, automation, and product
          ideas into shipped, scalable businesses.
        </motion.p>

        <motion.div
          initial={baseInitial}
          animate={baseAnimate}
          transition={{ ...baseTransition, delay: reduced ? 0 : STAGGER * 3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            ref={ctaRef}
            href="#service"
            className="tw-focus group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgb(var(--ds-accent-rgb)_/_0.5),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Explore services</span>
            <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#pricing"
            className="tw-focus inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            View pricing
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: reduced ? 0 : 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            animate={reduced ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-0.5 rounded-full bg-emerald-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
