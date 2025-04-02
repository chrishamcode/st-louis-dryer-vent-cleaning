import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [showAllMoCities, setShowAllMoCities] = useState(false);
  const [showAllIlCities, setShowAllIlCities] = useState(false);

  // Cities organized by population size and projected user base
  // (larger cities and those with higher expected service demand are listed first)
  const moCities = [
    'St. Louis', 'Florissant', 'Chesterfield', 'University City', 'Kirkwood',
    'Maryland Heights', 'Wildwood', 'Ferguson', 'Ballwin', 'Clayton',
    'Webster Groves', 'Creve Coeur', 'Maplewood', 'Richmond Heights', 'Fenton',
    'Town and Country', 'Bridgeton', 'Mehlville', 'Ladue', 'Crestwood',
    'Jennings', 'Ellisville', 'Lemay', 'Valley Park', 'Afton',
    'Black Jack', 'Earth City', 'Concord'
  ];

  // Illinois cities by population and projected user base
  const ilCities = [
    'East St. Louis', 'Belleville', 'Granite City', 'Alton', 'O\'Fallon', 
    'Edwardsville', 'Collinsville', 'Fairview Heights', 'Swansea', 'Highland',
    'Glen Carbon', 'Maryville', 'Shiloh', 'Scott AFB', 'Washington Park',
    'Mascoutah', 'Troy', 'Millstadt', 'Lebanon', 'Roxana'
  ];

  const visibleMoCities = showAllMoCities ? moCities : moCities.slice(0, 6);
  const visibleIlCities = showAllIlCities ? ilCities : ilCities.slice(0, 6);
  
  return (
    <footer className="bg-gray-900 text-gray-200" aria-label="Site footer">
      <div className="container mx-auto px-4 py-8">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-white mb-2">St. Louis Dryer Vent Cleaning</h3>
            <p className="text-gray-400 text-sm">
              Professional dryer vent cleaning services throughout the Greater St. Louis Metropolitan Area.
            </p>
            <div className="mt-3">
              <a 
                href="tel:314-555-0123" 
                className="text-base font-semibold text-primary hover:text-primary/90 flex items-center"
                aria-label="Call us at (314) 555-0123"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (314) 555-0123
              </a>
              <address className="mt-1 text-gray-400 text-xs not-italic">
                123 Main Street, St. Louis, MO 63101
              </address>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Quick Links</h4>
            <nav className="flex flex-col space-y-1" aria-label="Footer navigation">
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Home
              </Link>
              <Link href="/service-areas" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Service Areas
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Contact
              </Link>
              <Link href="#contact-form" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Get a Quote
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-2">Service Areas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400">
              <div>
                <h5 className="font-medium text-gray-300 text-xs mb-1">Counties</h5>
                <div className="mb-2">
                  <div className="font-medium text-gray-300 text-xs">Missouri:</div>
                  <ul className="text-xs">
                    <li>St. Louis County</li>
                    <li>St. Charles County</li>
                    <li>St. Louis City</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-gray-300 text-xs">Illinois:</div>
                  <ul className="text-xs">
                    <li>St. Clair County</li>
                    <li>Madison County</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-300 text-xs mb-1">Cities Served</h5>
                <div className="space-y-2">
                  {/* Missouri Cities */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-300 text-xs">Missouri:</div>
                      <button 
                        onClick={() => setShowAllMoCities(!showAllMoCities)}
                        className="text-xs text-primary flex items-center hover:underline"
                        aria-label={showAllMoCities ? "Show fewer Missouri cities" : "Show all Missouri cities"}
                      >
                        {showAllMoCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-1" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-1" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-1 text-xs">
                      {visibleMoCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                    
                    {showAllMoCities && (
                      <Link 
                        href="/service-areas" 
                        className="text-primary hover:underline mt-1 inline-block text-xs"
                      >
                        View all Missouri service areas →
                      </Link>
                    )}
                  </div>
                  
                  {/* Illinois Cities */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-gray-300 text-xs">Illinois:</div>
                      <button 
                        onClick={() => setShowAllIlCities(!showAllIlCities)}
                        className="text-xs text-primary flex items-center hover:underline"
                        aria-label={showAllIlCities ? "Show fewer Illinois cities" : "Show all Illinois cities"}
                      >
                        {showAllIlCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-1" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-1" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-1 text-xs">
                      {visibleIlCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                    
                    {showAllIlCities && (
                      <Link 
                        href="/service-areas" 
                        className="text-primary hover:underline mt-1 inline-block text-xs"
                      >
                        View all Illinois service areas →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-2 md:mb-0">
              © {new Date().getFullYear()} St. Louis Dryer Vent Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}