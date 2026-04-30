import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog/utils";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="tw-glass tw-light-leak group relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-[1px]">
      {post.ogImage && (
        <Link
          href={`/blog/${post.slug}`}
          className="tw-focus relative block aspect-video w-full overflow-hidden"
        >
          <img
            src={post.ogImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/45">
          <time dateTime={post.date} className="text-emerald-400/90">
            {formattedDate}
          </time>
          <span className="text-white/30">·</span>
          <span>{post.readingTime} min read</span>
          <span className="text-white/30">·</span>
          <span>{post.author}</span>
        </div>

        <h2 className="text-lg font-medium tracking-[-0.02em] text-white md:text-xl">
          <Link
            href={`/blog/${post.slug}`}
            className="tw-focus transition-colors duration-200 hover:text-emerald-300"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-[1.6] text-white/65">
          {post.summary}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/65"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="tw-focus mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
        >
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
