"use client";

/**
 * Solo physician / private practice template — "Calder Dermatology".
 * Warm, personal, premium. Cream + deep sage + antique-gold accent.
 * Distinct from the multi-department "clinic" template: this is ONE doctor's
 * own practice, so the signature section is her personal career timeline
 * and philosophy of care, not a roster of colleagues.
 */

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
import "./theme.css";

const NAV = ["Treatments", "Her Story", "Testimonials", "Book"];

const CREDENTIALS = [
  { icon: BadgeCheck, label: "Board Certified, American Board of Dermatology" },
  { icon: Award, label: "Fellow, American Society for Dermatologic Surgery" },
  { icon: ShieldCheck, label: "17 years in private practice" },
  { icon: Star, label: "4.9/5 across 600+ patient reviews" },
];

const TREATMENTS = [
  {
    icon: Sun,
    title: "Acne & Acne Scarring",
    body: "Personalized regimens for cystic acne, hormonal breakouts, and the scarring left behind.",
    span: "sm:col-span-2",
  },
  { icon: Droplet, title: "Eczema & Psoriasis", body: "Long-term management plans that go beyond steroid creams." },
  { icon: Scan, title: "Skin Cancer Screening", body: "Full-body mole mapping and biopsy, same-visit when needed." },
  { icon: Syringe, title: "Botox & Dermal Fillers", body: "Natural-looking results, administered personally, never rushed." },
  {
    icon: Zap,
    title: "Laser Resurfacing",
    body: "Scar, sun-damage, and pigmentation treatment using in-house laser technology.",
    span: "sm:col-span-2",
  },
];

const METRICS: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 12000, suffix: "+", label: "Patients treated" },
  { value: 17, suffix: "", label: "Years in practice" },
  { value: 30000, suffix: "+", label: "Procedures performed" },
  { value: 98, suffix: "%", label: "Patient satisfaction" },
];

const TESTIMONIALS = [
  {
    quote: "Dr. Calder spent forty-five minutes with me on my first visit. No other dermatologist has ever done that.",
    name: "Priya N.",
    city: "Portland, US",
    initials: "PN",
  },
  {
    quote: "She caught a melanoma at a routine screening that two other doctors had dismissed as nothing. I owe her a great deal.",
    name: "Harold B.",
    city: "Vancouver, CA",
    initials: "HB",
  },
  {
    quote: "The laser resurfacing results were better than I imagined, and she talked me through every step beforehand.",
    name: "Freya L.",
    city: "Bristol, UK",
    initials: "FL",
  },
];

const HOURS = [
  { day: "Mon – Thu", time: "8:00 – 17:00" },
  { day: "Friday", time: "8:00 – 13:00" },
  { day: "Weekends", time: "Closed" },
];

const REASON_OPTIONS = [
  "Acne / Acne Scarring",
  "Eczema / Psoriasis",
  "Skin Cancer Screening",
  "Botox / Fillers",
  "Laser Resurfacing",
  "General Consultation",
];

