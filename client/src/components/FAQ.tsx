import { Card } from "@/components/ui/card";
import { 
  Flame, 
  Shield, 
  Clock, 
  CheckCircle, 
  User, 
  Zap,
  DollarSign, 
  Award, 
  Home 
} from "lucide-react";

export default function FAQ() {
  return (
    <section className="py-16 bg-blue-800 text-white" aria-labelledby="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 
            id="why-choose-us" 
            className="text-3xl font-bold tracking-tight text-white mb-3"
          >
            Why St. Louis Dryer Vent Cleaning?
          </h2>
          <p className="text-lg text-white/80">
            Expert service that keeps your home safe and your dryer efficient
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {/* Card 1 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prevents Fires</h3>
              <p className="text-gray-600">
                Lint is highly flammable. Regular cleaning eliminates fire hazards that cause 2,900+ home fires yearly.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Saves Money</h3>
              <p className="text-gray-600">
                Reduces energy bills by up to 30% and extends your dryer's lifespan by preventing overheating.
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Drying</h3>
              <p className="text-gray-600">
                Clean vents mean your clothes dry faster - no more running multiple cycles to get the job done.
              </p>
            </div>
          </Card>

          {/* Card 4 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                We guarantee our work with a complete satisfaction guarantee and transparent pricing.
              </p>
            </div>
          </Card>

          {/* Card 5 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Technicians</h3>
              <p className="text-gray-600">
                Our certified experts use specialized equipment to thoroughly clean your entire vent system.
              </p>
            </div>
          </Card>

          {/* Card 6 */}
          <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary rounded-full p-3 mb-4">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Experts</h3>
              <p className="text-gray-600">
                Trusted by St. Louis homeowners since 2015 with knowledge of local building styles.
              </p>
            </div>
          </Card>
        </div>
        
        {/* Warning Signs */}
        <div className="mx-auto max-w-3xl mt-16 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center">
            <Flame className="text-red-500 mr-2 h-6 w-6" />
            Warning Signs Your Dryer Vent Needs Cleaning
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>Clothes take longer than normal to dry</p>
            </div>
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>Burning smell during operation</p>
            </div>
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>Dryer feels unusually hot to touch</p>
            </div>
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>Visible lint around the vent opening</p>
            </div>
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>Dryer shuts off before clothes are dry</p>
            </div>
            <div className="flex items-start">
              <Zap className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <p>It's been over a year since last cleaning</p>
            </div>
          </div>
        </div>
        
        {/* Annual Cleaning Recommendation */}
        <div className="text-center mt-8">
          <p className="text-lg font-medium text-white">
            <Award className="inline-block mr-2 h-5 w-5 text-white" />
            The National Fire Protection Association recommends cleaning your dryer vent at least once per year
          </p>
        </div>
      </div>
    </section>
  );
}