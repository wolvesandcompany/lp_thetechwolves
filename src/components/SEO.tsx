import { Helmet } from 'react-helmet-async';

// SEO component props for comprehensive meta tag management
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  structuredData?: object | object[];
}

// Centralized SEO component for consistent meta tags across all blog pages
// Optimized for both traditional search engines and AI/LLM crawlers
export function SEO({
  title,
  description,
  canonical,
  ogImage = '/og-image.webp',
  ogType = 'article',
  publishedTime,
  modifiedTime,
  author,
  tags = [],
  structuredData,
}: SEOProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wolvesandcompany.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags - Essential for SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Keywords for traditional SEO */}
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
      
      {/* Author information */}
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical || baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Wolves & Company" />
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical || baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      
      {/* Structured Data JSON-LD - Critical for AI/LLM understanding */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
      
      {/* Additional meta tags for better crawling */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language and locale */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
}