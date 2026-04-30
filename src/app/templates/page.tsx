import React from "react";
import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';
import Image from "next/image";
import business from "../../../public/business.webp";
import eco from "../../../public/eco.webp";
import healthtech from "../../../public/healthtech.webp";
import dentist from "../../../public/dentist.webp";
import dentist2 from "../../../public/dental2.webp";
import consultant from "../../../public/consultant2.webp";
import ecosol from "../../../public/ecosol.webp";
import healthtech2 from "../../../public/healttech2.webp";
import homeserv from "../../../public/homeserv.webp";
import interior from "../../../public/interior.webp";

import { SquareArrowOutUpRight } from "lucide-react";

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Website Templates - Professional & Industry-Specific Designs',
  description: 'Explore our collection of premium website templates for healthcare, business consulting, e-commerce, and more. Ready-to-use designs optimized for conversion and SEO.',
  path: '/templates',
  keywords: [
    'website templates',
    'business templates',
    'healthcare website design',
    'consulting templates',
    'e-commerce templates',
    'professional website designs',
    'responsive templates',
    'industry-specific templates',
    'conversion-optimized',
    'SEO-friendly templates'
  ],
});

// Generate static params for SSG
export async function generateStaticParams() {
  return [{}]; // Generate static templates page
}

const templates = [
  {
    name: "Business Consultant",
    url: "https://business-consultant-template.vercel.app/",
    image: business,
    description:
      "A modern, professional template for business consultants, agencies, and freelancers. Features a clean layout, service highlights, testimonials, and a strong call-to-action. Perfect for showcasing expertise and building trust with clients.",
    keywords: [
      "Consulting",
      "Business",
      "Agency",
      "Professional",
      "Landing Page",
      "Modern",
      "Responsive",
    ],
  },
  {
    name: "Dental Clinic",
    url: "https://dental-website-template.vercel.app/",
    image: dentist,
    description:
      "A clean and friendly template designed for dental clinics and healthcare professionals. Includes appointment booking, service sections, doctor profiles, and patient testimonials. Built to inspire trust and make booking easy.",
    keywords: [
      "Dental",
      "Healthcare",
      "Clinic",
      "Medical",
      "Booking",
      "Clean",
      "Trustworthy",
    ],
  },
  {
    name: "Eco Stride",
    url: "https://eco-stride-template.vercel.app/",
    image: eco,
    description:
      "A vibrant, eco-friendly template for sustainability startups, green businesses, and environmental initiatives. Features project highlights, impact stats, and a modern, nature-inspired design.",
    keywords: [
      "Eco",
      "Sustainability",
      "Green",
      "Startup",
      "Environment",
      "Modern",
      "Impact",
    ],
  },
  {
    name: "HealthTech",
    url: "https://healthtech-template.vercel.app/",
    image: healthtech,
    description:
      "A cutting-edge template for healthtech companies, SaaS, and digital health products. Includes product features, integrations, testimonials, and a conversion-focused layout. Ideal for showcasing innovative solutions.",
    keywords: [
      "HealthTech",
      "SaaS",
      "Startup",
      "Medical",
      "Technology",
      "Product",
      "Modern",
    ],
  },
  // Additional templates from screenshot
  {
    name: "Smile Care",
    url: "https://bright-smile-template.vercel.app/",
    image: dentist2,
    description:
      "A welcoming and modern template for dental and healthcare clinics. Features appointment booking, service highlights, and patient testimonials to build trust and make scheduling easy.",
    keywords: [
      "Dental",
      "Healthcare",
      "Clinic",
      "Medical",
      "Booking",
      "Modern",
      "Trustworthy",
    ],
  },
  {
    name: "Greentech Solutions",
    url: "https://eco-tech-solutions-blush.vercel.app/",
    image: ecosol,
    description:
      "A clean, eco-focused template for green businesses and sustainability startups. Showcases projects, impact, and services with a fresh, nature-inspired design.",
    keywords: [
      "Eco",
      "Green",
      "Sustainability",
      "Business",
      "Startup",
      "Modern",
      "Impact",
    ],
  },
  {
    name: "HealthTech Five",
    url: "https://medtech-portal.vercel.app/",
    image: healthtech2,
    description:
      "A modern template for healthtech companies and digital health products. Includes product features, integrations, and testimonials in a conversion-focused layout.",
    keywords: [
      "HealthTech",
      "SaaS",
      "Startup",
      "Medical",
      "Technology",
      "Product",
      "Modern",
    ],
  },
  {
    name: "Elevate Consult",
    url: "https://consult-template.vercel.app/",
    image: consultant,
    description:
      "A professional template for consulting agencies and business advisors. Features service highlights, testimonials, and a strong call-to-action for client engagement.",
    keywords: [
      "Consulting",
      "Business",
      "Agency",
      "Professional",
      "Landing Page",
      "Modern",
      "Responsive",
    ],
  },
  {
    name: "Aura Interior",
    url: "https://aura-interior-nine.vercel.app/",
    image: interior,
    description:
      "A stylish template for interior design studios and creative agencies. Showcases portfolio, services, and client testimonials with a modern, elegant layout.",
    keywords: [
      "Interior",
      "Design",
      "Portfolio",
      "Creative",
      "Agency",
      "Modern",
      "Elegant",
    ],
  },
  {
    name: "Home Services Eosin",
    url: "https://homehub-pro-template.vercel.app/",
    image: homeserv,
    description:
      "A clean, conversion-focused template for home service businesses (plumbers, electricians, cleaners, etc). Features service listings, testimonials, and a prominent booking call-to-action.",
    keywords: [
      "Home Services",
      "Business",
      "Booking",
      "Landing Page",
      "Modern",
      "Responsive",
      "Service",
    ],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-1 border-teal-600 bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}

export default function TemplatesShowcase() {
  // Breadcrumb structured data for SEO
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Templates', url: '/templates' },
  ];

  // Templates structured data for product catalog
  const templatesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Website Templates - The Tech Wolves',
    description: 'Professional website templates for various industries',
    url: 'https://thetechwolves.com/templates',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Premium Website Templates',
      description: 'Industry-specific, conversion-optimized website templates',
      itemListElement: templates.slice(0, 6).map((template, index) => ({
        '@type': 'SoftwareApplication',
        position: index + 1,
        name: template.name,
        description: template.description,
        url: template.url,
        applicationCategory: 'WebApplication',
        operatingSystem: 'All',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        creator: {
          '@type': 'Organization',
          name: 'The Tech Wolves'
        },
        keywords: template.keywords.join(', ')
      }))
    }
  };

  // Key takeaways for AI/LLM extraction
  const keyTakeaways = [
    "Professional templates designed for high conversion rates",
    "Industry-specific designs for healthcare, consulting, and business",
    "Mobile-responsive and SEO-optimized for better search visibility",
    "Ready-to-use with live demos and customization options"
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      {/* SEO: Structured Data */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={templatesSchema} />

      {/* Header Section with AI-optimized content */}
      <div className="max-w-6xl mx-auto py-36 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
          Professional Website Templates
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore our professionally designed templates. Preview each demo and
          discover the perfect fit for your next project. Each template includes
          a live preview, detailed description, and key features.
        </p>

        {/* Key Takeaways Section for AI/LLM Optimization */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Key Takeaways</h2>
          <ul className="list-disc list-inside text-left max-w-3xl mx-auto space-y-2">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="text-gray-700">{takeaway}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <a
                href={tpl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-t-2xl overflow-hidden group"
              >
                {/* Use Next.js Image for preview images */}
                {tpl.image ? (
                  <Image
                    src={tpl.image}
                    alt={tpl.name + " preview"}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                      width: "100%",
                      height: "224px",
                      objectFit: "cover",
                    }}
                    placeholder="blur"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-56 flex items-center justify-center bg-gray-200 text-gray-500"
                    style={{ width: "100%", height: "224px" }}
                  >
                    No preview image
                  </div>
                )}
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-semibold text-teal-900 flex-1">
                    {tpl.name}
                  </h2>
                  <a
                    href={tpl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 ml-2 px-4 py-1 bg-teal-600 text-white text-sm rounded-full font-medium hover:bg-teal-700 transition"
                  >
                    Live Preview <SquareArrowOutUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4">{tpl.description}</p>
                <div className="flex flex-wrap">
                  {tpl.keywords.map((kw) => (
                    <Pill key={kw}>{kw}</Pill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
