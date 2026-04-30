"use client";
import Image from "next/image";

const LOGOS = [
  { src: "/dextor.avif", alt: "Dextor" },
  { src: "/client-glide.avif", alt: "Client Glide" },
  { src: "/danish-xerox.avif", alt: "Danish Xerox" },
  { src: "/golden-gymnasium.avif", alt: "Golden Gymnasium" },
];

export default function LogoMarquee() {
  const track = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="Trusted by"
      className="relative w-full overflow-hidden bg-[#050505] py-14"
    >
      <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
        Trusted by teams worldwide
      </p>

      <div
        className="relative w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-[tw-logo-track_36s_linear_infinite] items-center gap-12 px-6 motion-reduce:animate-none">
          {track.map((logo, i) => (
            <div
              key={i}
              className="tw-glass tw-light-leak group relative flex h-20 w-[180px] shrink-0 items-center justify-center rounded-2xl px-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={48}
                className="max-h-12 w-auto object-contain opacity-50 transition-all duration-500 [filter:grayscale(1)_brightness(0)_invert(1)] group-hover:opacity-100 group-hover:[filter:none]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes tw-logo-track {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
