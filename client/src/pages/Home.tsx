import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Experience & Expertise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-lg">•</span>
                    <span>Experienced technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-lg">•</span>
                    <span>Professional cleaning equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Customer Friendly
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-lg">•</span>
                    <span>Competitive pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-lg">•</span>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      
      <FAQ />

      <section className="bg-primary/5 py-16" id="contact-form">
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