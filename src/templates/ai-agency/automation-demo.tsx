"use client";

/**
 * Interactive "live automation" showcase — the proof-of-capability piece.
 *
 * Users press Run and watch a workflow execute step-by-step: an incoming
 * lead is enriched, scored by AI, routed, and a reply is drafted. Runs
 * entirely client-side (no backend) so it stays lightweight and works in
 * any static export or Instagram screen-recording.
 */

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";
import { Play, RotateCcw, Check, Loader2 } from "lucide-react";

type StepState = "idle" | "running" | "done";

const STEPS = [
  { title: "New lead captured", detail: "acme.co — “Need an AI sales assistant”" },
  { title: "Enrich & deduplicate", detail: "Matched to CRM · 480 employees · SaaS" },
  { title: "AI intent scoring", detail: "Score 92/100 · High buying intent" },
  { title: "Route to owner", detail: "Assigned to Alex · Slack pinged" },
  { title: "Draft personalized reply", detail: "GPT reply queued for approval" },
];

export function AutomationDemo() {
  const reduced = useReducedMotion();
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(-1);

  const run = useCallback(async () => {
    if (running) return;
    setRunning(true);
    setActive(-1);
    const stepMs = reduced ? 0 : 700;
    for (let i = 0; i < STEPS.length; i++) {
      setActive(i);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, stepMs));
    }
    setActive(STEPS.length);
    setRunning(false);
  }, [running, reduced]);

  const reset = useCallback(() => {
    if (running) return;
    setActive(-1);
  }, [running]);

  const finished = active >= STEPS.length;

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[var(--tpl-border)] bg-[var(--tpl-surface)]/70 p-4 backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--tpl-accent)]" />
          <p className="text-sm font-medium text-[var(--tpl-fg)]">
            Live workflow — Lead → AI → Action
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={reset}
            disabled={running || active < 0}
            aria-label="Reset workflow"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--tpl-border)] text-[var(--tpl-fg-muted)] transition-colors hover:text-[var(--tpl-fg)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={run}
            disabled={running}
            className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-[var(--tpl-accent)] px-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {running ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            {running ? "Running" : finished ? "Run again" : "Run workflow"}
          </button>
        </div>
      </div>

      <ol className="space-y-2.5">
        {STEPS.map((step, i) => {
          const state: StepState =
            active > i || finished ? "done" : active === i ? "running" : "idle";
          return (
            <motion.li
              key={step.title}
              initial={false}
              animate={{
                opacity: state === "idle" ? 0.45 : 1,
                scale: state === "running" && !reduced ? 1.015 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-start gap-3 rounded-xl border p-3 ${
                state === "running"
                  ? "border-[var(--tpl-accent)]/60 bg-[var(--tpl-accent)]/10"
                  : "border-[var(--tpl-border)] bg-[var(--tpl-bg)]/40"
              }`}
            >
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  state === "done"
                    ? "bg-[var(--tpl-accent)] text-white"
                    : state === "running"
                      ? "bg-[var(--tpl-primary)] text-white"
                      : "bg-[var(--tpl-border)] text-[var(--tpl-fg-muted)]"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {state === "done" ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </motion.span>
                  ) : state === "running" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <span key="num">{i + 1}</span>
                  )}
                </AnimatePresence>
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[var(--tpl-fg)]">{step.title}</p>
                <p className="truncate text-xs text-[var(--tpl-fg-muted)]">{step.detail}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <AnimatePresence>
        {finished && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[var(--tpl-accent)]"
          >
            <Check className="h-4 w-4" /> Completed in ~2.4s — 0 manual steps
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
