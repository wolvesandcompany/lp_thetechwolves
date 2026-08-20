import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";
import { CursorGate } from "@/components/CursorGate";
import { DesignSystemProvider } from "@/components/DesignSystemProvider";
import { DesignSystemSwitcher } from "@/components/DesignSystemSwitcher";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";
import { generateMetadata } from "@/lib/seo";
import "./globals.css";
import "./design-systems.css";

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
    <html lang="en" className="dark" prefix="og: http://ogp.me/ns#">
      <head>
        <link rel="alternate" type="text/plain" title="llms.txt (AI summary)" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="llms-full.txt (AI full content)" href="/llms-full.txt" />
        <link rel="alternate" type="application/rss+xml" title="The Tech Wolves Blog RSS" href="/rss.xml" />
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KTX1NHREPK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KTX1NHREPK');`}
        </Script>
        <div id="root"></div>
        <DesignSystemProvider>
          <CursorGate />
          <PerformanceMonitor />
          <Analytics />
          <Toaster richColors position="bottom-right" />
          {children}
          <WhatsAppButton />
          <DesignSystemSwitcher />
          <ScrollDepthTracker />
        </DesignSystemProvider>
      </body>
    </html>
  );
}
