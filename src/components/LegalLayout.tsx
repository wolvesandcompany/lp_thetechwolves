import { ReactNode } from "react";
import { SiteNavbar } from "./SiteNavbar";
import { Footer } from "./Footer";

type Props = {
  title: string;
  effective?: string;
  updated?: string;
  children: ReactNode;
};

export function LegalLayout({ title, effective, updated, children }: Props) {
  return (
    <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <SiteNavbar />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
      />

      <header className="relative z-10 mx-auto max-w-3xl px-6 pb-12 pt-40 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
          Legal
        </p>
        <h1 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          <span className="tw-display-gradient">{title}</span>
        </h1>
        {(effective || updated) && (
          <p className="mt-4 text-sm text-white/50">
            {effective && <>Effective: {effective}</>}
            {effective && updated && <span className="mx-2 text-white/30">·</span>}
            {updated && <>Updated: {updated}</>}
          </p>
        )}
      </header>

      <article className="legal-prose relative z-10 mx-auto max-w-3xl px-6 pb-32">
        <div className="tw-glass tw-light-leak rounded-2xl p-8 md:p-12">{children}</div>
      </article>

      <Footer />
    </main>
  );
}
