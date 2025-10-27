import { NextResponse } from "next/server";
import { getAllBlogPosts, generateBlogJsonLd } from "@/lib/blog/utils";

export async function GET() {
  const posts = getAllBlogPosts();
  const basePath = "/blog/";

  const json = posts.map((post) => {
    const url = `${basePath}${post.slug}`;
    const jsonLd = generateBlogJsonLd(post, url);
    return {
      slug: post.slug,
      title: post.title,
      date: post.date,
      author: post.author,
      tags: post.tags,
      summary: post.summary,
      canonical: post.canonical,
      ogImage: post.ogImage,
      readingTime: post.readingTime,
      url,
      jsonLd,
    };
  });

  return NextResponse.json({ posts: json });
}
