import { Button } from "@/components/ui/button";
import { 
  PhoneCall, 
  MessageSquare, 
  Zap, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Star, 
  ThumbsUp, 
  Calendar, 
  AlertTriangle, 
  Users, 
  Medal, 
  MapPin 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20" aria-label="Hero section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/90 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern id="pattern-circles" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
        
        {/* Floating elements */}
        <div className="absolute -left-16 top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-blob"></div>
        <div className="absolute -right-16 top-24 w-72 h-72 rounded-full bg-white/5 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-20 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-10 md:mb-16">
            {/* Top Badge */}
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-inner border border-white/20">
              <div className="flex items-center">
                <Medal className="h-4 w-4 mr-2 text-amber-300" />
                <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-white mr-2"></span>
                Locally Owned & Operated in St. Louis
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              <span className="inline-block text-white">St. Louis</span>
              <span className="block mt-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
                  Dryer Vent Cleaning Experts
                </span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto px-4 leading-relaxed">
              Safe, reliable, and affordable dryer vent cleaning services throughout the Greater St. Louis area.
              <span className="font-medium"> Protect your home and family from fire hazards today.</span>
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20">
                <Star className="h-3.5 w-3.5 text-amber-300" />
                <span>5-star rated service</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20">
                <Users className="h-3.5 w-3.5 text-amber-300" />
                <span>Trusted by homeowners</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white border border-white/20">
                <ThumbsUp className="h-3.5 w-3.5 text-amber-300" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Card */}
        <div className="relative mb-16 md:mb-20">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/20"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-dashed border-white/20"></div>
          
          {/* Card content */}
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto border border-white/30 shadow-2xl">
            {/* Features bar */}
            <div className="flex justify-center mb-5 overflow-x-auto pb-2">
              <div className="inline-flex items-center gap-3 text-white bg-white/10 rounded-full px-5 py-2 text-sm font-medium border border-white/20">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-amber-300" />
                  <span>Same-Day Service</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-amber-300" />
                  <span>Certified Technicians</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-amber-300" />
                  <span>Best Value Pricing</span>
                </div>
              </div>
            </div>
            
            {/* Main call to action */}
            <div className="text-center mb-6">
              <h2 className="text-white font-bold text-2xl md:text-3xl mb-3">Ready to Schedule Your Cleaning?</h2>
              <p className="text-gray-100 text-sm md:text-base mb-2">Professional service with flexible scheduling to fit your busy life</p>
              <div className="inline-flex items-center text-amber-300 text-xs font-medium">
                <MapPin className="h-3 w-3 mr-1" />
                Serving St. Louis City, County, and Metro East
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13146326526"
                aria-label="Call or text us at (314) 632-6526"
                className="group bg-white text-gray-800 rounded-xl font-semibold py-5 px-7 flex items-center gap-4 hover:scale-105 transition-all hover:shadow-xl w-full sm:w-auto shadow-lg border border-white/80"
              >
                <div className="bg-primary/10 rounded-full p-2 group-hover:bg-primary/20 transition-colors">
                  <PhoneCall className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-lg">Call or Text</span>
                  <span className="text-base font-medium">(314) 632-6526</span>
                </div>
              </a>
              <a 
                href="#contact-cta"
                aria-label="Schedule service - opens contact options"
                className="group bg-gradient-to-r from-primary to-primary-dark border border-white/10 text-white font-semibold py-5 px-7 w-full sm:w-auto rounded-xl shadow-lg text-center transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-lg">Schedule Service</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Service Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5 md:gap-8">
          {/* Feature 1: Fire Prevention */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-red-500 to-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-6 md:p-8 relative">
              <div className="bg-red-50 rounded-full p-3 inline-block mb-4 group-hover:bg-red-100 transition-colors">
                <Flame className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">Fire Prevention</h3>
              <p className="text-gray-700 mb-4">Lint buildup is highly flammable and the leading cause of dryer fires. Regular cleaning significantly reduces this risk.</p>
              <div className="bg-red-50 rounded-lg p-4 text-sm text-gray-700 font-medium border border-red-100">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <span>Over 2,900 dryer fires occur annually in the U.S. causing $35 million in property damage - U.S. Fire Administration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature 2: Energy Efficiency */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-green-500 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-6 md:p-8 relative">
              <div className="bg-green-50 rounded-full p-3 inline-block mb-4 group-hover:bg-green-100 transition-colors">
                <Zap className="h-7 w-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">Energy Savings</h3>
              <p className="text-gray-700 mb-4">Clean vents help your dryer run more efficiently, reducing energy consumption and extending appliance life.</p>
              <ul className="space-y-3">
                <li className="flex items-center bg-green-50 rounded-lg p-3 border border-green-100">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-medium block">Lower utility bills</span>
                    <span className="text-xs text-gray-500">Save up to 30% on dryer energy costs</span>
                  </div>
                </li>
                <li className="flex items-center bg-green-50 rounded-lg p-3 border border-green-100">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700 font-medium block">Faster drying times</span>
                    <span className="text-xs text-gray-500">Reduce drying cycles by up to 20 minutes</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3: Professional Service */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-primary to-primary/80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-6 md:p-8 relative">
              <div className="bg-primary/10 rounded-full p-3 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Expert Service</h3>
              <p className="text-gray-700 mb-4">Our experienced technicians use professional-grade equipment to thoroughly clean your entire vent system from the dryer to the exterior vent.</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium text-gray-800">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium text-gray-800">Licensed & Insured Technicians</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Angled bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform -skew-y-2 translate-y-8"></div>
    </section>
  );
}