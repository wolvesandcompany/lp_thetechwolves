import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { generateMetadata as buildMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/industries-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Build For — Healthcare, FinTech, E-commerce & More",
  description:
    "The Tech Wolves builds software and automation for healthcare, fintech, e-commerce, real estate, logistics, and fitness — with market-specific solutions and proof.",
  path: "/industries",
  keywords: [
    "software development by industry",
    "industry automation solutions",
    "vertical software development",
  ],
});

export default function IndustriesHub() {
  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ])}
      />
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]"
      />

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-12 pt-36 text-center md:pt-44">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Industries
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">Built for your market.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] text-base leading-[1.7] text-white/70 md:text-lg">
          We know the workflows, constraints, and buyers in the industries we
          serve — so you get solutions tuned to your market, not generic software.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((s) => (
            <Link
              key={s.slug}
              href={`/industries/${s.slug}`}
              className="tw-focus group tw-glass tw-light-leak flex flex-col justify-between rounded-2xl border border-white/10 p-6 transition-colors hover:border-white/25"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg font-medium tracking-[-0.01em] text-white">
                    {s.eyebrow}
                  </h2>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                </div>
                <p className="mt-3 text-sm leading-[1.6] text-white/60">
                  {s.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
