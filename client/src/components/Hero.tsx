import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary" aria-label="Hero section">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center text-white">
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
                className="text-lg font-semibold py-6 px-8 hover:bg-white/20" 
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
            <img
              src="/images/dryer-vent-cleaning-service.jpg"
              alt="Professional technician cleaning a dryer vent in St. Louis"
              className="rounded-lg object-cover shadow-xl w-full h-[400px]"
              width="800"
              height="400"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}