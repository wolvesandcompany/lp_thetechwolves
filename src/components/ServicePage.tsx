"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Check, Plus, ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteNavbar } from "./SiteNavbar";
import { Footer } from "./Footer";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { whatsappLink } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { getService, type Service } from "@/lib/services-data";

const CALENDLY = "https://calendly.com/huzaifsk12";
const ENTRANCE = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.8 };

function CTAButtons({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappLink(service.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track.whatsapp(`service_${service.slug}`)}
        className="tw-focus inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-[#04120a]"
        style={{ background: "#25D366" }}
      >
        <WhatsAppGlyph size={20} />
        Chat on WhatsApp
      </a>
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track.bookCall(`service_${service.slug}`)}
        className="tw-focus inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/85 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
      >
        Book a discovery call
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={ENTRANCE}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]"
      />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-36 text-center md:pt-44">
        <Section>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            {service.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            <span className="tw-display-gradient">{service.h1}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[60ch] text-base leading-[1.7] text-white/70 md:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons service={service} />
          </div>
        </Section>
      </section>

      <div className="relative z-10 mx-auto max-w-5xl space-y-24 px-6 pb-28">
        {/* Problem + outcomes */}
        <Section className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
              The problem we solve
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/65">
              {service.problem}
            </p>
          </div>
          <div className="tw-glass rounded-2xl border border-white/10 p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
              What changes
            </p>
            <ul className="space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-[15px] text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Offer */}
        <Section>
          <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            What you get
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.offer.map((o) => (
              <div
                key={o.title}
                className="tw-glass rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-lg font-medium text-white">{o.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-white/60">{o.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Use cases */}
        <Section>
          <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            What we build for clients
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.useCases.map((u) => (
              <li
                key={u}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-[15px] text-white/80"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {u}
              </li>
            ))}
          </ul>
        </Section>

        {/* Process */}
        <Section>
          <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            How we work
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div
                key={p.step}
                className="tw-glass rounded-2xl border border-white/10 p-5"
              >
                <span className="text-xs font-semibold text-emerald-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-medium text-white">{p.step}</h3>
                <p className="mt-1.5 text-sm leading-[1.6] text-white/55">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Stack + pricing */}
        <Section className="grid gap-10 md:grid-cols-2 md:items-start">
          {service.stack && (
            <div>
              <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                Stack we use
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="tw-glass tw-light-leak rounded-2xl border border-white/10 p-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90">
              Pricing
            </p>
            <p className="text-[15px] leading-[1.7] text-white/75">
              {service.pricingSignal}
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            Questions
          </h2>
          <div className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            {service.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="tw-focus flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-white">
                      {f.question}
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
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="tw-glass tw-light-leak rounded-3xl border border-white/10 p-10 text-center">
          <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-4xl">
            <span className="tw-display-gradient">Let&apos;s scope it together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-[15px] leading-[1.7] text-white/65">
            Send us your situation on WhatsApp and you&apos;ll talk to a real
            engineer — we usually reply within minutes, no obligation.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons service={service} />
          </div>
        </Section>

        {/* Related services (internal linking) */}
        {related.length > 0 && (
          <Section>
            <h2 className="text-xl font-medium tracking-[-0.02em]">
              Related services
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="tw-focus group tw-glass flex items-center justify-between rounded-2xl border border-white/10 p-5 transition-colors hover:border-white/25"
                >
                  <span className="text-sm font-medium text-white">
                    {r.eyebrow}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                </Link>
              ))}
            </div>
          </Section>
        )}
      </div>

      <Footer />
    </main>
  );
}
