"use client";
import { motion, useReducedMotion } from "motion/react";
import { Bot, Palette, Smartphone, Code2, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

type Item = {
  title: string;
  body: string;
  Icon: LucideIcon;
  span: "lg:col-span-2" | "lg:col-span-1";
};

const ITEMS: Item[] = [
  {
    title: "Business Automation",
    body:
      "Streamline operations with intelligent automation. CRM workflows, task automation, and AI-powered decision systems that save time and scale faster.",
    Icon: Bot,
    span: "lg:col-span-2",
  },
  {
    title: "UI/UX Design",
    body:
      "Visually rigorous, user-centric design. From wireframes to high-fidelity prototypes — intuitive, engaging, conversion-tuned.",
    Icon: Palette,
    span: "lg:col-span-1",
  },
  {
    title: "Mobile Apps",
    body:
      "High-performance iOS and Android. Cross-platform builds that deliver native-grade experiences without the dual-codebase tax.",
    Icon: Smartphone,
    span: "lg:col-span-1",
  },
  {
    title: "Web Development",
    body:
      "Fast, secure, scalable websites built on modern stacks. Static landing pages to full-stack applications.",
    Icon: Code2,
    span: "lg:col-span-2",
  },
];

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export default function Service() {
  const reduced = useReducedMotion();

  return (
    <section id="service" className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgb(var(--ds-accent-rgb)_/_0.06),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">Services</p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">What we build.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Full-stack capabilities, end-to-end. Pick a discipline — or all of them.
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
              <SpotlightCard className="group h-full min-h-[260px] p-7">
                <div className="flex h-full flex-col">
                  <div className="tw-glass tw-light-leak inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <it.Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl font-medium tracking-[-0.02em] text-white md:text-2xl">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-[55ch] text-sm leading-[1.6] text-white/65 md:text-base">
                    {it.body}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
