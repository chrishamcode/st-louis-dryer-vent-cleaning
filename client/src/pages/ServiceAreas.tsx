import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function ServiceAreas() {
  const areas = [
    {
      name: "St. Louis City",
      description: "Complete coverage throughout St. Louis City",
      zips: ["63101", "63102", "63103", "63104"],
    },
    {
      name: "St. Louis County",
      description: "Serving all major communities in St. Louis County",
      zips: ["63121", "63122", "63123", "63124"],
    },
    {
      name: "St. Clair County",
      description: "Available throughout St. Clair County, IL",
      zips: ["62201", "62202", "62203", "62204"],
    },
    {
      name: "Madison County",
      description: "Serving Madison County, IL residents",
      zips: ["62001", "62002", "62003", "62004"],
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Service Areas</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          We provide professional dryer vent cleaning services throughout the
          greater St. Louis metropolitan area.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Card key={area.name}>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{area.name}</h3>
                <p className="mb-4 text-gray-600">{area.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium">Service ZIP Codes:</p>
                  <p>{area.zips.join(", ")}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="mx-auto max-w-2xl p-6">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Schedule a Cleaning in Your Area
            </h2>
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
