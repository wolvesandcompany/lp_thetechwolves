const RSS = require('rss');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// RSS feed generation script for blog posts
// This runs at build time to create static RSS feed for SEO

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://thetechwolves.com';
const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const OUTPUT_PATH = path.join(process.cwd(), 'public/rss.xml');

function generateRSSFeed() {
  console.log('Generating RSS feed...');

  // Create RSS feed configuration
  const feed = new RSS({
    title: 'The Tech Wolves Blog',
    description: 'Expert insights on AI automation, digital transformation, and business process optimization for SMEs and startups.',
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    image_url: `${SITE_URL}/wolf.png`,
    managingEditor: 'team@thetechwolves.com (The Tech Wolves)',
    webMaster: 'team@thetechwolves.com (The Tech Wolves)',
    copyright: `© ${new Date().getFullYear()} The Tech Wolves`,
    language: 'en-US',
    categories: ['Technology', 'AI', 'Automation', 'Business', 'Digital Transformation'],
    pubDate: new Date().toUTCString(),
    ttl: '60', // Cache for 60 minutes
  });

  try {
    // Check if blog directory exists
    if (!fs.existsSync(BLOG_DIR)) {
      console.warn('Blog directory not found, creating empty RSS feed');
      fs.writeFileSync(OUTPUT_PATH, feed.xml({ indent: true }));
      return;
    }

    // Read all markdown files from blog directory
    const files = fs.readdirSync(BLOG_DIR)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        const slug = file.replace('.md', '');

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          author: data.author || 'The Tech Wolves',
          summary: data.summary || '',
          tags: data.tags || [],
          content: content.substring(0, 500) + '...', // Truncate content for RSS
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Add each blog post to RSS feed
    files.forEach(post => {
      feed.item({
        title: post.title,
        description: post.summary || post.content,
        url: `${SITE_URL}/blog/${post.slug}`,
        guid: `${SITE_URL}/blog/${post.slug}`,
        categories: post.tags,
        author: post.author,
        date: new Date(post.date),
        enclosure: {
          url: `${SITE_URL}/og-image.webp`,
          type: 'image/webp'
        }
      });
    });

    // Write RSS feed to public directory
    const rssXml = feed.xml({ indent: true });
    fs.writeFileSync(OUTPUT_PATH, rssXml);
    
    console.log(`✅ RSS feed generated successfully with ${files.length} posts`);
    console.log(`📍 Feed available at: ${SITE_URL}/rss.xml`);

  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

// Run the RSS generation
if (require.main === module) {
  generateRSSFeed();
}

module.exports = { generateRSSFeed };