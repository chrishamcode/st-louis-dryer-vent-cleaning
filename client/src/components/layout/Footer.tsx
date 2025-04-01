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

  const visibleMoCities = showAllMoCities ? moCities : moCities.slice(0, 8);
  const visibleIlCities = showAllIlCities ? ilCities : ilCities.slice(0, 8);
  
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
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              <div>
                <strong className="block mb-1">Counties:</strong>
                <div className="mb-2 text-xs">
                  <strong className="text-gray-500">Missouri:</strong><br />
                  <span>St. Louis County</span><br />
                  <span>St. Charles County</span><br />
                  <span>St. Louis City</span>
                </div>
                <div className="text-xs">
                  <strong className="text-gray-500">Illinois:</strong><br />
                  <span>St. Clair County</span><br />
                  <span>Madison County</span>
                </div>
              </div>
              
              <div>
                <strong className="block mb-1">Cities Served:</strong>
                <div className="space-y-4">
                  {/* Missouri Cities */}
                  <div>
                    <div className="flex items-center justify-between">
                      <strong className="text-xs text-gray-500">Missouri:</strong>
                      <button 
                        onClick={() => setShowAllMoCities(!showAllMoCities)}
                        className="text-xs text-primary flex items-center"
                        aria-label={showAllMoCities ? "Show fewer Missouri cities" : "Show all Missouri cities"}
                      >
                        {showAllMoCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-1" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-1" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="mt-1 text-xs grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-0.5">
                      {visibleMoCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                    
                    {showAllMoCities && (
                      <Link 
                        href="/service-areas" 
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                      >
                        View all Missouri service areas
                      </Link>
                    )}
                  </div>
                  
                  {/* Illinois Cities */}
                  <div>
                    <div className="flex items-center justify-between">
                      <strong className="text-xs text-gray-500">Illinois:</strong>
                      <button 
                        onClick={() => setShowAllIlCities(!showAllIlCities)}
                        className="text-xs text-primary flex items-center"
                        aria-label={showAllIlCities ? "Show fewer Illinois cities" : "Show all Illinois cities"}
                      >
                        {showAllIlCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-1" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-1" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="mt-1 text-xs grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-0.5">
                      {visibleIlCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                    
                    {showAllIlCities && (
                      <Link 
                        href="/service-areas" 
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                      >
                        View all Illinois service areas
                      </Link>
                    )}
                  </div>
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