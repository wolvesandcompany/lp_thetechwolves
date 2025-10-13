import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy - Data Protection & Security',
  description: 'Learn how Wolves & Company protects your personal information and data. Comprehensive privacy policy covering data collection, usage, and your rights under applicable laws.',
  path: '/privacy',
  keywords: [
    'privacy policy',
    'data protection',
    'information security',
    'personal information',
    'data rights',
    'GDPR compliance',
    'privacy rights',
    'data collection',
    'information usage',
    'data security'
  ],
});

export default function PrivacyPolicy() {
  // Breadcrumb structured data
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-neutral-800 dark:text-neutral-200">
      {/* SEO: Structured Data */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              Wolves and Company ("we," "our," or "the Company") is committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information in accordance with the
              Information Technology Act, 2000 and Information Technology
              (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              2.1. Personal Information:
              <br />- Name, email address, phone number
              <br />- Business information
              <br />- Payment details
              <br />- Communication preferences
            </p>
            <p className="text-gray-600 mb-4">
              2.2. Sensitive Personal Information:
              <br />- Financial information
              <br />- Passwords
              <br />- Any other sensitive information as defined under Indian
              law
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Legal Basis for Processing
            </h2>
            <p className="text-gray-600 mb-4">
              We process your personal information in accordance with Section
              43A of the Information Technology Act, 2000 and associated rules.
              Our processing is based on:
              <br />- Your consent
              <br />- Contractual necessity
              <br />- Legal obligations
              <br />- Legitimate business interests
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Data Security Measures
            </h2>
            <p className="text-gray-600 mb-4">
              4.1. We implement reasonable security practices and procedures as
              prescribed under Rule 8 of the SPDI Rules, including:
              <br />- Encryption of sensitive data
              <br />- Access controls and authentication
              <br />- Regular security audits
              <br />- Employee training on data protection
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Retention and Disposal
            </h2>
            <p className="text-gray-600 mb-4">
              5.1. We retain personal information only for as long as necessary
              for the purposes for which it was collected.
            </p>
            <p className="text-gray-600 mb-4">
              5.2. When personal information is no longer needed, it is securely
              deleted or anonymized in accordance with our data retention
              policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Under Indian law, you have the right to:
              <br />- Access your personal information
              <br />- Correct inaccurate information
              <br />- Withdraw consent
              <br />- Request deletion of your information
              <br />- File complaints with relevant authorities
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Data Transfers
            </h2>
            <p className="text-gray-600 mb-4">
              7.1. Any transfer of sensitive personal data outside India will be
              carried out only if:
              <br />- The receiving country ensures an adequate level of
              protection
              <br />- You have consented to the transfer
              <br />- The transfer is necessary for the performance of a
              contract
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For any privacy-related queries or to exercise your rights, please
              contact our Data Protection Officer at:
              <br />
              Email: privacy@wolvesandcompany.in
              <br />
              Address: Mumbai, India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
