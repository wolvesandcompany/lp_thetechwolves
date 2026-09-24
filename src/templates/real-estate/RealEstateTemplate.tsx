"use client";

/**
 * Real Estate template — "Meridian Estates".
 * Elegant, minimal, high-trust luxury. Light theme, navy + teal.
 * Cinzel display headings + Josefin Sans body. Framer Motion via the shared kit.
 */

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Home,
  MapPin,
  Search,
  Building2,
  DollarSign,
  BedDouble,
  Bath,
  Maximize,
  Star,
  Quote,
  Award,
  Phone,
  Check,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { PropertyListings } from "./property-listings";
import "./theme.css";

const NAV = ["Listings", "Featured", "Agent", "Contact"];

const METRICS: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  decimals?: number;
}[] = [
  { value: 1240, suffix: "+", label: "Properties sold" },
  { value: 21, suffix: " days", label: "Avg. days on market" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 1.4, decimals: 1, prefix: "$", suffix: "B", label: "Total volume closed" },
];

const TESTIMONIALS = [
  {
    quote:
      "Meridian sold our home in nine days, over asking. The whole process felt effortless and genuinely luxurious.",
    name: "Eleanor & James Whitfield",
    role: "Sold in Malibu, CA",
  },
  {
    quote:
      "Their market read is uncanny. We found a penthouse we didn't even know existed and closed without a hitch.",
    name: "Marcus Reyes",
    role: "Bought in Chicago, IL",
  },
  {
    quote:
      "Discreet, precise, and endlessly patient with our questions. The gold standard for high-end real estate.",
    name: "Sofia Lindqvist",
    role: "Relocated to Napa Valley, CA",
  },
];

