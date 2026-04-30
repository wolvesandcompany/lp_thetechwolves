import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy - Data Protection & Your Rights",
  description:
    "The Tech Wolves Privacy Policy. Learn how we collect, use, and protect your data. GDPR and CCPA compliant. Your privacy rights explained clearly.",
  path: "/privacy",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "CCPA",
    "personal data",
    "privacy rights",
    "data security",
    "information protection",
    "cookie policy",
    "data processing",
  ],
});

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <LegalLayout
        title="Privacy policy."
        effective="January 1, 2025"
        updated="April 30, 2025"
      >
        <h2>1. Introduction</h2>
        <p>
          The Tech Wolves (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
          protecting the privacy of our clients, website visitors, and partners worldwide.
          This Privacy Policy describes how we collect, use, store, share, and protect your
          personal information when you visit thetechwolves.com or engage our services.
        </p>
        <p>
          This policy applies to all individuals who interact with us, regardless of
          location, and is designed to comply with applicable data protection laws including
          GDPR, CCPA, and other applicable international privacy frameworks.
        </p>

        <h2>2. Information we collect</h2>
        <h3>2.1 Information you provide directly</h3>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information (company name, role, industry)</li>
          <li>Project requirements and communications</li>
          <li>Payment and billing information (processed via third-party processors)</li>
          <li>Any information voluntarily provided through forms, emails, or consultations</li>
        </ul>
        <h3>2.2 Information collected automatically</h3>
        <ul>
          <li>Device information (browser, OS, device type)</li>
          <li>Usage data (pages visited, time spent, click patterns)</li>
          <li>IP address and approximate geographic location</li>
          <li>Referral source and search terms</li>
          <li>
            Cookies and similar tracking technologies (see our{" "}
            <a href="/cookies">Cookie Policy</a>)
          </li>
        </ul>
        <h3>2.3 Information we do not collect</h3>
        <p>
          We do not knowingly collect sensitive personal information such as racial or
          ethnic origin, political opinions, religious beliefs, health data, biometric data,
          or information about minors under 16.
        </p>

        <h2>3. How we use your information</h2>
        <ul>
          <li>
            <strong>Service delivery:</strong> provide, maintain, and improve our services
          </li>
          <li>
            <strong>Communication:</strong> respond to inquiries, send updates, support
          </li>
          <li>
            <strong>Business operations:</strong> process payments, manage contracts, comply
            with legal obligations
          </li>
          <li>
            <strong>Analytics:</strong> understand how the website is used and improve UX
          </li>
          <li>
            <strong>Marketing:</strong> send relevant content (with consent — opt out anytime)
          </li>
          <li>
            <strong>Security:</strong> detect, prevent, and address technical issues
          </li>
        </ul>

        <h2>4. Legal basis for processing (GDPR)</h2>
        <ul>
          <li>
            <strong>Consent:</strong> where explicit consent has been given
          </li>
          <li>
            <strong>Contractual necessity:</strong> to perform contractual obligations
          </li>
          <li>
            <strong>Legitimate interests:</strong> for legitimate business interests
          </li>
          <li>
            <strong>Legal obligation:</strong> to comply with applicable laws
          </li>
        </ul>

        <h2>5. Data sharing &amp; third parties</h2>
        <p>We do not sell, rent, or trade your personal information. We may share data only:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> trusted vendors operating our business
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law or governmental request
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger or sale
          </li>
          <li>
            <strong>With your consent:</strong> in any other case with your permission
          </li>
        </ul>
        <p>
          Current providers include Vercel (hosting), Google Analytics (analytics), and
          Stripe (payments). Each maintains its own privacy policies.
        </p>

        <h2>6. International data transfers</h2>
        <p>
          As a globally operating company, your data may be transferred internationally. We
          ensure appropriate safeguards including Standard Contractual Clauses, data
          processing agreements, and compliance with cross-border transfer mechanisms.
        </p>

        <h2>7. Data security</h2>
        <ul>
          <li>TLS/SSL encryption for all data in transit</li>
          <li>Encryption of sensitive data at rest</li>
          <li>Regular security assessments and vulnerability testing</li>
          <li>Role-based access controls and multi-factor authentication</li>
          <li>Secure development practices and code review processes</li>
          <li>Incident response procedures and breach notification protocols</li>
        </ul>

        <h2>8. Data retention</h2>
        <ul>
          <li>
            <strong>Client project data:</strong> duration of engagement plus 3 years
          </li>
          <li>
            <strong>Financial records:</strong> as required by tax and accounting laws
          </li>
          <li>
            <strong>Marketing data:</strong> until you withdraw consent or opt out
          </li>
          <li>
            <strong>Website analytics:</strong> aggregated and anonymized after 26 months
          </li>
        </ul>

        <h2>9. Your privacy rights</h2>
        <h3>For all users</h3>
        <ul>
          <li>
            <strong>Access:</strong> request a copy of your data
          </li>
          <li>
            <strong>Correction:</strong> request correction of inaccurate data
          </li>
          <li>
            <strong>Deletion:</strong> request deletion of your data
          </li>
          <li>
            <strong>Opt-out:</strong> unsubscribe from marketing anytime
          </li>
        </ul>
        <h3>EEA/UK residents (GDPR)</h3>
        <ul>
          <li>
            <strong>Portability:</strong> receive data in a structured, machine-readable format
          </li>
          <li>
            <strong>Restriction:</strong> request restriction of processing
          </li>
          <li>
            <strong>Objection:</strong> object to processing based on legitimate interests
          </li>
          <li>
            <strong>Withdraw consent:</strong> at any time without affecting prior processing
          </li>
          <li>
            <strong>Lodge a complaint:</strong> with your local data protection authority
          </li>
        </ul>
        <h3>California residents (CCPA/CPRA)</h3>
        <ul>
          <li>Right to know, delete, non-discrimination, and opt-out (we do not sell data)</li>
        </ul>
        <p>
          To exercise these rights, contact{" "}
          <a href="mailto:privacy@thetechwolves.com">privacy@thetechwolves.com</a>. We respond
          within 30 days.
        </p>

        <h2>10. Children&apos;s privacy</h2>
        <p>
          Our services are not directed to individuals under 16. We do not knowingly collect
          personal information from children. If we discover such data was collected without
          parental consent, we will delete it promptly.
        </p>

        <h2>11. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will update
          the &quot;Last Updated&quot; date and, where appropriate, be notified via email or
          a prominent notice on our website.
        </p>

        <h2>12. Contact us</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your
          rights, please contact us:
        </p>
        <div className="legal-contact">
          <p>
            <strong>The Tech Wolves — Privacy Team</strong>
          </p>
          <p>
            Email: <a href="mailto:privacy@thetechwolves.com">privacy@thetechwolves.com</a>
          </p>
          <p>
            Web: <a href="https://thetechwolves.com">thetechwolves.com</a>
          </p>
        </div>
      </LegalLayout>
    </>
  );
}
