"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Eye, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpotlightCard } from "./ui/spotlight-card";
import { TemplatePreview } from "./TemplatePreview";
import {
  IN_HOUSE_TEMPLATES,
  TEMPLATE_FILTERS,
  templateHref,
} from "@/lib/templates-data";
import { track } from "@/lib/analytics";

// Homepage showcase: first six in-house templates, filterable by pillar.
const FEATURED = IN_HOUSE_TEMPLATES.slice(0, 6);

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };
const SPRING_INT = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function ExploreTemplates() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<(typeof TEMPLATE_FILTERS)[number]>("All");

  const filtered =
    active === "All" ? FEATURED : FEATURED.filter((t) => t.pillar === active);

  return (
    <section
      id="templates"
      className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Templates
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">Production-ready foundations.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Hand-built templates across every service we ship — websites, SaaS
            products, and automations. Fully responsive, conversion-tuned, and
            yours to customize.
          </p>
        </motion.header>

        <div className="mb-10 flex flex-wrap gap-2">
          {TEMPLATE_FILTERS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "tw-focus relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200",
                active === c ? "text-[#050505]" : "text-white/60 hover:text-white",
              )}
            >
              {active === c && (
                <motion.span
                  layoutId="tpl-active-pill"
                  transition={reduced ? { duration: 0 } : SPRING_INT}
                  className="absolute inset-0 rounded-full bg-emerald-400"
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tpl, i) => (
            <motion.a
              key={tpl.slug}
              href={templateHref(tpl.slug)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.templateView(tpl.slug)}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ ...ENTRANCE, delay: reduced ? 0 : i * 0.06 }}
              className="tw-focus block"
            >
              <SpotlightCard className="group h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <TemplatePreview t={tpl} />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-40"
                  />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300 backdrop-blur-md">
                      {tpl.pillar}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/80 transition-colors duration-200 group-hover:text-white">
                      <Eye className="h-3.5 w-3.5" />
                      Live preview
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-white">
                    {tpl.niche}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-white/60">{tpl.blurb}</p>
                </div>
              </SpotlightCard>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/templates"
            className="tw-focus group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            View all templates
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
