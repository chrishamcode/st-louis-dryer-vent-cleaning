import { Link } from "wouter";
import { Phone, Calendar, Menu, MapPin, Home, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./MobileMenu.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
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
  
  // Add a direct style override for mobile menu
  useEffect(() => {
    // Apply hard-coded styles directly to ensure they are applied
    const style = document.createElement('style');
    style.textContent = `
      [data-state="open"] {
        width: 40% !important;
        max-width: 150px !important;
      }
      
      @media (min-width: 640px) {
        [data-state="open"] {
          max-width: 250px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button 
              className={`mobile-menu-button ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="mobile-menu-sheet">
            <div>
              <Link href="/" className="mobile-menu-title text-primary">
                St. Louis
              </Link>
            </div>
            
            <nav className="mobile-menu-nav">
              <Link href="/" className="mobile-menu-link text-gray-700 hover:text-primary">
                <Home />
                <span className="font-medium">Home</span>
              </Link>
              <Link href="/service-areas" className="mobile-menu-link text-gray-700 hover:text-primary">
                <MapPin />
                <span className="font-medium">Areas</span>
              </Link>
              <Link href="/contact" className="mobile-menu-link text-gray-700 hover:text-primary">
                <MessageSquare />
                <span className="font-medium">Contact</span>
              </Link>
              
              <div className="mobile-menu-divider"></div>
              
              <a 
                href="tel:+13146326526" 
                className="mobile-menu-link text-primary font-medium"
              >
                <Phone />
                <span>Call Us</span>
              </a>
              
              <Link 
                href="#contact-form" 
                className="mobile-menu-cta bg-primary text-white"
              >
                <Calendar />
                <span>Book Now</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

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
            
            <Link href="#contact-form" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}