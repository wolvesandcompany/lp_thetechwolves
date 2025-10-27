import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Define the directory where your markdown files live.
// Points to the content/blog directory where your markdown files are stored.
const postsDirectory = path.join(process.cwd(), "content", "blog");

// Define a simple type for the data returned by getAllPosts and getPostBySlug
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category?: string;
  author?: string;
  authorType?: "Person" | "Organization";
  authorUrl?: string;
  tags?: string[];
  summary?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  banner?: string;
  readingTime?: string;
  readTime?: string;
  modifiedDate?: string;
};

export type PostData = {
  meta: PostMeta;
  content: string; // The full markdown content
};

// --- CORE UTILITY FUNCTIONS ---

/**
 * Retrieves a list of all posts (metadata only), sorted by date.
 */
export const getAllPosts = (): PostMeta[] => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Use the file name as the slug
      const slug = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        category: matterResult.data.category as string,
        author: matterResult.data.author as string,
        authorType: matterResult.data.authorType as "Person" | "Organization",
        authorUrl: matterResult.data.authorUrl as string,
        tags: matterResult.data.tags as string[],
        summary: matterResult.data.summary as string,
        description: matterResult.data.description as string,
        keywords: matterResult.data.keywords as string,
        canonical: matterResult.data.canonical as string,
        ogImage: matterResult.data.ogImage as string,
        banner: matterResult.data.banner as string,
        readTime: matterResult.data.readTime as string,
        modifiedDate: matterResult.data.modifiedDate as string,
      } as PostMeta;
    });

  // Sort posts by date in descending order (newest first)
  return allPostsData.sort((a, b) => {
    const dateOne = new Date(a.date).getTime();
    const dateTwo = new Date(b.date).getTime();
    return dateTwo - dateOne; // Sort descending (newest post first)
  });
};

/**
 * Alias for getAllPosts - supports legacy code
 */
export const getAllBlogPosts = (limit?: number): PostMeta[] => {
  const posts = getAllPosts();
  return limit ? posts.slice(0, limit) : posts;
};

/**
 * Retrieves the full content and metadata for a single post by slug.
 */
export const getPostBySlug = (slug: string): PostData | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // matter returns both data (frontmatter) and content (markdown body)
    const matterResult = matter(fileContents);

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = matterResult.content.split(/\s+/).length;
    const readingTime = `${Math.ceil(wordCount / 200)} min read`;

    return {
      meta: {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        category: matterResult.data.category as string,
        author: matterResult.data.author as string,
        authorType: matterResult.data.authorType as "Person" | "Organization",
        authorUrl: matterResult.data.authorUrl as string,
        tags: matterResult.data.tags as string[],
        summary: matterResult.data.summary as string,
        description: matterResult.data.description as string,
        keywords: matterResult.data.keywords as string,
        canonical: matterResult.data.canonical as string,
        ogImage: matterResult.data.ogImage as string,
        banner: matterResult.data.banner as string,
        readTime: matterResult.data.readTime as string,
        modifiedDate: matterResult.data.modifiedDate as string,
        readingTime,
      },
      content: matterResult.content,
    };
  } catch (error) {
    // If file is not found, return null to trigger Next.js notFound()
    return null;
  }
};

/**
 * Generate JSON-LD schema for a blog post
 */
export const generateBlogJsonLd = (post: PostMeta, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Wolves & Company",
    },
    image: post.ogImage || "/og-image.webp",
    url: url,
    description: post.summary || "",
    keywords: post.tags?.join(", ") || "",
  };
};

