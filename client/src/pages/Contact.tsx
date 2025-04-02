import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ContactSEO } from "@/lib/seo";
import { Helmet } from "react-helmet";

export default function Contact() {
  // Structured data for local business contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "St. Louis Dryer Vent Cleaning Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "St. Louis Dryer Vent Cleaning",
      "telephone": "+1-314-632-6526",
      "email": "info@stlouisdryerventcleaning.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "St. Louis",
        "addressRegion": "MO",
        "postalCode": "63110",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-16:00"
    },
    "serviceType": "Dryer vent cleaning",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.6270,
        "longitude": -90.1994
      },
      "geoRadius": "50"
    }
  };
  return (
    <div className="py-16">
      <ContactSEO />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
        <meta name="keywords" content="dryer vent cleaning contact, St. Louis dryer vent service, schedule dryer cleaning, dryer vent cleaning quote, dryer vent service near me" />
        <meta name="description" content="Contact St. Louis Dryer Vent Cleaning at (314) 632-6526 or email us to schedule your dryer vent cleaning service. Professional, affordable, and reliable service throughout the St. Louis area." />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Contact Us</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Get in touch with us for professional dryer vent cleaning services in the
          St. Louis area.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <PhoneCall className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+13146326526">(314) 632-6526</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@stlouisdryerventcleaning.com">
                          info@stlouisdryerventcleaning.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        St. Louis, MO 63110
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8am - 6pm
                        <br />
                        Saturday: 9am - 4pm
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full" asChild>
                  <a href="tel:+13146326526">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
