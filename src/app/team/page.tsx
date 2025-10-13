import React from "react";
import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';
import { WorldMap } from "@/components/ui/world-map";

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Our Team - Expert Developers & Digital Transformation Specialists',
  description: 'Meet our global team of AI automation experts, full-stack developers, and digital transformation specialists. Remote-first company delivering world-class solutions.',
  path: '/team',
  keywords: [
    'development team',
    'AI experts',
    'software engineers',
    'digital transformation specialists',
    'remote developers',
    'tech team',
    'full-stack developers',
    'engineering expertise',
    'global team',
    'technology professionals'
  ],
});

// Use Liara avatar base URL for team member images
const avatarBase = "https://avatar.iran.liara.run/public/";

const teamMembers = [
  {
    name: "Arjun Mehra",
    role: "Lead Software Engineer",
    avatar: `${avatarBase}boy?username=arjun.mehra`,
  },
  {
    name: "Rohan Sharma",
    role: "Full Stack Developer",
    avatar: `${avatarBase}boy?username=rohan.sharma`,
  },
  {
    name: "Vikram Patel",
    role: "DevOps Engineer",
    avatar: `${avatarBase}boy?username=vikram.patel`,
  },
  {
    name: "Amit Singh",
    role: "Frontend Developer",
    avatar: `${avatarBase}boy?username=amit.singh`,
  },
  {
    name: "Siddharth Nair",
    role: "Backend Developer",
    avatar: `${avatarBase}boy?username=siddharth.nair`,
  },
  {
    name: "Rahul Das",
    role: "QA Engineer",
    avatar: `${avatarBase}boy?username=rahul.das`,
  },
];

export default function AboutUs() {
  // Breadcrumb structured data for SEO
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Our Team', url: '/team' },
  ];

  // Team/Organization structured data
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Team - Wolves & Company',
    description: 'Meet our expert team of AI automation specialists and digital transformation professionals',
    url: 'https://wolvesandcompany.com/team',
    mainEntity: {
      '@type': 'Organization',
      name: 'Wolves & Company',
      description: 'Remote-first AI automation and digital transformation company',
      foundingDate: '2020',
      numberOfEmployees: '10-50',
      workLocation: 'Remote Global',
      employee: teamMembers.map(member => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          '@type': 'Organization',
          name: 'Wolves & Company'
        }
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'AI Automation Solutions',
            description: 'Custom AI implementation for business process automation'
          },
          {
            '@type': 'Offer', 
            name: 'Custom Software Development',
            description: 'Full-stack web and mobile application development'
          },
          {
            '@type': 'Offer',
            name: 'Digital Transformation Consulting',
            description: 'Strategic guidance for business modernization'
          }
        ]
      }
    }
  };

  // Key takeaways for AI/LLM extraction
  const keyTakeaways = [
    "Remote-first development company with global expertise",
    "Specialized team of AI automation and digital transformation experts", 
    "Proven track record in custom software development and process optimization",
    "Collaborative approach ensuring seamless project delivery across time zones"
  ];

  return (
    <div className="bg-white text-teal-900">
      {/* SEO: Structured Data */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={teamSchema} />

      {/* Header Section with AI-optimized content */}
      <div className="max-w-6xl mx-auto py-36 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Building Software Without Borders
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          At Wolves & Company, we are a remote-first development company. Our expert team
          is globally connected and passionate about building transformative digital solutions.</p>
        
        {/* Key Takeaways Section for AI/LLM Optimization */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Key Takeaways</h2>
          <ul className="list-disc list-inside text-left max-w-3xl mx-auto space-y-2">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="text-gray-700">{takeaway}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 text-lg">
          We collaborate seamlessly across time zones to deliver exceptional results from anywhere.
        </p>
      </div>

      {/* Remote Work & Connectivity Map */}
      <div className="max-w-7xl mx-auto mb-12 px-4">
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-4xl font-semibold text-center mb-16">
          Meet The Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-full aspect-square rounded-xl bg-transparent mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name + " avatar"}
                  className="w-4/5 h-4/5 object-contain"
                  draggable={false}
                />
              </div>
              <h5 className="font-medium">{member.name}</h5>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
