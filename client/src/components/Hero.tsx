import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden pt-16 md:pt-20" aria-label="Hero section">
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
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
              Trusted Throughout Greater St. Louis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Professional Dryer Vent Cleaning in St. Louis
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-100 max-w-3xl mx-auto px-2">
              Safe, reliable, and affordable dryer vent cleaning services. 
              <span className="font-medium"> Protect your home and family from fire hazards.</span>
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-12 md:mb-16 max-w-3xl mx-auto border border-white/20 shadow-xl">
          <h2 className="text-white text-center font-bold text-xl mb-2">Ready to Get Started?</h2>
          <p className="text-gray-100 text-center text-sm mb-6">Quick response times • Flexible scheduling • Competitive pricing</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:314-578-8648"
              aria-label="Call or text us at (314) 578-8648"
              className="bg-white text-gray-800 rounded-md group text-lg font-semibold py-5 px-7 flex items-center justify-center gap-3 hover:scale-105 transition-transform w-full sm:w-auto shadow-lg border border-white/80"
            >
              <PhoneCall className="h-6 w-6 text-primary" aria-hidden="true" />
              <div className="flex flex-col items-start">
                <span>Call or Text</span>
                <span className="text-base font-medium">(314) 578-8648</span>
              </div>
            </a>
            <a 
              href="#contact-form"
              aria-label="Schedule service - opens contact form"
              className="bg-primary hover:bg-primary/90 text-white text-lg font-semibold py-5 px-7 w-full sm:w-auto rounded-md shadow-lg text-center transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              Schedule Service
            </a>
          </div>
        </div>
        
        {/* Service Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 md:gap-6">
          {/* Feature 1: Fire Prevention */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] border border-gray-100">
            <div className="border-b-2 border-primary/10 bg-primary/5 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fire Prevention
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Lint buildup is highly flammable and the leading cause of dryer fires. Regular cleaning significantly reduces this risk.</p>
              <div className="bg-red-50 rounded-lg p-3 text-sm text-gray-700 font-medium flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>2,900 dryer fires occur annually in the U.S. - U.S. Fire Administration</span>
              </div>
            </div>
          </div>
          
          {/* Feature 2: Energy Efficiency */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] border border-gray-100">
            <div className="border-b-2 border-primary/10 bg-primary/5 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Energy Savings
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Clean vents help your dryer run more efficiently, reducing energy consumption and extending appliance life.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Lower utility bills</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Faster drying times</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3: Professional Service */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] border border-gray-100">
            <div className="border-b-2 border-primary/10 bg-primary/5 px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Expert Service
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">Our certified technicians use professional-grade equipment to thoroughly clean your entire vent system.</p>
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <div className="font-medium text-gray-800 flex items-center">
                  <span className="text-primary text-lg mr-2">✓</span>
                  100% Satisfaction Guarantee
                </div>
                <div className="text-primary font-medium text-sm">
                  Since 2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}