"use client";

/**
 * Restaurant / Café template — "Ember & Oak".
 * Warm, inviting, upscale-casual LIGHT theme. Signature interactive menu with
 * animated category tabs. Built on the shared /kit motion primitives.
 */

import { useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  UtensilsCrossed,
  Clock,
  Flame,
  Award,
  MapPin,
  Phone,
  Star,
  Quote,
  CalendarDays,
  Users,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { InteractiveMenu } from "./interactive-menu";
import "./theme.css";

const NAV = ["Menu", "Gallery", "Reservations", "Reviews"];

const HIGHLIGHTS = [
  { icon: Clock, title: "Open Nightly", body: "Tue–Sun · 5pm – 11pm · Bar until 1am" },
  { icon: Flame, title: "Wood-Fired Kitchen", body: "Seasonal New-American over open oak flame" },
  { icon: Award, title: "Award-Winning", body: "Michelin Guide listed · Best of City 2025" },
];

const GALLERY = [
  { label: "The dining room", from: "#B91C1C", to: "#7A1010", span: "sm:col-span-2 sm:row-span-2" },
  { label: "Wood-fire grill", from: "#A16207", to: "#6B4409", span: "" },
  { label: "Craft cocktails", from: "#DC2626", to: "#A16207", span: "" },
  { label: "The chef's table", from: "#7A6A5C", to: "#3A2E24", span: "" },
  { label: "Private cellar", from: "#A16207", to: "#B91C1C", span: "" },
];

const METRICS = [
  { value: 12, suffix: "", label: "Years serving the city" },
  { value: 48, suffix: "", label: "Seasonal dishes" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Average guest rating" },
  { value: 30, suffix: "k", label: "Happy guests / year" },
];

const REVIEWS = [
  {
    quote: "The ribeye is a genuine event. Smoke, char, and butter in perfect balance — the best steak I've had in years.",
    name: "Marcus Bellini",
    detail: "Regular since 2019",
  },
  {
    quote: "Warm, unpretentious, and quietly world-class. We came for an anniversary and now it's our monthly ritual.",
    name: "Sofia Andersen",
    detail: "Copenhagen",
  },
  {
    quote: "Every plate feels considered. The burrata and the barrel-aged negroni alone are worth the reservation.",
    name: "Devon Clarke",
    detail: "Food & Wine contributor",
  },
];

export function RestaurantTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-restaurant relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]">
              <Flame className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="tpl-serif">Ember <span className="text-[var(--tpl-accent)]">&amp;</span> Oak</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-[var(--tpl-fg)]">
                {n}
              </a>
            ))}
          </div>
          <a
            href="#reservations"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--tpl-primary)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Reserve <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[90vh] flex-col items-center justify-center px-5 py-24 text-center">
        <div className="tpl-glow left-1/2 top-20 h-72 w-72 -translate-x-1/2 bg-[var(--tpl-primary)]" />
        <div className="tpl-glow right-10 top-1/2 h-64 w-64 bg-[var(--tpl-accent)]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(185,28,28,0.10), transparent 45%), radial-gradient(circle at 80% 30%, rgba(161,98,7,0.12), transparent 50%), linear-gradient(180deg, transparent, rgba(120,90,60,0.06))",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tpl-accent)] shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--tpl-secondary)]" />
              Wood-fired · New-American
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="tpl-serif mt-6 text-balance text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              Ember <span className="text-[var(--tpl-primary)]">&amp;</span> Oak
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              A neighborhood table where open flame meets the season&apos;s best. Slow-cooked, hand-plated, and poured
              with intention — every night.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#reservations"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Reserve a table
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-7 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] transition-colors hover:border-[var(--tpl-accent)]"
              >
                <UtensilsCrossed className="h-4 w-4" /> View menu
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]">
        <Stagger className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <FadeUp key={h.title} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/12 to-[var(--tpl-accent)]/12 text-[var(--tpl-primary)]">
                <h.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--tpl-fg)]">{h.title}</h3>
                <p className="mt-0.5 text-sm text-[var(--tpl-fg-muted)]">{h.body}</p>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Interactive menu */}
      <section id="menu" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/4 h-72 w-72 bg-[var(--tpl-accent)] opacity-25" />
        <SectionHead eyebrow="Our Menu" title="Cooked over open flame" sub="Seasonal, sourced within 100 miles, and always changing. Tap a course to explore." />
        <FadeUp standalone className="mt-12">
          <InteractiveMenu />
        </FadeUp>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="The Room" title="An evening at Ember & Oak" sub="Low light, live fire, and a cellar worth lingering in." />
        <Stagger className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY.map((g) => (
            <FadeUp key={g.label} className={g.span}>
              <Pressable className="h-full">
                <div
                  className="group relative flex h-full w-full items-end overflow-hidden rounded-2xl p-5"
                  style={{ backgroundImage: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
                >
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  <span className="relative z-10 text-sm font-semibold text-white/95 drop-shadow">{g.label}</span>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Metrics */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-serif text-4xl tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Reservations mini-form */}
      <section id="reservations" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-[var(--tpl-primary)] opacity-20" />
        <div className="relative grid items-center gap-10 rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-8 shadow-sm md:grid-cols-2 md:p-12">
          <FadeUp standalone>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">Reservations</p>
            <h2 className="tpl-serif mt-3 text-3xl tracking-tight sm:text-4xl">Save your table</h2>
            <p className="mt-3 max-w-md text-[var(--tpl-fg-muted)]">
              We hold tables 30 days out. For parties of 8 or more, or to book the chef&apos;s table, call us at{" "}
              <span className="font-semibold text-[var(--tpl-fg)]">(415) 555-0182</span>.
            </p>
          </FadeUp>

          <FadeUp standalone>
            <form
              className="grid gap-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Reservation request (demo only)"
            >
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-[var(--tpl-fg)]">Full name</span>
                <input
                  type="text"
                  placeholder="Jamie Rivera"
                  className="w-full rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors placeholder:text-[var(--tpl-fg-muted)]/70 focus:border-[var(--tpl-primary)]"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[var(--tpl-fg)]">
                    <CalendarDays className="h-4 w-4 text-[var(--tpl-accent)]" /> Date
                  </span>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-[var(--tpl-fg)]">
                    <Users className="h-4 w-4 text-[var(--tpl-accent)]" /> Party
                  </span>
                  <select
                    defaultValue="2"
                    className="w-full cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Request reservation <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-[var(--tpl-fg-muted)]">
                We&apos;ll confirm by email within the hour.
              </p>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Reviews" title="What our guests say" sub="Regulars, first-timers, and the occasional critic." />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <FadeUp key={r.name}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7 shadow-sm">
                <Quote className="h-7 w-7 text-[var(--tpl-primary)]/30" />
                <div className="mt-3 flex gap-0.5 text-[var(--tpl-accent)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--tpl-fg)]">“{r.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)] text-sm font-bold text-white">
                    {r.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--tpl-fg)]">{r.name}</p>
                    <p className="text-xs text-[var(--tpl-fg-muted)]">{r.detail}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Footer with hours & map placeholder */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]">
                <Flame className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="tpl-serif">Ember &amp; Oak</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              Wood-fired New-American in the heart of the city. Reservations recommended.
            </p>
            <div className="mt-5 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--tpl-accent)]" /> 214 Cedar Lane, Downtown
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--tpl-accent)]" /> (415) 555-0182
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--tpl-fg)]">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
              <li className="flex justify-between"><span>Monday</span><span>Closed</span></li>
              <li className="flex justify-between"><span>Tue – Thu</span><span>5pm – 11pm</span></li>
              <li className="flex justify-between"><span>Fri – Sat</span><span>5pm – 1am</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>4pm – 10pm</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--tpl-fg)]">Find us</h3>
            <div
              className="mt-4 flex h-40 items-center justify-center rounded-2xl border border-[var(--tpl-border)]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(161,98,7,0.14), rgba(185,28,28,0.10)), repeating-linear-gradient(90deg, rgba(120,90,60,0.10) 0 1px, transparent 1px 40px), repeating-linear-gradient(0deg, rgba(120,90,60,0.10) 0 1px, transparent 1px 40px)",
              }}
              role="img"
              aria-label="Map placeholder showing restaurant location"
            >
              <span className="flex items-center gap-2 rounded-full bg-[var(--tpl-surface)] px-4 py-2 text-sm font-semibold text-[var(--tpl-primary)] shadow-sm">
                <MapPin className="h-4 w-4" /> 214 Cedar Lane
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--tpl-border)] py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} Ember &amp; Oak — a Tech Wolves template</span>
            <div className="flex gap-6">
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Private events</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Gift cards</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Careers</a>
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">{eyebrow}</p>
      <h2 className="tpl-serif mt-3 text-3xl tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
