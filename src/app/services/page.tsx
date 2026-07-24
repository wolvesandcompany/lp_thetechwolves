import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { generateMetadata as buildMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "Services — AI Automation, Custom Software & Web Development",
  description:
    "Explore The Tech Wolves services: AI automation, business process automation, custom software, web and mobile development, UI/UX, n8n automation, AI chatbots, and CRM automation.",
  path: "/services",
  keywords: [
    "ai automation services",
    "custom software services",
    "web development services",
    "automation agency services",
  ],
});

export default function ServicesHub() {
  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]"
      />

      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-12 pt-36 text-center md:pt-44">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Services
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">Everything we build.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] text-base leading-[1.7] text-white/70 md:text-lg">
          From AI automation and custom software to conversion-focused websites
          and CRM automation — pick your challenge and see exactly how we solve it.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
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
