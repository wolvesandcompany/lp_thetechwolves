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
import { FAQ, FAQ_ITEMS } from "../components/faq";
import { StructuredData } from "../components/StructuredData";
import { track } from "../lib/analytics";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateHowToSchema,
} from "../lib/seo";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  const services = [
    { name: "AI Automation Solutions", description: "Custom AI implementation to automate business processes and increase efficiency by up to 80%.", url: "#service" },
    { name: "Custom Software Development", description: "Tailored web and mobile applications built with modern technologies for optimal performance.", url: "#service" },
    { name: "Digital Transformation Consulting", description: "Strategic guidance to modernize your business operations and accelerate growth.", url: "#service" },
    { name: "Business Process Optimization", description: "Streamline workflows and eliminate inefficiencies with data-driven process improvements.", url: "#service" },
  ];
  // Visible FAQ section and the FAQPage schema share one source (FAQ_ITEMS).
  const faqs = FAQ_ITEMS;
  const howToSteps = [
    { name: "Book a Discovery Call", text: "Schedule a free 30-minute consultation to discuss your business needs and automation opportunities." },
    { name: "Receive Custom Strategy", text: "Get a detailed implementation plan with timeline, costs, and expected ROI within 48 hours." },
    { name: "Launch Your Solution", text: "Our team handles complete setup, testing, and training to ensure smooth deployment and adoption." },
  ];

  const navItems = [
    { name: "Service", link: "#service" },
    { name: "Pricing", link: "#pricing" },
    { name: "Templates", link: "/templates" },
    { name: "Case studies", link: "/case-study" },
    { name: "Team", link: "/team" },
    { name: "Blog", link: "/blog" },
  ];

  const handleMobileClick = () => {
    track.bookCall("mobile_nav");
    setIsMobileMenuOpen(false);
    setIsOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white">
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebsiteSchema()} />
      <StructuredData data={generateServiceSchema(services)} />
      <StructuredData data={generateFAQSchema(faqs)} />
      <StructuredData data={generateHowToSchema(howToSteps)} />

      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                track.bookCall("navbar");
                setIsOpen(true);
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
                className="tw-focus text-white/80 transition-colors duration-200 hover:text-emerald-400"
              >
                {item.name}
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={handleMobileClick}
                className="tw-focus inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#050505]"
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
      <FAQ />
      <Review />
      <ContactUs />
      <Footer />

      {rootElement && (
        <PopupModal
          url="https://calendly.com/huzaifsk12"
          pageSettings={{
            backgroundColor: "0a0a0a",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "34D399",
            textColor: "ffffff",
          }}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </main>
  );
}
