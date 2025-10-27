// blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
// This import now correctly points to your new utility file:
import { getAllPosts } from "@/lib/blog/utils";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";
const SITE_NAME = "The Tech Wolves";

// SEO Metadata for blog listing page
export const metadata: Metadata = {
  title: "AI Automation Blog | The Tech Wolves",
  description: "Expert insights on AI automation, workflow optimization, and business transformation. Learn how to leverage AI to scale your business efficiently.",
  keywords: "AI automation blog, business automation, AI workflows, automation guides, AI best practices, tech blog",
  openGraph: {
    title: "AI Automation Blog | The Tech Wolves",
    description: "Expert insights on AI automation, workflow optimization, and business transformation.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "The Tech Wolves Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog | The Tech Wolves",
    description: "Expert insights on AI automation, workflow optimization, and business transformation.",
    images: [`${SITE_URL}/og-image.webp`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

// Explicitly mark this as a Server Component by using async
export default async function BlogListPage() {
  // Fetch posts on the server side
  const posts = getAllPosts(); // Fetches all metadata

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">
            Our Blog
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Insights, tips, and best practices for automating your business with AI
          </p>
        </div>

        {/* Featured Post (First Post) */}
        {posts.length > 0 && (
          <div className="mb-16">
            <Link 
              href={`/blog/${posts[0].slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                {/* Featured Image */}
                {posts[0].banner && (
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                      src={posts[0].banner}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        Featured Post
                      </span>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {posts[0].tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {posts[0].title}
                      </h2>
                      
                      {posts[0].summary && (
                        <p className="text-lg text-white/90 mb-4 line-clamp-2 max-w-3xl">
                          {posts[0].summary}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                        {posts[0].author && <span>{posts[0].author}</span>}
                        {posts[0].date && (
                          <span>
                            {new Date(posts[0].date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        )}
                        {posts[0].readTime && <span>{posts[0].readTime}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        {posts.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Thumbnail */}
                  {post.banner && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.banner}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Summary */}
                    {post.summary && (
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3 text-sm">
                        {post.summary}
                      </p>
                    )}
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      {post.date && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      )}
                      {post.readTime && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
