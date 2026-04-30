import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy - Data Protection & Your Rights',
  description: 'The Tech Wolves Privacy Policy. Learn how we collect, use, and protect your data. GDPR and CCPA compliant. Your privacy rights explained clearly.',
  path: '/privacy',
  keywords: [
    'privacy policy',
    'data protection',
    'GDPR',
    'CCPA',
    'personal data',
    'privacy rights',
    'data security',
    'information protection',
    'cookie policy',
    'data processing'
  ],
});

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-neutral-800 dark:text-neutral-200">
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Effective Date: January 1, 2025 &middot; Last Updated: April 30, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">

          {/* 1. Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Tech Wolves (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our clients, website visitors, and partners worldwide. This Privacy Policy describes how we collect, use, store, share, and protect your personal information when you visit our website at thetechwolves.com or engage our services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This policy applies to all individuals who interact with us, regardless of location, and is designed to comply with applicable data protection laws including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable international privacy frameworks.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              2.1 Information You Provide Directly
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Project requirements and communications</li>
              <li>Payment and billing information (processed securely via third-party payment processors)</li>
              <li>Any information you voluntarily provide through forms, emails, or consultations</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>Device information (browser type, operating system, device type)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>IP address and approximate geographic location</li>
              <li>Referral source and search terms</li>
              <li>Cookies and similar tracking technologies (see our <a href="/cookies" className="text-teal-600 dark:text-teal-400 hover:underline">Cookie Policy</a>)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              2.3 Information We Do Not Collect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not knowingly collect sensitive personal information such as racial or ethnic origin, political opinions, religious beliefs, health data, biometric data, or information about minors under the age of 16.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI automation, web development, and consulting services</li>
              <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
              <li><strong>Business Operations:</strong> To process payments, manage contracts, and fulfill legal obligations</li>
              <li><strong>Analytics:</strong> To understand how our website is used and improve user experience</li>
              <li><strong>Marketing:</strong> To send relevant content and updates (only with your explicit consent, and you may opt out at any time)</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues and protect against fraud</li>
            </ul>
          </section>

          {/* 4. Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For individuals in the European Economic Area (EEA), UK, and Switzerland, we process personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
              <li><strong>Contractual Necessity:</strong> Where processing is necessary to perform our obligations under a contract with you</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, provided those interests do not override your fundamental rights</li>
              <li><strong>Legal Obligation:</strong> Where processing is required to comply with applicable laws</li>
            </ul>
          </section>

          {/* 5. Data Sharing & Third Parties */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Data Sharing & Third Parties
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell, rent, or trade your personal information. We may share your data only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our business (e.g., cloud hosting, payment processing, analytics). These providers are contractually bound to protect your data.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice provided</li>
              <li><strong>With Your Consent:</strong> In any other case where you have given explicit permission</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our current service providers include: Vercel (hosting), Google Analytics (website analytics), and Stripe (payment processing). Each maintains their own privacy policies and data protection measures.
            </p>
          </section>

          {/* 6. International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. International Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a globally operating company, your data may be transferred to and processed in countries outside your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Data processing agreements with all service providers</li>
              <li>Compliance with applicable cross-border transfer mechanisms</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We implement industry-standard technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>TLS/SSL encryption for all data in transit</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Role-based access controls and multi-factor authentication</li>
              <li>Secure development practices and code review processes</li>
              <li>Incident response procedures and breach notification protocols</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While we strive to use commercially acceptable means to protect your data, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* 8. Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by law. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Client project data:</strong> Retained for the duration of the engagement plus 3 years</li>
              <li><strong>Financial records:</strong> Retained as required by applicable tax and accounting laws</li>
              <li><strong>Marketing data:</strong> Retained until you withdraw consent or opt out</li>
              <li><strong>Website analytics:</strong> Aggregated and anonymized after 26 months</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When data is no longer needed, it is securely deleted or anonymized so that it can no longer be associated with you.
            </p>
          </section>

          {/* 9. Your Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Your Privacy Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              For All Users
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Additional Rights for EEA/UK Residents (GDPR)
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Restriction:</strong> Request restriction of processing under certain conditions</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time without affecting prior processing</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Additional Rights for California Residents (CCPA/CPRA)
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information collected</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information collected</li>
              <li><strong>Right to Non-Discrimination:</strong> You will not be discriminated against for exercising your privacy rights</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information (note: we do not sell personal information)</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@thetechwolves.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                privacy@thetechwolves.com
              </a>
              . We will respond to your request within 30 days (or sooner if required by applicable law).
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information promptly.
            </p>
          </section>

          {/* 11. Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page and, where appropriate, notify you via email or a prominent notice on our website.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how your data is being handled, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>The Tech Wolves — Privacy Team</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Email:{' '}
                <a href="mailto:privacy@thetechwolves.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  privacy@thetechwolves.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Website:{' '}
                <a href="https://thetechwolves.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  thetechwolves.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
