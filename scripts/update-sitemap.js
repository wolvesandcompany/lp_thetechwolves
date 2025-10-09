const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Sitemap update script to include blog routes
// This runs at build time to ensure search engines can discover all blog content

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wolvesandcompany.com';
const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const OUTPUT_PATH = path.join(process.cwd(), 'public/sitemap.xml');

function updateSitemap() {
  console.log('Updating sitemap with blog routes...');

  try {
    // Static routes for the main site
    const staticRoutes = [
      { url: '/', changefreq: 'weekly', priority: '1.0' },
      { url: '/services', changefreq: 'monthly', priority: '0.8' },
      { url: '/contact', changefreq: 'monthly', priority: '0.7' },
      { url: '/team', changefreq: 'monthly', priority: '0.6' },
      { url: '/templates', changefreq: 'weekly', priority: '0.7' },
      { url: '/case-study', changefreq: 'monthly', priority: '0.7' },
      { url: '/blog', changefreq: 'weekly', priority: '0.9' },
      { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
      { url: '/terms', changefreq: 'yearly', priority: '0.3' },
      { url: '/cookies', changefreq: 'yearly', priority: '0.3' },
    ];

    let blogRoutes = [];

    // Check if blog directory exists and get blog routes
    if (fs.existsSync(BLOG_DIR)) {
      const files = fs.readdirSync(BLOG_DIR)
        .filter(file => file.endsWith('.md'));

      blogRoutes = files.map(file => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        const slug = file.replace('.md', '');

        return {
          url: `/blog/${slug}`,
          changefreq: 'monthly',
          priority: '0.8',
          lastmod: data.date ? new Date(data.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        };
      });
    }

    // Combine all routes
    const allRoutes = [...staticRoutes, ...blogRoutes];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    // Write sitemap to public directory
    fs.writeFileSync(OUTPUT_PATH, sitemap);
    
    console.log(`✅ Sitemap updated successfully with ${allRoutes.length} routes`);
    console.log(`📍 Blog routes added: ${blogRoutes.length}`);
    console.log(`📍 Sitemap available at: ${SITE_URL}/sitemap.xml`);

  } catch (error) {
    console.error('❌ Error updating sitemap:', error);
    process.exit(1);
  }
}

// Run the sitemap update
if (require.main === module) {
  updateSitemap();
}

module.exports = { updateSitemap };