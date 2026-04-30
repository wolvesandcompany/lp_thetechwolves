import { getAllBlogPosts } from '@/lib/blog/utils';
import BlogPageClient from './BlogPageClient';

// Blog page with enhanced theme and interactivity
export default function BlogPage() {
  // Get all blog posts at build time for SSG
  const posts = getAllBlogPosts();

  return <BlogPageClient posts={posts} />;
}