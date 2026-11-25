"use client";

/**
 * Flowdesk — SaaS product template for The Tech Wolves library.
 * Dark glassmorphism, premium developer/SaaS aesthetic. Framer Motion +
 * an interactive animated dashboard preview. Built on the shared /kit primitives.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Boxes,
  Check,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { DashboardPreview } from "./dashboard-preview";
import "./theme.css";

const NAV = ["Features", "Dashboard", "Pricing", "Customers"];

const LOGOS = ["Northwind", "Vercel", "Loom", "Retool", "Ramp", "Linear"];

const FEATURES = [
  {
    icon: Workflow,
    title: "Visual workflow builder",
    body: "Drag, drop, ship. Automate multi-step processes across every tool your team already uses — no glue code.",
    span: "sm:col-span-2 sm:row-span-2",
    tall: true,
  },
  {
    icon: LineChart,
    title: "Realtime analytics",
    body: "Every metric that matters, streamed live.",
    span: "",
  },
  {
    icon: GitBranch,
    title: "Version control",
    body: "Branch, review, and roll back with confidence.",
    span: "",
  },
  {
    icon: Lock,
    title: "SOC 2 & SSO",
    body: "Enterprise-grade security baked in from day one — SAML, SCIM, and audit logs.",
    span: "sm:col-span-2",
  },
  {
    icon: Boxes,
    title: "200+ integrations",
    body: "Slack, Stripe, GitHub, Notion & more.",
    span: "",
  },
];

const METRICS = [
  { value: 8914, suffix: "", label: "Teams onboarded" },
  { value: 42, suffix: "M", label: "Workflows run" },
  { value: 99.98, decimals: 2, suffix: "%", label: "Uptime SLA" },
  { value: 3.4, decimals: 1, suffix: "×", label: "Faster shipping" },
];

const TESTIMONIALS = [
  {
    quote:
      "Flowdesk replaced four internal tools in a weekend. Our ops team ships automations they used to file tickets for.",
    name: "Sofia Marchetti",
    role: "VP Engineering, Ramp",
    initials: "SM",
    tint: "var(--tpl-primary)",
  },
  {
    quote:
      "The realtime dashboard is the first thing every exec opens. It's genuinely how we run the company now.",
    name: "Daniel Okafor",
    role: "COO, Northwind",
    initials: "DO",
    tint: "var(--tpl-secondary)",
  },
  {
    quote:
      "Setup took an afternoon. Two quarters later we've automated 60% of manual work. The ROI wasn't close.",
    name: "Hannah Berg",
    role: "Head of Ops, Loom",
    initials: "HB",
    tint: "var(--tpl-accent)",
  },
];

type Plan = {
  name: string;
  monthly: number | null;
  tagline: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    monthly: 0,
    tagline: "For individuals getting started.",
    features: ["Up to 3 workflows", "1 seat", "Community support", "7-day analytics"],
    highlight: false,
    cta: "Start free",
  },
  {
    name: "Team",
    monthly: 29,
    tagline: "For growing product teams.",
    features: [
      "Unlimited workflows",
      "Up to 20 seats",
      "Realtime analytics",
      "Priority support",
      "200+ integrations",
    ],
    highlight: true,
    cta: "Start 14-day trial",
  },
  {
    name: "Enterprise",
    monthly: null,
    tagline: "For scale and compliance.",
    features: ["Everything in Team", "SSO / SAML / SCIM", "SOC 2 report", "Dedicated CSM", "99.99% SLA"],
    highlight: false,
    cta: "Contact sales",
  },
];

export function FlowdeskTemplate() {
  const reduced = useReducedMotion();
  const [annual, setAnnual] = useState(true);

  return (
    <div className="tpl-saas relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-secondary)]">
              <Layers className="h-4 w-4 text-white" />
            </span>
            Flow<span className="text-[var(--tpl-accent)]">desk</span>
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
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="hidden text-sm font-medium text-[var(--tpl-fg-muted)] transition-colors hover:text-[var(--tpl-fg)] sm:inline"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--tpl-fg)] px-4 py-2 text-sm font-semibold text-[var(--tpl-bg)] transition-transform hover:scale-[1.03]"
            >
              Get started <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative px-5 pb-16 pt-20 sm:pt-28">
        <div className="tpl-glow left-1/4 top-10 h-72 w-72 bg-[var(--tpl-primary)]" />
        <div className="tpl-glow right-10 top-40 h-64 w-64 bg-[var(--tpl-secondary)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative z-10 text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-[var(--tpl-accent)]" />
                Now with AI workflow suggestions
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Ship internal tools
                <br />
                <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-secondary)] to-[var(--tpl-accent)] bg-clip-text text-transparent">
                  at the speed of thought.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--tpl-fg-muted)] lg:mx-0">
                Flowdesk is the workspace where teams build workflows, watch live analytics, and
                automate the busywork — all in one glassy, developer-grade platform.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  Start free
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#dashboard"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 px-7 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
                >
                  <Zap className="h-4 w-4 text-[var(--tpl-accent)]" />
                  See it live
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-5 text-xs text-[var(--tpl-fg-muted)]">
                No credit card required · Free forever plan
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="relative z-10">
            <DashboardPreview />
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[var(--tpl-border)] py-8">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--tpl-fg-muted)]">
            Powering product teams across North America & Europe
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-[var(--tpl-fg-muted)]/70">
            {LOGOS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features — bento */}
      <section id="features" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Features"
          title="One workspace, every workflow"
          sub="Composable building blocks that feel like one polished product."
        />
        <Stagger className="mt-12 grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <FadeUp key={f.title} className={f.span}>
              <Pressable className="h-full">
                <div
                  className={`group flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 p-6 backdrop-blur transition-colors hover:border-[var(--tpl-primary)]/50 ${
                    f.tall ? "justify-between" : ""
                  }`}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/20 to-[var(--tpl-secondary)]/20 text-[var(--tpl-accent)]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div className={f.tall ? "mt-auto pt-8" : ""}>
                    <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{f.body}</p>
                  </div>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Interactive dashboard section */}
      <section id="dashboard" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-secondary)] opacity-30" />
        <SectionHead
          eyebrow="The product"
          title="A dashboard that feels alive"
          sub="Switch tabs to explore overview, analytics, and your team — rendered with live-updating charts and metrics."
        />
        <FadeUp standalone className="mx-auto mt-12 max-w-4xl">
          <DashboardPreview />
        </FadeUp>
      </section>

      {/* Metrics */}
      <section className="border-y border-[var(--tpl-border)] bg-[var(--tpl-surface)]/30 py-16">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {METRICS.map((m) => (
            <FadeUp key={m.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{m.label}</p>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Testimonials */}
      <section id="customers" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Customers"
          title="Loved by teams that ship"
          sub="From seed-stage startups to public companies."
        />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <FadeUp key={t.name}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/40 p-7 backdrop-blur">
                <p className="text-[15px] leading-relaxed text-[var(--tpl-fg)]">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: t.tint }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-[var(--tpl-fg-muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-[var(--tpl-primary)] opacity-25" />
        <SectionHead
          eyebrow="Pricing"
          title="Simple, scalable pricing"
          sub="Start free. Upgrade when your team grows. Cancel anytime."
        />

        {/* toggle */}
        <FadeUp standalone className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium transition-colors ${
              annual ? "text-[var(--tpl-fg-muted)]" : "text-[var(--tpl-fg)]"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-[3.25rem] cursor-pointer rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)] p-0.5"
          >
            <motion.span
              className="block h-5 w-5 rounded-full bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]"
              animate={{ x: annual ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              annual ? "text-[var(--tpl-fg)]" : "text-[var(--tpl-fg-muted)]"
            }`}
          >
            Annual
          </span>
          <span className="rounded-full border border-[var(--tpl-accent)]/40 bg-[var(--tpl-accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--tpl-accent)]">
            Save 20%
          </span>
        </FadeUp>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price =
              plan.monthly === null
                ? "Custom"
                : plan.monthly === 0
                  ? "$0"
                  : annual
                    ? `$${Math.round(plan.monthly * 0.8)}`
                    : `$${plan.monthly}`;
            const cadence = plan.monthly === null || plan.monthly === 0 ? "" : "/seat / mo";
            return (
              <FadeUp key={plan.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-7 backdrop-blur ${
                    plan.highlight
                      ? "border-[var(--tpl-primary)] bg-gradient-to-b from-[var(--tpl-primary)]/15 to-[var(--tpl-surface)]/50"
                      : "border-[var(--tpl-border)] bg-[var(--tpl-surface)]/40"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-[var(--tpl-fg-muted)]">{plan.tagline}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={price}
                        initial={reduced ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl font-semibold tracking-tight"
                      >
                        {price}
                      </motion.span>
                    </AnimatePresence>
                    {cadence && (
                      <span className="mb-1 text-sm text-[var(--tpl-fg-muted)]">{cadence}</span>
                    )}
                  </div>
                  {annual && plan.monthly !== null && plan.monthly > 0 && (
                    <p className="mt-1 text-xs text-[var(--tpl-accent)]">Billed annually</p>
                  )}
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[var(--tpl-fg-muted)]">
                        <Check className="h-4 w-4 shrink-0 text-[var(--tpl-accent)]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#top"
                    className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-secondary)] text-white"
                        : "border border-[var(--tpl-border)] text-[var(--tpl-fg)]"
                    }`}
                  >
                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </Stagger>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-4xl px-5 pb-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/20 via-[var(--tpl-surface)]/60 to-[var(--tpl-accent)]/20 p-12 backdrop-blur">
            <Rocket className="mx-auto h-9 w-9 text-[var(--tpl-accent)]" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your team's next workflow is one click away.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              Join thousands of teams shipping faster with Flowdesk. Free forever plan — no credit
              card needed.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--tpl-fg)] px-8 py-3.5 text-sm font-semibold text-[var(--tpl-bg)] transition-transform hover:scale-[1.03]"
            >
              Start building free <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Flowdesk — a Tech Wolves template</span>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-[var(--tpl-fg)]">
              Privacy
            </a>
            <a href="#top" className="hover:text-[var(--tpl-fg)]">
              Terms
            </a>
            <a href="#top" className="hover:text-[var(--tpl-fg)]">
              Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <FadeUp standalone className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