export function RealEstateTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-real-estate relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Home className="h-4 w-4 text-white" />
            </span>
            <span className="tpl-serif">
              MERIDIAN <span className="text-[var(--tpl-secondary)]">ESTATES</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
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
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--tpl-primary)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book a viewing <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-[88vh] flex-col items-center justify-center px-5 py-24 text-center"
      >
        <div className="tpl-glow left-1/2 top-24 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-secondary)]" />
        <div className="tpl-glow right-8 top-1/2 h-64 w-64 bg-[var(--tpl-accent)]" />
        {/* Elegant backdrop grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,var(--tpl-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--tpl-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--tpl-fg-muted)]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--tpl-secondary)]" />
              Luxury real estate, redefined
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              Find a home worthy
              <br />
              <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-accent)] to-[var(--tpl-secondary)] bg-clip-text text-transparent">
                of your story.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              Meridian Estates curates the most distinguished properties across North America — with
              white-glove service from first viewing to final signature.
            </p>
          </Reveal>

          {/* Property search bar (styled, non-functional) */}
          <Reveal delay={0.3}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-3 shadow-xl shadow-slate-900/5">
              <div className="grid gap-2 sm:grid-cols-[1.2fr_1fr_1fr_auto]">
                <SearchField icon={MapPin} label="Location" value="Malibu, CA" />
                <SearchField icon={Building2} label="Type" value="Villa" />
                <SearchField icon={DollarSign} label="Price" value="$2M – $8M" />
                <button
                  type="button"
                  aria-label="Search properties"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--tpl-secondary)] to-[var(--tpl-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <Search className="h-4 w-4" />
                  <span className="sm:hidden">Search</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp
                  value={m.value}
                  prefix={m.prefix ?? ""}
                  suffix={m.suffix}
                  decimals={m.decimals ?? 0}
                />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Featured property */}
      <section id="featured" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Featured residence"
          title="The Meridian Signature"
          sub="Our most exceptional listing this season — hand-selected by our senior partners."
        />
        <FadeUp standalone className="mt-12">
          <div className="grid overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-xl shadow-slate-900/5 lg:grid-cols-2">
            {/* Gradient "photo" */}
            <div className="relative min-h-[320px] bg-gradient-to-br from-[#0f172a] via-[#0e7490] to-[#0369a1]">
              <div className="absolute inset-0 bg-[radial-gradient(130%_130%_at_15%_0%,rgba(255,255,255,0.2),transparent_55%)]" />
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--tpl-primary)] backdrop-blur">
                Exclusive listing
              </span>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="flex items-center gap-1.5 text-sm opacity-90">
                  <MapPin className="h-4 w-4" /> Beverly Hills, CA
                </p>
                <p className="mt-1 text-4xl font-semibold tracking-tight">$12.75M</p>
              </div>
            </div>
            {/* Details */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                The Bel-Air Estate
              </h3>
              <p className="mt-3 text-[var(--tpl-fg-muted)]">
                A rare architectural masterpiece set on 1.8 private acres — floor-to-ceiling glass,
                an infinity pool, and uninterrupted canyon views. Designed for those who accept only
                the extraordinary.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[
                  { icon: BedDouble, label: "7 Beds" },
                  { icon: Bath, label: "9 Baths" },
                  { icon: Maximize, label: "11,200 sqft" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-4 text-center"
                  >
                    <s.icon className="mx-auto h-5 w-5 text-[var(--tpl-secondary)]" />
                    <p className="mt-2 text-sm font-medium text-[var(--tpl-fg)]">{s.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--tpl-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Request private tour
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Filterable listings — signature interactive section */}
      <section id="listings" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-secondary)]" />
        <SectionHead
          eyebrow="Curated collection"
          title="Explore the portfolio"
          sub="Filter our active listings by intent. Every property is vetted for quality and provenance."
        />
        <PropertyListings />
      </section>

      {/* Agent bio card */}
      <section id="agent" className="relative mx-auto max-w-6xl px-5 py-24">
        <FadeUp standalone>
          <div className="grid overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-xl shadow-slate-900/5 md:grid-cols-[280px_1fr]">
            {/* Portrait */}
            <div className="relative flex min-h-[280px] items-end justify-center bg-gradient-to-br from-[var(--tpl-primary)] via-[#1e293b] to-[var(--tpl-accent)] p-8">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(255,255,255,0.18),transparent_55%)]" />
              <div className="relative grid h-28 w-28 place-items-center rounded-full border-2 border-white/40 bg-white/10 text-3xl font-semibold text-white tpl-serif backdrop-blur">
                AV
              </div>
            </div>
            {/* Bio */}
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--tpl-secondary)]/10 px-3 py-1 text-xs font-semibold text-[var(--tpl-secondary)]">
                <Award className="h-3.5 w-3.5" /> Top 1% of agents, 2024
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Ava Montgomery
              </h3>
              <p className="text-sm font-medium text-[var(--tpl-fg-muted)]">
                Principal Broker · Meridian Estates
              </p>
              <p className="mt-4 max-w-xl text-[var(--tpl-fg-muted)]">
                With over 15 years and $1.4B in closed luxury volume, Ava pairs a discreet,
                relationship-first approach with an unmatched command of the high-end market. She
                represents both buyers and sellers who expect precision at every step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--tpl-primary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> Schedule a call
                </a>
                <div className="flex items-center gap-1 text-[var(--tpl-accent)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-[var(--tpl-fg-muted)]">312 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Mortgage estimate teaser */}
      <section className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-8 shadow-sm sm:p-12 lg:grid-cols-2">
          <FadeUp standalone>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-secondary)]">
              Plan with confidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Estimate your monthly payment
            </h2>
            <p className="mt-3 text-[var(--tpl-fg-muted)]">
              Get a quick sense of affordability before you tour. Our in-house lending partners
              deliver pre-approvals in as little as 24 hours.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
              {["No impact to your credit score", "Rates locked for 60 days", "Concierge lending desk"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-[var(--tpl-secondary)]" /> {f}
                  </li>
                ),
              )}
            </ul>
          </FadeUp>

          <FadeUp standalone>
            <div className="rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <MortgageField label="Home price" value="$2,400,000" />
                <MortgageField label="Down payment" value="$480,000" />
                <MortgageField label="Interest rate" value="6.25%" />
                <MortgageField label="Loan term" value="30 years" />
              </div>
              <div className="mt-6 flex items-end justify-between rounded-xl bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] p-5 text-white">
                <div>
                  <p className="text-xs uppercase tracking-wide opacity-80">Est. monthly</p>
                  <p className="text-3xl font-semibold tracking-tight">$11,820</p>
                </div>
                <span className="text-xs opacity-80">Principal &amp; interest</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-3 text-sm font-semibold text-[var(--tpl-fg)] transition-colors hover:bg-[var(--tpl-bg)]"
              >
                Get pre-approved
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Client stories"
            title="Trusted by discerning owners"
            sub="A reputation built one exceptional transaction at a time."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <FadeUp key={t.name}>
                <Pressable className="h-full">
                  <figure className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-7">
                    <Quote className="h-7 w-7 text-[var(--tpl-secondary)]/50" />
                    <blockquote className="mt-4 flex-1 text-[var(--tpl-fg)]">“{t.quote}”</blockquote>
                    <figcaption className="mt-6 border-t border-[var(--tpl-border)] pt-4">
                      <p className="font-semibold text-[var(--tpl-fg)]">{t.name}</p>
                      <p className="text-sm text-[var(--tpl-fg-muted)]">{t.role}</p>
                    </figcaption>
                  </figure>
                </Pressable>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative mx-auto max-w-4xl px-5 py-28 text-center">
        <div className="tpl-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-[var(--tpl-secondary)]" />
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)] via-[#1e293b] to-[var(--tpl-accent)] p-12 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(255,255,255,0.14),transparent_55%)]" />
            <div className="relative">
              <Home className="mx-auto h-9 w-9 text-white/90" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Your next address awaits
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/80">
                Book a private consultation with Meridian Estates. We&apos;ll craft a plan tailored
                to your goals — no obligation.
              </p>
              <a
                href="#top"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--tpl-primary)] transition-transform hover:scale-[1.03]"
              >
                Book a private viewing <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Meridian Estates — a Tech Wolves template</span>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[var(--tpl-fg)]">
              Privacy
            </a>
            <a href="#top" className="hover:text-[var(--tpl-fg)]">
              Terms
            </a>
            <a href="#contact" className="hover:text-[var(--tpl-fg)]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SearchField({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors hover:bg-[var(--tpl-bg)]">
      <Icon className="h-4 w-4 shrink-0 text-[var(--tpl-secondary)]" />
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--tpl-fg-muted)]">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-[var(--tpl-fg)]">{value}</p>
      </div>
    </div>
  );
}

function MortgageField({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--tpl-fg-muted)]">
        {label}
      </span>
      <input
        type="text"
        defaultValue={value}
        aria-label={label}
        className="mt-1.5 w-full rounded-lg border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-3 py-2.5 text-sm font-medium text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-secondary)]"
      />
    </label>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-secondary)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
