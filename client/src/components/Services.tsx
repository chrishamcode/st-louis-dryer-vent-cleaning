import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Timer, DollarSign, Home } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Professional Cleaning",
      description: "Thorough cleaning of your dryer vent system using professional-grade equipment",
      icon: Shield,
    },
    {
      title: "Quick Service",
      description: "Most services completed within 1-2 hours for your convenience",
      icon: Timer,
    },
    {
      title: "Competitive Pricing",
      description: "Affordable rates with no hidden fees or surprise charges",
      icon: DollarSign,
    },
    {
      title: "Service Guarantee",
      description: "100% satisfaction guaranteed on all our cleaning services",
      icon: Home,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We specialize in professional dryer vent cleaning to keep your home safe and your dryer running efficiently.
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
