import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service - Service Agreement & Legal Terms",
  description:
    "Review the terms of service for The Tech Wolves. Legal agreement covering service usage, intellectual property, responsibilities, and contractual obligations.",
  path: "/terms",
  keywords: [
    "terms of service",
    "service agreement",
    "legal terms",
    "user agreement",
    "service terms",
    "intellectual property",
    "contractual obligations",
    "terms and conditions",
    "legal agreement",
    "terms of use",
  ],
});

export default function TermsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
  ];

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <LegalLayout
        title="Terms of service."
        effective="January 1, 2025"
        updated="April 30, 2025"
      >
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing or using the services provided by The Tech Wolves (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms. If you
          enter into these Terms on behalf of an entity, you represent that you have the
          authority to bind that entity. If you do not agree, please do not use our services.
        </p>

        <h2>2. Services</h2>
        <p>
          2.1. The Tech Wolves provides AI automation, software development, web and mobile
          application development, UI/UX design, and related consulting services.
        </p>
        <p>
          2.2. Specific scope, deliverables, timeline, and pricing for each engagement will
          be defined in a separate Statement of Work (SOW), incorporated by reference into
          these Terms.
        </p>
        <p>
          2.3. We reserve the right to modify or discontinue any service offering with
          reasonable prior notice to active clients.
        </p>

        <h2>3. Client responsibilities</h2>
        <p>
          3.1. Provide accurate, complete, and timely information, materials, and feedback
          necessary for us to perform the services.
        </p>
        <p>
          3.2. Maintain the confidentiality of any credentials, API keys, or access tokens
          provided to you.
        </p>
        <p>3.3. Ensure provided materials do not infringe third-party IP rights.</p>
        <p>
          3.4. You are responsible for your own hardware, software, and connectivity
          required to access our services.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          4.1. <strong>Client deliverables:</strong> upon full payment, you receive ownership
          of the custom deliverables created for your project as outlined in the SOW.
        </p>
        <p>
          4.2. <strong>Pre-existing IP:</strong> we retain rights to our proprietary
          frameworks, libraries, tools, methodologies, and reusable components.
        </p>
        <p>
          4.3. <strong>Third-party materials:</strong> remain subject to their respective
          open-source or commercial licenses.
        </p>
        <p>
          4.4. <strong>Portfolio rights:</strong> we may reference the general nature of
          work in our portfolio (without disclosing confidential information) unless agreed
          otherwise in writing.
        </p>

        <h2>5. Payment</h2>
        <p>
          5.1. Schedules, amounts, and accepted methods are specified in each project
          agreement.
        </p>
        <p>
          5.2. All quoted fees are exclusive of applicable taxes (sales tax, VAT, GST), which
          will be added where required by law.
        </p>
        <p>
          5.3. Invoices are due within the timeframe specified. Late payments may incur
          interest at the lesser of 1.5% per month or the maximum rate permitted by law.
        </p>
        <p>
          5.4. We may suspend work on projects with payments more than 15 days overdue, after
          written notice.
        </p>

        <h2>6. Confidentiality</h2>
        <p>
          6.1. Both parties maintain confidentiality of proprietary or confidential
          information shared during engagement.
        </p>
        <p>
          6.2. Confidential information shall not be disclosed without prior written consent,
          except where required by law.
        </p>
        <p>
          6.3. Confidentiality obligations survive termination for two (2) years.
        </p>
        <p>
          6.4. Client data is handled in accordance with our{" "}
          <a href="/privacy">Privacy Policy</a>, GDPR, CCPA, and applicable regulations.
        </p>

        <h2>7. Warranties &amp; disclaimers</h2>
        <p>
          7.1. We warrant that services will be performed professionally and consistent
          with industry standards.
        </p>
        <p>
          7.2. Except as expressly stated, services are provided &quot;AS IS&quot; without
          warranties of any kind.
        </p>
        <p>
          7.3. Deliverables are not warranted to be error-free, but reported defects will be
          corrected within the warranty period specified in the SOW.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          8.1. Our total liability shall not exceed total fees paid for the specific project
          giving rise to the claim.
        </p>
        <p>
          8.2. In no event are we liable for indirect, incidental, special, consequential, or
          punitive damages.
        </p>
        <p>
          8.3. Neither party is liable for failure or delay due to circumstances beyond
          reasonable control (force majeure).
        </p>

        <h2>9. Termination</h2>
        <p>9.1. Either party may terminate with 30 days&apos; written notice.</p>
        <p>
          9.2. Either party may terminate immediately upon written notice for material
          breach not cured within 15 days of notice.
        </p>
        <p>
          9.3. Upon termination, you pay for services performed through the termination date.
          Completed work product is delivered upon final payment.
        </p>

        <h2>10. Dispute resolution</h2>
        <p>
          10.1. Disputes are first attempted to be resolved through good-faith negotiation.
        </p>
        <p>
          10.2. If unresolved within 30 days, either party may pursue binding arbitration in
          the agreed jurisdiction.
        </p>
        <p>10.3. Arbitration shall be conducted in English by a single arbitrator.</p>

        <h2>11. Governing law</h2>
        <p>
          Unless otherwise specified, these Terms are governed by the laws of the State of
          Delaware, USA. Mandatory consumer protection laws of EEA residents continue to
          apply where applicable.
        </p>

        <h2>12. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be posted on our
          website with an updated &quot;Last Updated&quot; date.
        </p>

        <h2>13. Contact</h2>
        <p>For questions about these Terms of Service:</p>
        <div className="legal-contact">
          <p>
            <strong>The Tech Wolves — Legal Team</strong>
          </p>
          <p>
            Email: <a href="mailto:legal@thetechwolves.com">legal@thetechwolves.com</a>
          </p>
          <p>
            Web: <a href="https://thetechwolves.com">thetechwolves.com</a>
          </p>
        </div>
      </LegalLayout>
    </>
  );
}
