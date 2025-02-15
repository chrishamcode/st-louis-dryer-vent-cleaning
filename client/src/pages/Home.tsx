import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Why Choose Us?</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Professional, experienced technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>State-of-the-art cleaning equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1421940943431-d392fcc1079f"
                alt="Professional dryer vent cleaning service"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      
      <section className="bg-gray-50 py-16" id="contact-form">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl p-6">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Schedule Your Cleaning
            </h2>
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}
