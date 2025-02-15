import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-16">
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
                        <a href="tel:314-555-0123">(314) 555-0123</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@stlouisdryervent.com">
                          info@stlouisdryervent.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Main Street
                        <br />
                        St. Louis, MO 63101
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
                  <a href="tel:314-555-0123">
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