export function DoctorProfileTemplate() {
  const reduced = useReducedMotion();

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
            href="#book"
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
                Board Certified Dermatologist, MD FAAD
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="tpl-heading mt-6 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Skin care from a doctor
                <br />
                who <span className="italic text-[var(--tpl-primary)]">still sees you</span> herself.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-[var(--tpl-fg-muted)]">
                Dr. Amara Calder runs a solo private practice in the Pearl District — no
                associates, no revolving door of residents. Just one physician, seventeen
                years of experience, and your full attention every visit.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--tpl-primary)]/20 transition-transform hover:scale-[1.03]"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="tel:+15035550117"
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
                  AC
                </span>
                <h2 className="tpl-heading mt-6 text-2xl font-semibold">Dr. Amara Calder</h2>
                <p className="mt-1 text-sm font-medium text-[var(--tpl-accent)]">MD, FAAD — Founder</p>
                <p className="mt-4 text-sm text-[var(--tpl-fg-muted)]">
                  Board-certified dermatologist &amp; Mohs surgeon, Yale School of Medicine.
                </p>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--tpl-accent)] text-[var(--tpl-accent)]" />
                  ))}
                  <span className="ml-1.5 text-xs text-[var(--tpl-fg-muted)]">600+ reviews</span>
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
            {CREDENTIALS.map((c) => (
              <FadeUp key={c.label} className="flex items-center gap-2.5">
                <c.icon className="h-4.5 w-4.5 shrink-0 text-[var(--tpl-primary)]" />
                <span className="text-sm font-medium text-[var(--tpl-fg-muted)]">{c.label}</span>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Treatments grid */}
      <section id="treatments" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Conditions & Treatments"
          title="What Dr. Calder treats"
          sub="A focused practice on medical and cosmetic dermatology — not a catalog of every specialty under one roof."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {TREATMENTS.map((t) => (
            <FadeUp key={t.title} className={t.span}>
              <Pressable className="h-full">
                <div className="group h-full rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-6 transition-colors hover:border-[var(--tpl-primary)]/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/15 to-[var(--tpl-secondary)]/15 text-[var(--tpl-primary)]">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <h3 className="tpl-heading mt-5 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{t.body}</p>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Signature section: Her Story — career timeline + philosophy of care */}
      <section id="her-story" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Her Story"
            title="Seventeen years, one doctor"
            sub="Click a milestone below to see how Dr. Calder built a practice around unhurried, personal care."
          />
          <DoctorJourney />
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
      <section id="testimonials" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Patient Stories"
          title="What patients say after their first visit"
          sub="Real notes from patients who switched from a large clinic to a solo practice."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
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
              <p className="max-w-md text-[var(--tpl-fg-muted)]">
                New patient consultations run a full 45 minutes, with Dr. Calder herself.
                Most major insurance plans accepted; transparent self-pay pricing otherwise.
              </p>
              <ul className="mt-2 space-y-2.5 text-sm text-[var(--tpl-fg-muted)]">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> New patient consult from $180</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> Aetna, Cigna, BlueCross accepted</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-[var(--tpl-accent)]" /> Most visits scheduled within 5 days</li>
              </ul>
              <div className="mt-2 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 118 Everett Street, Suite 4B, Pearl District</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (503) 555-0117</p>
              </div>
              <div className="mt-2 space-y-2 border-t border-[var(--tpl-border)] pt-4 text-sm text-[var(--tpl-fg-muted)]">
                {HOURS.map((h) => (
                  <p key={h.day} className="flex items-center justify-between gap-6">
                    <span className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-[var(--tpl-primary)]" /> {h.day}</span>
                    <span className="text-[var(--tpl-fg)]">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right: booking form */}
            <form className="grid gap-5 p-10 sm:p-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="bk-name" className="text-sm font-medium text-[var(--tpl-fg)]">Full name</label>
                <input
                  id="bk-name"
                  type="text"
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
                    className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="bk-reason" className="text-sm font-medium text-[var(--tpl-fg)]">Reason for visit</label>
                <select
                  id="bk-reason"
                  defaultValue={REASON_OPTIONS[0]}
                  className="cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
                >
                  {REASON_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Request appointment <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-[var(--tpl-fg-muted)]">We&apos;ll confirm your slot within 1 business day.</p>
            </form>
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
              Your skin deserves one doctor's full attention.
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              New patients are welcome — most appointments confirmed within one business day.
            </p>
            <a
              href="#book"
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
              <span className="tpl-heading text-lg font-semibold">Calder Dermatology</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              A solo private dermatology practice devoted to unhurried, personal care — one
              doctor, every visit.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Practice hours</h4>
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
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 118 Everett Street, Suite 4B</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (503) 555-0117</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Treatments</h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              <li>Acne & Acne Scarring</li>
              <li>Botox & Dermal Fillers</li>
              <li>Skin Cancer Screening</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--tpl-border)] pt-6 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} Calder Dermatology — a Tech Wolves template</span>
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

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-primary)]">{eyebrow}</p>
      <h2 className="tpl-heading mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
