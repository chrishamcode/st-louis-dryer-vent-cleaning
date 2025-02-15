import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
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
            <div className="mt-4 flex flex-col space-y-2">
              <Link href="/">
                <a className="text-sm text-gray-600 hover:text-primary">Home</a>
              </Link>
              <Link href="/service-areas">
                <a className="text-sm text-gray-600 hover:text-primary">Service Areas</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm text-gray-600 hover:text-primary">Contact</a>
              </Link>
            </div>
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
              <a href="tel:314-555-0123" className="text-sm text-gray-600 hover:text-primary">
                (314) 555-0123
              </a>
              <span className="text-sm text-gray-600">
                123 Main Street<br />
                St. Louis, MO 63101
              </span>
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
