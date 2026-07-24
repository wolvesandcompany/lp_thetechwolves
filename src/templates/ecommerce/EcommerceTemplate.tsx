"use client";

/**
 * Kindred Goods — E-commerce / product store template for The Tech Wolves library.
 * Clean, modern, premium retail. Light editorial theme, Rubik / Nunito Sans.
 * Signature section: a filterable product grid with a live cart badge in the nav.
 * Built on the shared /kit motion primitives.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ShoppingBag,
  Truck,
  RotateCcw,
  Star,
  Leaf,
  Sparkles,
  Mail,
  Check,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { CartProvider, useCart } from "./cart";
import { ProductGrid } from "./product-grid";
import "./theme.css";

const NAV = ["Shop", "Collections", "Lookbook", "Reviews"];

const TRUST = [
  { icon: Truck, title: "Free shipping", body: "On every order over $50, worldwide." },
  { icon: RotateCcw, title: "30-day returns", body: "Changed your mind? Send it back, on us." },
  { icon: Star, title: "4.9 / 5 rating", body: "From 12,400+ verified customers." },
];

const COLLECTION = [
  { name: "The Linen Edit", body: "Breathable everyday layers in warm neutrals.", from: "#c7d2fe", to: "#818cf8", span: "sm:col-span-2 sm:row-span-2" },
  { name: "Home & Table", body: "Handmade stoneware and soft textiles.", from: "#fde68a", to: "#fca5a5", span: "" },
  { name: "Carry Goods", body: "Totes, wallets and travel essentials.", from: "#bbf7d0", to: "#34d399", span: "" },
];

const METRICS = [
  { value: 12400, suffix: "+", label: "Happy customers" },
  { value: 4.9, decimals: 1, suffix: "", label: "Average rating" },
  { value: 48, suffix: "h", label: "Avg. delivery time" },
  { value: 100, suffix: "%", label: "Carbon-neutral shipping" },
];

const REVIEWS = [
  {
    name: "Amara O.",
    location: "Toronto, CA",
    stars: 5,
    quote: "The linen shirt is now my most-worn piece. Fabric feels premium and the fit is perfect.",
    initials: "AO",
  },
  {
    name: "Lukas M.",
    location: "Berlin, DE",
    stars: 5,
    quote: "Fast shipping, beautiful packaging, and the stoneware mugs are even better in person.",
    initials: "LM",
  },
  {
    name: "Sofia R.",
    location: "Austin, US",
    stars: 4,
    quote: "Love the woven tote. Sturdy and roomy — I get compliments on it constantly.",
    initials: "SR",
  },
];

export function EcommerceTemplate() {
  return (
    <CartProvider>
      <EcommerceInner />
    </CartProvider>
  );
}

function EcommerceInner() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-ecommerce relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--tpl-primary)]">
              <Leaf className="h-4 w-4 text-white" />
            </span>
            Kindred<span className="text-[var(--tpl-accent)]">Goods</span>
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
          <CartButton />
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28"
      >
        <div className="tpl-glow -left-10 top-10 h-72 w-72 bg-[var(--tpl-accent)]" />
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-4 py-1.5 text-xs font-semibold text-[var(--tpl-secondary)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--tpl-accent)]" />
              New season · Summer 2026
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl">
              Considered goods for a{" "}
              <span className="text-[var(--tpl-accent)]">well-lived home.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg text-[var(--tpl-fg-muted)]">
              Thoughtfully made apparel, homeware and accessories — designed to last, priced to love, and shipped carbon-neutral.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--tpl-primary)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Shop now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] px-7 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] transition-colors hover:bg-white"
              >
                Explore collections
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--tpl-fg-muted)]">
              <div className="flex -space-x-2">
                {["#c7d2fe", "#fca5a5", "#6ee7b7", "#fcd34d"].map((c) => (
                  <span
                    key={c}
                    className="h-7 w-7 rounded-full border-2 border-[var(--tpl-bg)]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>
                <span className="font-bold text-[var(--tpl-fg)]">12,400+</span> shoppers this season
              </span>
            </div>
          </Reveal>
        </div>

        {/* Hero product block */}
        <FadeUp standalone>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[var(--tpl-border)]">
              <div
                className="relative aspect-[4/5] w-full"
                style={{ background: "linear-gradient(140deg, #c7d2fe 0%, #a5b4fc 45%, #818cf8 100%)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.55),transparent_45%)]" />
              </div>
            </div>
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)] p-4 shadow-[0_20px_50px_-24px_rgba(17,24,39,0.4)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--tpl-fg-muted)]">
                Bestseller
              </p>
              <p className="mt-1 text-sm font-bold">Everyday Linen Shirt</p>
              <p className="text-sm font-semibold text-[var(--tpl-accent)]">$68</p>
            </motion.div>
            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-4 top-8 flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-4 py-2 shadow-[0_20px_50px_-24px_rgba(17,24,39,0.4)]"
            >
              <Star className="h-4 w-4 fill-[var(--tpl-accent)] text-[var(--tpl-accent)]" />
              <span className="text-sm font-bold">4.9</span>
            </motion.div>
          </div>
        </FadeUp>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]">
        <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-3">
          {TRUST.map((t) => (
            <FadeUp key={t.title} className="flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--tpl-bg)] text-[var(--tpl-accent)]">
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--tpl-fg)]">{t.title}</p>
                <p className="text-sm text-[var(--tpl-fg-muted)]">{t.body}</p>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Featured collection */}
      <section id="collections" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Collections"
          title="Shop the featured edit"
          sub="Three curated worlds — pieces that work as hard as they look good."
        />
        <Stagger className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2">
          {COLLECTION.map((c) => (
            <FadeUp key={c.name} className={c.span}>
              <Pressable className="h-full">
                <a
                  href="#shop"
                  className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-[var(--tpl-border)] p-6"
                  style={{ background: `linear-gradient(150deg, ${c.from}, ${c.to})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white">{c.name}</h3>
                    <p className="mt-1 max-w-xs text-sm text-white/90">{c.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white">
                      Shop now
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Signature interactive: filterable product grid */}
      <section id="shop" className="relative bg-[var(--tpl-surface)] py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            eyebrow="Shop all"
            title="Find your next favourite"
            sub="Filter by category and add to your bag — no page reloads, just browsing."
          />
          <ProductGrid />
        </div>
      </section>

      {/* Promo / lookbook band */}
      <section id="lookbook" className="mx-auto max-w-6xl px-5 py-24">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-primary)] px-8 py-14 text-white sm:px-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">
                  The Lookbook
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Summer, softly styled.
                </h2>
                <p className="mt-3 max-w-md text-white/70">
                  Take 15% off your first order when you join Kindred. Effortless pieces for warm days and slow mornings.
                </p>
                <a
                  href="#newsletter"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--tpl-primary)] transition-transform hover:scale-[1.03]"
                >
                  Get 15% off <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["#c7d2fe", "#818cf8"],
                  ["#fde68a", "#fca5a5"],
                  ["#bbf7d0", "#34d399"],
                ].map(([from, to], i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-xl"
                    style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Metrics */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)] py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Reviews"
          title="Loved by 12,400+ homes"
          sub="Real words from the people who bring Kindred Goods home."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <FadeUp key={r.name}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < r.stars
                          ? "fill-[var(--tpl-accent)] text-[var(--tpl-accent)]"
                          : "text-[var(--tpl-border)]"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[var(--tpl-secondary)]">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--tpl-primary)] text-sm font-bold text-white">
                    {r.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--tpl-fg)]">{r.name}</p>
                    <p className="text-xs text-[var(--tpl-fg-muted)]">{r.location}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-4xl px-5 pb-24">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-10 text-center sm:p-14">
            <div className="tpl-glow left-1/2 top-0 h-56 w-56 -translate-x-1/2 bg-[var(--tpl-accent)]" />
            <div className="relative">
              <span className="grid mx-auto h-12 w-12 place-items-center rounded-2xl bg-[var(--tpl-primary)] text-white">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Join Kindred, save 15%
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[var(--tpl-fg-muted)]">
                Early access to drops, styling notes, and a welcome discount on your first order.
              </p>
              <NewsletterForm />
              <p className="mt-3 text-xs text-[var(--tpl-fg-muted)]">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--tpl-primary)]">
                <Leaf className="h-4 w-4 text-white" />
              </span>
              Kindred<span className="text-[var(--tpl-accent)]">Goods</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-[var(--tpl-fg-muted)]">
              Considered goods for a well-lived home. Made to last, shipped carbon-neutral.
            </p>
          </div>
          {[
            { head: "Shop", links: ["Apparel", "Home", "Accessories", "New arrivals"] },
            { head: "Company", links: ["About", "Sustainability", "Careers", "Press"] },
            { head: "Support", links: ["Shipping", "Returns", "Contact", "FAQ"] },
          ].map((col) => (
            <div key={col.head}>
              <p className="text-sm font-bold text-[var(--tpl-fg)]">{col.head}</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--tpl-fg-muted)]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="transition-colors hover:text-[var(--tpl-fg)]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--tpl-border)]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
            <span>© {new Date().getFullYear()} Kindred Goods — a Tech Wolves template</span>
            <div className="flex gap-6">
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Privacy</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Terms</a>
              <a href="#top" className="hover:text-[var(--tpl-fg)]">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CartButton() {
  const { count } = useCart();
  const reduced = useReducedMotion();
  return (
    <button
      className="relative inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--tpl-primary)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="hidden sm:inline">Cart</span>
      {count > 0 && (
        <motion.span
          key={count}
          initial={reduced ? false : { scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 18 }}
          className="grid h-5 min-w-5 place-items-center rounded-full bg-[var(--tpl-accent)] px-1.5 text-xs font-bold text-white"
          aria-hidden
        >
          {count}
        </motion.span>
      )}
    </button>
  );
}

function NewsletterForm() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="you@email.com"
        className="w-full rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-bg)] px-5 py-3.5 text-sm text-[var(--tpl-fg)] outline-none transition-colors placeholder:text-[var(--tpl-fg-muted)] focus:border-[var(--tpl-accent)]"
      />
      <motion.button
        type="submit"
        whileTap={reduced ? undefined : { scale: 0.96 }}
        className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--tpl-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
      >
        {done ? (
          <>
            <Check className="h-4 w-4" /> Subscribed
          </>
        ) : (
          "Get 15% off"
        )}
      </motion.button>
    </form>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
