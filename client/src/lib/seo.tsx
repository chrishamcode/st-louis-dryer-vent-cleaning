import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  children?: ReactNode;
  breadcrumb?: Array<{ name: string; url: string }>;
}

const defaultSEO = {
  title: "St. Louis Dryer Vent Cleaning | Professional & Affordable Service",
  description: "Professional dryer vent cleaning services in St. Louis, MO. Serving St. Louis City, County, St. Charles, St. Clair & Madison Counties. Safe, reliable & affordable.",
  canonical: "https://stlouisdryerventcleaning.com",
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  canonical = defaultSEO.canonical,
  children,
  breadcrumb = []
}: SEOProps) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | St. Louis Dryer Vent Cleaning`;

  const generateBreadcrumbSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://stlouisdryerventcleaning.com"
        },
        ...breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": item.name,
          "item": item.url
        }))
      ]
    };
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="St. Louis Dryer Vent Cleaning" />
      <meta property="og:image" content="/images/dryer-vent-cleaning-service.jpg" />
      <meta property="og:image:alt" content="Professional dryer vent cleaning service in St. Louis" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/dryer-vent-cleaning-service.jpg" />
      <meta name="twitter:image:alt" content="Professional dryer vent cleaning service in St. Louis" />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content="St. Louis" />
      <meta name="geo.position" content="38.6270;-90.1994" />
      <meta name="ICBM" content="38.6270, -90.1994" />
      
      {/* Voice Search and AI Optimization */}
      <meta name="apple-itunes-app" content="app-id=284815942" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google-site-verification" content="verification_token" />
      <meta name="norton-safeweb-site-verification" content="verification_token" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="St. Louis Dryer Vent Cleaning" />

      {/* Natural Language Search Queries */}
      <meta name="keywords" content="dryer vent cleaning, St. Louis, dryer maintenance, dryer fire prevention, professional dryer vent service, St. Louis County, St. Clair County, Madison County, residential dryer vent cleaning, commercial dryer vent service, how to clean dryer vents, why is my dryer not drying clothes, dryer taking too long, best dryer vent cleaning service near me, dryer vent cleaning cost" />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "St. Louis Dryer Vent Cleaning Service",
          "serviceType": "Dryer Vent Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "St. Louis Dryer Vent Cleaning",
            "image": "/images/dryer-vent-cleaning-service.jpg",
            "telephone": "+1-314-555-5555",
            "email": "info@stlouisdryerventcleaning.com",
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-18:00 Sa 09:00-16:00",
            "description": "Professional dryer vent cleaning services in St. Louis, MO and surrounding areas. We help prevent dryer fires, reduce energy costs, and extend the life of your appliance.",
            "areaServed": [
              {
                "@type": "County",
                "name": "St. Louis County",
                "state": "MO"
              },
              {
                "@type": "County",
                "name": "St. Charles County",
                "state": "MO"
              },
              {
                "@type": "City",
                "name": "St. Louis",
                "state": "MO"
              },
              {
                "@type": "County",
                "name": "St. Clair County",
                "state": "IL"
              },
              {
                "@type": "County",
                "name": "Madison County",
                "state": "IL"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 38.6270,
                "longitude": -90.1994
              },
              "geoRadius": "50000"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dryer Vent Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Professional Dryer Vent Cleaning",
                  "description": "Thorough cleaning of dryer vents to prevent fire hazards and improve efficiency"
                }
              }
            ]
          }
        })}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumb.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
      )}

      {children}
    </Helmet>
  );
}

export function ServiceAreasSEO() {
  return (
    <SEO
      title="Service Areas"
      description="Professional dryer vent cleaning services throughout St. Louis City, St. Louis County, St. Clair County, and Madison County. Find service in your area."
      canonical="https://stlouisdryerventcleaning.com/service-areas"
      breadcrumb={[{ name: "Service Areas", url: "https://stlouisdryerventcleaning.com/service-areas" }]}
    />
  );
}

export function ContactSEO() {
  return (
    <SEO
      title="Contact Us"
      description="Contact St. Louis Dryer Vent Cleaning for professional dryer vent cleaning services. Schedule an appointment or get a free quote today."
      canonical="https://stlouisdryerventcleaning.com/contact"
      breadcrumb={[{ name: "Contact", url: "https://stlouisdryerventcleaning.com/contact" }]}
    />
  );
}