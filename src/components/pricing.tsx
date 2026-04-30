"use client";
import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight-card";

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "For startups",
    description: "Essential tools to establish a startup's online presence.",
    features: [
      "Custom website design and development",
      "Domain registration",
      "Hosting (1 year)",
      "Basic logo and business cards",
      "Business email setup",
      "Basic SEO setup",
      "3 months support",
    ],
    cta: "Get a quote",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing teams",
    description: "Strong brand identity with a comprehensive online presence.",
    features: [
      "Everything in Basic",
      "Maintenance and support (6 months)",
      "Advanced logo + brand identity kit",
      "Stationery + diary",
      "Social media setup and management",
      "Advanced SEO",
      "Analytics + Search Console",
      "CMS training",
    ],
    cta: "Talk to sales",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For scale-ups",
    description: "High-impact launch with full branding, marketing, and support.",
    features: [
      "Everything in Pro",
      "Full UX optimization, responsive design",
      "Advanced e-commerce",
      "Priority support (12 months)",
      "Premium logo + brand identity",
      "CRM setup",
      "Comprehensive SEO",
      "Digital marketing (3 months)",
      "User training + ongoing support",
      "Performance analytics dashboard",
    ],
    cta: "Book a call",
  },
];

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export default function Pricing() {
  const reduced = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Plans
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">Engagements that scale with you.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Three starting points. Every quote is tailored to scope, timeline, and stack —
            talk to us for exact pricing.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ ...ENTRANCE, delay: reduced ? 0 : i * 0.06 }}
              className={`relative flex ${plan.popular ? "md:pt-4" : ""}`}
            >
              {plan.popular && (
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center">
                  <span className="tw-glass tw-light-leak inline-flex items-center gap-1.5 rounded-full bg-[#050505]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                </div>
              )}
              <SpotlightCard
                className={`relative flex h-full w-full flex-col p-8 ${
                  plan.popular ? "ring-1 ring-emerald-400/40" : ""
                }`}
              >

                <div className="flex flex-col">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400/80">
                    {plan.tagline}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-white/60">
                    {plan.description}
                  </p>
                </div>

                <div className="my-7 h-px w-full bg-white/[0.06]" />

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                        <Check className="h-2.5 w-2.5 text-emerald-300" strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-[1.55] text-white/75">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`tw-focus mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-white text-[#050505] hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
                      : "border border-white/10 bg-white/[0.02] text-white/80 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/45">
          Need something custom?{" "}
          <a href="#contact" className="tw-focus text-emerald-400 underline-offset-4 hover:underline">
            Talk to us.
          </a>
        </p>
      </div>
    </section>
  );
}
