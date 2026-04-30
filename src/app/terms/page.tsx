import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { StructuredData } from '@/components/StructuredData';

// Generate static metadata for SEO optimization
export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service - Service Agreement & Legal Terms',
  description: 'Review the terms of service for The Tech Wolves. Legal agreement covering service usage, intellectual property, responsibilities, and contractual obligations.',
  path: '/terms',
  keywords: [
    'terms of service',
    'service agreement',
    'legal terms',
    'user agreement',
    'service terms',
    'intellectual property',
    'contractual obligations',
    'terms and conditions',
    'legal agreement',
    'terms of use'
  ],
});

export default function TermsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-neutral-800 dark:text-neutral-200">
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Effective Date: January 1, 2025 &middot; Last Updated: April 30, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">

          {/* 1. Acceptance */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing or using the services provided by The Tech Wolves (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you do not agree to these Terms, please do not use our services or website.
            </p>
          </section>

          {/* 2. Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              2.1. The Tech Wolves provides professional AI automation, software development, web and mobile application development, UI/UX design, and related consulting services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              2.2. The specific scope, deliverables, timeline, milestones, and pricing for each engagement will be defined in a separate Statement of Work (SOW) or project agreement, which shall be incorporated by reference into these Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              2.3. We reserve the right to modify, update, or discontinue any service offering with reasonable prior notice to active clients.
            </p>
          </section>

          {/* 3. Client Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Client Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              3.1. You agree to provide accurate, complete, and timely information, materials, and feedback necessary for us to perform the services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              3.2. You are responsible for maintaining the confidentiality of any credentials, API keys, or access tokens provided to you.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              3.3. You shall ensure that any materials you provide to us do not infringe upon the intellectual property rights of any third party.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              3.4. You are responsible for providing and maintaining your own hardware, software, and internet connectivity required to access our services.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              4.1. <strong>Client Deliverables:</strong> Upon full payment of all agreed fees, you will receive ownership rights to the custom deliverables created specifically for your project as outlined in the applicable SOW.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              4.2. <strong>Pre-Existing IP:</strong> We retain all rights to our pre-existing intellectual property, including but not limited to proprietary frameworks, libraries, tools, methodologies, and reusable components.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              4.3. <strong>Third-Party Materials:</strong> Any third-party software, libraries, or materials incorporated into deliverables remain subject to their respective open-source or commercial licenses.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              4.4. <strong>Portfolio Rights:</strong> Unless otherwise agreed in writing, we retain the right to reference the general nature of work performed (without disclosing confidential information) in our portfolio and marketing materials.
            </p>
          </section>

          {/* 5. Payment */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Payment Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              5.1. Payment schedules, amounts, and accepted methods will be specified in each project agreement or SOW.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              5.2. All quoted fees are exclusive of applicable taxes (including but not limited to sales tax, VAT, or GST), which will be added where required by law.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              5.3. Invoices are due within the timeframe specified in the project agreement. Late payments may incur interest at the lesser of 1.5% per month or the maximum rate permitted by applicable law.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              5.4. We reserve the right to suspend work on any project with outstanding payments exceeding 15 days past due, after providing written notice.
            </p>
          </section>

          {/* 6. Confidentiality */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Confidentiality
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              6.1. Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the engagement.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              6.2. Confidential information shall not be disclosed to third parties without prior written consent, except where required by law or regulation.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              6.3. Confidentiality obligations survive the termination of any engagement for a period of two (2) years.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              6.4. We handle all client data in accordance with our{' '}
              <a href="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline">Privacy Policy</a>
              , which complies with GDPR, CCPA, and other applicable data protection regulations.
            </p>
          </section>

          {/* 7. Warranties & Disclaimers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Warranties & Disclaimers
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              7.1. We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              7.2. Except as expressly stated herein, all services are provided &quot;AS IS&quot; without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              7.3. We do not warrant that deliverables will be error-free, but we will use reasonable efforts to correct reported defects within the warranty period specified in the applicable SOW.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              8.1. To the maximum extent permitted by applicable law, our total aggregate liability for any claims arising out of or related to these Terms or our services shall not exceed the total fees paid by you for the specific project giving rise to the claim.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              8.2. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              8.3. Neither party shall be liable for any failure or delay in performance due to circumstances beyond its reasonable control (force majeure), including but not limited to natural disasters, pandemics, acts of government, or internet/infrastructure failures.
            </p>
          </section>

          {/* 9. Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              9. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              9.1. Either party may terminate an engagement by providing 30 days&apos; written notice to the other party.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              9.2. Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within 15 days of receiving notice.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              9.3. Upon termination, you shall pay for all services performed and expenses incurred up to the date of termination. We will deliver all completed work product upon receipt of final payment.
            </p>
          </section>

          {/* 10. Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              10. Dispute Resolution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              10.1. Any disputes arising under these Terms shall first be attempted to be resolved through good-faith negotiations between the parties.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              10.2. If a dispute cannot be resolved through negotiation within 30 days, either party may pursue binding arbitration administered in accordance with the rules of the applicable arbitration body in the jurisdiction agreed upon in the project agreement.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              10.3. Arbitration proceedings shall be conducted in English by a single arbitrator.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unless otherwise specified in a project agreement, these Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. For clients within the EEA, mandatory consumer protection laws of your country of residence shall continue to apply where applicable.
            </p>
          </section>

          {/* 12. Changes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              12. Changes to These Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* 13. Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              13. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>The Tech Wolves — Legal Team</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Email:{' '}
                <a href="mailto:legal@thetechwolves.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  legal@thetechwolves.com
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
