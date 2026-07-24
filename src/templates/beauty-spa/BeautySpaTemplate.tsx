"use client";

/**
 * Beauty Salon / Spa template — "Lumière Spa".
 * Soft, elegant, luxurious, calming. Light blush theme with rose/violet accents.
 * Playfair Display headings + Inter body. Framer Motion via the shared /kit primitives.
 */

import { useReducedMotion } from "motion/react";
import {
  Flower2,
  Sparkles,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Quote,
  Heart,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { ServicesMenu } from "./services-menu";
import "./theme.css";

const NAV = ["Services", "Gallery", "Team", "Booking"];

const METRICS = [
  { value: 2009, label: "Established", suffix: "" },
  { value: 40, label: "Signature treatments", suffix: "+" },
  { value: 12, label: "Happy clients", suffix: "k+" },
  { value: 4.9, decimals: 1, label: "Average rating", suffix: "★" },
];

const GALLERY = [
  { title: "Treatment suites", from: "from-[var(--tpl-primary)]/25", to: "to-[var(--tpl-accent)]/20" },
  { title: "The relaxation lounge", from: "from-[var(--tpl-accent)]/25", to: "to-[var(--tpl-secondary)]/15" },
  { title: "Hydro-therapy pool", from: "from-[var(--tpl-secondary)]/20", to: "to-[var(--tpl-primary)]/20" },
  { title: "Nail & beauty bar", from: "from-[var(--tpl-accent)]/20", to: "to-[var(--tpl-primary)]/25" },
  { title: "Private garden terrace", from: "from-[var(--tpl-primary)]/20", to: "to-[var(--tpl-secondary)]/20" },
  { title: "Herbal steam room", from: "from-[var(--tpl-secondary)]/25", to: "to-[var(--tpl-accent)]/20" },
];

const TEAM = [
  { name: "Isabelle Moreau", role: "Master Esthetician", initials: "IM", specialty: "Facials & skin therapy" },
  { name: "Sofia Lindqvist", role: "Lead Massage Therapist", initials: "SL", specialty: "Deep tissue & aromatherapy" },
  { name: "Amara Osei", role: "Nail Artistry Director", initials: "AO", specialty: "Gel art & spa manicures" },
  { name: "Chloé Dubois", role: "Senior Stylist", initials: "CD", specialty: "Balayage & bridal hair" },
];

const SERVICE_OPTIONS = [
  "Signature Glow Facial",
  "Serenity Aromatherapy",
  "Luxe Gel Manicure",
  "Balayage Illumination",
  "Hot Stone Journey",
];

const TESTIMONIALS = [
  { quote: "The most serene two hours of my month. I left glowing and completely at peace.", name: "Emma R.", city: "Boston, US", initials: "ER" },
  { quote: "Impeccable service and a space that feels like a five-star retreat. My skin has never looked better.", name: "Léa M.", city: "Lyon, FR", initials: "LM" },
  { quote: "From the tea on arrival to the aftercare, every detail is considered. Lumière is my sanctuary.", name: "Hannah T.", city: "Toronto, CA", initials: "HT" },
];

const HOURS = [
  { day: "Mon – Thu", time: "9:00 – 20:00" },
  { day: "Friday", time: "9:00 – 21:00" },
  { day: "Saturday", time: "8:00 – 19:00" },
  { day: "Sunday", time: "10:00 – 17:00" },
];

export function BeautySpaTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-beauty-spa relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]">
              <Flower2 className="h-4.5 w-4.5 text-white" />
            </span>
            <span className="tpl-serif text-xl">Lumière <span className="text-[var(--tpl-primary)]">Spa</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-[var(--tpl-fg)]">
                {n}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Book now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[88vh] flex-col items-center justify-center px-5 py-24 text-center">
        <div className="tpl-glow left-1/2 top-16 h-80 w-80 -translate-x-1/2 bg-[var(--tpl-secondary)]" />
        <div className="tpl-glow right-4 top-1/2 h-72 w-72 bg-[var(--tpl-accent)]" />
        <div className="tpl-glow left-4 bottom-10 h-64 w-64 bg-[var(--tpl-primary)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/70 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[var(--tpl-primary)]" />
              A sanctuary for skin, body & soul
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
              Where calm
              <br />
              <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-secondary)] to-[var(--tpl-accent)] bg-clip-text text-transparent italic">
                becomes ritual.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              Restorative facials, therapeutic massage, and artful beauty — thoughtfully delivered in a space designed to slow you down.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#booking"
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--tpl-primary)]/25 transition-transform hover:scale-[1.03]"
              >
                Book an appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/70 px-8 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
              >
                View treatments
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 py-14">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="tpl-serif text-4xl font-semibold tracking-tight text-[var(--tpl-primary)] sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Services / price menu (signature interactive) */}
      <section id="services" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/4 h-72 w-72 bg-[var(--tpl-secondary)] opacity-25" />
        <SectionHead
          eyebrow="Treatments & pricing"
          title="A menu made for unwinding"
          sub="Browse by category. Every treatment is performed by our senior therapists with organic, cruelty-free products."
        />
        <FadeUp standalone className="mt-12">
          <ServicesMenu />
        </FadeUp>
      </section>

      {/* Gallery grid */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="The space" title="Step inside Lumière" sub="Soft light, natural textures, and quiet corners designed for deep rest." />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <FadeUp key={g.title}>
              <Pressable>
                <div className={`group relative flex aspect-[4/3] items-end overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br ${g.from} ${g.to} p-6`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]" />
                  <span className="relative tpl-serif text-lg font-semibold text-[var(--tpl-fg)]">{g.title}</span>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Team / therapists */}
      <section id="team" className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="Our therapists" title="Hands you can trust" sub="A close-knit team of certified specialists, each devoted to their craft." />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <FadeUp key={t.name}>
                <Pressable className="h-full">
                  <div className="flex h-full flex-col items-center rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7 text-center">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/20 to-[var(--tpl-accent)]/20 tpl-serif text-2xl font-semibold text-[var(--tpl-primary)]">
                      {t.initials}
                    </span>
                    <h3 className="mt-5 tpl-serif text-lg font-semibold">{t.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--tpl-primary)]">{t.role}</p>
                    <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{t.specialty}</p>
                  </div>
                </Pressable>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Booking teaser */}
      <section id="booking" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow right-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-accent)] opacity-25" />
        <FadeUp standalone>
          <div className="grid overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] shadow-[0_30px_80px_-40px_rgba(150,60,110,0.4)] lg:grid-cols-2">
            {/* Left: invitation */}
            <div className="relative flex flex-col justify-center gap-5 bg-gradient-to-br from-[var(--tpl-primary)]/12 via-[var(--tpl-surface)] to-[var(--tpl-accent)]/12 p-10 sm:p-12">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/70 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)]">
                <Calendar className="h-3.5 w-3.5 text-[var(--tpl-primary)]" /> Reserve your ritual
              </span>
              <h2 className="tpl-serif text-3xl font-semibold tracking-tight sm:text-4xl">Book your escape</h2>
              <p className="max-w-md text-[var(--tpl-fg-muted)]">
                Choose a date, time and treatment. We&apos;ll confirm within the hour and prepare your suite with your favourite blend of essential oils.
              </p>
              <div className="mt-2 space-y-3 text-sm text-[var(--tpl-fg-muted)]">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 18 Rosewood Lane, Old Town</p>
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (415) 555-0192</p>
              </div>
            </div>

            {/* Right: styled form */}
            <form className="grid gap-5 p-10 sm:p-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <label htmlFor="bk-name" className="text-sm font-medium text-[var(--tpl-fg)]">Full name</label>
                <input
                  id="bk-name"
                  type="text"
                  placeholder="Jane Doe"
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
                <label htmlFor="bk-service" className="text-sm font-medium text-[var(--tpl-fg)]">Treatment</label>
                <select
                  id="bk-service"
                  defaultValue={SERVICE_OPTIONS[0]}
                  className="cursor-pointer rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-3 text-sm text-[var(--tpl-fg)] outline-none transition-colors focus:border-[var(--tpl-primary)]"
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Request appointment <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-[var(--tpl-fg-muted)]">No payment required to reserve.</p>
            </form>
          </div>
        </FadeUp>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Kind words" title="Loved by our guests" sub="A few notes from those who've made Lumière part of their self-care." />
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
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)]/20 to-[var(--tpl-accent)]/20 text-sm font-semibold text-[var(--tpl-primary)]">
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

      {/* Final CTA band */}
      <section className="relative mx-auto max-w-4xl px-5 pb-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/15 via-[var(--tpl-surface)] to-[var(--tpl-accent)]/15 p-12">
            <div className="tpl-glow left-1/2 top-0 h-56 w-56 -translate-x-1/2 bg-[var(--tpl-secondary)] opacity-30" />
            <Heart className="relative mx-auto h-9 w-9 text-[var(--tpl-primary)]" />
            <h2 className="relative mt-5 tpl-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Your calm is waiting.
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              Gift yourself an hour of stillness. First-time guests enjoy 15% off any signature treatment.
            </p>
            <a
              href="#booking"
              className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Book an appointment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer with hours */}
      <footer className="border-t border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]">
                <Flower2 className="h-4.5 w-4.5 text-white" />
              </span>
              <span className="tpl-serif text-xl">Lumière Spa</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              A modern day spa devoted to rest, radiance and ritual.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Opening hours</h4>
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
              <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[var(--tpl-primary)]" /> 18 Rosewood Lane</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-[var(--tpl-primary)]" /> +1 (415) 555-0192</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--tpl-fg)]">Follow</h4>
            <a
              href="#top"
              aria-label="Instagram"
              className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-2 text-sm text-[var(--tpl-fg-muted)] transition-colors hover:text-[var(--tpl-fg)]"
            >
              <Instagram className="h-4 w-4" /> @lumierespa
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--tpl-border)] pt-6 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} Lumière Spa — a Tech Wolves template</span>
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

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-primary)]">{eyebrow}</p>
      <h2 className="mt-3 tpl-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
