import { useState, useEffect } from 'react';

interface GeolocationState {
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
  zipCode: string | null;
  city: string | null;
  state: string | null;
  loading: boolean;
  error: string | null;
}

export function useGeolocation() {
  const [geolocation, setGeolocation] = useState<GeolocationState>({
    coords: {
      latitude: null,
      longitude: null,
    },
    zipCode: null,
    city: null,
    state: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeolocation(prev => ({
        ...prev,
        loading: false,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Using free position stack API to reverse geocode
          // In a production environment, you should use a service with appropriate rate limits
          // or a paid service with better reliability
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          
          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }
          
          const data = await response.json();
          
          // Add validation for the returned data
          if (!data || typeof data !== 'object') {
            throw new Error("Invalid data returned from location service");
          }
          
          setGeolocation({
            coords: {
              latitude,
              longitude,
            },
            zipCode: data.postcode || null,
            city: data.locality || data.city || null,
            state: data.principalSubdivision || data.region || null,
            loading: false,
            error: null,
          });
        } catch (err) {
          // If reverse geocoding fails, we still have coordinates
          console.error("Geocoding error:", err);
          
          let errorMessage = "Unable to determine your precise location details";
          if (err instanceof Error) {
            errorMessage = `Location lookup failed: ${err.message}`;
          }
          
          setGeolocation({
            coords: {
              latitude,
              longitude,
            },
            zipCode: null,
            city: null,
            state: null,
            loading: false,
            error: errorMessage,
          });
        }
      },
      (error) => {
        let errorMessage = "Failed to get your location";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "You denied the request for geolocation";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get your location timed out";
            break;
        }
        
        setGeolocation(prev => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
      }
    );
  }, []);

  return geolocation;
}

// Helper function to calculate distance between coordinates (using Haversine formula)
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  
  return distance;
}

// Approximated coordinates for service areas
export const serviceAreaCoordinates = {
  "St. Louis City": { lat: 38.627, lon: -90.1994 },
  "St. Louis County": { lat: 38.6531, lon: -90.2435 },
  "St. Charles County": { lat: 38.7827, lon: -90.6973 },
  "St. Clair County": { lat: 38.5619, lon: -89.9292 },
  "Madison County": { lat: 38.8293, lon: -89.9073 },
};

// Mapping between ZIP codes and areas
export const zipToAreaMapping: Record<string, string> = {
  // St. Louis City
  "63110": "St. Louis City",
  "63101": "St. Louis City",
  "63102": "St. Louis City",
  "63103": "St. Louis City",
  "63104": "St. Louis City",
  
  // St. Louis County
  "63121": "St. Louis County",
  "63122": "St. Louis County",
  "63123": "St. Louis County",
  "63124": "St. Louis County",
  
  // St. Clair County (IL)
  "62201": "St. Clair County",
  "62202": "St. Clair County",
  "62203": "St. Clair County",
  "62204": "St. Clair County",
  
  // Madison County (IL)
  "62001": "Madison County",
  "62002": "Madison County",
  "62003": "Madison County",
  "62004": "Madison County",
};