import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/utils";
import { IN_HOUSE_TEMPLATES } from "@/lib/templates-data";
import { SERVICES } from "@/lib/services-data";
import { INDUSTRIES } from "@/lib/industries-data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Generate blog post URLs
  const blogUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modified || post.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // In-house template pages (gallery + each live demo)
  const templateUrls = [
    {
      url: `${SITE_URL}/templates/library`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
    ...IN_HOUSE_TEMPLATES.map((t) => ({
      url: `${SITE_URL}/templates/${t.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  // Static pages
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.date || new Date().toISOString(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-study`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/templates`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Service pages (high commercial-intent — priority above blog)
  const serviceUrls = [
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];

  // Industry pages
  const industryUrls = [
    {
      url: `${SITE_URL}/industries`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...INDUSTRIES.map((i) => ({
      url: `${SITE_URL}/industries/${i.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  // Lead-magnet tool
  const toolUrls = [
    {
      url: `${SITE_URL}/tools/ai-automation-cost-calculator`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [
    ...staticPages,
    ...serviceUrls,
    ...industryUrls,
    ...toolUrls,
    ...templateUrls,
    ...blogUrls,
  ];
}
