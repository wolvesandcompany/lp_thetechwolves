import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { WorldMap } from "@/components/ui/world-map";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";
import {
  Code2,
  Layers,
  Server,
  Sparkles,
  Cpu,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = generateMetadata({
  title: "Our Team - Expert Developers & Digital Transformation Specialists",
  description:
    "Meet our global team of AI automation experts, full-stack developers, and digital transformation specialists. Remote-first company delivering world-class solutions.",
  path: "/team",
  keywords: [
    "development team",
    "AI experts",
    "software engineers",
    "digital transformation specialists",
    "remote developers",
    "tech team",
    "full-stack developers",
    "engineering expertise",
    "global team",
    "technology professionals",
  ],
});

type Role = {
  title: string;
  focus: string;
  Icon: LucideIcon;
};

const ROLES: Role[] = [
  { title: "Lead Software Engineer", focus: "Architecture, code review, technical strategy.", Icon: Layers },
  { title: "Full-Stack Developer", focus: "End-to-end product delivery, web and mobile.", Icon: Code2 },
  { title: "DevOps Engineer", focus: "CI/CD, infrastructure, observability.", Icon: Server },
  { title: "AI / Automation Engineer", focus: "LLM integration, agent design, workflow automation.", Icon: Cpu },
  { title: "Frontend Developer", focus: "Interaction craft, performance, accessibility.", Icon: Sparkles },
  { title: "QA & Security Engineer", focus: "Test coverage, security review, release readiness.", Icon: ShieldCheck },
];

const TAKEAWAYS = [
  "Remote-first company with global engineering coverage",
  "AI automation and digital transformation specialists",
  "Proven track record in custom software and process optimization",
  "Async-collaborative — seamless across time zones",
];

const WORLD_DOTS = [
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
  { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
  { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
];

export default function AboutUs() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Our Team", url: "/team" },
  ];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Team - The Tech Wolves",
    description:
      "A remote-first team of AI automation specialists and digital transformation engineers.",
    url: "https://thetechwolves.com/team",
    mainEntity: {
      "@type": "Organization",
      name: "The Tech Wolves",
      foundingDate: "2020",
      numberOfEmployees: "10-50",
      workLocation: "Remote Global",
      knowsAbout: ROLES.map((r) => r.title),
    },
  };

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={teamSchema} />
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-40 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Our team
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">Building software</span>
          <br />
          <span className="tw-shimmer">without borders.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
          A remote-first development team — globally connected, async-native, deeply
          technical. We collaborate across time zones to ship transformative software.
        </p>

        <div className="tw-glass tw-light-leak mx-auto mt-12 max-w-3xl rounded-2xl p-6 text-left">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Key takeaways
          </h2>
          <ul className="mt-4 space-y-2.5">
            {TAKEAWAYS.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="tw-glass tw-light-leak overflow-hidden rounded-3xl">
          <WorldMap dots={WORLD_DOTS} />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32 pt-24">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Disciplines
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            <span className="tw-display-gradient">Roles on the pack.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-sm leading-[1.6] text-white/60 md:text-base">
            Senior individuals across engineering, design, and operations. We list
            disciplines, not names — bios available on request after intro calls.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((r) => (
            <div
              key={r.title}
              className="tw-glass tw-light-leak group relative overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-[1px]"
            >
              <div className="tw-glass tw-light-leak inline-flex h-10 w-10 items-center justify-center rounded-xl">
                <r.Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.02em] text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-white/60">{r.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/#contact"
            className="tw-focus inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
          >
            Talk to the team
          </a>
          <a
            href="/case-study"
            className="tw-focus inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            See our work
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
