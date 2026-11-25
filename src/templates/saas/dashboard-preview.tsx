"use client";

/**
 * Flowdesk — animated product dashboard preview.
 * Tabs (Overview / Analytics / Team) switch content with Framer Motion.
 * Includes an animated SVG line chart, CSS bar chart, and live-looking
 * metric cards. Self-contained; honours prefers-reduced-motion.
 */

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  LayoutDashboard,
  Users,
} from "lucide-react";

type TabKey = "overview" | "analytics" | "team";

const TABS: { key: TabKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "team", label: "Team", icon: Users },
];

const LINE_POINTS = [12, 28, 22, 40, 34, 52, 48, 66, 60, 78];
const BARS = [
  { label: "Mon", value: 62 },
  { label: "Tue", value: 48 },
  { label: "Wed", value: 80 },
  { label: "Thu", value: 55 },
  { label: "Fri", value: 92 },
  { label: "Sat", value: 40 },
  { label: "Sun", value: 70 },
];
const TEAM = [
  { name: "Ava Chen", role: "Product Lead", initials: "AC", status: "Active", tint: "var(--tpl-primary)" },
  { name: "Marco Bianchi", role: "Engineer", initials: "MB", status: "Active", tint: "var(--tpl-secondary)" },
  { name: "Priya Nair", role: "Designer", initials: "PN", status: "Away", tint: "var(--tpl-accent)" },
  { name: "Liam O'Brien", role: "Growth", initials: "LO", status: "Active", tint: "var(--tpl-primary)" },
];

const panelVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function MetricCard({
  label,
  value,
  delta,
  up = true,
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/60 p-4">
      <p className="text-xs text-[var(--tpl-fg-muted)]">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
      <p
        className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${
          up ? "text-[var(--tpl-accent)]" : "text-rose-400"
        }`}
      >
        {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
        {delta}
      </p>
    </div>
  );
}

function LineChart({ reduced }: { reduced: boolean }) {
  const w = 520;
  const h = 180;
  const max = Math.max(...LINE_POINTS);
  const step = w / (LINE_POINTS.length - 1);
  const coords = LINE_POINTS.map((v, i) => {
    const x = i * step;
    const y = h - (v / max) * (h - 24) - 12;
    return [x, y] as const;
  });
  const path = coords
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-44 w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="Revenue trend, up and to the right"
    >
      <defs>
        <linearGradient id="tpl-line-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--tpl-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--tpl-primary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="tpl-line-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--tpl-primary)" />
          <stop offset="100%" stopColor="var(--tpl-accent)" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#tpl-line-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="url(#tpl-line-stroke)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      {coords.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={3.5}
          fill="var(--tpl-accent)"
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduced ? 0 : 0.6 + i * 0.05 }}
        />
      ))}
    </svg>
  );
}

function BarChart({ reduced }: { reduced: boolean }) {
  const max = Math.max(...BARS.map((b) => b.value));
  return (
    <div className="flex h-44 items-end gap-3">
      {BARS.map((b, i) => (
        <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-full w-full items-end">
            <motion.div
              className="w-full rounded-md bg-gradient-to-t from-[var(--tpl-primary)] to-[var(--tpl-secondary)]"
              style={{ transformOrigin: "bottom" }}
              initial={reduced ? { height: `${(b.value / max) * 100}%` } : { height: 0 }}
              animate={{ height: `${(b.value / max) * 100}%` }}
              transition={{ duration: 0.7, delay: reduced ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="text-[10px] text-[var(--tpl-fg-muted)]">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

export function DashboardPreview() {
  const [tab, setTab] = useState<TabKey>("overview");
  const reduced = useReducedMotion();

  return (
    <div className="tpl-grid-bg overflow-hidden rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-[var(--tpl-border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-3 flex items-center gap-1.5 rounded-md border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/50 px-2.5 py-1 text-[11px] text-[var(--tpl-fg-muted)]">
          app.flowdesk.io
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-[var(--tpl-fg-muted)]">
          <span className="tpl-live-dot h-2 w-2 rounded-full bg-[var(--tpl-accent)]" />
          Live
        </span>
      </div>

      {/* tab bar */}
      <div
        role="tablist"
        aria-label="Dashboard views"
        className="flex gap-1 border-b border-[var(--tpl-border)] px-3 pt-3"
      >
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.key)}
              className={`relative inline-flex cursor-pointer items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "text-[var(--tpl-fg)]"
                  : "text-[var(--tpl-fg-muted)] hover:text-[var(--tpl-fg)]"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
              {active && (
                <motion.span
                  layoutId="tpl-tab-underline"
                  className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[var(--tpl-primary)] to-[var(--tpl-accent)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* panels */}
      <div className="min-h-[340px] p-5">
        <AnimatePresence mode="wait">
          {tab === "overview" && (
            <motion.div
              key="overview"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <MetricCard label="MRR" value="$48.2k" delta="12.4%" />
                <MetricCard label="Active users" value="8,914" delta="6.1%" />
                <MetricCard label="Churn" value="1.8%" delta="0.3%" up={false} />
                <MetricCard label="NPS" value="72" delta="4 pts" />
              </div>
              <div className="mt-4 rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-medium">Revenue</p>
                  <p className="text-xs text-[var(--tpl-fg-muted)]">Last 10 weeks</p>
                </div>
                <LineChart reduced={!!reduced} />
              </div>
            </motion.div>
          )}

          {tab === "analytics" && (
            <motion.div
              key="analytics"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-3 gap-3">
                <MetricCard label="Sessions" value="24.1k" delta="9.2%" />
                <MetricCard label="Avg. time" value="4m 32s" delta="0.8%" />
                <MetricCard label="Conversion" value="3.9%" delta="1.1%" />
              </div>
              <div className="mt-4 rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/40 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium">Weekly activity</p>
                  <p className="text-xs text-[var(--tpl-fg-muted)]">Events / day</p>
                </div>
                <BarChart reduced={!!reduced} />
              </div>
            </motion.div>
          )}

          {tab === "team" && (
            <motion.div
              key="team"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-2.5">
                {TEAM.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center gap-3 rounded-xl border border-[var(--tpl-border)] bg-[var(--tpl-bg)]/40 p-3"
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: m.tint }}
                    >
                      {m.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{m.name}</p>
                      <p className="truncate text-xs text-[var(--tpl-fg-muted)]">{m.role}</p>
                    </div>
                    <span
                      className={`ml-auto inline-flex items-center gap-1.5 rounded-full border border-[var(--tpl-border)] px-2.5 py-1 text-[11px] ${
                        m.status === "Active"
                          ? "text-[var(--tpl-accent)]"
                          : "text-[var(--tpl-fg-muted)]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          m.status === "Active" ? "bg-[var(--tpl-accent)]" : "bg-[var(--tpl-fg-muted)]"
                        }`}
                      />
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
