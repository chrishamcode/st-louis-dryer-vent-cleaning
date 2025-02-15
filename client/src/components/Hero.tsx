import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-primary">
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
              <Button size="lg" variant="secondary">
                <PhoneCall className="mr-2 h-5 w-5" />
                <a href="tel:314-555-0123">Call (314) 555-0123</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact-form">Schedule Service</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://placehold.co/800x400/e2e8f0/1e293b?text=Dryer+Vent+Cleaning"
              alt="Professional dryer vent cleaning service"
              className="rounded-lg object-cover shadow-xl w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}