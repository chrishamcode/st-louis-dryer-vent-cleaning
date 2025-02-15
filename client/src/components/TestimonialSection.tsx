import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "St. Louis City",
      text: "Excellent service! They were professional, on time, and did a thorough job cleaning our dryer vent.",
      rating: 5,
    },
    {
      name: "Mike Thompson",
      location: "St. Louis County",
      text: "Very knowledgeable team. They explained everything and got the job done quickly.",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      location: "Madison County",
      text: "Great experience from start to finish. Fair pricing and excellent customer service.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">What Our Customers Say</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Don't just take our word for it - hear from our satisfied customers
          throughout the St. Louis area.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
