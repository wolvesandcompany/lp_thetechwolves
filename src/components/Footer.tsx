import Link from "next/link";

// Static footer with hardcoded recent posts links
// This avoids the need for server-side data fetching in a client component context
export function Footer() {
  return (
    <footer className="bg-teal-900 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Branding / Copyright */}
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Tech Wolves. All rights reserved.
          </p>
        </div>

        {/* Column 2: Pages */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/blog"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                About Team
              </Link>
            </li>
            <li>
              <Link
                href="/templates"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                Explore Templates
              </Link>
            </li>
            <li>
              <Link
                href="/case-study"
                className="hover:underline"
                rel="noopener noreferrer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="#service" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#industries" className="hover:underline">
                Industries
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:underline">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Contact</h4>
          <p className="text-sm">
            📧{" "}
            <a href="mailto:info@thetechwolves.com" className="hover:underline">
              info@thetechwolves.com
            </a>
          </p>
          <p className="text-sm mt-2">📍 Remote & Global</p>
        </div>
      </div>
    </footer>
  );
}
