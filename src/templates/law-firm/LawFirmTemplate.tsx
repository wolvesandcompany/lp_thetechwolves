"use client";

/**
 * Law Firm / Attorney template — "Sterling & Vance".
 * Formal, authoritative, high-trust. Light theme, navy + gold.
 * Restrained motion built on the shared /kit primitives.
 */

import { useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Scale,
  Gavel,
  Award,
  ShieldCheck,
  Quote,
  Phone,
  MapPin,
  Mail,
  Star,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { PracticeAreas } from "./practice-areas";
import "./theme.css";

const NAV = ["Practice Areas", "Attorneys", "Results", "Testimonials", "Consultation"];

const PROOF = [
  { value: 38, suffix: "", label: "Years established" },
  { value: 2400, suffix: "+", label: "Cases won" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Client rating" },
  { value: 96, suffix: "%", label: "Client retention" },
];

const RESULTS = [
  {
    tag: "Corporate",
    outcome: "$210M acquisition closed",
    body: "Advised a regional healthcare group through a cross-border acquisition, clearing regulatory review in under 90 days.",
  },
  {
    tag: "Litigation",
    outcome: "Defense verdict at trial",
    body: "Secured a complete defense verdict for a manufacturing client in a nine-figure product liability action.",
  },
  {
    tag: "Real Estate",
    outcome: "$85M development entitled",
    body: "Guided a mixed-use development through entitlement and financing across three municipalities.",
  },
  {
    tag: "IP",
    outcome: "Patent portfolio defended",
    body: "Enforced a client's core patents against a competitor, resulting in a favorable licensing settlement.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Sterling & Vance treated our matter with the seriousness it deserved. Their counsel was measured, strategic, and — above all — effective.",
    name: "Eleanor Whitfield",
    role: "CEO, Whitfield Holdings",
  },
  {
    quote:
      "They prepared every case as if it were going to trial, which is exactly why we never had to. The most prepared team we've worked with.",
    name: "Marcus Delgado",
    role: "General Counsel, Aria Manufacturing",
  },
  {
    quote:
      "Through a difficult family matter, they were discreet, patient, and unwavering. I always felt protected and informed.",
    name: "Sophia Lind",
    role: "Private Client",
  },
];

const MATTER_TYPES = [
  "Corporate & M&A",
  "Litigation",
  "Real Estate",
  "Family Law",
  "Intellectual Property",
  "Other",
];

export function LawFirmTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-law-firm relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--tpl-primary)]">
              <Scale className="h-4.5 w-4.5 text-[var(--tpl-accent)]" />
            </span>
            <span className="tpl-serif text-lg font-semibold tracking-tight">
              Sterling <span className="text-[var(--tpl-accent)]">&amp;</span> Vance
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-[var(--tpl-fg-muted)] lg:flex">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                className="transition-colors hover:text-[var(--tpl-fg)]"
              >
                {n}
              </a>
            ))}
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-1.5 rounded-md bg-[var(--tpl-primary)] px-4 py-2.5 text-sm font-bold text-[var(--tpl-surface)] transition-colors hover:bg-[var(--tpl-secondary)]"
          >
            Request consultation
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden px-5 py-24 sm:py-32">
        <div className="tpl-glow left-1/2 top-0 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-accent)] opacity-20" />
        {/* Formal backdrop: columns / pillars motif */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="mx-auto flex h-full max-w-6xl items-stretch justify-between">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="w-6 bg-[var(--tpl-primary)]" />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[var(--tpl-fg-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--tpl-accent)]" />
              Est. 1988 · Trusted counsel
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="tpl-serif mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Formidable counsel for
              <br />
              <span className="text-[var(--tpl-accent)]">high-stakes</span> matters.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              Sterling &amp; Vance brings three decades of disciplined advocacy to corporations,
              families, and founders who cannot afford to lose.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#consultation"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--tpl-primary)] px-7 py-3.5 text-sm font-bold text-[var(--tpl-surface)] transition-colors hover:bg-[var(--tpl-secondary)]"
              >
                Request consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#practice-areas"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-7 py-3.5 text-sm font-bold text-[var(--tpl-fg)] transition-colors hover:border-[var(--tpl-accent)]/50"
              >
                Explore practice areas
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-14">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {PROOF.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-serif text-4xl font-semibold tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--tpl-fg-muted)]">
                {m.label}
              </p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Practice areas — signature interactive */}
      <section id="practice-areas" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Practice Areas"
          title="Depth across every discipline"
          sub="Select a practice to see how our attorneys serve clients in that field."
        />
        <PracticeAreas />
      </section>

      {/* Anchor for attorneys nav link (profiles render inside PracticeAreas) */}
      <div id="attorneys" className="sr-only" aria-hidden="true" />

      {/* Case results */}
      <section id="results" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Notable Outcomes"
            title="Results that speak for themselves"
            sub="Representative matters across our core practices. Prior results do not guarantee a similar outcome."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {RESULTS.map((r) => (
              <FadeUp key={r.outcome}>
                <div className="flex h-full gap-5 rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--tpl-primary)] text-[var(--tpl-accent)]">
                    <Gavel className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--tpl-accent)]">
                      {r.tag}
                    </span>
                    <h3 className="tpl-serif mt-1 text-xl font-semibold text-[var(--tpl-fg)]">
                      {r.outcome}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{r.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Client Voices"
          title="Trusted when it matters most"
          sub="What clients say after standing beside us."
        />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <FadeUp key={t.name}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7 shadow-sm">
                <Quote className="h-7 w-7 text-[var(--tpl-accent)]/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--tpl-accent)] text-[var(--tpl-accent)]" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[var(--tpl-fg)]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-[var(--tpl-border)] pt-4">
                  <p className="tpl-serif font-semibold text-[var(--tpl-fg)]">{t.name}</p>
                  <p className="text-sm text-[var(--tpl-fg-muted)]">{t.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Consultation form */}
      <section id="consultation" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:gap-16">
          <FadeUp standalone>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">
              Request a Consultation
            </p>
            <h2 className="tpl-serif mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s discuss your matter
            </h2>
            <p className="mt-4 max-w-md text-[var(--tpl-fg-muted)]">
              Every consultation is confidential and handled by a partner. Tell us a little about
              your situation and we&apos;ll respond within one business day.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "(212) 555-0188" },
                { icon: Mail, label: "counsel@sterlingvance.law" },
                { icon: MapPin, label: "410 Park Avenue, New York, NY" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-[var(--tpl-fg)]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--tpl-accent)]/10 text-[var(--tpl-accent)]">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold">{c.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp standalone>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-7 shadow-sm sm:p-8"
            >
              <div className="grid gap-5">
                <Field id="name" label="Full name">
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)] placeholder:text-[var(--tpl-fg-muted)]/70 focus:border-[var(--tpl-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--tpl-accent)]/20"
                  />
                </Field>
                <Field id="email" label="Email address">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)] placeholder:text-[var(--tpl-fg-muted)]/70 focus:border-[var(--tpl-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--tpl-accent)]/20"
                  />
                </Field>
                <Field id="matter" label="Matter type">
                  <select
                    id="matter"
                    required
                    defaultValue=""
                    className="w-full cursor-pointer rounded-lg border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)] focus:border-[var(--tpl-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--tpl-accent)]/20"
                  >
                    <option value="" disabled>
                      Select a matter type…
                    </option>
                    {MATTER_TYPES.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="details" label="Brief description">
                  <textarea
                    id="details"
                    rows={4}
                    placeholder="Tell us about your situation…"
                    className="w-full resize-none rounded-lg border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-3 text-sm text-[var(--tpl-fg)] placeholder:text-[var(--tpl-fg-muted)]/70 focus:border-[var(--tpl-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--tpl-accent)]/20"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--tpl-primary)] px-6 py-3.5 text-sm font-bold text-[var(--tpl-surface)] transition-colors hover:bg-[var(--tpl-secondary)]"
                >
                  Submit request <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-[var(--tpl-fg-muted)]">
                  Submitting does not create an attorney-client relationship.
                </p>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl bg-[var(--tpl-primary)] p-12 sm:p-16">
            <div className="tpl-glow left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-[var(--tpl-accent)] opacity-30" />
            <Award className="relative z-10 mx-auto h-9 w-9 text-[var(--tpl-accent)]" />
            <h2 className="tpl-serif relative z-10 mt-5 text-3xl font-semibold tracking-tight text-[var(--tpl-surface)] sm:text-4xl">
              When the stakes are highest, choose experience.
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-lg text-[var(--tpl-bg)]/70">
              Speak with a partner today. Your first consultation is confidential and without
              obligation.
            </p>
            <a
              href="#consultation"
              className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--tpl-accent)] px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            >
              Request consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--tpl-primary)]">
                <Scale className="h-4.5 w-4.5 text-[var(--tpl-accent)]" />
              </span>
              <span className="tpl-serif text-lg font-semibold tracking-tight">
                Sterling <span className="text-[var(--tpl-accent)]">&amp;</span> Vance
              </span>
            </a>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-[var(--tpl-fg-muted)]">
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Privacy</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Terms</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Disclaimer</a>
              <a href="#consultation" className="hover:text-[var(--tpl-fg)]">Contact</a>
            </div>
          </div>
          <p className="mt-8 border-t border-[var(--tpl-border)] pt-6 text-center text-xs text-[var(--tpl-fg-muted)]">
            © {new Date().getFullYear()} Sterling &amp; Vance LLP — a Tech Wolves template. Attorney
            advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">{eyebrow}</p>
      <h2 className="tpl-serif mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-[var(--tpl-fg)]">
        {label}
      </label>
      {children}
    </div>
  );
}
