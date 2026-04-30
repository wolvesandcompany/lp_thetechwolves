import Image from "next/image";

const STACK_ITEMS: { name: string; icon: string }[] = [
  { name: "Next.js", icon: "/icons/nextjs_logo_light.svg" },
  { name: "React", icon: "/icons/react_wordmark_light.svg" },
  { name: "Vite", icon: "/icons/vitejs.svg" },
  { name: "Express.js", icon: "/icons/expressjs.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb-wordmark.svg" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "Stripe", icon: "/icons/stripe.svg" },
  { name: "Firebase", icon: "/icons/firebase-wordmark.svg" },
  { name: "Supabase", icon: "/icons/Supabase_wordmark_light.svg" },
  { name: "Google Cloud", icon: "/icons/google-cloud.svg" },
  { name: "Vercel", icon: "/icons/vercel_wordmark.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Angular", icon: "/icons/angular.svg" },
  { name: "Shopify", icon: "/icons/shopify-wordmark-light.svg" },
  { name: "n8n", icon: "/icons/n8n.svg" },
  { name: "Lovable", icon: "/icons/lovable.svg" },
];

function Row({
  items,
  duration,
  reverse = false,
}: {
  items: typeof STACK_ITEMS;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-10 motion-reduce:!animate-none"
        style={{
          animation: `${reverse ? "tw-tech-rev" : "tw-tech-fwd"} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((it, i) => (
          <div
            key={`${it.name}-${i}`}
            className="tw-glass tw-light-leak group flex h-16 w-[150px] shrink-0 items-center justify-center rounded-2xl px-5"
          >
            <Image
              src={it.icon}
              alt={`${it.name} logo`}
              width={150}
              height={40}
              className="max-h-9 w-auto object-contain opacity-50 transition-all duration-500 [filter:grayscale(1)_brightness(0)_invert(1)] group-hover:opacity-100 group-hover:[filter:none]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tw-tech-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes tw-tech-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default function TechStack() {
  const chunk = Math.ceil(STACK_ITEMS.length / 3);
  const rows = [
    STACK_ITEMS.slice(0, chunk),
    STACK_ITEMS.slice(chunk, chunk * 2),
    STACK_ITEMS.slice(chunk * 2),
  ];

  return (
    <section
      id="tech-stack"
      className="tw-noise relative w-full overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/90">
            Tech stack
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">
            <span className="tw-display-gradient">Tools we ship with.</span>
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-[1.6] text-white/65">
            Modern, battle-tested. Picked for speed of iteration and longevity.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Row items={rows[0]} duration={32} />
          <Row items={rows[1]} duration={40} reverse />
          <Row items={rows[2]} duration={28} />
        </div>
      </div>
    </section>
  );
}
