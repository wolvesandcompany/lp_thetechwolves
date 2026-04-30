"use client";
import Link from "next/link";
import { Mail, Globe2 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tw-noise relative w-full overflow-hidden bg-[#050505] px-6 pb-10 pt-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 top-px tw-glass"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <h4 className="text-base font-medium tracking-[-0.02em] text-white">The Tech Wolves</h4>
          <p className="mt-3 max-w-[28ch] text-sm leading-[1.6] text-white/55">
            Senior engineers and designers shipping AI, automation, and product at agency speed.
          </p>
          <p className="mt-6 text-xs text-white/40">© {year} The Tech Wolves. All rights reserved.</p>
        </div>

        <div>
          <h5 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            Pages
          </h5>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/blog", label: "Blog" },
              { href: "/team", label: "Team" },
              { href: "/templates", label: "Templates" },
              { href: "/case-study", label: "Case studies" },
              { href: "/#service", label: "Services" },
              { href: "/#industries", label: "Industries" },
              { href: "/#testimonials", label: "Testimonials" },
              { href: "/#pricing", label: "Pricing" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="tw-focus text-white/60 transition-colors duration-200 hover:text-emerald-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            Legal
          </h5>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/terms", label: "Terms & conditions" },
              { href: "/privacy", label: "Privacy policy" },
              { href: "/cookies", label: "Cookie policy" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="tw-focus text-white/60 transition-colors duration-200 hover:text-emerald-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            Contact
          </h5>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-white/60">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              <a
                href="mailto:info@thetechwolves.com"
                className="tw-focus transition-colors duration-200 hover:text-emerald-400"
              >
                info@thetechwolves.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/60">
              <Globe2 className="h-3.5 w-3.5 text-emerald-400" />
              Remote &amp; global
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-6xl items-center justify-between border-t border-white/[0.06] pt-6">
        <p className="text-xs text-white/35">Crafted with precision.</p>
        <p className="text-xs text-white/35">v2.0 — architectural release</p>
      </div>
    </footer>
  );
}
