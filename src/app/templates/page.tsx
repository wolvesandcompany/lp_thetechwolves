import React from "react";
import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";
import { TemplatePreview } from "@/components/TemplatePreview";
import { IN_HOUSE_TEMPLATES, templateHref } from "@/lib/templates-data";

export const metadata: Metadata = generateMetadata({
  title: "Website Templates - Professional & Industry-Specific Designs",
  description:
    "Explore our in-house collection of premium, hand-built website, SaaS, and automation templates — AI agency, e-commerce, restaurant, real estate, fitness, spa, law, and more. Live previews, conversion-tuned, fully customizable.",
  path: "/templates",
  keywords: [
    "website templates",
    "in-house templates",
    "AI agency template",
    "SaaS landing template",
    "e-commerce template",
    "restaurant website template",
    "real estate template",
    "fitness gym template",
    "beauty spa template",
    "law firm template",
    "conversion-optimized",
    "SEO-friendly templates",
  ],
});

export default function TemplatesShowcase() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Templates", url: "/templates" },
  ];

  const templatesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Website Templates - The Tech Wolves",
    url: "https://thetechwolves.com/templates",
    mainEntity: {
      "@type": "ItemList",
      name: "In-house Website, SaaS & Automation Templates",
      itemListElement: IN_HOUSE_TEMPLATES.map((t, idx) => ({
        "@type": "SoftwareApplication",
        position: idx + 1,
        name: `${t.brand} — ${t.niche}`,
        description: t.blurb,
        url: `https://thetechwolves.com${templateHref(t.slug)}`,
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        creator: { "@type": "Organization", name: "The Tech Wolves" },
        keywords: `${t.niche}, ${t.pillar}`,
      })),
    },
  };

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={templatesSchema} />
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-40 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Templates
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">Production-ready</span>{" "}
          <span className="tw-shimmer">foundations.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
          In-house templates across every service we ship — websites, SaaS
          products, and automations. Live previews. Conversion-tuned.
          Mobile-responsive. Built to ship and customize.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {IN_HOUSE_TEMPLATES.map((t) => (
            <a
              key={t.slug}
              href={templateHref(t.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-focus tw-glass tw-light-leak group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-[1px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <TemplatePreview t={t} />
                <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300 backdrop-blur-md">
                  {t.pillar}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
                      {t.brand}
                    </p>
                    <h2 className="mt-1 text-xl font-medium tracking-[-0.02em] text-white">
                      {t.niche}
                    </h2>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                </div>
                <p className="mt-2 text-sm leading-[1.6] text-white/65">{t.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                    {t.pillar}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300">
                    Live preview
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/#contact"
            className="tw-focus inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
          >
            Need a custom template?
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
