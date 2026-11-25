"use client";

/**
 * Signature interactive section for the Doctor Profile template.
 * A single physician's career timeline — click a milestone to reveal the
 * story behind it. Paired with a philosophy-of-care quote. This is what
 * makes the template read as ONE person's practice rather than a
 * multi-department clinic roster.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GraduationCap, Award, Building2, Users2, Sparkles, type LucideIcon } from "lucide-react";
import { FadeUp } from "../kit/motion";

type Milestone = {
  id: string;
  year: string;
  label: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const MILESTONES: Milestone[] = [
  {
    id: "school",
    year: "2004",
    label: "Medical School",
    icon: GraduationCap,
    title: "Yale School of Medicine",
    body: "Graduated with distinction in dermatologic research, focusing on inflammatory skin conditions in adolescent patients.",
  },
  {
    id: "residency",
    year: "2008",
    label: "Residency",
    icon: Users2,
    title: "NYU Langone, Dermatology",
    body: "Completed residency treating over 4,000 patients, then stayed on an additional year as chief resident mentoring incoming physicians.",
  },
  {
    id: "boards",
    year: "2009",
    label: "Board Certified",
    icon: Award,
    title: "American Board of Dermatology",
    body: "Certified and later re-certified with distinction; elected Fellow of the American Society for Dermatologic Surgery in 2014.",
  },
  {
    id: "practice",
    year: "2011",
    label: "Founded the Practice",
    icon: Building2,
    title: "Opened her own practice",
    body: "Left a large hospital system to build a practice where every patient gets a full hour, not eight rushed minutes — a promise kept for over a decade.",
  },
  {
    id: "today",
    year: "Today",
    label: "17 Years In",
    icon: Sparkles,
    title: "Still seeing patients personally",
    body: "No associates, no hand-offs — if you're a patient here, Dr. Calder is the one reading your chart and the one in the room.",
  },
];

export function DoctorJourney() {
  const [active, setActive] = useState(MILESTONES[3].id);
  const reduced = useReducedMotion();
  const current = MILESTONES.find((m) => m.id === active) ?? MILESTONES[0];

  return (
    <div>
      {/* Timeline rail */}
      <FadeUp standalone className="mt-12">
        <div
          role="tablist"
          aria-label="Career milestones"
          className="flex snap-x gap-2 overflow-x-auto pb-2 sm:justify-center sm:overflow-visible"
        >
          {MILESTONES.map((m, i) => {
            const selected = m.id === active;
            return (
              <button
                key={m.id}
                role="tab"
                id={`journey-tab-${m.id}`}
                aria-selected={selected}
                aria-controls="journey-panel"
                onClick={() => setActive(m.id)}
                className={`relative flex shrink-0 snap-start cursor-pointer flex-col items-center gap-2 rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tpl-accent)] ${
                  selected
                    ? "border-[var(--tpl-primary)] bg-[var(--tpl-primary)] text-white"
                    : "border-[var(--tpl-border)] bg-[var(--tpl-surface)] text-[var(--tpl-fg-muted)] hover:border-[var(--tpl-primary)]/40"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full ${
                    selected ? "bg-white/15 text-white" : "bg-[var(--tpl-primary)]/10 text-[var(--tpl-primary)]"
                  }`}
                >
                  <m.icon className="h-4 w-4" />
                </span>
                <span className={`text-xs font-semibold uppercase tracking-[0.1em] ${selected ? "text-white/80" : ""}`}>
                  {m.year}
                </span>
                <span className={`whitespace-nowrap text-sm font-semibold ${selected ? "text-white" : "text-[var(--tpl-fg)]"}`}>
                  {m.label}
                </span>
                {i < MILESTONES.length - 1 && (
                  <span className="pointer-events-none absolute left-full top-1/2 hidden h-px w-2 -translate-y-1/2 bg-[var(--tpl-border)] sm:block" />
                )}
              </button>
            );
          })}
        </div>
      </FadeUp>

      {/* Detail panel */}
      <div className="relative mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            id="journey-panel"
            role="tabpanel"
            aria-labelledby={`journey-tab-${current.id}`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-8 sm:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">
              {current.year}
            </span>
            <h3 className="tpl-heading mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{current.title}</h3>
            <p className="mt-3 max-w-2xl text-[var(--tpl-fg-muted)]">{current.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Philosophy of care quote */}
      <FadeUp standalone className="mt-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="tpl-rule mx-auto" />
          <p className="tpl-heading mt-6 text-2xl italic leading-snug text-[var(--tpl-fg)] sm:text-3xl">
            &ldquo;My patients don&apos;t need a specialist for their skin and a different one for
            their time. They need one doctor who remembers their history and tells them the
            truth.&rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold text-[var(--tpl-fg-muted)]">— Dr. Amara Calder, MD, FAAD</p>
        </div>
      </FadeUp>
    </div>
  );
}
