import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogSlugs, generateBlogJsonLd } from '@/lib/blog/utils';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts (SSG optimization)
export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each blog post (SEO optimization)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thetechwolves.com';
  
  return {
    title: `${post.title} | The Tech Wolves Blog`,
    description: post.summary,
    alternates: {
      canonical: `${baseUrl}${post.canonical}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${baseUrl}${post.canonical}`,
      siteName: 'The Tech Wolves',
      images: [
        {
          url: post.ogImage.startsWith('http') ? post.ogImage : `${baseUrl}${post.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [post.ogImage.startsWith('http') ? post.ogImage : `${baseUrl}${post.ogImage}`],
    },
    keywords: post.tags,
  };
}

// Individual blog post page component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  // Handle 404 for non-existent posts
  if (!post) {
    notFound();
  }

  // Generate structured data for SEO and AI/LLM understanding
  const structuredData = generateBlogJsonLd(post, `/blog/${slug}`);
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Structured Data JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <article className="min-h-screen bg-white dark:bg-neutral-950 relative">
        {/* Background effects matching the main theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[40rem] h-[40rem] bg-teal-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-1/4 w-[30rem] h-[30rem] bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        
        {/* Background beams for visual enhancement */}
        <BackgroundBeams className="opacity-20" />
        
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          {/* Article header */}
          <header className="mb-8 pt-20">
            {/* Breadcrumb navigation for SEO */}
            <nav className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Home</a>
              <span className="mx-2 text-teal-500">•</span>
              <a href="/blog" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Blog</a>
              <span className="mx-2 text-teal-500">•</span>
              <span className="text-neutral-900 dark:text-white font-medium">{post.title}</span>
            </nav>

            {/* Article title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
              {post.title}
            </h1>

            {/* Article meta information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400 mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <time dateTime={post.date} className="font-medium">{formattedDate}</time>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">{post.readingTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 text-sm rounded-full font-medium border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <main className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 dark:prose-strong:text-white prose-code:text-teal-600 dark:prose-code:text-teal-400">
            <MarkdownRenderer content={post.content} />
          </main>

          {/* Article footer */}
          <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Published on <span className="font-medium text-neutral-900 dark:text-white">{formattedDate}</span> by <span className="font-medium text-teal-600 dark:text-teal-400">{post.author}</span>
              </div>
              
              {/* Social sharing buttons */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Share:</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://thetechwolves.com'}${post.canonical}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-950/50 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://thetechwolves.com'}${post.canonical}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-950/50 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>

          {/* Call-to-action section */}
          <section className="mt-16 relative">
            {/* Background gradient for CTA */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 dark:from-teal-950/20 dark:via-neutral-950 dark:to-teal-950/20 rounded-3xl"></div>
            
            <div className="relative z-10 text-center px-8 py-12 lg:py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Ready to Transform Your <span className="text-teal-500">Business</span>?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get expert guidance on implementing AI automation and digital transformation solutions.
                Start your journey to increased efficiency and growth today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Our Team
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                
                <a
                  href="/blog"
                  className="inline-flex items-center px-8 py-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold rounded-full transition-all duration-300"
                >
                  More Insights
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}