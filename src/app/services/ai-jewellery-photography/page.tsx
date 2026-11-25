import type { Metadata } from "next";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { JewelleryCompare } from "@/components/JewelleryCompare";
import {
  generateMetadata as buildMetadata,
  generateBreadcrumbSchema,
  generateFAQSchema,
  baseSiteConfig,
  AREA_SERVED,
} from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

const WA = whatsappLink(
  "Hi Tech Wolves 👋 I'd like studio-quality AI photos for my jewellery —",
);

export const metadata: Metadata = buildMetadata({
  title: "AI Jewellery Photography — Studio Shots From One Phone Photo",
  description:
    "Send one phone photo of your jewellery and get clean, studio-grade product images back — ready for Amazon, Etsy, Shopify, Instagram and your catalogue. No studio, no shoot.",
  path: "/services/ai-jewellery-photography",
  keywords: [
    "ai jewellery photography",
    "jewelry product photography",
    "ai product photos",
    "etsy jewelry photos",
    "amazon jewelry listing photos",
    "ai photo enhancement jewellery",
  ],
});

const CATEGORIES: Array<{
  key: string;
  title: string;
  sub: string;
}> = [
  { key: "set", title: "Jewellery Set", sub: "Full matching set" },
  { key: "bracelet", title: "Bracelet", sub: "Wrist jewellery" },
  { key: "earring", title: "Earring", sub: "Single or pair" },
  { key: "ring", title: "Ring", sub: "Finger jewellery" },
  { key: "bangles", title: "Bangles", sub: "Stack or single" },
  { key: "necklace", title: "Necklace", sub: "Solo necklace" },
  { key: "pendant", title: "Pendant", sub: "Neckpiece charm" },
  { key: "ankle", title: "Ankle jewellery", sub: "Anklet / payal" },
];

const STEPS = [
  {
    n: "1",
    h: "Share your photo",
    p: "WhatsApp us a picture of the piece from your phone. One photo is enough to start.",
  },
  {
    n: "2",
    h: "We enhance with AI",
    p: "We relight, clean and stage it into a polished, consistent catalogue shot.",
  },
  {
    n: "3",
    h: "Get marketplace-ready shots",
    p: "Receive high-res images sized for Amazon, Etsy, Instagram, your site and WhatsApp catalogue.",
  },
];

const FAQS = [
  {
    question: "How does AI jewellery photography work?",
    answer:
      "You send us a normal phone photo of your piece. We use AI to relight the metal, lift the gemstones, remove the cluttered background and restage it on a premium surface — so it looks like it was shot in a professional studio. You get clean, marketplace-ready images back, usually within 24–48 hours.",
  },
  {
    question: "Do I need professional equipment or a studio?",
    answer:
      "No. A single phone photo in ordinary lighting is enough. We handle all the lighting, retouching and staging digitally, so there is no shoot, no equipment and no editing skills needed on your side.",
  },
  {
    question: "What marketplaces are the images suitable for?",
    answer:
      "The images are produced for Amazon, Etsy, Shopify, Flipkart, Instagram, WhatsApp catalogues and your own website. We can size and crop them to each platform's requirements.",
  },
  {
    question: "What kinds of jewellery can you do?",
    answer:
      "Rings, earrings, necklaces, pendants, bracelets, bangles, full matching sets and ankle jewellery — fashion or fine. If it is jewellery, we can photograph it.",
  },
  {
    question: "How much does it cost and how fast is it?",
    answer:
      "Pricing is per image with volume discounts for full catalogues. Typical turnaround is 24–48 hours. Message us on WhatsApp with what you need and we'll send a quote.",
  },
];

