import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

// SEO metadata for blog listing page
export const metadata: Metadata = generateMetadata({
  title: 'Blog — Insights & Expertise on AI Automation',
  description: 'Discover expert insights on AI automation, digital transformation, and business process optimization. Practical guides and case studies for SMEs and startups.',
  path: '/blog',
  keywords: [
    'AI automation',
    'digital transformation',
    'business process optimization',
    'SME automation',
    'startup technology',
    'machine learning',
    'business intelligence',
    'productivity tools',
    'workflow automation',
    'tech insights'
  ],
});

export default metadata;