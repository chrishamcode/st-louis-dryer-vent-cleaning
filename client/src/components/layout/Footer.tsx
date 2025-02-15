import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50" aria-label="Site footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">St. Louis Dryer Vent Cleaning</h3>
            <p className="mt-2 text-sm text-gray-600">
              Professional dryer vent cleaning services throughout the St. Louis region.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="mt-4 flex flex-col space-y-2" aria-label="Footer navigation">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary">
                Home
              </Link>
              <Link href="/service-areas" className="text-sm text-gray-600 hover:text-primary">
                Service Areas
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Service Areas</h4>
            <div className="mt-4 flex flex-col space-y-2">
              <span className="text-sm text-gray-600">St. Louis City</span>
              <span className="text-sm text-gray-600">St. Louis County</span>
              <span className="text-sm text-gray-600">St. Clair County</span>
              <span className="text-sm text-gray-600">Madison County</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="mt-4 flex flex-col space-y-2">
              <a 
                href="tel:314-555-0123" 
                className="text-sm text-gray-600 hover:text-primary"
                aria-label="Call us at (314) 555-0123"
              >
                (314) 555-0123
              </a>
              <address className="text-sm text-gray-600 not-italic">
                123 Main Street<br />
                St. Louis, MO 63101
              </address>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} St. Louis Dryer Vent Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}