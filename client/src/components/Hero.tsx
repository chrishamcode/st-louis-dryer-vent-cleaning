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
      
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center text-white">
            <div className="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Trusted Throughout Greater St. Louis
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Professional Dryer Vent Cleaning in St. Louis
            </h1>
            <p className="mt-6 text-lg text-gray-100">
              Safe, reliable, and affordable dryer vent cleaning services. Protect your home and family from fire hazards.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                size="lg"
                variant="secondary" 
                className="group text-lg font-semibold py-6 px-8 flex items-center justify-center gap-3 hover:scale-105 transition-transform"
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
                className="text-lg font-semibold py-6 px-8 hover:bg-white/20 z-20" 
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
          </div>
          <div className="relative mt-12 md:mt-0">
            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 z-0"></div>
              
              {/* Alternative to image */}
              <div className="relative z-10 w-full h-[400px] flex items-center justify-center bg-gray-100">
                <div className="grid grid-cols-2 gap-6 p-8 w-full h-full">
                  {/* Professional technician */}
                  <div className="flex flex-col justify-center items-center mt-4">
                    <div className="w-20 h-20 rounded-full bg-primary mb-3 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-800">Professional Service</h3>
                    <p className="text-xs text-center text-gray-600 mt-1">Our trained technicians provide expert dryer vent cleaning</p>
                  </div>
                  
                  {/* Lint accumulation illustration */}
                  <div className="grid grid-rows-2 gap-4 mt-4">
                    <div className="bg-gray-200 rounded-lg p-3 flex items-center justify-center relative">
                      <div className="absolute inset-0 m-3 bg-gray-300 rounded opacity-80"></div>
                      <p className="text-xs font-medium text-gray-800 z-10">Dangerous Lint Buildup</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3 flex items-center justify-center">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-xs font-medium text-gray-800">Prevent Fire Hazards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Service badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-sm font-medium text-gray-700 shadow-md">
                100% Satisfaction Guaranteed
              </div>

              {/* Results badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md text-xs text-gray-700 shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Proven Results
              </div>
              
              {/* Fire safety badge */}
              <div className="absolute top-4 left-4 bg-red-50 text-red-800 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05c-.867 1.83-1.117 3.49-.728 4.866.387 1.37 1.333 2.512 2.734 3.217.68.34 1.446.545 2.234.612.81.07 1.63.04 2.432-.085 1.587-.247 3.22-1.03 4.372-2.422 1.152-1.392 1.864-3.258 1.756-5.576-.097-1.92-.78-3.313-1.78-4.244-.998-.932-2.302-1.394-3.528-1.515-1.23-.123-2.355.073-3.147.65z" clipRule="evenodd" />
                </svg>
                Prevents Home Fires
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}