import { Link } from "wouter";
import { Phone, Calendar, Menu, MapPin, Home, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent backdrop-blur-sm bg-opacity-70 py-5'
      }`} 
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          href="/" 
          className={`text-xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          St. Louis Dryer Vent Cleaning
        </Link>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button 
              className={`p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[40%] max-w-[150px] sm:w-[250px]">
            <div className="py-1">
              <Link href="/" className="text-xs font-bold text-primary block mb-1">
                St. Louis
              </Link>
            </div>
            
            <nav className="flex flex-col gap-2">
              <Link href="/" className="flex items-center text-gray-700 hover:text-primary transition-colors text-xs">
                <Home className="mr-1 h-3 w-3" />
                <span className="font-medium">Home</span>
              </Link>
              <Link href="/service-areas" className="flex items-center text-gray-700 hover:text-primary transition-colors text-xs">
                <MapPin className="mr-1 h-3 w-3" />
                <span className="font-medium">Areas</span>
              </Link>
              <Link href="/contact" className="flex items-center text-gray-700 hover:text-primary transition-colors text-xs">
                <MessageSquare className="mr-1 h-3 w-3" />
                <span className="font-medium">Contact</span>
              </Link>
              
              <div className="border-t my-1.5"></div>
              
              <a 
                href="tel:+13146326526" 
                className="flex items-center text-primary font-medium text-xs"
              >
                <Phone className="mr-1 h-3 w-3" />
                <span>Call Us</span>
              </a>
              
              <Link 
                href="#contact-form" 
                className="mt-1.5 bg-primary text-white py-1 px-2 rounded-md flex items-center justify-center text-xs"
              >
                <Calendar className="mr-1 h-3 w-3" />
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
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/service-areas" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200'
              }`}
            >
              Service Areas
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+13146326526" 
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-primary hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
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