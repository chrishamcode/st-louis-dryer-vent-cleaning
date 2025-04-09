import { Link } from "wouter";
import { Phone, Calendar, Menu, MapPin, Home, MessageSquare, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import "./MobileMenu.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
  
  // Close mobile menu when clicking on a link (improves UX)
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

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
          
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogContent 
              className="mobile-menu fixed inset-y-0 right-0 h-full w-[80vw] max-w-[280px] 
                        rounded-l-2xl p-0 shadow-xl bg-white 
                        data-[state=open]:animate-slide-in-right
                        data-[state=closed]:animate-slide-out-right
                        flex flex-col"
              aria-label="Mobile navigation menu"
              id="mobile-menu"
            >
              <DialogTitle className="sr-only">Mobile Navigation Menu</DialogTitle>
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" onClick={handleMobileNavClick} className="text-lg font-bold text-primary">
                  St. Louis
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <nav className="flex flex-col p-4 space-y-4">
                <Link 
                  href="/" 
                  onClick={handleMobileNavClick}
                  className="flex items-center py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
                >
                  <Home className="h-5 w-5 mr-3" />
                  <span className="font-medium">Home</span>
                </Link>
                <Link 
                  href="/service-areas" 
                  onClick={handleMobileNavClick}
                  className="flex items-center py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
                >
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="font-medium">Service Areas</span>
                </Link>
                <Link 
                  href="/contact" 
                  onClick={handleMobileNavClick}
                  className="flex items-center py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-primary active:bg-gray-200"
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span className="font-medium">Contact</span>
                </Link>
                
                <div className="my-2 border-t"></div>
                
                <a 
                  href="tel:+13146326526" 
                  className="flex items-center py-3 px-4 rounded-lg text-primary font-medium hover:bg-primary/10 active:bg-primary/20"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(314) 632-6526</span>
                </a>
                
                <Link 
                  href="#contact-cta" 
                  onClick={handleMobileNavClick}
                  className="flex items-center justify-center py-3 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 active:bg-primary/80"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Book Now</span>
                </Link>
              </nav>
            </DialogContent>
          </Dialog>
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
            
            <Link href="#contact-cta" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}