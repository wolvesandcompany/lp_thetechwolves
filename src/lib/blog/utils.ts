import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Blog post interface for type safety and SEO metadata structure
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  canonical: string;
  ogImage: string;
  content: string;
  readingTime: number;
}

// Get the blog content directory path
const blogDirectory = path.join(process.cwd(), 'content/blog');

// Ensure blog directory exists
if (!fs.existsSync(blogDirectory)) {
  fs.mkdirSync(blogDirectory, { recursive: true });
}

// Calculate reading time based on average reading speed (200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get all blog post slugs for static generation
export function getBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(blogDirectory);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    console.warn('Blog directory not found, returning empty slugs array');
    return [];
  }
}

// Get blog post by slug with full content and metadata
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate required frontmatter fields for SEO
    const requiredFields = ['title', 'date', 'author', 'summary'];
    for (const field of requiredFields) {
      if (!data[field]) {
        console.warn(`Missing required field '${field}' in ${slug}.md`);
      }
    }

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Wolves & Company',
      tags: data.tags || [],
      summary: data.summary || '',
      canonical: data.canonical || `/blog/${slug}`,
      ogImage: data.ogImage || '/og-image.webp',
      content,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}


// Get all blog posts with pagination support for blog listing page
export function getAllBlogPosts(limit?: number): BlogPost[] {
  try {
    const slugs = getBlogSlugs();
    const posts = slugs
      .map(slug => getBlogPost(slug))
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return limit ? posts.slice(0, limit) : posts;
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

// Alias for compatibility with sitemap.ts and rss.xml/route.ts
export const getAllPosts = getAllBlogPosts;

// Extract FAQ sections from markdown content for structured data
export function extractFAQ(content: string): Array<{ question: string; answer: string }> {
  const faqRegex = /### (.+?\?)\s*\n\n(.+?)(?=\n###|\n##|$)/g;
  const faqs: Array<{ question: string; answer: string }> = [];
  let match;

  while ((match = faqRegex.exec(content)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim().replace(/\n/g, ' '),
    });
  }

  return faqs;
}

// Extract HowTo steps from markdown content for structured data
export function extractHowToSteps(content: string): Array<{ name: string; text: string }> {
  const stepRegex = /### Step \d+: (.+?)\s*\n\n(.+?)(?=\n###|\n##|$)/g;
  const steps: Array<{ name: string; text: string }> = [];
  let match;

  while ((match = stepRegex.exec(content)) !== null) {
    steps.push({
      name: match[1].trim(),
      text: match[2].trim().replace(/\n/g, ' '),
    });
  }

  return steps;
}

// Generate JSON-LD structured data for blog posts (SEO optimization)
export function generateBlogJsonLd(post: BlogPost, url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wolvesandcompany.com';
  const fullUrl = `${baseUrl}${url}`;
  
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wolves & Company',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/wolf.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: fullUrl,
    url: fullUrl,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}${post.ogImage}`,
      alt: post.title,
    },
    articleSection: 'Technology',
    keywords: post.tags.join(', '),
  };

  // Add FAQ structured data if FAQs are present
  const faqs = extractFAQ(post.content);
  if (faqs.length > 0) {
    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
    
    return [article, faqPage];
  }

  // Add HowTo structured data if steps are present
  const steps = extractHowToSteps(post.content);
  if (steps.length > 0) {
    const howTo = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: post.title,
      description: post.summary,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    };
    
    return [article, howTo];
  }

  return [article];
}