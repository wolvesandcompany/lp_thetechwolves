// next.config.js
import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Output configuration: 'standalone' is for the Docker/droplet deploy
  // (self-hosted node server.js). Vercel packages the app itself and
  // explicitly recommends against 'standalone' there, so skip it when
  // building on Vercel (VERCEL=1 is set automatically in that environment).
  ...(process.env.VERCEL ? {} : { output: 'standalone' as const }),

  // Pin the file-tracing root to this project. Without this, Next.js walks
  // up looking for a lockfile and can lock onto an unrelated one in a
  // parent directory (varies per machine), which nests .next/standalone
  // output under extra path segments and breaks `node server.js` in Docker.
  outputFileTracingRoot: process.cwd(),

  // ✅ TypeScript & ESLint settings
  typescript: {
    ignoreBuildErrors: true,
  },
  

  // ✅ Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Compression
  compress: true,

  // ✅ Performance optimizations
  poweredByHeader: false,
  generateEtags: false,

  // ✅ Experimental: optimize imports for specific packages
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "motion"],
  },

  // ✅ Webpack customizations
  webpack: (config, { dev, isServer }) => {
    // Important: Don't bundle fs, path, etc. on client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
            name: "motion",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

// ✅ Wrap with bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
