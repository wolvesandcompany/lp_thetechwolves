"use client";

/**
 * Individual doctor profile page for the Clinic template.
 * Linked from each card in the "Meet the Doctors" grid (doctor-profiles.tsx).
 */

import Link from "next/link";
import {
  Cross,
  ArrowLeft,
  ArrowRight,
  Phone,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  Quote,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable } from "../kit/motion";
import type { Doctor } from "./doctors-data";
import "./theme.css";

export function DoctorProfilePage({ doctor }: { doctor: Doctor }) {
  return (
    <div className="tpl-clinic relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/templates/clinic" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Cross className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="tpl-heading text-xl">Havenwell <span className="text-[var(--tpl-primary)]">Clinic</span></span>
          </Link>
          <Link
            href="/templates/clinic#booking"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book appointment
          </Link>
        </nav>
      </header>

      {/* Back link */}
      <div className="mx-auto max-w-4xl px-5 pt-8">
        <Link
          href="/templates/clinic#doctors"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--tpl-fg-muted)] transition-colors hover:text-[var(--tpl-primary)]"
        >
          <ArrowLeft className="h-4 w-4" /> All doctors
        </Link>
      </div>

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-8">
        <div className="tpl-glow left-1/2 top-10 h-72 w-72 -translate-x-1/2 bg-[var(--tpl-secondary)] opacity-30" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-3xl font-bold tracking-tight text-[var(--tpl-primary)]">
              {doctor.initials}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="tpl-heading text-4xl font-semibold tracking-tight sm:text-5xl">{doctor.name}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--tpl-fg-muted)]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-1.5 font-medium text-[var(--tpl-primary)]">
                <Stethoscope className="h-3.5 w-3.5" /> {doctor.specialty}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-[var(--tpl-accent)]" /> {doctor.credentials} &middot; {doctor.years} yrs experience
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/templates/clinic#booking"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--tpl-primary)]/25 transition-transform hover:scale-[1.03]"
              >
                Book with {doctor.name.split(" ")[1]}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+18005550142"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-7 py-3 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
              >
                <Phone className="h-4 w-4" /> Call clinic
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-16 px-5 pb-24">
        {/* About */}
        <FadeUp standalone>
          <h2 className="tpl-heading text-2xl font-semibold tracking-tight">About Dr. {doctor.name.split(" ")[1]}</h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-[var(--tpl-fg-muted)]">{doctor.longBio}</p>
        </FadeUp>

        {/* Education + Focus areas */}
        <div className="grid gap-10 md:grid-cols-2">
          <FadeUp standalone>
            <h2 className="tpl-heading flex items-center gap-2 text-xl font-semibold tracking-tight">
              <GraduationCap className="h-5 w-5 text-[var(--tpl-primary)]" /> Education & training
            </h2>
            <ul className="mt-5 space-y-3">
              {doctor.education.map((e) => (
                <li key={e} className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)]">
                  {e}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp standalone>
            <h2 className="tpl-heading text-xl font-semibold tracking-tight">Focus areas</h2>
            <Stagger className="mt-5 grid gap-2.5">
              {doctor.focusAreas.map((f) => (
                <FadeUp key={f}>
                  <Pressable>
                    <div className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)]">
                      {f}
                    </div>
                  </Pressable>
                </FadeUp>
              ))}
            </Stagger>
          </FadeUp>
        </div>

        {/* Patient testimonial */}
        <FadeUp standalone>
          <div className="rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-8 sm:p-10">
            <Quote className="h-8 w-8 text-[var(--tpl-primary)]/40" />
            <p className="mt-4 text-lg leading-[1.6] text-[var(--tpl-fg)]/90">&ldquo;{doctor.testimonial.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-medium text-[var(--tpl-fg-muted)]">— {doctor.testimonial.name}</p>
          </div>
        </FadeUp>

        {/* CTA band */}
        <FadeUp standalone className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/12 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/12 p-10 sm:p-12">
            <h2 className="tpl-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to see {doctor.name}?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[var(--tpl-fg-muted)]">
              New patients are typically seen within 3 business days.
            </p>
            <Link
              href="/templates/clinic#booking"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* Minimal footer */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Havenwell Clinic — a Tech Wolves template</span>
          <Link href="/templates/clinic" className="hover:text-[var(--tpl-fg)]">Back to clinic homepage</Link>
        </div>
      </footer>
    </div>
  );
}
