"use client";
import { motion, useReducedMotion } from "motion/react";
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  GraduationCap,
  Building2,
  Truck,
  Plane,
  Factory,
  type LucideIcon,
} from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

type Item = {
  category: string;
  title: string;
  body: string;
  Icon: LucideIcon;
  span: string;
};

const ITEMS: Item[] = [
  {
    category: "Healthcare",
    title: "HIPAA-grade telemedicine, EHR integrations.",
    body: "Patient portals, clinician workflows, security-first by default.",
    Icon: HeartPulse,
    span: "lg:col-span-2",
  },
  {
    category: "FinTech",
    title: "Smart, secure financial apps.",
    body: "Mobile banking, AI analytics, regulatory-grade payment gateways.",
    Icon: Banknote,
    span: "lg:col-span-1",
  },
  {
    category: "E-commerce",
    title: "Scalable shopping experiences.",
    body: "Custom platforms with payment, shipping and CMS integrations for B2C and B2B.",
    Icon: ShoppingBag,
    span: "lg:col-span-1",
  },
  {
    category: "EdTech",
    title: "Education through technology.",
    body: "E-learning platforms, virtual classrooms, gamified mobile learning.",
    Icon: GraduationCap,
    span: "lg:col-span-1",
  },
  {
    category: "Real Estate",
    title: "Modern tools for listings.",
    body: "Virtual tours, real-time data, CRM-connected property management.",
    Icon: Building2,
    span: "lg:col-span-1",
  },
  {
    category: "Logistics",
    title: "Optimized supply chains.",
    body: "Real-time tracking, delivery dashboards, automated inventory.",
    Icon: Truck,
    span: "lg:col-span-1",
  },
  {
    category: "Travel",
    title: "Travel through digital products.",
    body: "Booking apps, itinerary planners, real-time API integrations.",
    Icon: Plane,
    span: "lg:col-span-2",
  },
  {
    category: "Manufacturing",
    title: "Smart software for smarter factories.",
    body: "ERP tools, automation dashboards, IoT integrations and production analytics.",
    Icon: Factory,
    span: "lg:col-span-3",
  },
];

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export function Industries() {
  const reduced = useReducedMotion();

  return (
    <section id="industries" className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">Industries</p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">Driving innovation across industries.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Healthcare to fintech, logistics to entertainment — tailored solutions that scale.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.category}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ ...ENTRANCE, delay: reduced ? 0 : i * 0.06 }}
              className={it.span}
            >
              <SpotlightCard className="h-full min-h-[180px] p-7">
                <div className="flex h-full items-start gap-5">
                  <div className="tw-glass tw-light-leak inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <it.Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                      {it.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-white md:text-xl">
                      {it.title}
                    </h3>
                    <p className="mt-2 max-w-[55ch] text-sm leading-[1.6] text-white/65">{it.body}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
