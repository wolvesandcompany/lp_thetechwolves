"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { track } from "@/lib/analytics";

const NAV_ITEMS = [
  { name: "Services", link: "/services" },
  { name: "Industries", link: "/industries" },
  { name: "Templates", link: "/templates" },
  { name: "Case studies", link: "/case-study" },
  { name: "Team", link: "/team" },
  { name: "Blog", link: "/blog" },
];

export function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootEl(document.getElementById("root"));
  }, []);

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                track.bookCall("site_navbar");
                setCalendlyOpen(true);
              }}
              className="tw-focus inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]"
            >
              Book a call
            </button>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="tw-focus text-white/80 transition-colors duration-200 hover:text-emerald-400"
              >
                {item.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                track.bookCall("site_navbar_mobile");
                setMobileOpen(false);
                setCalendlyOpen(true);
              }}
              className="tw-focus mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#050505]"
            >
              Book a call
            </button>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {rootEl && (
        <PopupModal
          url="https://calendly.com/huzaifsk12"
          pageSettings={{
            backgroundColor: "0a0a0a",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "34D399",
            textColor: "ffffff",
          }}
          onModalClose={() => setCalendlyOpen(false)}
          open={calendlyOpen}
          rootElement={rootEl}
        />
      )}
    </>
  );
}
