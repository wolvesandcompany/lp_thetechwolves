// blog/slug/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
// This import now correctly points to your new utility file:
import { getAllPosts, getPostBySlug } from "@/lib/blog/utils";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";
const SITE_NAME = "The Tech Wolves";
const TWITTER_HANDLE = "@techwolves";

// 1. generateStaticParams is correct and uses the new getAllPosts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const ogImage = post.meta.ogImage || post.meta.banner || "/og-image.webp";
  const url = `${SITE_URL}/blog/${slug}`;
  const publishedTime = post.meta.date;
  const modifiedTime = post.meta.modifiedDate || post.meta.date;

  return {
    title: post.meta.title,
    description: post.meta.summary || post.meta.description,
    keywords: post.meta.keywords || post.meta.tags?.join(", "),
    authors: post.meta.author ? [{ name: post.meta.author }] : undefined,
    creator: post.meta.author || SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: post.meta.canonical || url,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary || post.meta.description,
      url: url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: post.meta.author ? [post.meta.author] : undefined,
      tags: post.meta.tags,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.summary || post.meta.description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// 2. Default export function - make it async to ensure it's a Server Component
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params in Next.js 15+
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return notFound();

  // Calculate word count for reading time
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.summary || post.meta.description,
    image: post.meta.banner
      ? post.meta.banner.startsWith("http")
        ? post.meta.banner
        : `${SITE_URL}${post.meta.banner}`
      : `${SITE_URL}/og-image.webp`,
    datePublished: post.meta.date,
    dateModified: post.meta.modifiedDate || post.meta.date,
    author: {
      "@type": post.meta.authorType === "Organization" ? "Organization" : "Person",
      name: post.meta.author || SITE_NAME,
      url: post.meta.authorUrl || SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/wolf.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    keywords: post.meta.keywords || post.meta.tags?.join(", "),
    articleSection: post.meta.category || "Technology",
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
    inLanguage: "en-US",
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.meta.title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="min-h-screen bg-white dark:bg-neutral-950" itemScope itemType="https://schema.org/BlogPosting">
      {/* Banner Image Section */}
      {post.meta.banner && (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src={post.meta.banner}
            alt={post.meta.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Title Overlay on Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {post.meta.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
                {post.meta.author && (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.meta.author}
                  </span>
                )}
                {post.meta.date && (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(post.meta.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                )}
                {post.meta.readTime && (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.meta.readTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* If no banner, show title here */}
        {!post.meta.banner && (
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              {post.meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
              {post.meta.author && <span>{post.meta.author}</span>}
              {post.meta.date && (
                <span>
                  {new Date(post.meta.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              )}
              {post.meta.readTime && <span>{post.meta.readTime}</span>}
            </div>
          </div>
        )}

        {/* Tags */}
        {post.meta.tags && post.meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Summary */}
        {post.meta.summary && (
          <div className="mb-8 p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 rounded-r-lg">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 italic">
              {post.meta.summary}
            </p>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-white
          prose-p:text-neutral-700 dark:prose-p:text-neutral-300
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-neutral-900 dark:prose-strong:text-white
          prose-code:text-blue-600 dark:prose-code:text-blue-400
          prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-950
          prose-ul:text-neutral-700 dark:prose-ul:text-neutral-300
          prose-ol:text-neutral-700 dark:prose-ol:text-neutral-300
          prose-blockquote:border-l-blue-500 prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300
          prose-img:rounded-lg prose-img:shadow-lg
        ">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.meta.title)}&url=${encodeURIComponent(`https://yourdomain.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-500 transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourdomain.com/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
