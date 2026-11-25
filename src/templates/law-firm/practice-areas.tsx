"use client";

/**
 * Signature interactive section for the Law Firm template.
 * A restrained, accessible tabbed/accordion panel of practice areas that
 * reveals detail on selection, plus a grid of attorney profile cards.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Building2,
  Scale,
  Home,
  Users,
  Lightbulb,
  Check,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, Stagger, Pressable } from "../kit/motion";

type PracticeArea = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  points: string[];
  stat: { value: string; label: string };
};

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate",
    label: "Corporate",
    icon: Building2,
    blurb:
      "From formation to exit, we counsel founders, boards, and investors through the transactions that define a company.",
    points: [
      "Mergers, acquisitions & divestitures",
      "Venture financing & capital raises",
      "Governance, compliance & board advisory",
      "Commercial & vendor contracts",
    ],
    stat: { value: "$4.2B", label: "in deals closed" },
  },
  {
    id: "litigation",
    label: "Litigation",
    icon: Scale,
    blurb:
      "Trial-tested advocates who prepare every matter for the courtroom — and resolve most of them well before it.",
    points: [
      "Commercial & contract disputes",
      "Class action & complex litigation",
      "Appellate advocacy",
      "Arbitration & mediation",
    ],
    stat: { value: "94%", label: "favorable resolutions" },
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: Home,
    blurb:
      "Full-cycle counsel for developers, lenders, and owners across acquisition, entitlement, and disposition.",
    points: [
      "Acquisitions & dispositions",
      "Commercial leasing",
      "Development & land use",
      "Construction & financing",
    ],
    stat: { value: "1,800+", label: "closings handled" },
  },
  {
    id: "family",
    label: "Family",
    icon: Users,
    blurb:
      "Discreet, steady representation through divorce, custody, and estate matters — protecting what matters most.",
    points: [
      "Divorce & separation",
      "Custody & support",
      "Prenuptial agreements",
      "Estate & succession planning",
    ],
    stat: { value: "30 yrs", label: "of family practice" },
  },
  {
    id: "ip",
    label: "Intellectual Property",
    icon: Lightbulb,
    blurb:
      "We help innovators secure, license, and defend the ideas that give them their edge in the market.",
    points: [
      "Patent & trademark prosecution",
      "Licensing & technology transfer",
      "IP litigation & enforcement",
      "Trade secret protection",
    ],
    stat: { value: "600+", label: "marks & patents filed" },
  },
];

const ATTORNEYS = [
  { initials: "MS", name: "Margaret Sterling", title: "Founding Partner", focus: "Corporate & M&A" },
  { initials: "JV", name: "Julian Vance", title: "Managing Partner", focus: "Complex Litigation" },
  { initials: "PA", name: "Priya Anand", title: "Partner", focus: "Real Estate & Finance" },
  { initials: "DC", name: "Daniel Cho", title: "Partner", focus: "Intellectual Property" },
  { initials: "RE", name: "Rachel Ellison", title: "Senior Counsel", focus: "Family Law" },
  { initials: "TO", name: "Thomas Okafor", title: "Associate", focus: "Corporate Governance" },
];

export function PracticeAreas() {
  const [active, setActive] = useState(PRACTICE_AREAS[0].id);
  const reduced = useReducedMotion();
  const current = PRACTICE_AREAS.find((p) => p.id === active) ?? PRACTICE_AREAS[0];

  return (
    <div>
      {/* Tabbed panel */}
      <FadeUp standalone className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-sm">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Practice areas"
            className="flex flex-wrap gap-1 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-2"
          >
            {PRACTICE_AREAS.map((area) => {
              const selected = area.id === active;
              return (
                <button
                  key={area.id}
                  role="tab"
                  id={`tab-${area.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${area.id}`}
                  onClick={() => setActive(area.id)}
                  className={`relative flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--tpl-accent)] ${
                    selected
                      ? "text-[var(--tpl-surface)]"
                      : "text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId={reduced ? undefined : "practice-tab"}
                      className="absolute inset-0 rounded-lg bg-[var(--tpl-primary)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <area.icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{area.label}</span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-8 p-8 sm:p-10 md:grid-cols-[1.4fr_1fr]"
              >
                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--tpl-accent)]/10 text-[var(--tpl-accent)]">
                    <current.icon className="h-6 w-6" />
                  </span>
                  <h3 className="tpl-serif mt-5 text-3xl font-semibold tracking-tight text-[var(--tpl-fg)]">
                    {current.label} Law
                  </h3>
                  <p className="mt-3 max-w-lg text-[var(--tpl-fg-muted)]">{current.blurb}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {current.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--tpl-fg)]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--tpl-accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-8 text-center">
                  <span className="tpl-serif text-5xl font-semibold tracking-tight text-[var(--tpl-primary)]">
                    {current.stat.value}
                  </span>
                  <span className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--tpl-fg-muted)]">
                    {current.stat.label}
                  </span>
                  <div className="tpl-rule mx-auto mt-5" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeUp>

      {/* Attorney profiles */}
      <div className="mt-20">
        <FadeUp standalone className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">Our Attorneys</p>
          <h3 className="tpl-serif mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Counsel you can stand behind
          </h3>
          <p className="mt-3 text-[var(--tpl-fg-muted)]">
            Senior partners lead every engagement — no matter the size of the matter.
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ATTORNEYS.map((a) => (
            <FadeUp key={a.name}>
              <Pressable className="h-full">
                <div className="flex h-full items-center gap-4 rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-5 shadow-sm transition-colors hover:border-[var(--tpl-accent)]/40">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--tpl-primary)] tpl-serif text-lg font-semibold text-[var(--tpl-surface)]">
                    {a.initials}
                  </span>
                  <div>
                    <h4 className="tpl-serif text-lg font-semibold text-[var(--tpl-fg)]">{a.name}</h4>
                    <p className="text-sm font-bold text-[var(--tpl-accent)]">{a.title}</p>
                    <p className="mt-0.5 text-sm text-[var(--tpl-fg-muted)]">{a.focus}</p>
                  </div>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
