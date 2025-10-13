import Link from 'next/link';
import { BlogPost } from '@/lib/blog/utils';

interface PostCardProps {
  post: BlogPost;
}

// PostCard component for blog listing - optimized for SEO and user experience
export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group bg-white dark:bg-neutral-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-teal-300 dark:hover:border-teal-700 transform hover:-translate-y-2">
      {/* Optional: Add blog post image with enhanced hover effects */}
      {post.ogImage && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={post.ogImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <div className="p-8">
        {/* Post meta information with teal accents */}
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          <time dateTime={post.date} className="font-medium text-teal-600 dark:text-teal-400">
            {formattedDate}
          </time>
          <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
          <span>{post.readingTime} min read</span>
          <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
          <span className="font-medium">{post.author}</span>
        </div>

        {/* Post title with gradient hover effect */}
        <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
          >
            {post.title}
          </Link>
        </h2>

        {/* Post summary with better typography */}
        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed line-clamp-3">
          {post.summary}
        </p>

        {/* Tags with teal styling */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full border border-teal-200 dark:border-teal-800"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-3 py-1 text-xs text-neutral-500 dark:text-neutral-400">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Enhanced read more link */}
        <Link
          href={`/blog/${post.slug}`}
          className="group/link inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold transition-all duration-300"
        >
          Read full article
          <svg
            className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}