"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { track } from "@/lib/analytics";

/**
 * FAQ = the single source of truth for both the visible section AND the
 * FAQPage schema on the homepage (import FAQ_ITEMS in page.tsx). Questions are
 * written as objection-handlers — each removes a specific reason not to reach
 * out (too slow / too expensive / not sure what I need / risky), then the
 * section ends on the lowest-friction next step.
 */
export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How quickly can we see results?",
    answer:
      "Most clients see initial results within 2–4 weeks of kickoff, with full optimization in 8–12 weeks. For smaller builds and automations, we often ship a working first version in days.",
  },
  {
    question: "What will my project cost?",
    answer:
      "Every quote is tailored, but we work in three clear tiers — from a startup launch package to a full scale-up build with e-commerce, CRM, and a year of priority support. Send us a message and we'll give you a ballpark within hours, no obligation.",
  },
  {
    question: "What if I only have a rough idea?",
    answer:
      "That's the perfect time to talk. On a free 30-minute call we turn your rough idea into a concrete plan — scope, timeline, cost, and expected ROI — so you can decide with real numbers instead of guesswork.",
  },
  {
    question: "Do you work with businesses like mine?",
    answer:
      "Likely yes. We ship for SMEs, startups and scale-ups across healthcare, fintech, e-commerce, EdTech, real estate, logistics and travel — from HIPAA-grade telemedicine to real-time logistics dashboards.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Always. Every package includes ongoing support, monitoring, and performance optimization — 3, 6, or 12 months depending on tier, with 24/7 response on priority plans.",
  },
  {
    question: "How do we get started?",
    answer:
      "One message. Tap WhatsApp or book a free strategy call — you'll talk to a real engineer (never a bot), and we'll map out your next step on the spot.",
  },
];

export function FAQ() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="tw-noise relative w-full overflow-hidden bg-[#050505] py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/[0.04] blur-[140px]"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <header className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            FAQ
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">Questions, answered.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-base leading-[1.6] text-white/70">
            Everything you need to know before we start. Still unsure? Ask us
            directly — we reply in minutes.
          </p>
        </header>

        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="tw-focus flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white md:text-lg">
                    {item.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? undefined : { height: 0, opacity: 0 }}
                      animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-[1.7] text-white/65">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Lowest-friction next step, right where questions get resolved */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/55">Still have a question?</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track.whatsapp("faq")}
            className="tw-focus inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#25D366]/20"
          >
            <span className="text-[#25D366]">
              <WhatsAppGlyph size={20} />
            </span>
            Ask us on WhatsApp
            <span className="text-white/45">· real engineers, quick replies</span>
          </a>
        </div>
      </div>
    </section>
  );
}
