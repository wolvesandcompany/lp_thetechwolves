"use client";

/**
 * Medical Clinic template — "Havenwell Clinic".
 * Calm, clinical, trustworthy. Light blue-white theme with teal/sky accents.
 * Manrope headings + Inter body. Framer Motion via the shared /kit primitives.
 */

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  Cross,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  HeartHandshake,
  HeartPulse,
  Baby,
  Bone,
  Brain,
  Stethoscope,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { DoctorProfiles } from "./doctor-profiles";
import { clinicWaLink } from "./whatsapp";
import "./theme.css";

const NAV = ["Departments", "Doctors", "Patient Stories", "Book"];

const INSURERS = ["BlueCross", "Aetna", "Cigna", "UnitedHealth", "Medicare", "Humana"];

const DEPARTMENTS = [
  { icon: HeartPulse, title: "Cardiology", body: "Preventive screening, diagnostics, and long-term heart care.", span: "sm:col-span-2" },
  { icon: Baby, title: "Pediatrics", body: "Gentle, thorough care for infants through adolescence.", span: "" },
  { icon: Bone, title: "Orthopedics", body: "Joint, sports-injury, and rehabilitation specialists.", span: "" },
  { icon: Brain, title: "Neurology", body: "Advanced diagnostics for headaches, nerve and movement disorders.", span: "" },
  { icon: Stethoscope, title: "Internal Medicine", body: "Your first call — annual checkups, chronic care, referrals.", span: "" },
  { icon: Sparkles, title: "Women's Health", body: "Comprehensive, compassionate care at every life stage.", span: "sm:col-span-2" },
];

const METRICS: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 85, suffix: "k+", label: "Patients treated" },
  { value: 22, suffix: "", label: "Years in practice" },
  { value: 98, suffix: "%", label: "Patient satisfaction" },
  { value: 24, suffix: "", label: "Doctors on staff" },
];

const TESTIMONIALS = [
  { quote: "From check-in to follow-up, everything felt unhurried and genuinely caring. Dr. Marsh caught something my old doctor missed for years.", name: "Robert K.", city: "Austin, US", initials: "RK" },
  { quote: "The pediatrics team is incredible with my daughter — she actually looks forward to her checkups now.", name: "Marta S.", city: "Calgary, CA", initials: "MS" },
  { quote: "Clear pricing, no surprise bills, and a same-week appointment when I needed one urgently. Rare these days.", name: "James O.", city: "Manchester, UK", initials: "JO" },
];

const HOURS = [
  { day: "Mon – Fri", time: "7:30 – 19:00" },
  { day: "Saturday", time: "8:00 – 15:00" },
  { day: "Sunday", time: "Urgent care only" },
];

const DEPARTMENT_OPTIONS = ["Cardiology", "Pediatrics", "Orthopedics", "Neurology", "Internal Medicine", "Women's Health"];

