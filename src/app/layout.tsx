import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import { generateMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata({
  title: "The Tech Wolves - AI Automation & Digital Transformation Solutions",
  description: "Transform your business with AI automation, custom software development, and digital solutions. Specialized in SME growth, process optimization, and cutting-edge technology implementation.",
  keywords: [
    "Web Development",
    "UI/UX Design", 
    "Mobile Apps",
    "Custom Software",
    "Digital Transformation",
    "Startup Solutions",
    "App Development",
    "Website Design",
    "Software Agency",
    "India",
    "SaaS",
    "Product Design",
    "Branding",
    "Tech Agency",
    "Automation",
    "Business Automation",
    "Workflow Automation",
    "Process Automation",
    "Business Process Automation",
    "Automation Solutions",
    "AI implementation",
    "machine learning",
    "business intelligence",
    "cloud solutions",
    "enterprise software"
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <head>
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SITE_VERIFICATION_TOKEN"
        />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_TOKEN" />
        <link rel="canonical" href="https://thetechwolves.com/" />
        <meta name="author" content="The Tech Wolves" />
        <meta name="copyright" content="The Tech Wolves" />
        <meta name="distribution" content="global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Tech Wolves" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://thetechwolves.com/" />
        <meta
          property="og:image:alt"
          content="The Tech Wolves Open Graph Image - Web & App Development, UI/UX Design, Automation, Custom Software"
        />
        <meta name="twitter:site" content="@thetechwolves" />
        <meta name="twitter:creator" content="@thetechwolves" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="root"></div>
        <PerformanceMonitor />
        <Analytics />
        <Toaster richColors position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
