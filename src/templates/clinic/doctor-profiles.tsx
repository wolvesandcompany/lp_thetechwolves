"use client";

/**
 * Signature interactive section for the Clinic template — "Meet the Doctors".
 * Filterable-by-specialty grid of doctor-profile cards. Each card carries an
 * initials avatar, credentials, and years of experience; hovering (or
 * focusing, for keyboard users) reveals a short bio + "View profile" CTA.
 * Framer Motion + prefers-reduced-motion aware.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  HeartPulse,
  Baby,
  Bone,
  Stethoscope,
  Sparkles,
  Brain,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";
import { EXPO_OUT } from "../kit/motion";

type Doctor = {
  name: string;
  initials: string;
  credentials: string;
  specialty: string;
  years: number;
  bio: string;
};

type Specialty = { id: string; label: string; icon: typeof HeartPulse };

const SPECIALTIES: Specialty[] = [
  { id: "all", label: "All doctors", icon: Sparkles },
  { id: "cardiology", label: "Cardiology", icon: HeartPulse },
  { id: "pediatrics", label: "Pediatrics", icon: Baby },
  { id: "orthopedics", label: "Orthopedics", icon: Bone },
  { id: "neurology", label: "Neurology", icon: Brain },
  { id: "general", label: "General Practice", icon: Stethoscope },
];

const DOCTORS: (Doctor & { specialtyId: string })[] = [
  {
    name: "Dr. Elena Marsh",
    initials: "EM",
    credentials: "MD, FACC",
    specialty: "Cardiology",
    specialtyId: "cardiology",
    years: 18,
    bio: "Interventional cardiologist focused on preventive heart health and minimally invasive procedures.",
  },
  {
    name: "Dr. Naomi Osei",
    initials: "NO",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    specialtyId: "pediatrics",
    years: 12,
    bio: "Board-certified pediatrician who treats every child like her own — gentle, thorough, unhurried.",
  },
  {
    name: "Dr. Marcus Reyes",
    initials: "MR",
    credentials: "MD, FAAOS",
    specialty: "Orthopedics",
    specialtyId: "orthopedics",
    years: 21,
    bio: "Sports-medicine orthopedic surgeon specializing in joint preservation and rapid return-to-activity plans.",
  },
  {
    name: "Dr. Priya Chandran",
    initials: "PC",
    credentials: "MD, PhD",
    specialty: "Neurology",
    specialtyId: "neurology",
    years: 15,
    bio: "Neurologist researching migraine and movement disorders, with a calm, patient-first bedside manner.",
  },
  {
    name: "Dr. Thomas Weller",
    initials: "TW",
    credentials: "MD",
    specialty: "General Practice",
    specialtyId: "general",
    years: 25,
    bio: "Family medicine physician and clinic co-founder — your first call for anything, any age.",
  },
  {
    name: "Dr. Aiko Tanaka",
    initials: "AT",
    credentials: "MD, FACC",
    specialty: "Cardiology",
    specialtyId: "cardiology",
    years: 9,
    bio: "Cardiologist focused on women's heart health and long-term risk reduction plans.",
  },
  {
    name: "Dr. Daniel Okafor",
    initials: "DO",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    specialtyId: "pediatrics",
    years: 14,
    bio: "Pediatrician with a special interest in adolescent medicine and childhood nutrition.",
  },
  {
    name: "Dr. Sofia Bianchi",
    initials: "SB",
    credentials: "MD",
    specialty: "General Practice",
    specialtyId: "general",
    years: 10,
    bio: "Internal medicine physician who takes the time to actually explain what's going on.",
  },
];

export function DoctorProfiles() {
  const [active, setActive] = useState("all");
  const reduced = useReducedMotion();
  const filtered =
    active === "all" ? DOCTORS : DOCTORS.filter((d) => d.specialtyId === active);

  return (
    <div className="mx-auto max-w-6xl">
      {/* Specialty filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {SPECIALTIES.map((s) => {
          const isActive = s.id === active;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              aria-pressed={isActive}
              className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:py-2.5 ${
                isActive ? "text-white" : "text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="specialty-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] shadow-lg shadow-[var(--tpl-primary)]/20"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {!isActive && (
                <span className="absolute inset-0 -z-10 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]" />
              )}
              <Icon className="h-4 w-4" />
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Doctor cards */}
      <motion.ul
        key={active}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EXPO_OUT }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((d, i) => (
          <motion.li
            key={d.name}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EXPO_OUT, delay: reduced ? 0 : i * 0.05 }}
            className="group relative h-72 [perspective:1200px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-[0_20px_50px_-35px_rgba(15,60,75,0.4)] transition-transform duration-300 group-hover:-translate-y-1 group-focus-within:-translate-y-1">
              {/* Base card */}
              <div className="flex h-full flex-col items-center justify-center gap-3 p-7 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-2xl font-bold tracking-tight text-[var(--tpl-primary)]">
                  {d.initials}
                </span>
                <h3 className="tpl-heading text-lg font-semibold text-[var(--tpl-fg)]">{d.name}</h3>
                <p className="text-sm font-medium text-[var(--tpl-primary)]">{d.specialty}</p>
                <div className="flex items-center gap-2 text-xs text-[var(--tpl-fg-muted)]">
                  <BadgeCheck className="h-3.5 w-3.5 text-[var(--tpl-accent)]" />
                  {d.credentials} &middot; {d.years} yrs exp.
                </div>
              </div>

              {/* Hover-reveal bio overlay */}
              <div
                tabIndex={0}
                aria-label={`${d.name} bio`}
                className="absolute inset-0 flex translate-y-full flex-col justify-center gap-3 bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)] p-7 text-left text-white transition-transform duration-300 ease-out focus:outline-none group-hover:translate-y-0 group-focus-within:translate-y-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  {d.specialty}
                </p>
                <h4 className="tpl-heading text-xl font-semibold">{d.name}</h4>
                <p className="text-sm text-white/90">{d.bio}</p>
                <a
                  href="#booking"
                  className="mt-1 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--tpl-primary)] transition-transform hover:scale-[1.03]"
                >
                  Book with {d.name.split(" ")[1]} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
