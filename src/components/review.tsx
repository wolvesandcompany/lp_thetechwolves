"use client";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const TESTIMONIALS = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
  },
];

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export default function Review() {
  const reduced = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Testimonials
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">What clients say.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Direct from partners — how we&apos;ve helped them transform and grow.
          </p>
        </motion.header>

        <div className="tw-glass tw-light-leak rounded-2xl p-6 md:p-10">
          <AnimatedTestimonials testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}
