import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden" aria-label="Hero section">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        {/* Headline */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
            Trusted Throughout Greater St. Louis
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6">
            Professional Dryer Vent Cleaning in St. Louis
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-100 max-w-3xl mx-auto px-2">
            Safe, reliable, and affordable dryer vent cleaning services. Protect your home and family from fire hazards.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
          <Button 
            size="lg"
            variant="secondary" 
            className="group text-lg font-semibold py-6 px-8 flex items-center justify-center gap-3 hover:scale-105 transition-transform w-full sm:w-auto"
            asChild
          >
            <a 
              href="tel:314-555-0123"
              aria-label="Call or text us at (314) 555-0123"
            >
              <PhoneCall className="h-6 w-6" aria-hidden="true" />
              <div className="flex flex-col items-start">
                <span>Call or Text</span>
                <span className="text-base">(314) 555-0123</span>
              </div>
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline" 
            className="text-lg font-semibold py-6 px-8 hover:bg-white/20 w-full sm:w-auto" 
            asChild
          >
            <a 
              href="#contact-form"
              aria-label="Schedule service - opens contact form"
            >
              Schedule Service
            </a>
          </Button>
        </div>
        
        {/* Service Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
          {/* Feature 1: Professional Service */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col items-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Professional Service</h3>
              <p className="text-sm text-gray-600 mt-2">Our trained technicians provide expert dryer vent cleaning</p>
            </div>
          </div>
          
          {/* Feature 2: Dangerous Lint */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col p-6">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center relative mb-4 h-20">
                <div className="absolute inset-0 m-3 bg-gray-200 rounded opacity-80"></div>
                <p className="text-sm font-medium text-gray-800 z-10">Dangerous Lint Buildup</p>
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-sm font-medium text-gray-800">Prevent Fire Hazards</p>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Proven Results</span>
              </div>
            </div>
          </div>
          
          {/* Feature 3: Satisfaction Guaranteed */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col p-6">
              <div className="bg-red-50 text-red-800 px-4 py-3 rounded-lg text-sm font-semibold flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05c-.867 1.83-1.117 3.49-.728 4.866.387 1.37 1.333 2.512 2.734 3.217.68.34 1.446.545 2.234.612.81.07 1.63.04 2.432-.085 1.587-.247 3.22-1.03 4.372-2.422 1.152-1.392 1.864-3.258 1.756-5.576-.097-1.92-.78-3.313-1.78-4.244-.998-.932-2.302-1.394-3.528-1.515-1.23-.123-2.355.073-3.147.65z" clipRule="evenodd" />
                </svg>
                Prevents Home Fires
              </div>
              <div className="flex-1 flex flex-col justify-center items-center text-center mt-4">
                <h3 className="text-lg font-bold text-gray-800">100% Satisfaction</h3>
                <p className="text-sm text-gray-600 mt-2">Guaranteed service quality or your money back</p>
                <div className="mt-4 text-primary font-semibold text-sm">
                  Trusted by homeowners in St. Louis since 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}