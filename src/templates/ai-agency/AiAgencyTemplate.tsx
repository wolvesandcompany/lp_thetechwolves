"use client";

/**
 * AI Agency template — reference/proof template for The Tech Wolves library.
 * Dark, cinematic, glassmorphic. Framer Motion + lightweight R3F 3D hero +
 * an interactive live-automation demo. Built on the shared /kit primitives.
 */

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Workflow,
  Bot,
  Gauge,
  ShieldCheck,
  Plug,
  Check,
} from "lucide-react";
import { FadeUp, Stagger, Reveal, Pressable, CountUp } from "../kit/motion";
import { AutomationDemo } from "./automation-demo";
import "./theme.css";

const Ambient3D = dynamic(() => import("./ambient-3d"), { ssr: false });

const NAV = ["Capabilities", "Live Demo", "Process", "Pricing"];

const CAPS = [
  { icon: Workflow, title: "Workflow automation", body: "Wire your tools into self-running pipelines. No more copy-paste ops.", span: "sm:col-span-2" },
  { icon: Bot, title: "Custom AI agents", body: "Agents that read, decide and act on your data — safely.", span: "" },
  { icon: Plug, title: "Deep integrations", body: "CRM, Slack, email, Sheets, Stripe, and 200+ APIs.", span: "" },
  { icon: Gauge, title: "Realtime dashboards", body: "See every automation, run, and outcome in one glass.", span: "sm:col-span-2" },
];

const PROCESS = [
  { step: "01", title: "Map", body: "We audit your ops and find the highest-ROI automations." },
  { step: "02", title: "Build", body: "We ship agents & workflows in 2-week sprints." },
  { step: "03", title: "Scale", body: "We monitor, tune, and expand — you compound." },
];

