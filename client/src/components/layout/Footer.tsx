import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50" aria-label="Site footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">St. Louis Dryer Vent Cleaning</h3>
            <p className="mt-2 text-sm text-gray-600">
              Professional dryer vent cleaning services throughout the Greater St. Louis Metropolitan Area.
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

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold">Service Areas</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <strong className="block mb-1">Counties:</strong>
                <span>St. Louis County</span><br />
                <span>St. Charles County</span><br />
                <span>St. Louis City</span><br />
                <span>St. Clair County</span><br />
                <span>Madison County</span>
              </div>
              <div>
                <strong className="block mb-1">Cities Served:</strong>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  <span>St. Louis</span>
                  <span>Clayton</span>
                  <span>Maplewood</span>
                  <span>Brentwood</span>
                  <span>Kirkwood</span>
                  <span>Webster Groves</span>
                  <span>Richmond Heights</span>
                  <span>Maryland Heights</span>
                  <span>University City</span>
                  <span>Chesterfield</span>
                  <span>Ladue</span>
                  <span>Afton</span>
                  <span>Crestwood</span>
                  <span>Ballwin</span>
                  <span>Wildwood</span>
                  <span>Ferguson</span>
                  <span>Florissant</span>
                  <span>Belleville</span>
                  <span>Fairview Heights</span>
                  <span>Swansea</span>
                  <span>O'Fallon</span>
                  <span>Glen Carbon</span>
                  <span>Maryville</span>
                  <span>Edwardsville</span>
                  <span>Collinsville</span>
                  <span>Alton</span>
                  <span>East St. Louis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 border-t pt-8 mt-8">
            <div className="text-center">
              <a 
                href="tel:314-555-0123" 
                className="text-lg font-semibold text-primary hover:text-primary/90"
                aria-label="Call us at (314) 555-0123"
              >
                (314) 555-0123
              </a>
              <address className="mt-2 text-sm text-gray-600 not-italic">
                123 Main Street<br />
                St. Louis, MO 63101
              </address>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} St. Louis Dryer Vent Cleaning. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}