export function ClinicTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-clinic relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Cross className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="tpl-heading text-xl">Havenwell <span className="text-[var(--tpl-primary)]">Clinic</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase().replace(" ", "-")}`} className="transition-colors hover:text-[var(--tpl-fg)]">
                {n}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book appointment
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[88vh] flex-col items-center justify-center px-5 py-24 text-center">
        <div className="tpl-glow left-1/2 top-16 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-secondary)]" />
        <div className="tpl-glow right-4 top-1/2 h-72 w-72 bg-[var(--tpl-accent)]" />
        <div className="tpl-glow left-4 bottom-10 h-64 w-64 bg-[var(--tpl-primary)] opacity-25" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--tpl-primary)]" />
              Joint Commission accredited since 2004
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
              Care that feels
              <br />
              <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-secondary)] to-[var(--tpl-accent)] bg-clip-text text-transparent">
                unhurried, human.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              A multi-specialty clinic built around real appointment time, board-certified doctors, and transparent pricing — no waiting rooms full of guesswork.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#booking"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--tpl-primary)]/25 transition-transform hover:scale-[1.03]"
              >
                Book appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+18005550142"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-8 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
              >
                <Phone className="h-4 w-4" /> Call clinic
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust / social proof strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-fg-muted)]">
            In-network with major insurers &middot; 85,000+ patients &middot; 22 years in practice
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-[var(--tpl-fg-muted)]/70">
            {INSURERS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Departments — bento */}
      <section id="departments" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Departments" title="Specialty care under one roof" sub="Six departments, one shared record, and doctors who actually talk to each other." />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {DEPARTMENTS.map((d) => (
            <FadeUp key={d.title} className={d.span}>
              <Pressable className="h-full">
                <div className="group h-full rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-6 transition-colors hover:border-[var(--tpl-primary)]/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-[var(--tpl-primary)]">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <h3 className="tpl-heading mt-5 text-lg font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{d.body}</p>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Meet the Doctors — signature interactive section */}
      <section id="doctors" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Our physicians"
            title="Meet the doctors"
            sub="Filter by specialty, then hover a card to read a doctor's bio and book directly with them."
          />
          <FadeUp standalone className="mt-12">
            <DoctorProfiles />
          </FadeUp>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-heading text-4xl font-semibold tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Testimonials */}
      <section id="patient-stories" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Patient stories" title="Trusted by the families we treat" sub="A few notes from patients who've made Havenwell their clinic of choice." />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <FadeUp key={t.name}>
              <div className="flex h-full flex-col rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7">
                <Quote className="h-7 w-7 text-[var(--tpl-primary)]/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--tpl-secondary)] text-[var(--tpl-secondary)]" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[var(--tpl-fg)]/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-sm font-semibold text-[var(--tpl-primary)]">
                    {t.initials}
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

      {/* Booking + insurance/pricing */}
      <section id="booking" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow right-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-accent)] opacity-20" />
        <FadeUp standalone>
          <div className="grid overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-[0_30px_80px_-40px_rgba(15,60,75,0.35)] lg:grid-cols-2">
            {/* Left: insurance & pricing info */}
            <div className="relative flex flex-col justify-center gap-5 bg-gradient-to-br from-[var(--tpl-primary)]/10 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/10 p-10 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/80 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)]">
                <HeartHandshake className="h-3.5 w-3.5 text-[var(--tpl-primary)]" /> Insurance & pricing
              </span>
              <h2 className="tpl-heading text-3xl font-semibold tracking-tight sm:text-4xl">Book your visit</h2>
              <p className="max-w-md text-[var(--tpl-fg-muted)]">
                We accept most major insurance plans and offer transparent self-pay pricing — no surprise bills, ever. New patients are typically seen within 3 business days.
              </p>
              <ul className="mt-2 space-y-2.5 text-sm text-[var(--tpl-fg-muted)]">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> New patient consult from $95</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> Most insurance plans accepted</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> Same-week urgent slots available</li>
              </ul>
              <div className="mt-2 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 240 Marlowe Avenue, Suite 3</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (800) 555-0142</p>
              </div>
            </div>

            {/* Right: booking form — submits straight to WhatsApp */}
            <ClinicBookingForm />
          </div>
        </FadeUp>
      </section>

      {/* Final CTA band */}
      <section className="relative mx-auto max-w-4xl px-5 pb-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/12 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/12 p-12">
            <div className="tpl-glow left-1/2 top-0 h-56 w-56 -translate-x-1/2 bg-[var(--tpl-accent)] opacity-25" />
            <ShieldCheck className="relative mx-auto h-9 w-9 text-[var(--tpl-primary)]" />
            <h2 className="relative mt-5 tpl-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              New patients welcome, always.
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              Same-week appointments, transparent pricing, and doctors who remember your name.
            </p>
            <a
              href="#booking"
              className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book appointment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer with hours */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
                <Cross className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="tpl-heading text-xl">Havenwell Clinic</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              A modern multi-specialty clinic devoted to unhurried, evidence-based care.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Clinic hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              {HOURS.map((h) => (
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
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 240 Marlowe Avenue</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (800) 555-0142</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Departments</h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              <li>Cardiology</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--tpl-border)] pt-6 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} Havenwell Clinic — a Tech Wolves template</span>
            <div className="flex gap-6">
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Privacy</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Terms</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClinicBookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [department, setDepartment] = useState(DEPARTMENT_OPTIONS[0]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parts = [`Hi, I'd like to request an appointment.`];
    if (name) parts.push(`Name: ${name}`);
    if (date) parts.push(`Preferred date: ${date}`);
    if (time) parts.push(`Preferred time: ${time}`);
    parts.push(`Department: ${department}`);
    window.open(clinicWaLink(parts.join("\n")), "_blank", "noopener,noreferrer");
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
        <label htmlFor="bk-dept" className="text-sm font-medium text-[var(--tpl-fg)]">Department</label>
        <select
          id="bk-dept"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
        >
          {DEPARTMENT_OPTIONS.map((s) => (
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
