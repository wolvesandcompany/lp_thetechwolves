"use client";

/**
 * Ironpeak — Fitness / Gym template for The Tech Wolves library.
 * Bold, energetic, high-contrast dark theme. Barlow Condensed display type,
 * an interactive weekly class schedule, and CountUp stats.
 * Built on the shared /kit primitives.
 */

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Dumbbell,
  Zap,
  HeartPulse,
  Swords,
  Flame,
  Check,
  Star,
  Trophy,
  Quote,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { ClassSchedule } from "./class-schedule";
import "./theme.css";

const NAV = ["Programs", "Schedule", "Coaches", "Pricing"];

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "Strength",
    body: "Barbell fundamentals to advanced powerlifting. Build raw, functional muscle under expert coaching.",
  },
  {
    icon: Zap,
    title: "HIIT",
    body: "High-intensity intervals that torch calories and spike your engine. 45 minutes, zero excuses.",
  },
  {
    icon: HeartPulse,
    title: "Yoga",
    body: "Mobility, breath and recovery. The counterweight that keeps you training hard, injury-free.",
  },
  {
    icon: Swords,
    title: "Boxing",
    body: "Footwork, combos and conditioning on the bag and in the ring. Sharp mind, sharper hands.",
  },
];

const STATS = [
  { value: 2400, suffix: "+", label: "Active members" },
  { value: 120, suffix: "", label: "Classes / week" },
  { value: 18, suffix: "", label: "Elite coaches" },
  { value: 96, suffix: "%", label: "Stick with it" },
];

const COACHES = [
  { name: "Marcus Vane", role: "Head of Conditioning", spec: "HIIT · Metcon", initials: "MV" },
  { name: "Elena Cruz", role: "Strength Director", spec: "Powerlifting · Olympic", initials: "EC" },
  { name: "Tariq Bell", role: "Boxing Coach", spec: "Boxing · Sparring", initials: "TB" },
  { name: "Mia Larsson", role: "Mobility Lead", spec: "Yoga · Recovery", initials: "ML" },
];

const PLANS = [
  {
    name: "Starter",
    price: "$39",
    cadence: "/mo",
    tagline: "Get moving, no lock-in.",
    features: ["Full gym floor access", "4 group classes / mo", "Fitness assessment", "Mobile app tracking"],
    highlight: false,
  },
  {
    name: "Unlimited",
    price: "$79",
    cadence: "/mo",
    tagline: "The all-access athlete plan.",
    features: [
      "Unlimited group classes",
      "24/7 gym access",
      "Personalized program",
      "InBody scans monthly",
      "Sauna & recovery zone",
    ],
    highlight: true,
  },
  {
    name: "Performance",
    price: "$149",
    cadence: "/mo",
    tagline: "1-on-1 coaching to peak.",
    features: ["Everything in Unlimited", "Weekly 1:1 coaching", "Nutrition blueprint", "Priority class booking", "Guest passes"],
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "Dropped 34 lbs and hit my first bodyweight deadlift in 5 months. The coaches actually know your name.",
    name: "Jordan Whitaker",
    result: "-34 lbs · +2 pull-ups",
    initials: "JW",
  },
  {
    quote: "I came for boxing and stayed for the community. Strongest and most confident I've ever been at 41.",
    name: "Priya Nandakumar",
    result: "First amateur bout won",
    initials: "PN",
  },
  {
    quote: "The programming is no-nonsense and it works. Added 90 lbs to my squat in one training block.",
    name: "Diego Fuentes",
    result: "+90 lb back squat",
    initials: "DF",
  },
];

