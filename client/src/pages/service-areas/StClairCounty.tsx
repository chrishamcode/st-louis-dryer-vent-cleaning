import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function StClairCounty() {
  return (
    <div className="py-16">
      <Helmet>
        <title>Dryer Vent Cleaning in St. Clair County, IL | Professional Services</title>
        <meta name="description" content="Professional dryer vent cleaning services throughout St. Clair County, Illinois. Serving East St. Louis, Belleville, Fairview Heights, and surrounding areas." />
        <link rel="canonical" href="https://stlouisdryerventcleaning.com/service-areas/st-clair-county" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="St. Clair County" />
        <meta name="geo.position" content="38.5619;-89.9292" />
        <meta name="ICBM" content="38.5619, -89.9292" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "St. Louis Dryer Vent Cleaning",
            "image": "/images/dryer-vent-cleaning-service.jpg",
            "telephone": "+1-314-632-6526",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "St. Louis",
              "addressRegion": "MO",
              "postalCode": "63110",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "County",
              "name": "St. Clair County",
              "addressRegion": "IL",
              "sameAs": "https://en.wikipedia.org/wiki/St._Clair_County,_Illinois"
            },
            "url": "https://stlouisdryerventcleaning.com/service-areas/st-clair-county",
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
          <span className="text-gray-900">St. Clair County, IL</span>
        </div>

        <h1 className="mb-8 text-3xl md:text-4xl font-bold">Dryer Vent Cleaning in St. Clair County, Illinois</h1>
        
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3 mb-12">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Our professional dryer vent cleaning services extend east across the Mississippi River to all 
                communities in St. Clair County, Illinois. From East St. Louis to Belleville, O'Fallon to 
                Fairview Heights, we provide the same high-quality dryer vent cleaning that we're known for 
                throughout the St. Louis metro area.
              </p>
              
              <p>
                Residents of St. Clair County deserve the peace of mind that comes with properly maintained 
                dryer vents. Our Illinois customers receive our complete attention to detail and commitment 
                to safety, with technicians who understand the specific challenges of Illinois homes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Cities We Serve in St. Clair County</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-6">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>East St. Louis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Belleville</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>O'Fallon</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Fairview Heights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Swansea</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Cahokia</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Scott AFB</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Shiloh</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>Washington Park</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Illinois Dryer Vent Cleaning Process</h2>
              
              <p>
                When we service homes in St. Clair County, we follow a comprehensive process to ensure your 
                dryer venting system is completely clean and safe:
              </p>
              
              <ol className="list-decimal pl-5 space-y-2 mb-6">
                <li>Complete inspection of your entire dryer venting system</li>
                <li>Testing of airflow and backdraft damper functionality</li>
                <li>Professional cleaning using rotary brushes and high-powered vacuum systems</li>
                <li>Thorough removal of all lint accumulation from the entire vent length</li>
                <li>Inspection of the exterior vent termination for proper function</li>
                <li>Verification of improved airflow after cleaning</li>
                <li>Safety check of all connections and materials</li>
              </ol>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Why St. Clair County Residents Need Regular Dryer Vent Cleaning</h2>
              
              <p>
                St. Clair County homes face specific challenges that make regular dryer vent cleaning essential:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Illinois building codes may result in longer or more complex dryer vent configurations</li>
                <li>The humid Mississippi River valley climate can lead to moisture issues in venting systems</li>
                <li>Seasonal temperature variations can contribute to condensation in vent lines</li>
                <li>Older homes in Belleville and East St. Louis may have outdated venting materials</li>
                <li>Regular maintenance prevents the estimated 2,900 dryer fires that occur annually in the U.S.</li>
              </ul>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 my-8">
                <h3 className="text-xl font-semibold mb-2">Schedule Your Illinois Service Today</h3>
                <p className="mb-4">
                  We're proud to serve our Illinois neighbors with the same high-quality service we provide on the 
                  Missouri side of the river. Contact us today to schedule your professional dryer vent cleaning 
                  service anywhere in St. Clair County.
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
                <h2 className="text-xl font-semibold mb-4">St. Clair County Service Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Service Area</h3>
                      <p className="text-sm text-gray-600">All communities in St. Clair County, IL</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Response Time</h3>
                      <p className="text-sm text-gray-600">Usually within 48-72 hours</p>
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
                Schedule Service in St. Clair County
              </h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}