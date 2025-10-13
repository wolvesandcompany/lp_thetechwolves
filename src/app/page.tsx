"use client";

import { useEffect, useState } from "react";
import { Metadata } from 'next';
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
import { StructuredData } from "../components/StructuredData";
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateServiceSchema,
  generateFAQSchema,
  generateHowToSchema 
} from "../lib/seo";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    setRootElement(el);
  }, []);

  // SEO-optimized service data for structured markup
  const services = [
    {
      name: "AI Automation Solutions",
      description: "Custom AI implementation to automate business processes and increase efficiency by up to 80%.",
      url: "#service"
    },
    {
      name: "Custom Software Development",
      description: "Tailored web and mobile applications built with modern technologies for optimal performance.",
      url: "#service"
    },
    {
      name: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business operations and accelerate growth.",
      url: "#service"
    },
    {
      name: "Business Process Optimization",
      description: "Streamline workflows and eliminate inefficiencies with data-driven process improvements.",
      url: "#service"
    }
  ];

  // FAQ data for structured markup and AI extraction
  const faqs = [
    {
      question: "How quickly can we see results from AI automation?",
      answer: "Most clients see initial results within 2-4 weeks of implementation, with full optimization achieved in 8-12 weeks."
    },
    {
      question: "What types of businesses benefit most from our solutions?",
      answer: "SMEs and startups in healthcare, finance, manufacturing, and e-commerce see the highest ROI from our AI automation services."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer 24/7 technical support, regular system updates, and performance optimization as part of our service packages."
    }
  ];

  // How-to steps for getting started
  const howToSteps = [
    {
      name: "Book a Discovery Call",
      text: "Schedule a free 30-minute consultation to discuss your business needs and automation opportunities."
    },
    {
      name: "Receive Custom Strategy",
      text: "Get a detailed implementation plan with timeline, costs, and expected ROI within 48 hours."
    },
    {
      name: "Launch Your Solution",
      text: "Our team handles complete setup, testing, and training to ensure smooth deployment and adoption."
    }
  ];

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
      {/* SEO: Structured Data for Search Engines and AI */}
      <StructuredData data={generateOrganizationSchema()} />
      <StructuredData data={generateWebsiteSchema()} />
      <StructuredData data={generateServiceSchema(services)} />
      <StructuredData data={generateFAQSchema(faqs)} />
      <StructuredData data={generateHowToSchema(howToSteps)} />

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
