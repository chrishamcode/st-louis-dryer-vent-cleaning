import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function StLouisCity() {
  return (
    <div className="py-16">
      <Helmet>
        <title>Dryer Vent Cleaning in St. Louis City | Professional Services</title>
        <meta name="description" content="Professional dryer vent cleaning services throughout St. Louis City. Prevent fire hazards, improve efficiency, and extend the life of your dryer. Serving Downtown, Central West End, Soulard, and all city neighborhoods." />
        <link rel="canonical" href="https://stlouisdryerventcleaning.com/service-areas/st-louis-city" />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content="St. Louis" />
        <meta name="geo.position" content="38.6270;-90.1994" />
        <meta name="ICBM" content="38.6270, -90.1994" />
        
        {/* Voice Search and Natural Language Optimization */}
        <meta name="keywords" content="dryer vent cleaning St. Louis City, dryer maintenance downtown St. Louis, Central West End dryer vent service, Soulard dryer vent cleaning, Lafayette Square dryer maintenance, The Hill dryer vent cleaners, best dryer vent cleaning in St. Louis City, how much does dryer vent cleaning cost in St. Louis" />
        <meta name="description" content="Looking for dryer vent cleaning in St. Louis City? Our professional service covers all neighborhoods including Downtown, Central West End, Soulard, and Lafayette Square. Call (314) 632-6526 to schedule." data-rh="true" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "St. Louis Dryer Vent Cleaning",
            "image": "/images/dryer-vent-cleaning-service.jpg",
            "telephone": "+1-314-632-6526",
            "email": "info@stlouisdryerventcleaning.com",
            "priceRange": "$$",
            "description": "Professional dryer vent cleaning services in St. Louis City, covering Downtown, Central West End, Soulard, and all neighborhoods.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "St. Louis",
              "addressRegion": "MO",
              "postalCode": "63110",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 38.6270,
              "longitude": -90.1994
            },
            "areaServed": {
              "@type": "City",
              "name": "St. Louis City",
              "addressRegion": "MO",
              "sameAs": "https://en.wikipedia.org/wiki/St._Louis"
            },
            "url": "https://stlouisdryerventcleaning.com/service-areas/st-louis-city",
            "openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-16:00",
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "serviceQuality",
                "value": "Professional"
              },
              {
                "@type": "PropertyValue",
                "name": "serviceFrequency",
                "value": "Annual recommended"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/service-areas" className="hover:text-primary">Service Areas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">St. Louis City</span>
        </div>

        <h1 className="mb-8 text-3xl md:text-4xl font-bold">Dryer Vent Cleaning in St. Louis City</h1>
        
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3 mb-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Our professional dryer vent cleaning service covers all neighborhoods throughout St. Louis City. 
                From downtown high-rises to historic homes in Lafayette Square and Soulard, our experienced 
                technicians provide thorough dryer vent cleaning to prevent fire hazards and improve appliance efficiency.
              </p>
              
              <p>
                Dryer vent cleaning is essential for all St. Louis City residents, as lint buildup in dryer vents is a 
                leading cause of home fires. Our comprehensive service includes inspection, cleaning, and verification 
                to ensure your dryer venting system is operating safely and efficiently.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Areas We Serve in St. Louis City</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Downtown</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Central West End</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Soulard</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Lafayette Square</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Tower Grove</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>The Hill</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Shaw</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Benton Park</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Forest Park</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Why St. Louis City Residents Choose Us</h2>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Experienced technicians who understand the unique architecture of St. Louis City homes</li>
                <li>Prompt service with appointment times that fit your schedule</li>
                <li>Comprehensive cleaning that removes all lint and blockages</li>
                <li>Detailed inspection reports that document the condition of your venting system</li>
                <li>Clear pricing with no hidden charges</li>
                <li>City-licensed and fully insured for your protection</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Importance of Dryer Vent Cleaning in St. Louis</h2>
              
              <p>
                St. Louis City's mix of historic and modern housing presents unique challenges for dryer venting.
                Older buildings may have longer, more complex venting systems that are particularly prone to lint
                accumulation. Regular cleaning is essential to:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Prevent fire hazards from lint buildup</li>
                <li>Improve energy efficiency and reduce utility bills</li>
                <li>Extend the life of your dryer</li>
                <li>Reduce drying time for your laundry</li>
                <li>Minimize carbon monoxide risks for gas dryers</li>
              </ul>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h3 className="text-xl font-semibold mb-2">Schedule Your St. Louis City Dryer Vent Cleaning</h3>
                <p className="mb-4">
                  Contact us today to schedule your professional dryer vent cleaning service in St. Louis City.
                  Our team is ready to help protect your home and improve your dryer's performance.
                </p>
                <Button asChild>
                  <a href="#contact-form">Schedule Now <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">St. Louis City Service Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Service Area</h3>
                      <p className="text-sm text-gray-600">All neighborhoods in St. Louis City</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Response Time</h3>
                      <p className="text-sm text-gray-600">Usually within 24-48 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Service Guarantee</h3>
                      <p className="text-sm text-gray-600">100% satisfaction guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Pricing</h3>
                      <p className="text-sm text-gray-600">Transparent pricing, no hidden fees</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:+13146326526">Call (314) 632-6526</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div id="contact-form" className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Schedule Service in St. Louis City
              </h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}