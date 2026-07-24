"use client";
import Link from "next/link";
import { Mail, Globe2 } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { INDUSTRIES } from "@/lib/industries-data";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { track } from "@/lib/analytics";

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

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <h4 className="text-base font-medium tracking-[-0.02em] text-white">The Tech Wolves</h4>
          <p className="mt-3 max-w-[28ch] text-sm leading-[1.6] text-white/55">
            Senior engineers and designers shipping AI, automation, and product at agency speed.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track.whatsapp("footer")}
            className="tw-focus mt-5 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#25D366]/20"
          >
            <span className="text-[#25D366]"><WhatsAppGlyph size={16} /></span>
            Chat on WhatsApp
          </a>
          <p className="mt-6 text-xs text-white/40">© {year} The Tech Wolves. All rights reserved.</p>
        </div>

        <FooterCol title="Services">
          {SERVICES.slice(0, 6).map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.eyebrow}</FooterLink>
          ))}
          <FooterLink href="/services">All services →</FooterLink>
        </FooterCol>

        <FooterCol title="Industries">
          {INDUSTRIES.map((i) => (
            <FooterLink key={i.slug} href={`/industries/${i.slug}`}>{i.eyebrow}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          <FooterLink href="/templates">Templates</FooterLink>
          <FooterLink href="/case-study">Case studies</FooterLink>
          <FooterLink href="/team">Team</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/tools/ai-automation-cost-calculator">Cost calculator</FooterLink>
          <FooterLink href="/#pricing">Pricing</FooterLink>
        </FooterCol>

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
          <h5 className="mb-3 mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
            Legal
          </h5>
          <ul className="space-y-2 text-sm">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
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

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
        {title}
      </h5>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="tw-focus text-white/60 transition-colors duration-200 hover:text-emerald-400"
      >
        {children}
      </Link>
    </li>
  );
}
