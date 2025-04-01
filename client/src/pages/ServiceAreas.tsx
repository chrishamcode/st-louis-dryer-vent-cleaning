import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, MapPin, CheckCircle } from "lucide-react";
import { useGeolocation, calculateDistance, serviceAreaCoordinates, zipToAreaMapping } from "@/hooks/use-geolocation";
import ContactForm from "@/components/ContactForm";
import { ServiceAreasSEO } from "@/lib/seo";

export default function ServiceAreas() {
  const geolocation = useGeolocation();
  const [nearbyArea, setNearbyArea] = useState<string | null>(null);
  const [nearbyAreas, setNearbyAreas] = useState<string[]>([]);
  const [showLocationPrompt, setShowLocationPrompt] = useState<boolean>(true);
  
  const areas = [
    {
      name: "St. Louis City",
      description: "Complete coverage throughout St. Louis City",
      zips: ["63101", "63102", "63103", "63104"],
      state: "MO"
    },
    {
      name: "St. Louis County",
      description: "Serving all major communities in St. Louis County",
      zips: ["63121", "63122", "63123", "63124"],
      state: "MO"
    },
    {
      name: "St. Charles County",
      description: "Full service throughout St. Charles County",
      zips: ["63301", "63303", "63304", "63366"],
      state: "MO"
    },
    {
      name: "St. Clair County",
      description: "Available throughout St. Clair County, IL",
      zips: ["62201", "62202", "62203", "62204"],
      state: "IL"
    },
    {
      name: "Madison County",
      description: "Serving Madison County, IL residents",
      zips: ["62001", "62002", "62003", "62004"],
      state: "IL"
    },
  ];

  useEffect(() => {
    if (geolocation.loading || geolocation.error) return;
    
    // Check if user's ZIP code matches any of our service areas
    if (geolocation.zipCode && zipToAreaMapping[geolocation.zipCode]) {
      const matchedArea = zipToAreaMapping[geolocation.zipCode];
      setNearbyArea(matchedArea);
      setNearbyAreas([matchedArea]);
      return;
    }
    
    // If no direct ZIP match, check by proximity
    if (geolocation.coords.latitude && geolocation.coords.longitude) {
      const userLat = geolocation.coords.latitude;
      const userLon = geolocation.coords.longitude;
      
      // Calculate distances to all service areas
      const distances = Object.entries(serviceAreaCoordinates).map(([area, coords]) => {
        const distance = calculateDistance(userLat, userLon, coords.lat, coords.lon);
        return { area, distance };
      });
      
      // Sort by proximity
      distances.sort((a, b) => a.distance - b.distance);
      
      // Closest area
      if (distances.length > 0 && distances[0].distance < 50) { // Within 50km
        setNearbyArea(distances[0].area);
      }
      
      // Areas within reasonable distance (30km)
      const nearby = distances
        .filter(d => d.distance < 30)
        .map(d => d.area);
      
      setNearbyAreas(nearby);
    }
    
    setShowLocationPrompt(false);
  }, [geolocation]);

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // This will trigger the useEffect in useGeolocation
          window.location.reload();
        },
        (error) => {
          console.error("Error requesting location:", error);
        }
      );
    }
    setShowLocationPrompt(false);
  };

  const isAreaNearby = (areaName: string) => {
    return nearbyAreas.includes(areaName);
  };

  return (
    <div className="py-16">
      <ServiceAreasSEO />
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Service Areas</h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
          We provide professional dryer vent cleaning services throughout the
          greater St. Louis metropolitan area.
        </p>

        {/* Location-based service notice */}
        {showLocationPrompt && !geolocation.loading && !geolocation.error && (
          <div className="mb-8 mx-auto max-w-xl bg-primary/5 rounded-lg p-4 flex items-center gap-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">
                Share your location to see service areas near you
              </p>
              <p className="text-sm text-gray-500 mt-1">
                We'll highlight service areas close to your location for easier reference.
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-shrink-0 whitespace-nowrap"
              onClick={requestLocationPermission}
            >
              Share Location
            </Button>
          </div>
        )}

        {/* Loading state */}
        {geolocation.loading && (
          <div className="mb-8 mx-auto max-w-xl bg-primary/5 rounded-lg p-4 flex items-center gap-4">
            <div className="animate-pulse h-6 w-6 bg-primary/20 rounded-full flex-shrink-0" />
            <p className="text-sm font-medium">Detecting your location...</p>
          </div>
        )}

        {/* Error state */}
        {geolocation.error && (
          <div className="mb-8 mx-auto max-w-xl bg-red-50 rounded-lg p-4 flex items-center gap-4">
            <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Location detection unavailable</p>
              <p className="text-sm text-gray-500 mt-1">{geolocation.error}</p>
            </div>
          </div>
        )}

        {/* Location detected - success message */}
        {!geolocation.loading && !geolocation.error && nearbyArea && (
          <div className="mb-8 mx-auto max-w-xl bg-green-50 rounded-lg p-4 flex items-center gap-4">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">
                We serve your area! {geolocation.city && `(${geolocation.city}, ${geolocation.state})`}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {nearbyAreas.length > 1 
                  ? `We found ${nearbyAreas.length} service areas near you.`
                  : `${nearbyArea} is highlighted below.`
                }
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const isNearby = isAreaNearby(area.name);
            
            return (
              <Card 
                key={area.name} 
                className={`transition-all duration-300 ${isNearby ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="whitespace-nowrap">{area.state}</Badge>
                      {isNearby && (
                        <Badge className="bg-primary hover:bg-primary whitespace-nowrap" variant="default">
                          Nearby
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600">{area.description}</p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium">Service ZIP Codes:</p>
                    <p>{area.zips.join(", ")}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
