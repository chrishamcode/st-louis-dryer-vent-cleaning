import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function StLouisCounty() {
  return (
    <div className="py-16">
      <Helmet>
        <title>Dryer Vent Cleaning in St. Louis County | Professional Services</title>
        <meta name="description" content="Professional dryer vent cleaning services throughout St. Louis County. Serving Florissant, Chesterfield, Clayton, and all suburbs with fire prevention services." />
        <link rel="canonical" href="https://stlouisdryerventcleaning.com/service-areas/st-louis-county" />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content="St. Louis County" />
        <meta name="geo.position" content="38.6531;-90.2435" />
        <meta name="ICBM" content="38.6531, -90.2435" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "St. Louis Dryer Vent Cleaning",
            "image": "/images/dryer-vent-cleaning-service.jpg",
            "telephone": "+1-314-555-0123",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "St. Louis",
              "addressRegion": "MO",
              "postalCode": "63101",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "County",
              "name": "St. Louis County",
              "sameAs": "https://en.wikipedia.org/wiki/St._Louis_County,_Missouri"
            },
            "url": "https://stlouisdryerventcleaning.com/service-areas/st-louis-county",
            "openingHours": "Mo-Sa 08:00-18:00"
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/service-areas" className="hover:text-primary">Service Areas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">St. Louis County</span>
        </div>

        <h1 className="mb-8 text-3xl md:text-4xl font-bold">Dryer Vent Cleaning in St. Louis County</h1>
        
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Our professional dryer vent cleaning service extends throughout St. Louis County, covering all major 
                municipalities and communities. From Florissant to Chesterfield, Clayton to Ballwin, we provide 
                comprehensive dryer vent cleaning services to suburban homes and businesses.
              </p>
              
              <p>
                St. Louis County residents particularly benefit from regular dryer vent maintenance. With many single-family 
                homes featuring longer vent runs and exterior wall terminations, St. Louis County properties can be more 
                susceptible to lint accumulation and the associated risks.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Communities We Serve in St. Louis County</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Florissant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Chesterfield</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Clayton</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>University City</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Kirkwood</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Webster Groves</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Creve Coeur</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Ballwin</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Maryland Heights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Wildwood</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Maplewood</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Ladue</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">St. Louis County Dryer Vent Cleaning Services</h2>
              
              <p>
                Our St. Louis County dryer vent cleaning service includes:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Complete inspection of your dryer venting system</li>
                <li>Professional cleaning of the entire vent duct from dryer to exterior termination</li>
                <li>Removal of all lint buildup and blockages</li>
                <li>Verification of proper airflow after cleaning</li>
                <li>Safety inspection of vent connections and materials</li>
                <li>Recommendations for any necessary repairs or improvements</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits for St. Louis County Homeowners</h2>
              
              <p>
                Regular dryer vent cleaning offers significant benefits for St. Louis County residents:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Reduced risk of dryer fires, a leading cause of residential fires</li>
                <li>Lower energy bills from improved dryer efficiency</li>
                <li>Extended lifespan of your dryer appliance</li>
                <li>Faster drying times for your laundry</li>
                <li>Decreased carbon monoxide risk for gas dryers</li>
                <li>Less wear on clothing from proper drying temperatures</li>
              </ul>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h3 className="text-xl font-semibold mb-2">Schedule Your St. Louis County Service</h3>
                <p className="mb-4">
                  Don't wait until your dryer shows signs of poor performance. Contact us today to schedule your 
                  professional dryer vent cleaning service anywhere in St. Louis County.
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
                <h2 className="text-xl font-semibold mb-4">St. Louis County Service Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Service Area</h3>
                      <p className="text-sm text-gray-600">All municipalities in St. Louis County</p>
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
                    <a href="tel:314-555-0123">Call (314) 555-0123</a>
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
                Schedule Service in St. Louis County
              </h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}