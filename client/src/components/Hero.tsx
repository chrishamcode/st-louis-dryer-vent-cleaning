import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, Zap, Flame, ShieldCheck, CheckCircle2, Clock, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-primary/90 overflow-hidden pt-16 md:pt-20" aria-label="Hero section">
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
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-block mb-3 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-inner border border-white/20">
              <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-white mr-2"></span>
              Locally Owned & Operated in St. Louis Since 2018
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 sm:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                Professional Dryer Vent Cleaning
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto px-4 leading-relaxed">
              Safe, reliable, and affordable dryer vent cleaning services throughout the Greater St. Louis area.
              <span className="font-medium"> Protect your home and family from fire hazards today.</span>
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-12 md:mb-16 max-w-3xl mx-auto border border-white/30 shadow-xl">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 text-white bg-white/10 rounded-full px-4 py-1 text-sm font-medium border border-white/20">
              <Clock className="h-3.5 w-3.5" />
              <span>Fast Response</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Professional Service</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
              <DollarSign className="h-3.5 w-3.5" />
              <span>Competitive Pricing</span>
            </div>
          </div>
          <h2 className="text-white text-center font-bold text-2xl md:text-3xl mb-3">Ready to Get Started?</h2>
          <p className="text-gray-100 text-center text-sm mb-6">We offer flexible scheduling to accommodate your busy life</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+13146326526"
              aria-label="Call or text us at (314) 632-6526"
              className="bg-white text-gray-800 rounded-xl group text-lg font-semibold py-5 px-7 flex items-center justify-center gap-4 hover:scale-105 transition-all hover:shadow-xl w-full sm:w-auto shadow-lg border border-white/80"
            >
              <div className="bg-primary/10 rounded-full p-2">
                <PhoneCall className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="flex flex-col items-start">
                <span>Call or Text</span>
                <span className="text-base font-medium">(314) 632-6526</span>
              </div>
            </a>
            <a 
              href="#contact-form"
              aria-label="Schedule service - opens contact form"
              className="bg-primary hover:bg-primary/90 border border-white/10 text-white text-lg font-semibold py-5 px-7 w-full sm:w-auto rounded-xl shadow-lg text-center transition-all hover:shadow-xl flex items-center justify-center gap-3"
            >
              <div className="bg-white/10 rounded-full p-2">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </div>
              <span>Schedule Service</span>
            </a>
          </div>
        </div>
        
        {/* Service Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5 md:gap-8">
          {/* Feature 1: Fire Prevention */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
            <div className="bg-gradient-to-r from-red-500 to-red-600 h-2"></div>
            <div className="p-6 md:p-8">
              <div className="bg-red-50 rounded-full p-3 inline-block mb-4">
                <Flame className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fire Prevention</h3>
              <p className="text-gray-700 mb-4">Lint buildup is highly flammable and the leading cause of dryer fires. Regular cleaning significantly reduces this risk.</p>
              <div className="bg-red-50 rounded-lg p-4 text-sm text-gray-700 font-medium">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-red-500 mr-2">!</div>
                  <span>2,900 dryer fires occur annually in the U.S. - U.S. Fire Administration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2: Energy Efficiency */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-2"></div>
            <div className="p-6 md:p-8">
              <div className="bg-green-50 rounded-full p-3 inline-block mb-4">
                <Zap className="h-7 w-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Savings</h3>
              <p className="text-gray-700 mb-4">Clean vents help your dryer run more efficiently, reducing energy consumption and extending appliance life.</p>
              <ul className="space-y-3">
                <li className="flex items-center bg-green-50 rounded-lg p-3">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Lower utility bills</span>
                </li>
                <li className="flex items-center bg-green-50 rounded-lg p-3">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Faster drying times</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3: Professional Service */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl hover:scale-[1.02] border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-primary/80 h-2"></div>
            <div className="p-6 md:p-8">
              <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Service</h3>
              <p className="text-gray-700 mb-4">Our certified technicians use professional-grade equipment to thoroughly clean your entire vent system.</p>
              <div className="flex items-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="font-semibold text-gray-800 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  100% Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}