const METRICS = [
  { value: 120, suffix: "+", label: "Workflows shipped" },
  { value: 40, suffix: "k", label: "Hours automated" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Uptime" },
  { value: 6, suffix: "×", label: "Avg. ROI" },
];

const PLANS = [
  {
    name: "Launch",
    price: "$2.5k",
    cadence: "/mo",
    tagline: "For teams starting to automate.",
    features: ["2 workflows / mo", "1 AI agent", "Slack + email support", "Monthly review"],
    highlight: false,
  },
  {
    name: "Scale",
    price: "$6k",
    cadence: "/mo",
    tagline: "For fast-growing operations.",
    features: ["Unlimited workflows", "5 AI agents", "Priority support", "Weekly sprints", "Realtime dashboard"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    tagline: "For mission-critical scale.",
    features: ["Dedicated pod", "On-prem / VPC", "SLA & SSO", "Custom models", "Quarterly roadmap"],
    highlight: false,
  },
];

export function AiAgencyTemplate() {
  const reduced = useReducedMotion();

  return (
    <div className="tpl-ai-agency relative min-h-screen w-full overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[var(--tpl-border)] bg-[var(--tpl-bg)]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--tpl-primary)] to-[var(--tpl-accent)]">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Nova<span className="text-[var(--tpl-accent)]">AI</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--tpl-fg-muted)] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase().replace(" ", "-")}`} className="transition-colors hover:text-[var(--tpl-fg)]">
                {n}
              </a>
            ))}
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--tpl-fg)] px-4 py-2 text-sm font-semibold text-[var(--tpl-bg)] transition-transform hover:scale-[1.03]"
          >
            Book a call <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[92vh] flex-col items-center justify-center px-5 py-24 text-center">
        <div className="tpl-glow left-1/2 top-24 h-72 w-72 -translate-x-1/2 bg-[var(--tpl-primary)]" />
        <div className="tpl-glow right-10 top-1/2 h-64 w-64 bg-[var(--tpl-accent)]" />
        <div className="absolute inset-0 opacity-70">
          <Ambient3D />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/60 px-4 py-1.5 text-xs font-medium text-[var(--tpl-fg-muted)] backdrop-blur">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--tpl-accent)]" />
              AI automation studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Put your busywork
              <br />
              <span className="bg-gradient-to-r from-[var(--tpl-primary)] via-[var(--tpl-secondary)] to-[var(--tpl-accent)] bg-clip-text text-transparent">
                on autopilot.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--tpl-fg-muted)]">
              We design AI agents and automations that run your operations while you sleep — shipped in weeks, not quarters.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#live-demo"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                See it run live
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 px-7 py-3.5 text-sm font-semibold text-[var(--tpl-fg)] backdrop-blur transition-colors hover:bg-[var(--tpl-surface)]"
              >
                View pricing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-[var(--tpl-border)] py-8">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--tpl-fg-muted)]">
            Trusted by operators across North America & Europe
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-[var(--tpl-fg-muted)]/70">
            {["Northwind", "Maple&Co", "Helvetia", "Atlas", "Bluewave", "Verona"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities — bento */}
      <section id="capabilities" className="relative mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Capabilities" title="Everything you need to automate" sub="Composable building blocks, delivered as one managed service." />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {CAPS.map((c) => (
            <FadeUp key={c.title} className={c.span}>
              <Pressable className="h-full">
                <div className="group h-full rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/50 p-6 backdrop-blur transition-colors hover:border-[var(--tpl-primary)]/50">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--tpl-primary)]/20 to-[var(--tpl-accent)]/20 text-[var(--tpl-accent)]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{c.body}</p>
                </div>
              </Pressable>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Live demo */}
      <section id="live-demo" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/4 top-1/3 h-72 w-72 bg-[var(--tpl-secondary)] opacity-30" />
        <SectionHead eyebrow="Live demo" title="Watch an automation actually run" sub="No mockups. Press run and see a real lead move through the pipeline." />
        <FadeUp standalone className="mt-12">
          <AutomationDemo />
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

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Process" title="From chaos to compounding" sub="A simple, senior-led engagement built for outcomes." />
        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {PROCESS.map((p) => (
            <FadeUp key={p.step}>
              <div className="h-full rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/40 p-7">
                <span className="text-sm font-mono text-[var(--tpl-accent)]">{p.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--tpl-fg-muted)]">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="tpl-glow left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-[var(--tpl-primary)] opacity-25" />
        <SectionHead eyebrow="Pricing" title="Plans that scale with you" sub="Transparent monthly retainers. Cancel anytime." />
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
                  <span className="absolute -top-3 left-7 rounded-full bg-[var(--tpl-accent)] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-[var(--tpl-fg-muted)]">{plan.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  <span className="mb-1 text-sm text-[var(--tpl-fg-muted)]">{plan.cadence}</span>
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
                  className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    plan.highlight
                      ? "bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)] text-white"
                      : "border border-[var(--tpl-border)] text-[var(--tpl-fg)]"
                  }`}
                >
                  Get started <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </FadeUp>
          ))}
        </Stagger>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-4xl px-5 pb-28 text-center">
        <FadeUp standalone>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--tpl-border)] bg-gradient-to-br from-[var(--tpl-primary)]/20 via-[var(--tpl-surface)]/60 to-[var(--tpl-accent)]/20 p-12 backdrop-blur">
            <ShieldCheck className="mx-auto h-9 w-9 text-[var(--tpl-accent)]" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to automate your operations?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[var(--tpl-fg-muted)]">
              Book a 20-minute call. We&apos;ll map your top 3 automations — free.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--tpl-fg)] px-8 py-3.5 text-sm font-semibold text-[var(--tpl-bg)] transition-transform hover:scale-[1.03]"
            >
              Book your free call <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--tpl-border)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--tpl-fg-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} NovaAI — a Tech Wolves template</span>
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tpl-accent)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-[var(--tpl-fg-muted)]">{sub}</p>
    </FadeUp>
  );
}
