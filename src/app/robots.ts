import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";

  // We explicitly OPT IN every major AI crawler so our content is discoverable
  // and citable by ChatGPT, Claude, Gemini, Perplexity, Apple Intelligence, etc.
  const aiCrawlers = [
    // OpenAI
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    // Anthropic
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    // Google AI training (separate from regular Googlebot)
    "Google-Extended",
    "GoogleOther",
    // Perplexity
    "PerplexityBot",
    "Perplexity-User",
    // Apple
    "Applebot",
    "Applebot-Extended",
    // Meta
    "Meta-ExternalAgent",
    "FacebookBot",
    // Bytedance / TikTok
    "Bytespider",
    // Common Crawl (used to train many models)
    "CCBot",
    // DuckDuckGo / You.com / others
    "DuckAssistBot",
    "YouBot",
    // Cohere
    "cohere-ai",
    // Mistral
    "MistralAI-User",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