export function FitnessTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-fitness relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="tpl-head flex items-center gap-2 text-2xl tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Flame className="h-5 w-5 text-white" />
            </span>
            Iron<span className="text-[var(--tpl-primary)]">peak</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="transition-colors hover:text-[var(--tpl-fg)]"
              >
                {n}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="tpl-head inline-flex items-center gap-1.5 rounded-full bg-[var(--tpl-primary)] px-5 py-2 text-base tracking-wide text-white transition-transform hover:scale-[1.04]"
          >
            Start free trial <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[92vh] flex-col items-center justify-center px-5 py-24 text-center"
      >
        <div className="tpl-grid absolute inset-0" />
        <div className="tpl-glow left-1/2 top-16 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-primary)]" />
        <div className="tpl-glow right-8 top-1/2 h-64 w-64 bg-[var(--tpl-secondary)]" />
        <div className="tpl-glow bottom-10 left-10 h-56 w-56 bg-[var(--tpl-accent)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tpl-secondary)] backdrop-blur">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--tpl-accent)]" />
              Strength · Conditioning · Community
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="tpl-head mt-6 text-balance text-6xl font-extrabold leading-[0.92] sm:text-8xl">
              Forge the
              <br />
              <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-secondary)] to-[var(--tpl-primary)] bg-clip-text text-transparent">
                strongest you
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              Ironpeak is a coach-led strength and conditioning gym built for people who
              show up. Real programming, real results, zero fluff.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="tpl-head group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-8 py-4 text-lg tracking-wide text-white transition-transform hover:scale-[1.04]"
              >
                Start free trial
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#schedule"
                className="tpl-head inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 px-8 py-4 text-lg tracking-wide text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
              >
                View schedule
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/30 py-14">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {STATS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-head text-5xl font-extrabold text-[var(--tpl-primary)] sm:text-6xl">
                <CountUp value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-[var(--tpl-fg-muted)]">
                {m.label}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Programs */}
      <section id="programs" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Programs"
          title="Train your way"
          sub="Four coach-led tracks. Mix them, master them, or go all in."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <FadeUp key={p.title}>
              <Pressable className="h-full">
                <div className="group h-full rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 p-6 backdrop-blur transition-colors hover:border-[var(--tpl-primary)]/60">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="tpl-head mt-5 text-2xl tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{p.body}</p>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Signature interactive — weekly class schedule */}
      <section id="schedule" className="relative mx-auto max-w-5xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-primary)] opacity-25" />
        <SectionHead
          eyebrow="Weekly schedule"
          title="Pick your session"
          sub="Tap a day to see what's on. Spots fill fast — book before they're gone."
        />
        <FadeUp standalone className="mt-12">
          <ClassSchedule />
        </FadeUp>
      </section>

      {/* Coaches */}
      <section id="coaches" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Coaches"
          title="Trained by the best"
          sub="Certified, competitive, and obsessed with your progress."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((c) => (
            <FadeUp key={c.name}>
              <Pressable className="h-full">
                <div className="group h-full overflow-hidden rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 backdrop-blur transition-colors hover:border-[var(--tpl-primary)]/60">
                  <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[var(--tpl-primary)]/30 via-[var(--tpl-surface)] to-[var(--tpl-secondary)]/20">
                    <span className="tpl-head grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-3xl font-extrabold text-white">
                      {c.initials}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="tpl-head text-xl tracking-wide">{c.name}</h3>
                    <p className="text-sm font-semibold text-[var(--tpl-primary)]">{c.role}</p>
                    <p className="mt-1 text-sm text-[var(--tpl-fg-muted)]">{c.spec}</p>
                  </div>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-[var(--tpl-primary)] opacity-20" />
        <SectionHead
          eyebrow="Membership"
          title="Choose your plan"
          sub="No contracts. Freeze or cancel anytime. First 7 days are on us."
        />
        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <FadeUp key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 backdrop-blur ${
                  plan.highlight
                    ? "border-[var(--tpl-primary)] bg-gradient-to-b from-[var(--tpl-primary)]/15 to-[var(--tpl-surface)]/50"
                    : "border-[var(--tpl-border)] bg-[var(--tpl-surface)]/40"
                }`}
              >
                {plan.highlight && (
                  <span className="tpl-head absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-[var(--tpl-primary)] px-3 py-1 text-sm tracking-wide text-white">
                    <Star className="h-3.5 w-3.5" /> Most popular
                  </span>
                )}
                <h3 className="tpl-head text-2xl tracking-wide">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--tpl-fg-muted)]">{plan.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="tpl-head text-5xl font-extrabold tracking-wide">{plan.price}</span>
                  <span className="mb-1.5 text-sm text-[var(--tpl-fg-muted)]">{plan.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[var(--tpl-fg-muted)]">
                      <Check className="h-4 w-4 shrink-0 text-[var(--tpl-accent)]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#top"
                  className={`tpl-head mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-lg tracking-wide transition-transform hover:scale-[1.03] ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-white"
                      : "border border-[var(--tpl-border)] text-[var(--tpl-fg)]"
                  }`}
                >
                  Start free trial <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Testimonials / transformations */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/30 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Transformations"
            title="Real people, real results"
            sub="The proof is on the floor. Here's what members are saying."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <FadeUp key={t.name}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/60 p-7">
                  <Quote className="h-7 w-7 text-[var(--tpl-primary)]" />
                  <p className="mt-4 flex-1 text-[var(--tpl-fg)]">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--tpl-border)] pt-5">
                    <span className="tpl-head grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-sm font-extrabold text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="tpl-head text-lg tracking-wide">{t.name}</p>
                      <p className="flex items-center gap-1 text-xs font-semibold text-[var(--tpl-accent)]">
                        <Trophy className="h-3.5 w-3.5" /> {t.result}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-4xl px-5 py-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/25 via-[var(--tpl-surface)]/60 to-[var(--tpl-secondary)]/20 p-12 backdrop-blur">
            <Flame className="mx-auto h-10 w-10 text-[var(--tpl-primary)]" />
            <h2 className="tpl-head mt-5 text-4xl font-extrabold leading-none sm:text-6xl">
              Your first week is free
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--tpl-fg-muted)]">
              Walk in, train hard, meet the crew. No card, no contract — just show up and see
              why Ironpeak members keep coming back.
            </p>
            <a
              href="#top"
              className="tpl-head mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--tpl-fg)] px-9 py-4 text-lg tracking-wide text-[var(--tpl-bg)] transition-transform hover:scale-[1.04]"
            >
              Claim free trial <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
          <span className="tpl-head text-base tracking-wide">
            © {new Date().getFullYear()} Ironpeak — a Tech Wolves template
          </span>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[var(--tpl-fg)]">Privacy</a>
            <a href="#top" className="hover:text-[var(--tpl-fg)]">Terms</a>
            <a href="#top" className="hover:text-[var(--tpl-fg)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="tpl-head text-sm font-semibold tracking-[0.22em] text-[var(--tpl-primary)]">
        {eyebrow}
      </p>
      <h2 className="tpl-head mt-3 text-4xl font-extrabold leading-none sm:text-5xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
