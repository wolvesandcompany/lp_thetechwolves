import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { getBlogPost, getBlogSlugs, generateBlogJsonLd } from "@/lib/blog/utils";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { SiteNavbar } from "@/components/SiteNavbar";
import { Footer } from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";

  return {
    title: `${post.title} | The Tech Wolves Blog`,
    description: post.summary,
    alternates: { canonical: `${baseUrl}${post.canonical}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${baseUrl}${post.canonical}`,
      siteName: "The Tech Wolves",
      images: [
        {
          url: post.ogImage.startsWith("http") ? post.ogImage : `${baseUrl}${post.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.ogImage.startsWith("http") ? post.ogImage : `${baseUrl}${post.ogImage}`],
    },
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const structuredData = generateBlogJsonLd(post, `/blog/${slug}`);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thetechwolves.com";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="tw-noise relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <SiteNavbar />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-32 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[140px]"
        />

        <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-40">
          <nav className="mb-10 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/45">
            <Link href="/" className="tw-focus transition-colors hover:text-white">
              Home
            </Link>
            <span className="text-white/25">/</span>
            <Link href="/blog" className="tw-focus transition-colors hover:text-white">
              Blog
            </Link>
            <span className="text-white/25">/</span>
            <span className="line-clamp-1 normal-case tracking-normal text-white/65">
              {post.title}
            </span>
          </nav>

          <h1 className="text-3xl font-medium leading-[1.1] tracking-[-0.04em] md:text-5xl">
            <span className="tw-display-gradient">{post.title}</span>
          </h1>

          <div className="tw-glass tw-light-leak mt-8 rounded-2xl p-5 md:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-400/90">
              TL;DR
            </p>
            <p className="mt-2 max-w-[65ch] text-base leading-[1.6] text-white/80 md:text-lg">
              {post.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-white/[0.06] py-5 text-sm text-white/55">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-emerald-400" />
              <time dateTime={post.date}>Published {formattedDate}</time>
            </span>
            {post.modified && post.modified !== post.date && (
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                <time dateTime={post.modified}>
                  Updated {new Date(post.modified).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-emerald-400" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              {post.readingTime} min read · {post.wordCount.toLocaleString()} words
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-invert mt-12 max-w-none prose-headings:font-medium prose-headings:tracking-[-0.02em] prose-headings:text-white prose-p:text-white/75 prose-p:leading-[1.7] prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-300 prose-pre:bg-white/[0.02] prose-pre:tw-light-leak prose-pre:rounded-xl prose-li:text-white/75">
            <MarkdownRenderer content={post.content} />
          </div>

          <footer className="mt-16 border-t border-white/[0.06] pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-white/55">
                Published <span className="text-white">{formattedDate}</span> by{" "}
                <span className="text-emerald-400">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.15em] text-white/45">Share</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${baseUrl}${post.canonical}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-focus tw-glass tw-light-leak inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:text-emerald-400"
                >
                  <Twitter className="h-3 w-3" />
                  Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${baseUrl}${post.canonical}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-focus tw-glass tw-light-leak inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:text-emerald-400"
                >
                  <Linkedin className="h-3 w-3" />
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>

          <section className="mt-16">
            <div className="tw-glass tw-light-leak relative overflow-hidden rounded-3xl p-10 text-center md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.08),transparent_60%)]"
              />
              <div className="relative">
                <h2 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                  <span className="tw-display-gradient">Ready to transform your business?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-[55ch] text-sm leading-[1.6] text-white/65">
                  Get expert guidance on AI automation and digital transformation.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="tw-focus group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050505] transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)]"
                  >
                    Contact our team
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="/blog"
                    className="tw-focus inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
                  >
                    More insights
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
