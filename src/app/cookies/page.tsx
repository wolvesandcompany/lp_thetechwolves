import { Metadata } from "next";
import { generateMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/StructuredData";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = generateMetadata({
  title: "Cookie Policy - Website Cookies & Tracking Information",
  description:
    "Learn about how The Tech Wolves uses cookies and tracking technologies. Cookie policy explaining data collection, usage, and your control options.",
  path: "/cookies",
  keywords: [
    "cookie policy",
    "website cookies",
    "tracking information",
    "data collection",
    "privacy settings",
    "cookie consent",
    "tracking technologies",
    "website analytics",
    "user preferences",
    "cookie management",
  ],
});

export default function CookiesPolicy() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Cookie Policy", url: "/cookies" },
  ];

  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
      <LegalLayout title="Cookie policy." updated="April 30, 2025">
        <h2>1. What are cookies</h2>
        <p>
          Cookies are small text files placed on your computer or mobile device when you
          visit our website. They make websites work more efficiently and provide useful
          information to website owners.
        </p>

        <h2>2. How we use cookies</h2>
        <ul>
          <li>
            <strong>Essential cookies:</strong> required for the website to function
          </li>
          <li>
            <strong>Analytics cookies:</strong> understand how visitors interact with us
          </li>
          <li>
            <strong>Preference cookies:</strong> remember your settings and preferences
          </li>
          <li>
            <strong>Marketing cookies:</strong> deliver more relevant advertisements
          </li>
        </ul>

        <h2>3. Types of cookies we use</h2>
        <p>
          <strong>Session cookies</strong> are temporary and erased when you close your
          browser.
        </p>
        <p>
          <strong>Persistent cookies</strong> remain on your device until they expire or you
          delete them.
        </p>

        <h2>4. Managing cookies</h2>
        <ul>
          <li>
            <strong>Browser settings:</strong> modify your browser to accept or reject
            cookies
          </li>
          <li>
            <strong>Third-party tools:</strong> use privacy tools to manage preferences
          </li>
          <li>
            <strong>Our cookie banner:</strong> adjust preferences via our consent banner
          </li>
        </ul>

        <h2>5. Third-party cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not
          control these and recommend reviewing the privacy policies of these third parties
          for more information.
        </p>

        <h2>6. Updates to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted with an
          updated revision date. Please check back periodically.
        </p>
      </LegalLayout>
    </>
  );
}
