"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { SiteNavbar } from "./SiteNavbar";
import { Footer } from "./Footer";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

// Rough build-cost anchors (USD). This is a lead-magnet estimate, not a quote —
// the real number comes from a conversation, which is the whole point: the tool
// self-qualifies the visitor, then hands a warm, context-rich lead to WhatsApp.
const AREAS = [
  { id: "support", label: "Customer support", hrs: 10, base: 1500 },
  { id: "admin", label: "Data entry / admin", hrs: 8, base: 1200 },
  { id: "reporting", label: "Reporting / dashboards", hrs: 6, base: 1000 },
  { id: "crm", label: "Lead / CRM follow-up", hrs: 7, base: 1300 },
  { id: "workflow", label: "A custom workflow", hrs: 8, base: 1800 },
] as const;

const VOLUMES = [
  { id: "solo", label: "Just me", factor: 0.9 },
  { id: "small", label: "2–10 people", factor: 1.0 },
  { id: "mid", label: "11–50 people", factor: 1.3 },
  { id: "large", label: "50+ people", factor: 1.7 },
] as const;

const COMPLEXITY = [
  { id: "simple", label: "Simple", mult: 0.8 },
  { id: "moderate", label: "Moderate", mult: 1.2 },
  { id: "complex", label: "Complex", mult: 1.8 },
] as const;

const fmt = (n: number) => "$" + Math.round(n / 100) * 100;

export function CostCalculator() {
  const [areas, setAreas] = useState<string[]>(["support"]);
  const [volume, setVolume] = useState<string>("small");
  const [complexity, setComplexity] = useState<string>("moderate");

  const result = useMemo(() => {
    const selected = AREAS.filter((a) => areas.includes(a.id));
    const vol = VOLUMES.find((v) => v.id === volume)!;
    const cx = COMPLEXITY.find((c) => c.id === complexity)!;
    const base = selected.reduce((s, a) => s + a.base, 0);
    const total = base * vol.factor * cx.mult;
    const low = total * 0.85;
    const high = total * 1.3;
    const hrs = Math.round(selected.reduce((s, a) => s + a.hrs, 0) * vol.factor);
    return { low, high, hrs, hasSelection: selected.length > 0 };
  }, [areas, volume, complexity]);

  const toggleArea = (id: string) =>
    setAreas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );

  const summaryMessage = useMemo(() => {
    const labels = AREAS.filter((a) => areas.includes(a.id))
      .map((a) => a.label)
      .join(", ");
    const vol = VOLUMES.find((v) => v.id === volume)?.label;
    const cx = COMPLEXITY.find((c) => c.id === complexity)?.label;
    return `Hi Tech Wolves 👋 I used your cost calculator. I want to automate: ${labels}. Team: ${vol}. Complexity: ${cx}. Estimated ${fmt(result.low)}–${fmt(result.high)}. Can you give me an exact quote?`;
  }, [areas, volume, complexity, result]);

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteNavbar />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]"
      />

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-10 pt-36 text-center md:pt-44">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Free tool
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">AI automation cost calculator</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[55ch] text-base leading-[1.7] text-white/70">
          Get a ballpark in 30 seconds. Answer three questions and see a rough
          cost range and the time you&apos;d get back — then grab an exact quote.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-28">
        <div className="grid gap-6 lg:grid-cols-5 lg:items-start">
          {/* Inputs */}
          <div className="space-y-8 lg:col-span-3">
            <div>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                1 · What do you want to automate?
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {AREAS.map((a) => {
                  const on = areas.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleArea(a.id)}
                      aria-pressed={on}
                      className={`tw-focus flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors ${
                        on
                          ? "border-emerald-400/50 bg-emerald-400/10 text-white"
                          : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25"
                      }`}
                    >
                      {a.label}
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          on ? "border-emerald-400 bg-emerald-400 text-[#04120a]" : "border-white/20"
                        }`}
                      >
                        {on && <Check className="h-3 w-3" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                2 · How big is your team?
              </h2>
              <div className="flex flex-wrap gap-2">
                {VOLUMES.map((v) => (
                  <Chip key={v.id} on={volume === v.id} onClick={() => setVolume(v.id)}>
                    {v.label}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                3 · How complex is it?
              </h2>
              <div className="flex flex-wrap gap-2">
                {COMPLEXITY.map((c) => (
                  <Chip key={c.id} on={complexity === c.id} onClick={() => setComplexity(c.id)}>
                    {c.label}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="tw-glass tw-light-leak rounded-2xl border border-white/10 p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
                Your estimate
              </p>
              {result.hasSelection ? (
                <>
                  <p className="mt-3 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
                    {fmt(result.low)} – {fmt(result.high)}
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    One-time build · USD · rough range, not a quote
                  </p>
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-sm text-white/80">
                      ≈ <span className="font-semibold text-emerald-400">{result.hrs} hrs/week</span> back to your team
                    </p>
                  </div>
                  <a
                    href={whatsappLink(summaryMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track.calculatorLead(`${fmt(result.low)}-${fmt(result.high)}`)}
                    className="tw-focus mt-6 flex items-center justify-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-semibold text-[#04120a]"
                    style={{ background: "#25D366" }}
                  >
                    <WhatsAppGlyph size={20} />
                    Get my exact quote
                  </a>
                  <p className="mt-3 text-center text-xs text-white/40">
                    We reply within minutes · no obligation
                  </p>
                </>
              ) : (
                <p className="mt-3 text-sm text-white/50">
                  Pick at least one thing to automate to see your estimate.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Chip({
  children,
  on,
  onClick,
}: {
  children: React.ReactNode;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`tw-focus rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        on
          ? "border-emerald-400/50 bg-emerald-400/10 text-white"
          : "border-white/12 bg-white/[0.02] text-white/70 hover:border-white/25"
      }`}
    >
      {children}
    </button>
  );
}
