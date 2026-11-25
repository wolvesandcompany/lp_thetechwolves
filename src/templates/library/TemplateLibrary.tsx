"use client";

/**
 * In-house template library index — the showcase gallery for all Tech Wolves
 * templates, grouped by service pillar (Websites / SaaS / Automation & AI).
 * Dark, premium, filterable. Reuses the shared motion kit.
 */

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FadeUp, Stagger } from "../kit/motion";
import {
  IN_HOUSE_TEMPLATES as TEMPLATES,
  TEMPLATE_FILTERS as FILTERS,
} from "@/lib/templates-data";

export function TemplateLibrary() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const shown = useMemo(
    () => (filter === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.pillar === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen w-full bg-[#07060d] font-sans text-slate-100 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07060d]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-500">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            The Tech Wolves
          </span>
          <span className="hidden text-sm text-slate-400 sm:block">Template Library</span>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[100px]" />
        <FadeUp standalone className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" /> In-house · Next.js · Framer Motion · 3D
          </span>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Templates that{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              prove we build
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Websites, SaaS products, and automations — hand-built, lightweight, and fully
            customizable. Pick a starting point; we make it yours.
          </p>
        </FadeUp>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-transparent bg-white text-slate-900"
                  : "border-white/12 text-slate-300 hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 pb-28">
        <Stagger key={filter} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((t) => (
              <FadeUp key={t.slug}>
                <motion.a
                  layout
                  href={`/templates/${t.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/25"
                >
                  {/* Preview */}
                  <div
                    className="relative flex aspect-[16/10] items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${t.gradient.from}, ${t.gradient.to})` }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                    <span
                      className={`relative text-2xl font-semibold tracking-tight ${
                        t.dark ? "text-white" : "text-white"
                      } drop-shadow`}
                    >
                      {t.brand}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                      {t.pillar}
                    </span>
                  </div>
                  {/* Meta */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{t.niche}</h3>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{t.blurb}</p>
                  </div>
                </motion.a>
              </FadeUp>
            ))}
          </AnimatePresence>
        </Stagger>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} The Tech Wolves — in-house template library
        </div>
      </footer>
    </div>
  );
}
