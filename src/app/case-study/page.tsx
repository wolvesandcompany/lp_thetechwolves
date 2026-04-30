"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import images from "@/lib/images.json";
import khalidImg from "../../../public/khalid_lp.webp";
import equityImg from "../../../public/equity.webp";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";

const COUNTRY_FLAG: Record<string, string> = {
  "Saudi Arabia": "🇸🇦",
  India: "🇮🇳",
  "United States": "🇺🇸",
};

type Project = {
  title: string;
  description: string;
  image: StaticImageData | string;
  country: string;
  categories: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Khalid Travels & Tradelinks",
    description:
      "A leading Saudi-Arabia-based travel agency. We delivered seamless flight booking, personalized holiday packages, expert visa workflows, and 24/7 customer support — every journey, hassle-free.",
    image: khalidImg,
    country: "Saudi Arabia",
    categories: ["Travel", "Tourism", "Hospitality"],
  },
  {
    title: "Golden Gymnasium Admin Panel",
    description:
      "A robust management platform for Indian fitness centers. Streamlines member registration, attendance, scheduling, payments, and staff coordination with an intuitive dashboard and analytics.",
    image: "https://assets.aceternity.com/animated-testimonials.webp",
    country: "India",
    categories: ["Fitness", "Admin Panel", "SaaS"],
  },
  {
    title: "Golden Gymnasium Landing Page",
    description:
      "A visually striking, conversion-focused landing page. Dynamic hero, interactive visuals, compelling CTAs, and full membership detail. Optimized for every device.",
    image: "https://assets.aceternity.com/github-globe.png",
    country: "India",
    categories: ["Fitness", "Web Design", "Marketing"],
  },
  {
    title: "Equity Management App",
    description:
      "A secure, scalable equity management platform for a confidential US client. Automates equity distribution, cap-table management, and compliance flows. NDA-bound — best-in-class security and UX.",
    image: equityImg,
    country: "United States",
    categories: ["Fintech", "Equity Management", "Confidential"],
  },
];

export default function CaseStudy() {
  const [isLaptop, setIsLaptop] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setIsLaptop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteNavbar />

      {isLaptop ? (
        <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.5),rgba(5,5,5,0.95))]" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={images}
          />
          <div className="relative z-20 mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
              Case studies
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              <span className="tw-display-gradient">Projects we&apos;ve</span>{" "}
              <span className="tw-shimmer">brought to life.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[65ch] text-base leading-[1.6] text-white/75 md:text-lg">
              Standout work, shipped for clients across travel, fitness, finance, and beyond.
            </p>
          </div>
        </section>
      ) : (
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-[#050505] px-6 pb-16 pt-40 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Case studies
          </p>
          <h1 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
            <span className="tw-display-gradient">Projects we&apos;ve</span>{" "}
            <span className="tw-shimmer">brought to life.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[65ch] text-base leading-[1.6] text-white/70">
            Standout work, shipped for clients across travel, fitness, finance, and beyond.
          </p>
        </section>
      )}

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8, delay: reduced ? 0 : i * 0.06 }}
              className="tw-glass tw-light-leak relative grid grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px]">
                {typeof p.image === "object" ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} mockup`}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={`${p.title} mockup`}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/30"
                />
              </div>

              <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs text-white/55">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{COUNTRY_FLAG[p.country]} {p.country}</span>
                </div>
                <h2 className="text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                  {p.title}
                </h2>
                <p className="max-w-[55ch] text-sm leading-[1.6] text-white/65 md:text-base">
                  {p.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="/#contact"
            className="tw-focus group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
