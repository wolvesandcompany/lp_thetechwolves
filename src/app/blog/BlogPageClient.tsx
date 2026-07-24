"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog/utils";
import { PostCard } from "@/components/PostCard";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";

interface BlogPageClientProps {
  posts: BlogPost[];
}

const CATEGORIES = ["all", "AI", "Automation", "Digital Transformation", "Business"];

const BlogPageClient: React.FC<BlogPageClientProps> = ({ posts }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filtered =
    selected === "all"
      ? posts
      : posts.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(selected.toLowerCase())),
        );

  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-40 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Blog
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <span className="tw-display-gradient">Insights</span>{" "}
          <span className="tw-shimmer">&amp; expertise.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[65ch] text-base leading-[1.6] text-white/70 md:text-lg">
          Expert thinking on AI automation, digital transformation, and practical engineering
          for businesses scaling in the AI era.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelected(c)}
              className={`tw-focus rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                selected === c
                  ? "bg-emerald-400 text-[#050505]"
                  : "border border-white/10 bg-white/[0.02] text-white/65 hover:text-white"
              }`}
            >
              {c === "all" ? `All (${posts.length})` : c}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {[
            { v: `${posts.length}+`, l: "Articles" },
            { v: "10k+", l: "Monthly readers" },
            { v: "5+", l: "Industries" },
          ].map((s) => (
            <div
              key={s.l}
              className="tw-glass tw-light-leak rounded-2xl px-3 py-5 text-center"
            >
              <div className="text-2xl font-medium tracking-[-0.02em] text-emerald-400">
                {s.v}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/55">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, idx) => (
              <div
                key={post.slug}
                className={`transition-all duration-700 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="tw-glass tw-light-leak mx-auto max-w-md rounded-2xl p-10 text-center">
            <h3 className="text-lg font-medium text-white">No posts in &quot;{selected}&quot;</h3>
            <p className="mt-2 text-sm text-white/60">
              Try a different category or view all posts.
            </p>
            <button
              type="button"
              onClick={() => setSelected("all")}
              className="tw-focus mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2 text-xs font-medium text-[#050505]"
            >
              View all
            </button>
          </div>
        )}
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <div className="tw-glass tw-light-leak relative overflow-hidden rounded-3xl p-10 text-center md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(var(--ds-accent-rgb)_/_0.08),transparent_60%)]"
          />
          <div className="relative">
            <h2 className="text-2xl font-medium tracking-[-0.04em] md:text-4xl">
              <span className="tw-display-gradient">Ready to transform your business?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[55ch] text-sm leading-[1.6] text-white/65 md:text-base">
              Get expert guidance on AI automation and digital transformation. Start your
              path to efficiency and growth today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="tw-focus group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-study"
                className="tw-focus inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:border-white/20 hover:text-white"
              >
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPageClient;
