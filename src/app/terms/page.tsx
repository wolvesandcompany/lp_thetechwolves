import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Terms and Conditions - Service Agreement & Legal Terms',
  description: 'Review the terms and conditions for using Wolves & Company services. Legal agreement covering service usage, responsibilities, and contractual obligations.',
  path: '/terms',
  keywords: [
    'terms and conditions',
    'service agreement',
    'legal terms',
    'user agreement',
    'service terms',
    'contractual obligations',
    'usage policy',
    'service conditions',
    'legal agreement',
    'terms of service'
  ],
});

export default function TermsPage() {
  // Breadcrumb structured data
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Terms and Conditions', url: '/terms' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-neutral-800 dark:text-neutral-200">
      {/* SEO: Structured Data */}
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the services provided by Wolves and Company
              ("we," "our," or "the Company"), you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions ("Terms"). If you do not agree to these Terms, please
              do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Services Description
            </h2>
            <p className="text-gray-600 mb-4">
              2.1. We provide professional software development, web
              development, mobile application development, UI/UX design, and
              related consulting services.
            </p>
            <p className="text-gray-600 mb-4">
              2.2. The specific scope, deliverables, timeline, and pricing of
              services will be detailed in individual project agreements or
              statements of work (SOW).
            </p>
            <p className="text-gray-600 mb-4">
              2.3. We reserve the right to modify, suspend, or discontinue any
              aspect of our services with reasonable notice to clients.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Client Obligations
            </h2>
            <p className="text-gray-600 mb-4">
              3.1. Clients agree to provide accurate, complete, and updated
              information necessary for service delivery.
            </p>
            <p className="text-gray-600 mb-4">
              3.2. Clients shall maintain the confidentiality of any access
              credentials provided by the Company.
            </p>
            <p className="text-gray-600 mb-4">
              3.3. Clients are responsible for obtaining and maintaining any
              necessary hardware, software, and network connections required to
              access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 mb-4">
              4.1. Upon full payment of agreed fees, clients will receive
              ownership rights to the final deliverables as specified in the
              project agreement.
            </p>
            <p className="text-gray-600 mb-4">
              4.2. The Company retains ownership of all pre-existing
              intellectual property, including frameworks, tools, methodologies,
              and generic components used in development.
            </p>
            <p className="text-gray-600 mb-4">
              4.3. Any third-party materials used in the deliverables will be
              subject to their respective licenses and terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-600 mb-4">
              5.1. Payment schedules, amounts, and methods will be specified in
              individual project agreements.
            </p>
            <p className="text-gray-600 mb-4">
              5.2. All fees are exclusive of applicable taxes, including GST,
              which will be charged as per Indian tax laws.
            </p>
            <p className="text-gray-600 mb-4">
              5.3. Late payments will incur interest at 18% per annum or the
              maximum rate permitted by law.
            </p>
            <p className="text-gray-600 mb-4">
              5.4. The Company reserves the right to suspend services for
              accounts with outstanding payments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Confidentiality and Data Protection
            </h2>
            <p className="text-gray-600 mb-4">
              6.1. We maintain strict confidentiality of all client information
              in accordance with the Indian Information Technology Act, 2000.
            </p>
            <p className="text-gray-600 mb-4">
              6.2. Client data will be processed and stored in compliance with
              applicable data protection laws.
            </p>
            <p className="text-gray-600 mb-4">
              6.3. We implement industry-standard security measures to protect
              client information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              7.1. The Company's liability shall be limited to the total amount
              paid by the client for the specific project in question.
            </p>
            <p className="text-gray-600 mb-4">
              7.2. We are not liable for any indirect, incidental, special, or
              consequential damages.
            </p>
            <p className="text-gray-600 mb-4">
              7.3. Force majeure events shall excuse performance under these
              Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Dispute Resolution
            </h2>
            <p className="text-gray-600 mb-4">
              8.1. Any disputes shall first be attempted to be resolved through
              good-faith negotiations.
            </p>
            <p className="text-gray-600 mb-4">
              8.2. Unresolved disputes shall be settled through arbitration in
              Mumbai, India, under the Indian Arbitration and Conciliation Act,
              1996.
            </p>
            <p className="text-gray-600 mb-4">
              8.3. The arbitration proceedings shall be conducted in English by
              a single arbitrator.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms are governed by and construed in accordance with the
              laws of India. Any legal proceedings shall be subject to the
              exclusive jurisdiction of courts in Mumbai, India.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            For any questions or concerns regarding these Terms and Conditions,
            please contact our legal department at legal@wolvesandcompany.in or
            call us at +91-9167296007
          </p>
        </div>
      </div>
    </main>
  );
}
