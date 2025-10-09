import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog/utils';
import { PostCard } from '@/components/PostCard';

// Static generation for optimal SEO performance
export async function generateStaticParams() {
  return [{}]; // Generate static blog index page
}

// SEO metadata for blog listing page
export const metadata: Metadata = {
  title: 'Blog — Wolves & Company | AI Automation & Digital Transformation Insights',
  description: 'Discover expert insights on AI automation, digital transformation, and business process optimization. Practical guides and case studies for SMEs and startups.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog — Wolves & Company',
    description: 'Expert insights on AI automation, digital transformation, and business optimization',
    url: '/blog',
    siteName: 'Wolves & Company',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Wolves & Company Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Wolves & Company',
    description: 'Expert insights on AI automation, digital transformation, and business optimization',
    images: ['/og-image.webp'],
  },
  keywords: [
    'AI automation',
    'digital transformation',
    'business process optimization',
    'SME automation',
    'startup technology',
  ],
};

// Blog listing page component with server-side rendering
export default function BlogPage() {
  // Get all blog posts at build time for SSG
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header with SEO-optimized structure */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Insights on AI automation, digital transformation, and practical business solutions 
            to help your company thrive in the digital age.
          </p>
        </header>

        {/* Blog posts grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts found. Check back soon for new content!
            </p>
          </div>
        )}

        {/* Call-to-action section */}
        <section className="mt-16 text-center bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get expert guidance on implementing AI automation and digital transformation solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get Started Today
            <svg
              className="ml-2 w-5 h-5"
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
        </section>
      </div>
    </div>
  );
}