export default function AiJewelleryPhotographyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Jewellery Photography",
    description:
      "Turn one phone photo of any jewellery piece into clean, studio-grade product images for online marketplaces and social media.",
    serviceType: "AI Jewellery Photography",
    provider: {
      "@type": "Organization",
      name: baseSiteConfig.name,
      url: baseSiteConfig.url,
    },
    areaServed: AREA_SERVED,
    url: `${baseSiteConfig.url}/services/ai-jewellery-photography`,
  };

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    {
      name: "AI Jewellery Photography",
      url: "/services/ai-jewellery-photography",
    },
  ]);

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <StructuredData data={serviceSchema} />
      <StructuredData data={generateFAQSchema(FAQS)} />
      <StructuredData data={breadcrumb} />
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px]"
      />

      {/* hero */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-36 text-center md:pt-44">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          AI Jewellery Photography
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">
            Send us one photo. Get studio-grade jewellery shots back.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[60ch] text-base leading-[1.7] text-white/70 md:text-lg">
          Snap your piece on any phone — even in bad light. We turn it into clean,
          marketplace-ready images your customers trust. No studio, no shoot, no
          editing skills needed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-focus rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#04120b] transition-transform hover:-translate-y-0.5"
          >
            Send a photo on WhatsApp
          </a>
          <a
            href="#examples"
            className="tw-focus rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25"
          >
            See examples ↓
          </a>
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5 text-xs text-white/55">
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Amazon · Etsy · Shopify ready
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Instagram &amp; catalogue
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            24–48h turnaround
          </span>
        </div>
      </section>

      {/* signature showcase */}
      <section
        id="examples"
        className="relative z-10 mx-auto max-w-6xl px-6 py-14"
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="mx-auto w-full max-w-[380px]">
            <JewelleryCompare
              beforeSrc="/jewellery/bracelet_before.jpg"
              afterSrc="/jewellery/bracelet_after.jpg"
              variant="hero"
            />
            <p className="mt-3 text-center text-sm text-white/50">
              Drag the line to compare. Your own jewellery can look like this.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
              The transformation
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Raw phone photo in. Premium product shot out.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-white/65">
              Bad lighting, cluttered background, dull shine — all fixed. We
              relight the metal, lift the stones, clean the backdrop and stage the
              piece so it looks like it was shot in a professional studio. You keep
              selling; we handle the photography.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="mx-auto mb-9 max-w-[60ch] text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            How it works
          </p>
          <h2 className="mt-2.5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Three steps. Zero hassle.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="tw-glass rounded-2xl border border-white/10 p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-emerald-500/10 font-bold text-emerald-400">
                {s.n}
              </div>
              <h3 className="mt-4 text-[17px] font-medium">{s.h}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-white/60">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* category gallery */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="mx-auto mb-9 max-w-[60ch] text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            What we cover
          </p>
          <h2 className="mt-2.5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Every kind of jewellery
          </h2>
          <p className="mt-3.5 text-base leading-[1.7] text-white/65">
            One sample per category — slide each to see the before / after.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.key}
              className="tw-glass rounded-2xl border border-white/10 p-3"
            >
              <JewelleryCompare
                beforeSrc={`/jewellery/${c.key}_before.jpg`}
                afterSrc={`/jewellery/${c.key}_after.jpg`}
              />
              <div className="px-1.5 pb-1 pt-3">
                <h3 className="text-[15px] font-medium">{c.title}</h3>
                <p className="mt-0.5 text-[12.5px] text-white/50">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-14 text-center">
        <div className="tw-glass tw-light-leak rounded-3xl border border-white/10 p-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Ready when you are
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Send your first piece today
          </h2>
          <p className="mx-auto mt-3.5 max-w-[52ch] text-base leading-[1.7] text-white/65">
            Try it with one photo. See the result before you commit to a full
            catalogue.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-focus mt-6 inline-block rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-[#04120b] transition-transform hover:-translate-y-0.5"
          >
            Send a photo on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <div className="mb-9 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            FAQ
          </p>
          <h2 className="mt-2.5 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.question}
              className="tw-glass group rounded-2xl border border-white/10 p-5"
            >
              <summary className="tw-focus cursor-pointer list-none text-[15px] font-medium text-white/90">
                {f.question}
              </summary>
              <p className="mt-3 text-sm leading-[1.7] text-white/60">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
