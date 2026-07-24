"use client";
import { motion, useReducedMotion } from "motion/react";
import Globe from "./globe";
import ContactForm from "./contact-form";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

export function ContactUs() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="tw-noise relative flex w-full items-center justify-center overflow-hidden bg-[#050505] py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.header
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={ENTRANCE}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Get in touch
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">We build globally.</span>
            <br />
            <span className="tw-shimmer">Let&apos;s scale together.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
            Expand your reach, accelerate your growth, or collaborate with a global-first team — our
            impact spans continents, and so can yours.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ ...ENTRANCE, delay: reduced ? 0 : 0.06 }}
            className="tw-glass tw-light-leak relative overflow-hidden rounded-2xl p-7"
          >
            <ContactForm />

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                or reach us instantly
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.whatsapp("contact_section")}
              className="tw-focus flex items-center justify-center gap-2.5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-5 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#25D366]/20"
            >
              <span className="text-[#25D366]">
                <WhatsAppGlyph size={20} />
              </span>
              Chat on WhatsApp
              <span className="text-white/45">· we reply in minutes</span>
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ ...ENTRANCE, delay: reduced ? 0 : 0.12 }}
            className="flex items-center justify-center"
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
