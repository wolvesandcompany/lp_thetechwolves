import React from "react";
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

// Marquee component
function Marquee({
  children,
  reverse = false,
  duration = 30,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <div
      className="relative overflow-hidden w-full py-2"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >
      {/* Track */}
      <div
        className="flex gap-8 items-center whitespace-nowrap will-change-transform"
        style={{
          animation: `${
            reverse ? "marquee-reverse" : "marquee"
          } ${duration}s linear infinite`,
        }}
      >
        <div className="flex gap-8 items-center">{children}</div>
        <div className="flex gap-8 items-center">{children}</div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function TechStack() {
  const chunkSize = Math.ceil(STACK_ITEMS.length / 3);
  const rows = [
    STACK_ITEMS.slice(0, chunkSize),
    STACK_ITEMS.slice(chunkSize, chunkSize * 2),
    STACK_ITEMS.slice(chunkSize * 2),
  ];

  return (
    <section
      id="tech-stack"
      className="w-full py-16 sm:py-20 md:py-32 lg:py-40 bg-neutral-950 dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-300 max-w-2xl mx-auto">
            Tools and platforms we use to build fast, scalable experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <Marquee duration={28}>
            {rows[0].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] px-2 sm:px-4 md:px-6"
              >
                <div className="relative h-8 sm:h-10 md:h-12 w-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.name} logo`}
                    width={160}
                    height={48}
                    className="object-contain max-h-8 sm:max-h-10 md:max-h-12 w-auto opacity-90 dark:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee reverse duration={34}>
            {rows[1].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] px-2 sm:px-4 md:px-6"
              >
                <div className="relative h-8 sm:h-10 md:h-12 w-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.name} logo`}
                    width={160}
                    height={48}
                    className="object-contain max-h-8 sm:max-h-10 md:max-h-12 w-auto opacity-90 dark:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee duration={26}>
            {rows[2].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] px-2 sm:px-4 md:px-6"
              >
                <div className="relative h-8 sm:h-10 md:h-12 w-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.name} logo`}
                    width={160}
                    height={48}
                    className="object-contain max-h-8 sm:max-h-10 md:max-h-12 w-auto opacity-90 dark:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
