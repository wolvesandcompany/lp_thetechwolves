import { Metadata } from 'next';

// Base SEO configuration for the entire site
export const baseSiteConfig = {
  name: 'Wolves & Company',
  description: 'AI automation and digital transformation solutions for SMEs. Expert custom software development, process optimization, and business growth strategies.',
  url: 'https://wolvesandcompany.com',
  ogImage: '/og-image.webp',
  links: {
    twitter: 'https://twitter.com/wolvesandcompany',
    linkedin: 'https://linkedin.com/company/wolvesandcompany',
  },
  keywords: [
    'AI automation',
    'digital transformation',
    'custom software development',
    'business process optimization',
    'SME solutions',
    'startup technology',
    'web development',
    'mobile app development',
    'cloud solutions',
  ],
};

// Enhanced metadata generation function
export function generateMetadata({
  title,
  description,
  path = '',
  image = baseSiteConfig.ogImage,
  type = 'website',
  keywords = [],
  author = baseSiteConfig.name,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}): Metadata {
  const fullTitle = title.includes(baseSiteConfig.name) 
    ? title 
    : `${title} | ${baseSiteConfig.name}`;
  
  const canonicalUrl = `${baseSiteConfig.url}${path}`;
  const imageUrl = image.startsWith('/') ? `${baseSiteConfig.url}${image}` : image;
  
  const allKeywords = [...baseSiteConfig.keywords, ...keywords].join(', ');

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: baseSiteConfig.name,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(baseSiteConfig.url),
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: baseSiteConfig.name,
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: 'en_US',
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        section,
        authors: [author],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@wolvesandcompany',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: baseSiteConfig.name,
    url: baseSiteConfig.url,
    logo: `${baseSiteConfig.url}/wolf.png`,
    description: baseSiteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      baseSiteConfig.links.twitter,
      baseSiteConfig.links.linkedin,
    ],
    founder: {
      '@type': 'Person',
      name: 'Wolves & Company Team',
    },
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    slogan: 'Transforming businesses through AI automation and digital innovation',
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: baseSiteConfig.name,
    url: baseSiteConfig.url,
    description: baseSiteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: baseSiteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseSiteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseSiteConfig.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(services: Array<{
  name: string;
  description: string;
  url?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: baseSiteConfig.name,
      url: baseSiteConfig.url,
    },
    serviceType: 'Technology Consulting',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Transformation Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        name: service.name,
        description: service.description,
        url: service.url ? `${baseSiteConfig.url}${service.url}` : undefined,
      })),
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(steps: Array<{ name: string; text: string; image?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get Started with Our Services',
    description: 'Step-by-step guide to begin your digital transformation journey',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: `${baseSiteConfig.url}${step.image}` }),
    })),
  };
}

// Utility function for generating JSON-LD script tag
export function generateStructuredDataScript(data: any): string {
  return JSON.stringify(data, null, 2);
}