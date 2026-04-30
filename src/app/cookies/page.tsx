import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Cookie Policy - Website Cookies & Tracking Information',
  description: 'Learn about how The Tech Wolves uses cookies and tracking technologies. Cookie policy explaining data collection, usage, and your control options.',
  path: '/cookies',
  keywords: [
    'cookie policy',
    'website cookies',
    'tracking information',
    'data collection',
    'privacy settings',
    'cookie consent',
    'tracking technologies',
    'website analytics',
    'user preferences',
    'cookie management'
  ],
});

export default function CookiesPolicy() {
  // Breadcrumb structured data
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy', url: '/cookies' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-neutral-800 dark:text-neutral-200">
      {/* SEO: Structured Data */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. What Are Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit our website. They are widely used to
              make websites work more efficiently and provide useful information
              to website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              We use cookies for the following purposes:
              <br />- Essential cookies: Required for the website to function
              properly
              <br />- Analytics cookies: To understand how visitors interact
              with our website
              <br />- Preference cookies: To remember your settings and
              preferences
              <br />- Marketing cookies: To deliver more relevant advertisements
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Types of Cookies We Use
            </h2>
            <p className="text-gray-600 mb-4">
              3.1. Session Cookies:
              <br />
              These temporary cookies are erased when you close your browser.
            </p>
            <p className="text-gray-600 mb-4">
              3.2. Persistent Cookies:
              <br />
              These remain on your device until they expire or you delete them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Managing Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in various ways:
              <br />- Browser settings: You can modify your browser settings to
              accept or reject cookies
              <br />- Third-party tools: You can use various tools to manage
              your privacy preferences
              <br />- Our cookie settings: You can adjust your preferences
              through our cookie consent banner
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Third-Party Cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Some cookies are placed by third-party services that appear on our
              pages. We do not control these third-party cookies and recommend
              reviewing the privacy policies of these third parties for more
              information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Updates to This Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date. Please
              check back periodically to stay informed about our use of cookies.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
