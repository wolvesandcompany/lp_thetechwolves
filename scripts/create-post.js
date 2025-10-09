#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// CLI script to create new blog posts with proper frontmatter template
// Usage: npm run create:post

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Blog post template with all required frontmatter fields
const getPostTemplate = (title, slug, summary) => `---
title: "${title}"
date: "${new Date().toISOString().split('T')[0]}"
author: "Wolves & Company"
tags: ["Business", "Technology"]
summary: "${summary}"
canonical: "/blog/${slug}"
ogImage: "/images/blog/${slug}-og.webp"
---

# ${title}

Start writing your blog post content here...

## Key Takeaways

- First key takeaway
- Second key takeaway  
- Third key takeaway

## Introduction

Write your introduction here...

## Main Content Sections

Add your main content sections here with proper H2 and H3 headings for better SEO and AI/LLM understanding.

## How to Get Started

### Step 1: First Step

Describe the first step in detail.

### Step 2: Second Step

Describe the second step in detail.

### Step 3: Third Step

Describe the third step in detail.

## FAQ

### What is the main benefit?

Answer to the first frequently asked question.

### How long does implementation take?

Answer to the second frequently asked question.

### What are the costs involved?

Answer to the third frequently asked question.

## Conclusion

Summarize your post and include calls-to-action linking to [services](/services) or [contact](/contact) pages.

---

*Need help implementing these strategies? [Contact our team](/contact) for expert guidance on your digital transformation journey.*
`;

// Utility function to create URL-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Interactive CLI for creating new posts
async function createNewPost() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  try {
    console.log('🐺 Wolves & Company Blog Post Generator\n');
    
    const title = await question('Enter the blog post title: ');
    if (!title.trim()) {
      console.log('❌ Title is required!');
      rl.close();
      return;
    }

    const summary = await question('Enter a brief summary (for meta description): ');
    if (!summary.trim()) {
      console.log('❌ Summary is required for SEO!');
      rl.close();
      return;
    }

    if (summary.length > 155) {
      console.log('⚠️  Warning: Summary is longer than 155 characters (recommended for meta descriptions)');
    }

    const slug = createSlug(title);
    const fileName = `${slug}.md`;
    const filePath = path.join(BLOG_DIR, fileName);

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      const overwrite = await question(`File ${fileName} already exists. Overwrite? (y/N): `);
      if (overwrite.toLowerCase() !== 'y' && overwrite.toLowerCase() !== 'yes') {
        console.log('❌ Post creation cancelled.');
        rl.close();
        return;
      }
    }

    // Generate post content from template
    const postContent = getPostTemplate(title, slug, summary);

    // Write the file
    fs.writeFileSync(filePath, postContent);

    console.log('\n✅ Blog post created successfully!');
    console.log(`📁 File: ${filePath}`);
    console.log(`🔗 URL: /blog/${slug}`);
    console.log(`📝 Slug: ${slug}`);
    console.log('\n📋 Next steps:');
    console.log('1. Edit the content in your favorite editor');
    console.log('2. Update the tags array in frontmatter');
    console.log('3. Add an OG image at /public/images/blog/' + slug + '-og.webp');
    console.log('4. Run "npm run build:blog" to regenerate RSS and sitemap');

  } catch (error) {
    console.error('❌ Error creating blog post:', error);
  } finally {
    rl.close();
  }
}

// CLI argument handling
if (process.argv.length > 2) {
  const command = process.argv[2];
  switch (command) {
    case '--help':
    case '-h':
      console.log('🐺 Wolves & Company Blog Post Generator');
      console.log('\nUsage:');
      console.log('  npm run create:post          Interactive mode');
      console.log('  npm run create:post --help   Show this help');
      break;
    default:
      console.log('Unknown command. Use --help for usage information.');
  }
} else {
  createNewPost();
}

module.exports = { createNewPost };