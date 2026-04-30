"use client";
import { motion, useReducedMotion } from "motion/react";
import { Layers, Compass, Zap, PenTool, MessageSquare, Infinity as InfinityIcon, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

type Item = {
  title: string;
  body: string;
  Icon: LucideIcon;
  span: "lg:col-span-2" | "lg:col-span-1";
};

const ITEMS: Item[] = [
  {
    title: "Full-stack excellence",
    body:
      "Frontend and backend, end-to-end. Seamless, performant applications from database to UI without handoff seams.",
    Icon: Layers,
    span: "lg:col-span-2",
  },
  {
    title: "Strategic product thinking",
    body: "Beyond code. We map users and market to ship solutions that move the business.",
    Icon: Compass,
    span: "lg:col-span-1",
  },
  {
    title: "Agile teams",
    body: "Lean. Fast. Pivot-ready — built for startups and evolving roadmaps.",
    Icon: Zap,
    span: "lg:col-span-1",
  },
  {
    title: "Design-driven dev",
    body: "Designers and engineers in sync. Pixel-perfect interfaces, usable not just pretty.",
    Icon: PenTool,
    span: "lg:col-span-2",
  },
  {
    title: "Transparent comms",
    body: "Weekly demos. Async updates. Always in the loop.",
    Icon: MessageSquare,
    span: "lg:col-span-1",
  },
  {
    title: "Long-term partnership",
    body: "We don't disappear at launch. Scale, maintain, improve — for the long run.",
    Icon: InfinityIcon,
    span: "lg:col-span-2",
  },
];

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export default function WhyUs() {
  const reduced = useReducedMotion();

  return (
    <section id="why-us" className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">Why us</p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
            <span className="tw-display-gradient">Reasons we&apos;re different.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Creativity, strategy, technology — composed for outcomes, not deliverables.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ ...ENTRANCE, delay: reduced ? 0 : i * 0.06 }}
              className={it.span}
            >
              <SpotlightCard className="h-full min-h-[200px] p-7">
                <div className="flex h-full flex-col">
                  <div className="tw-glass tw-light-leak inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <it.Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] md:text-xl">{it.title}</h3>
                  <p className="mt-2 max-w-[55ch] text-sm leading-[1.6] text-white/65">{it.body}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
