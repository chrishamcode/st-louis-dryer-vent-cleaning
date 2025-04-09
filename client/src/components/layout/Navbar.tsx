import { Link } from "wouter";
import { Phone, Calendar, Menu, MapPin, Home, MessageSquare, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./MobileMenu.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  
  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when clicking a link and scroll to top
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    
    // Scroll to the top of the page when navigating to a new page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Additional fix for some mobile browsers
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-black/80 backdrop-blur-sm py-4'
      }`} 
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          href="/" 
          className={`text-xl font-bold ${
            scrolled 
              ? 'text-primary' 
              : 'text-white font-extrabold'
          }`}
        >
          St. Louis Dryer Vent Cleaning
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className={`p-3 rounded-md ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Custom mobile menu overlay */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-50"
              aria-hidden="true"
            />
          )}
          
          {/* Custom mobile menu - no Dialog component */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className={`fixed inset-y-0 right-0 z-50 w-[90%] max-w-[300px] bg-white shadow-xl
                      transform transition-transform duration-300 ease-in-out
                      ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" onClick={handleMobileNavClick} className="text-lg font-bold text-primary">
                St. Louis
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-full hover:bg-gray-100 text-gray-500"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-5rem)]">
              <Link 
                href="/" 
                onClick={handleMobileNavClick}
                className="flex items-center py-4 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
              >
                <Home className="h-5 w-5 mr-3" />
                <span className="font-medium">Home</span>
              </Link>
              <Link 
                href="/service-areas" 
                onClick={handleMobileNavClick}
                className="flex items-center py-4 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
              >
                <MapPin className="h-5 w-5 mr-3" />
                <span className="font-medium">Service Areas</span>
              </Link>
              <Link 
                href="/contact" 
                onClick={handleMobileNavClick}
                className="flex items-center py-4 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
              >
                <MessageSquare className="h-5 w-5 mr-3" />
                <span className="font-medium">Contact</span>
              </Link>
              
              <div className="my-3 border-t"></div>
              
              <a 
                href="tel:+13146326526" 
                className="flex items-center py-4 px-4 rounded-lg text-primary font-medium hover:bg-primary/10 active:bg-primary/20"
              >
                <Phone className="h-5 w-5 mr-3" />
                <span>(314) 632-6526</span>
              </a>
              
              <a 
                href="#contact-cta" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  
                  // Wait a moment for the menu to close
                  setTimeout(() => {
                    // Find the contact-cta element and scroll to it
                    const contactCta = document.getElementById('contact-cta');
                    if (contactCta) {
                      contactCta.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="flex items-center justify-center py-4 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 active:bg-primary/80"
              >
                <Calendar className="h-5 w-5 mr-3" />
                <span>Book Now</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-6 mr-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-gray-800 hover:text-primary font-semibold' 
                  : 'text-white hover:text-gray-200 font-bold'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/service-areas" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-gray-800 hover:text-primary font-semibold' 
                  : 'text-white hover:text-gray-200 font-bold'
              }`}
            >
              Service Areas
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-gray-800 hover:text-primary font-semibold' 
                  : 'text-white hover:text-gray-200 font-bold'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+13146326526" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors font-medium ${
                scrolled 
                  ? 'text-primary hover:bg-gray-100 font-semibold' 
                  : 'text-white hover:bg-white/10 font-bold'
              }`}
            >
              <Phone className="mr-2 h-4 w-4" />
              (314) 632-6526
            </a>
            
            <a 
              href="#contact-cta" 
              onClick={(e) => {
                e.preventDefault();
                const contactCta = document.getElementById('contact-cta');
                if (contactCta) {
                  contactCta.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}