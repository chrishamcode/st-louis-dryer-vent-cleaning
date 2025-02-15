import { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  children?: ReactNode;
}

const defaultSEO = {
  title: "St. Louis Dryer Vent Cleaning | Professional & Affordable Service",
  description: "Professional dryer vent cleaning services in St. Louis, MO. Serving St. Louis City, County, St. Clair & Madison Counties. Safe, reliable & affordable.",
  canonical: "https://stlouisdryerventcleaning.com",
};

export default function SEO({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  canonical = defaultSEO.canonical,
  children 
}: SEOProps) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | St. Louis Dryer Vent Cleaning`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="St. Louis Dryer Vent Cleaning" />
      <meta property="og:image" content="/images/dryer-vent-cleaning-service.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/dryer-vent-cleaning-service.jpg" />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content="St. Louis" />
      <meta name="geo.position" content="38.6270;-90.1994" />
      <meta name="ICBM" content="38.6270, -90.1994" />

      {/* Keywords */}
      <meta name="keywords" content="dryer vent cleaning, St. Louis, dryer maintenance, dryer fire prevention, professional dryer vent service, St. Louis County, St. Clair County, Madison County" />

      {/* Local Business Schema - Additional to the one in index.html */}
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
            "telephone": "+1-314-555-0123",
            "priceRange": "$$"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "St. Louis",
              "state": "MO"
            },
            {
              "@type": "County",
              "name": "St. Louis County",
              "state": "MO"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dryer Vent Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Professional Dryer Vent Cleaning"
                }
              }
            ]
          }
        })}
      </script>

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
    />
  );
}

export function ContactSEO() {
  return (
    <SEO
      title="Contact Us"
      description="Contact St. Louis Dryer Vent Cleaning for professional dryer vent cleaning services. Schedule an appointment or get a free quote today."
      canonical="https://stlouisdryerventcleaning.com/contact"
    />
  );
}