"use client";

/**
 * Solo physician / private practice template — "Calder Dermatology".
 * Warm, personal, premium. Cream + deep sage + antique-gold accent.
 * Distinct from the multi-department "clinic" template: this is ONE doctor's
 * own practice, so the signature section is her personal career timeline
 * and philosophy of care, not a roster of colleagues.
 */

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Quote,
  Star,
  ShieldCheck,
  Award,
  BadgeCheck,
  Sparkles,
  Sun,
  Droplet,
  Scan,
  Syringe,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { DoctorJourney } from "./doctor-journey";
import {
  DEFAULT_DOCTOR_PROFILE,
  initialsFromName,
  parseHeadline,
  type DoctorBusinessProfile,
} from "@/lib/wizard/doctor-profile-schema";
import "./theme.css";

const NAV = ["Treatments", "Her Story", "Testimonials", "Book"];

const TREATMENT_ICONS = [Sun, Droplet, Scan, Syringe, Zap];
const CREDENTIAL_ICONS = [BadgeCheck, Award, ShieldCheck, Star];

export function DoctorProfileTemplate({
  profile = DEFAULT_DOCTOR_PROFILE,
}: {
  profile?: DoctorBusinessProfile;
}) {
  const reduced = useReducedMotion();
  const initials = initialsFromName(profile.doctorName);
  const headline = parseHeadline(profile.heroHeadline);
  const reasonOptions = [...profile.treatments.map((t) => t.title), "General Consultation"];
  const doctorFirstName = profile.doctorName.replace(/^(Dr\.?|Prof\.?)\s+/i, "").trim().split(/\s+/)[0];

  return (
    <div className="tpl-doctor-profile relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Stethoscope className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="tpl-heading text-lg font-semibold tracking-tight">
              Calder <span className="text-[var(--tpl-accent)]">Dermatology</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase().replace(/\s+/g, "-")}`} className="transition-colors hover:text-[var(--tpl-fg)]">
                {n}
              </a>
            ))}
          </div>
          <a
            href={waLink(profile.whatsappNumber, `Hi, I'd like to book a consultation with ${profile.doctorName} —`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book a consultation
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden px-5 py-24 sm:py-28">
        <div className="tpl-glow left-1/2 top-10 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-secondary)]" />
        <div className="tpl-glow right-4 top-1/3 h-72 w-72 bg-[var(--tpl-accent)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)] backdrop-blur">
                <BadgeCheck className="h-3.5 w-3.5 text-[var(--tpl-primary)]" />
                {profile.specialtyBadge}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="tpl-heading mt-6 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                {headline.before}
                <br />
                {headline.accent ? (
                  <>
                    {/* text before/after the accent span on the second line */}
                    <span className="italic text-[var(--tpl-primary)]">{headline.accent}</span>
                    {headline.after}
                  </>
                ) : (
                  headline.after
                )}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-[var(--tpl-fg-muted)]">{profile.heroSubcopy}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(profile.whatsappNumber, `Hi, I'd like to book a consultation with ${profile.doctorName} —`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--tpl-primary)]/20 transition-transform hover:scale-[1.03]"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-8 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
                >
                  <Phone className="h-4 w-4" /> Call the practice
                </a>
              </div>
            </Reveal>
          </div>

          {/* Doctor initials avatar card */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-10 text-center shadow-[0_40px_90px_-40px_rgba(43,38,33,0.35)]">
                <span className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-4xl font-semibold text-white">
                  {initials}
                </span>
                <h2 className="tpl-heading mt-6 text-2xl font-semibold">{profile.doctorName}</h2>
                <p className="mt-1 text-sm font-medium text-[var(--tpl-accent)]">{profile.credentials}</p>
                <p className="mt-4 text-sm text-[var(--tpl-fg-muted)]">{profile.specialtyBadge}</p>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--tpl-accent)] text-[var(--tpl-accent)]" />
                  ))}
                  <span className="ml-1.5 text-xs text-[var(--tpl-fg-muted)]">{profile.practiceName}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust / credentials strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <Stagger className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {profile.credentialsList.map((label, i) => {
              const Icon = CREDENTIAL_ICONS[i % CREDENTIAL_ICONS.length];
              return (
                <FadeUp key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4.5 w-4.5 shrink-0 text-[var(--tpl-primary)]" />
                  <span className="text-sm font-medium text-[var(--tpl-fg-muted)]">{label}</span>
                </FadeUp>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Treatments / appointment types grid */}
      <section id="treatments" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Conditions & Treatments"
          title={`What ${doctorFirstName} treats`}
          sub="Every appointment type below books directly over WhatsApp — pick one and start the conversation."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {profile.treatments.map((t, i) => {
            const Icon = TREATMENT_ICONS[i % TREATMENT_ICONS.length];
            const span = i === 0 || i === profile.treatments.length - 1 ? "sm:col-span-2" : "";
            return (
              <FadeUp key={t.title} className={span}>
                <Pressable className="h-full">
                  <a
                    href={waLink(profile.whatsappNumber, `Hi, I'd like to book an appointment for: ${t.title} —`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-6 transition-colors hover:border-[var(--tpl-primary)]/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-[var(--tpl-primary)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="tpl-heading mt-5 text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{t.body}</p>
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[var(--tpl-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                      Book via WhatsApp <ArrowRight className="h-3 w-3" />
                    </span>
                  </a>
                </Pressable>
              </FadeUp>
            );
          })}
        </Stagger>
      </section>

      {/* Signature section: Her Story — career timeline + philosophy of care */}
      <section id="her-story" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Her Story"
            title="One doctor, every visit"
            sub={`Click a milestone below to see how ${doctorFirstName} built a practice around unhurried, personal care.`}
          />
          <DoctorJourney />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {profile.metrics.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-heading text-4xl font-semibold tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Patient Stories"
          title="What patients say after their first visit"
          sub="Real notes from patients who chose a solo practice over a large clinic."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {profile.testimonials.map((t) => (
            <FadeUp key={t.name}>
              <div className="flex h-full flex-col rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7">
                <Quote className="h-7 w-7 text-[var(--tpl-primary)]/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--tpl-accent)] text-[var(--tpl-accent)]" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[var(--tpl-fg)]/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-sm font-semibold text-[var(--tpl-primary)]">
                    {initialsFromName(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[var(--tpl-fg-muted)]">{t.city}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Booking + hours/location/insurance */}
      <section id="book" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow right-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-accent)] opacity-20" />
        <FadeUp standalone>
          <div className="grid overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-[0_30px_80px_-40px_rgba(43,38,33,0.3)] lg:grid-cols-2">
            {/* Left: hours / location / insurance */}
            <div className="relative flex flex-col justify-center gap-5 bg-gradient-to-br from-[var(--tpl-primary)]/10 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/10 p-10 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--tpl-primary)]" /> Now accepting new patients
              </span>
              <h2 className="tpl-heading text-3xl font-semibold tracking-tight sm:text-4xl">Book your visit</h2>
              <p className="max-w-md text-[var(--tpl-fg-muted)]">{profile.heroSubcopy}</p>
              <div className="mt-2 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> {profile.address}</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> {profile.phone}</p>
              </div>
              <div className="mt-2 space-y-2 border-t border-[var(--tpl-border)] pt-4 text-sm text-[var(--tpl-fg-muted)]">
                {profile.hours.map((h) => (
                  <p key={h.day} className="flex items-center justify-between gap-6">
                    <span className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-[var(--tpl-primary)]" /> {h.day}</span>
                    <span className="text-[var(--tpl-fg)]">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right: booking form — submits straight to WhatsApp with the details filled in */}
            <BookingForm profile={profile} reasonOptions={reasonOptions} />
          </div>
        </FadeUp>
      </section>

      {/* Final CTA band */}
      <section className="relative mx-auto max-w-4xl px-5 pb-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/12 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/12 p-12">
            <div className="tpl-glow left-1/2 top-0 h-56 w-56 -translate-x-1/2 bg-[var(--tpl-accent)] opacity-25" />
            <Stethoscope className="relative mx-auto h-9 w-9 text-[var(--tpl-primary)]" />
            <h2 className="relative mt-5 tpl-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              One doctor&apos;s full attention, every visit.
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              New patients are welcome — most appointments confirmed within one business day.
            </p>
            <a
              href={waLink(profile.whatsappNumber, `Hi, I'd like to book a consultation with ${profile.doctorName} —`)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
                <Stethoscope className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="tpl-heading text-lg font-semibold">{profile.practiceName}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              A solo private practice devoted to unhurried, personal care — one doctor, every visit.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Practice hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              {profile.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="text-[var(--tpl-fg)]">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> {profile.address}</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> {profile.phone}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Treatments</h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              {profile.treatments.slice(0, 3).map((t) => (
                <li key={t.title}>{t.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--tpl-border)] pt-6 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} {profile.practiceName} — a Tech Wolves template</span>
            <div className="flex gap-6">
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Privacy</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Terms</a>
              <a href="#book" className="hover:text-[var(--tpl-fg)]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function waLink(whatsappNumber: string, message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function BookingForm({
  profile,
  reasonOptions,
}: {
  profile: DoctorBusinessProfile;
  reasonOptions: string[];
}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState(reasonOptions[0] ?? "General Consultation");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [`Hi, I'd like to request an appointment.`];
    if (name) parts.push(`Name: ${name}`);
    if (date) parts.push(`Preferred date: ${date}`);
    if (time) parts.push(`Preferred time: ${time}`);
    parts.push(`Reason: ${reason}`);
    window.open(waLink(profile.whatsappNumber, parts.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="grid gap-5 p-10 sm:p-12" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <label htmlFor="bk-name" className="text-sm font-medium text-[var(--tpl-fg)]">Full name</label>
        <input
          id="bk-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jordan Alvarez"
          className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors placeholder:text-[var(--tpl-fg-muted)]/70 focus:border-[var(--tpl-primary)]"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="bk-date" className="flex items-center gap-1.5 text-sm font-medium text-[var(--tpl-fg)]">
            <Calendar className="h-3.5 w-3.5 text-[var(--tpl-primary)]" /> Date
          </label>
          <input
            id="bk-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="bk-time" className="flex items-center gap-1.5 text-sm font-medium text-[var(--tpl-fg)]">
            <Clock className="h-3.5 w-3.5 text-[var(--tpl-primary)]" /> Time
          </label>
          <input
            id="bk-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="bk-reason" className="text-sm font-medium text-[var(--tpl-fg)]">Reason for visit</label>
        <select
          id="bk-reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
        >
          {reasonOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        Request appointment on WhatsApp <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-[var(--tpl-fg-muted)]">Opens WhatsApp with your details filled in — send to confirm.</p>
    </form>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-primary)]">{eyebrow}</p>
      <h2 className="tpl-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
