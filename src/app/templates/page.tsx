import React from "react";
import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import Image from "next/image";
import Link from "next/link";
import business from "../../../public/business.webp";
import eco from "../../../public/eco.webp";
import healthtech from "../../../public/healthtech.webp";
import dentist from "../../../public/dentist.webp";
import dentist2 from "../../../public/dental2.webp";
import consultant from "../../../public/consultant2.webp";
import ecosol from "../../../public/ecosol.webp";
import healthtech2 from "../../../public/healttech2.webp";
import homeserv from "../../../public/homeserv.webp";
import interior from "../../../public/interior.webp";
import { ArrowUpRight } from "lucide-react";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = generateMetadata({
  title: "Website Templates - Professional & Industry-Specific Designs",
  description:
    "Explore our collection of premium website templates for healthcare, business consulting, e-commerce, and more. Ready-to-use designs optimized for conversion and SEO.",
  path: "/templates",
  keywords: [
    "website templates",
    "business templates",
    "healthcare website design",
    "consulting templates",
    "e-commerce templates",
    "professional website designs",
    "responsive templates",
    "industry-specific templates",
    "conversion-optimized",
    "SEO-friendly templates",
  ],
});

const TEMPLATES = [
  { name: "Business Consultant", url: "https://business-consultant-template.vercel.app/", image: business, description: "Professional template for business consultants, agencies, and freelancers.", keywords: ["Consulting", "Business", "Agency"] },
  { name: "Dental Clinic", url: "https://dental-website-template.vercel.app/", image: dentist, description: "Clean, friendly template designed for dental clinics and healthcare professionals.", keywords: ["Dental", "Healthcare", "Clinic"] },
  { name: "Eco Stride", url: "https://eco-stride-template.vercel.app/", image: eco, description: "Vibrant, eco-friendly template for sustainability startups and green businesses.", keywords: ["Eco", "Sustainability", "Green"] },
  { name: "HealthTech", url: "https://healthtech-template.vercel.app/", image: healthtech, description: "Cutting-edge template for healthtech companies, SaaS, and digital health products.", keywords: ["HealthTech", "SaaS", "Medical"] },
  { name: "Smile Care", url: "https://bright-smile-template.vercel.app/", image: dentist2, description: "Welcoming, modern template for dental and healthcare clinics.", keywords: ["Dental", "Healthcare", "Booking"] },
  { name: "Greentech Solutions", url: "https://eco-tech-solutions-blush.vercel.app/", image: ecosol, description: "Clean, eco-focused template for green businesses and sustainability startups.", keywords: ["Eco", "Green", "Startup"] },
  { name: "HealthTech Five", url: "https://medtech-portal.vercel.app/", image: healthtech2, description: "Modern template for healthtech companies and digital health products.", keywords: ["HealthTech", "SaaS", "Modern"] },
  { name: "Elevate Consult", url: "https://consult-template.vercel.app/", image: consultant, description: "Professional template for consulting agencies and business advisors.", keywords: ["Consulting", "Business", "Agency"] },
  { name: "Aura Interior", url: "https://aura-interior-nine.vercel.app/", image: interior, description: "Stylish template for interior design studios and creative agencies.", keywords: ["Interior", "Design", "Portfolio"] },
  { name: "Home Services Eosin", url: "https://homehub-pro-template.vercel.app/", image: homeserv, description: "Conversion-focused template for home service businesses.", keywords: ["Home Services", "Booking", "Service"] },
];

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
      name: "Premium Website Templates",
      itemListElement: TEMPLATES.slice(0, 6).map((t, idx) => ({
        "@type": "SoftwareApplication",
        position: idx + 1,
        name: t.name,
        description: t.description,
        url: t.url,
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        creator: { "@type": "Organization", name: "The Tech Wolves" },
        keywords: t.keywords.join(", "),
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
          Industry-specific website templates. Live previews. Conversion-tuned.
          Mobile-responsive. Built to ship and customize.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TEMPLATES.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-focus tw-glass tw-light-leak group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-[1px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={t.image}
                  alt={`${t.name} preview`}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  placeholder="blur"
                  loading="lazy"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-medium tracking-[-0.02em] text-white">
                    {t.name}
                  </h2>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                </div>
                <p className="mt-2 text-sm leading-[1.6] text-white/65">{t.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/60"
                    >
                      {k}
                    </span>
                  ))}
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
