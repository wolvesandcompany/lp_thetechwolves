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
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Optional: Add blog post image if available */}
      {post.ogImage && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={post.ogImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Post meta information */}
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <time dateTime={post.date} className="font-medium">
            {formattedDate}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span className="font-medium">{post.author}</span>
        </div>

        {/* Post title - semantic H2 for proper heading hierarchy */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h2>

        {/* Post summary/excerpt */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {post.summary}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more link */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
        >
          Read full article
          <svg
            className="ml-2 w-4 h-4"
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