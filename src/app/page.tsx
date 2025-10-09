"use client";

import { useEffect, useState } from "react";
import { Hero } from "../components/hero";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/resizable-navbar";
import WhyUs from "@/components/why-us";
import LogoMarquee from "@/components/logo-marquee";
import { PopupModal } from "react-calendly";
import { ContactUs } from "../components/contact";
import { Industries } from "@/components/industries";
import Review from "../components/review";
import { Footer } from "../components/Footer";
import Service from "../components/Service";
import TechStack from "../components/tech-stack";
import Pricing from "../components/pricing";
import ExploreTemplates from "../components/templates";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    setRootElement(el);
  }, []);

  const navItems = [
    { name: "Service", link: "#service" },
    { name: "Pricing", link: "#pricing" },
    { name: "Templates", link: "#templates" },
    { name: "Industries", link: "#industries" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Blog", link: "/blog" },
  ];

  const handleMobileClick = () => {
    setIsMobileMenuOpen(false);
    setIsOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen  text-white">
      {/* --- Navbar --- */}
      <Navbar>
        {/* Desktop Nav */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-2 rounded-full bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-teal-700 border-2 border-transparent hover:border-teal-500 z-10"
            >
              Book a call
            </button>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-gray-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={handleMobileClick}
                className="px-5 py-2 rounded-full bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-teal-700 border-2 border-transparent hover:border-teal-500 z-10"
              >
                Book a call
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <Hero />

      <LogoMarquee />

      <WhyUs />

      <Service />

      <ExploreTemplates />

      <Industries />

      <TechStack />

      <Pricing />

      <Review />

      <ContactUs />

      <Footer />

      {rootElement && (
        <PopupModal
          url="https://calendly.com/huzaifsk12"
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </main>
  );
}
