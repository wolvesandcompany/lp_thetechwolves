"use client";

/**
 * Ironpeak — signature interactive section.
 * Weekly class schedule with day tabs (Mon–Sun) that swap the class list,
 * animated on switch with Framer Motion. Self-contained, no external data.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Clock, User, Flame } from "lucide-react";

type ClassItem = {
  time: string;
  name: string;
  coach: string;
  spots: number;
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
type Day = (typeof DAYS)[number];

const SCHEDULE: Record<Day, ClassItem[]> = {
  Mon: [
    { time: "06:00", name: "Sunrise HIIT", coach: "Marcus Vane", spots: 3 },
    { time: "09:30", name: "Power Strength", coach: "Elena Cruz", spots: 8 },
    { time: "12:15", name: "Express Burn", coach: "Dev Okafor", spots: 5 },
    { time: "18:00", name: "Boxing Fundamentals", coach: "Tariq Bell", spots: 2 },
    { time: "19:30", name: "Deep Stretch Yoga", coach: "Mia Larsson", spots: 11 },
  ],
  Tue: [
    { time: "06:30", name: "Metcon Grind", coach: "Dev Okafor", spots: 6 },
    { time: "10:00", name: "Olympic Lifting", coach: "Elena Cruz", spots: 4 },
    { time: "17:15", name: "HIIT Inferno", coach: "Marcus Vane", spots: 1 },
    { time: "19:00", name: "Vinyasa Flow", coach: "Mia Larsson", spots: 9 },
  ],
  Wed: [
    { time: "06:00", name: "Sunrise HIIT", coach: "Marcus Vane", spots: 7 },
    { time: "09:30", name: "Power Strength", coach: "Elena Cruz", spots: 5 },
    { time: "18:00", name: "Boxing Sparring", coach: "Tariq Bell", spots: 0 },
    { time: "19:30", name: "Mobility & Recovery", coach: "Mia Larsson", spots: 12 },
  ],
  Thu: [
    { time: "06:30", name: "Metcon Grind", coach: "Dev Okafor", spots: 4 },
    { time: "12:15", name: "Express Burn", coach: "Marcus Vane", spots: 8 },
    { time: "17:15", name: "Deadlift Clinic", coach: "Elena Cruz", spots: 3 },
    { time: "19:00", name: "Boxing Conditioning", coach: "Tariq Bell", spots: 6 },
  ],
  Fri: [
    { time: "06:00", name: "Sunrise HIIT", coach: "Marcus Vane", spots: 2 },
    { time: "10:00", name: "Full-Body Strength", coach: "Elena Cruz", spots: 9 },
    { time: "17:30", name: "Friday Fight Night", coach: "Tariq Bell", spots: 1 },
    { time: "19:00", name: "Candlelit Yoga", coach: "Mia Larsson", spots: 14 },
  ],
  Sat: [
    { time: "08:00", name: "Weekend Warrior", coach: "Dev Okafor", spots: 10 },
    { time: "10:00", name: "Partner HIIT", coach: "Marcus Vane", spots: 6 },
    { time: "11:30", name: "Strongman Basics", coach: "Elena Cruz", spots: 5 },
    { time: "13:00", name: "Restorative Yoga", coach: "Mia Larsson", spots: 16 },
  ],
  Sun: [
    { time: "09:00", name: "Long Slow Burn", coach: "Dev Okafor", spots: 12 },
    { time: "11:00", name: "Open Gym Coaching", coach: "Tariq Bell", spots: 8 },
    { time: "17:00", name: "Sunset Flow Yoga", coach: "Mia Larsson", spots: 15 },
  ],
};

export function ClassSchedule() {
  const [active, setActive] = useState<Day>("Mon");
  const reduced = useReducedMotion();
  const classes = SCHEDULE[active];

  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 backdrop-blur">
      {/* Day tabs */}
      <div
        className="flex gap-1 overflow-x-auto border-b border-[var(--tpl-border)] p-2"
        role="tablist"
        aria-label="Weekly class schedule days"
      >
        {DAYS.map((day) => {
          const selected = day === active;
          return (
            <button
              key={day}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(day)}
              className={`relative flex-1 cursor-pointer rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                selected
                  ? "text-[var(--tpl-bg)]"
                  : "text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="fitness-day-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="tpl-head relative z-10 text-base tracking-wide">{day}</span>
            </button>
          );
        })}
      </div>

      {/* Class list */}
      <div className="p-3 sm:p-4">
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            {classes.map((c, i) => {
              const full = c.spots === 0;
              const low = c.spots > 0 && c.spots <= 3;
              return (
                <motion.li
                  key={c.name + c.time}
                  initial={reduced ? undefined : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduced ? 0 : i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/60 p-4 transition-colors hover:border-[var(--tpl-primary)]/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex w-16 shrink-0 items-center gap-1.5 text-[var(--tpl-primary)]">
                      <Clock className="h-4 w-4" />
                      <span className="tpl-head text-lg tracking-wide">{c.time}</span>
                    </div>
                    <div>
                      <p className="tpl-head text-xl leading-none tracking-wide text-[var(--tpl-fg)]">
                        {c.name}
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-[var(--tpl-fg-muted)]">
                        <User className="h-3.5 w-3.5" /> {c.coach}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        full
                          ? "bg-[var(--tpl-fg-muted)]/15 text-[var(--tpl-fg-muted)]"
                          : low
                            ? "bg-[var(--tpl-primary)]/15 text-[var(--tpl-secondary)]"
                            : "bg-[var(--tpl-accent)]/15 text-[var(--tpl-accent)]"
                      }`}
                    >
                      {full ? (
                        "Waitlist"
                      ) : (
                        <>
                          <Flame className="h-3.5 w-3.5" />
                          {c.spots} spots left
                        </>
                      )}
                    </span>
                    <button
                      disabled={full}
                      className={`tpl-head cursor-pointer rounded-full px-4 py-1.5 text-sm tracking-wide transition-transform hover:scale-[1.04] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 ${
                        full
                          ? "border border-[var(--tpl-border)] text-[var(--tpl-fg-muted)]"
                          : "bg-[var(--tpl-fg)] text-[var(--tpl-bg)]"
                      }`}
                    >
                      {full ? "Join list" : "Book"}
                    </button>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
