import { Link } from "wouter";
import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Shield, 
  Home, 
  Map, 
  MessageSquare, 
  Calendar 
} from "lucide-react";

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
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-200" aria-label="Site footer">
      {/* Top banner */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-medium">Locally Owned & Operated</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="tel:+13146326526" 
                className="flex items-center hover:text-white/80 transition-colors"
                aria-label="Call us at (314) 632-6526"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                <span>(314) 632-6526</span>
              </a>
              <a 
                href="mailto:info@stlouisdryerventcleaning.com" 
                className="flex items-center hover:text-white/80 transition-colors"
                aria-label="Email us at info@stlouisdryerventcleaning.com"
              >
                <Mail className="w-4 h-4 mr-1.5" />
                <span>info@stlouisdryerventcleaning.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-lg">SL</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                St. Louis<br />
                <span className="text-sm">Dryer Vent Cleaning</span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              Professional dryer vent cleaning services throughout the Greater St. Louis area. Serving residential and commercial clients with high-quality, reliable service.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <address className="text-gray-400 text-sm not-italic">
                  St. Louis, MO 63110
                </address>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>Monday - Friday: 8am - 6pm</div>
                  <div>Saturday: 9am - 4pm</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            
            <div className="mt-5 flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick links and services */}
          <div className="md:pl-8">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center">
              <div className="w-6 h-1 bg-primary mr-2"></div>
              Navigation
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-gray-300 font-semibold text-sm mb-3">Quick Links</h5>
                <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
                  <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                    <Home className="w-3.5 h-3.5 mr-1.5" />
                    Home
                  </Link>
                  <Link href="/service-areas" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                    <Map className="w-3.5 h-3.5 mr-1.5" />
                    Service Areas
                  </Link>
                  <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                    Contact
                  </Link>
                  <Link href="#contact-form" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    Schedule Service
                  </Link>
                </nav>
              </div>
              
              <div>
                <h5 className="text-gray-300 font-semibold text-sm mb-3">Our Services</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#residential" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Residential Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#commercial" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Commercial Services
                    </a>
                  </li>
                  <li>
                    <a href="#inspection" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Dryer Vent Inspection
                    </a>
                  </li>
                  <li>
                    <a href="#maintenance" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      Maintenance Plans
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Columns 3 & 4: Service areas */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center">
              <div className="w-6 h-1 bg-primary mr-2"></div>
              Service Areas
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="rounded-lg bg-gray-800/50 p-4 h-full">
                  <h5 className="font-semibold text-white text-sm mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    Missouri Counties
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                      St. Louis County
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                      St. Charles County
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                      St. Louis City
                    </li>
                  </ul>
                  
                  <h5 className="font-semibold text-white text-sm mt-4 mb-3 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    Illinois Counties
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                      St. Clair County
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-1.5"></span>
                      Madison County
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="rounded-lg bg-gray-800/50 p-4 h-full">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white text-sm flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        Missouri Cities
                      </h5>
                      <button 
                        onClick={() => setShowAllMoCities(!showAllMoCities)}
                        className="text-xs text-primary/90 flex items-center hover:text-primary"
                        aria-label={showAllMoCities ? "Show fewer Missouri cities" : "Show all Missouri cities"}
                      >
                        {showAllMoCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-0.5" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-0.5" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-400">
                      {visibleMoCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white text-sm flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        Illinois Cities
                      </h5>
                      <button 
                        onClick={() => setShowAllIlCities(!showAllIlCities)}
                        className="text-xs text-primary/90 flex items-center hover:text-primary"
                        aria-label={showAllIlCities ? "Show fewer Illinois cities" : "Show all Illinois cities"}
                      >
                        {showAllIlCities ? (
                          <>Less <ChevronUp className="h-3 w-3 ml-0.5" /></>
                        ) : (
                          <>More <ChevronDown className="h-3 w-3 ml-0.5" /></>
                        )}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-gray-400">
                      {visibleIlCities.map((city, index) => (
                        <span key={index} className="truncate">{city}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Link 
                href="/service-areas" 
                className="inline-flex items-center py-2 px-4 bg-primary/20 hover:bg-primary/30 transition-colors text-primary rounded-lg text-sm font-medium"
              >
                View Complete Service Area Listing
                <ChevronDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-3 md:mb-0">
              © {currentYear} St. Louis Dryer Vent Cleaning. All rights reserved. Locally owned and operated.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}