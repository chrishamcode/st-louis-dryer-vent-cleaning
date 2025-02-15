import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "St. Louis City",
      text: "Excellent service! They were professional, on time, and did a thorough job cleaning our dryer vent. Highly recommended for anyone looking for reliable service.",
      rating: 5,
    },
    {
      name: "Mike Thompson",
      location: "St. Louis County",
      text: "Very knowledgeable team. They explained everything and got the job done quickly. Our dryer works so much better now!",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      location: "Madison County",
      text: "Great experience from start to finish. Fair pricing and excellent customer service. They even showed me before and after photos of the vent cleaning.",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      location: "St. Clair County",
      text: "Professional and efficient service. They arrived on time and completed the work quickly. My dryer is working like new again!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      location: "St. Louis City",
      text: "Outstanding service! They were able to schedule me quickly and did an amazing job. The difference in my dryer's performance is remarkable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">What Our Customers Say</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 mb-12">
          Don't just take our word for it - hear from our satisfied customers
          throughout the St. Louis area.
        </p>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}