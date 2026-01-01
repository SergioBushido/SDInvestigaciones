import { Title, Meta, Link } from '@solidjs/meta';
import { useLocation } from '@solidjs/router';
import { createMemo } from 'solid-js';
import { useAppContext } from '../../context/AppContext';

/**
 * Head Component
 * Manages dynamic SEO tags including Title, Description, Canonical, and Structured Data.
 */
const Head = () => {
  const location = useLocation();
  const { language } = useAppContext();

  // Base URL production
  const siteUrl = 'https://www.sdinvestigaciones.com';

  // Memoize canonical URL to avoid unnecessary recalculations
  const canonicalUrl = createMemo(() => {
    // Ensure trailing slash consistency if needed, or remove it. 
    // Usually standardized to remove trailing slash or keep it.
    // For this case, we'll construct it based on the current path.
    const path = location.pathname;
    return `${siteUrl}${path}`;
  });

  // Dynamic Structured Data (Schema.org) using the correct URL
  const schemaData = createMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SD INVESTIGACIONES",
    "legalName": "SD INVESTIGACIONES - Agencia de Detectives Privados",
    "taxID": "RNSP 11.582",
    "license": "6.091",
    "url": siteUrl,
    "telephone": "+34643697615",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Tenerife"
    },
    "knowsAbout": [
      "Investigación de infidelidades",
      "Bajas laborales",
      "Localización de personas",
      "Derecho de familia",
      "Barridos electrónicos"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34643697615",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English", "German"]
    },
    "identifier": "RNSP 11.582",
    "description": "Detective privado en Tenerife con TIP 6.091 y RNSP 11.582. Especialistas en investigaciones familiares y empresariales.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Candelaria",
      "addressRegion": "Santa Cruz de Tenerife",
      "postalCode": "38530",
      "addressCountry": "ES"
    }
  }));

  return (
    <>
      {/* Default Title - pages can override this */}
      <Title>SD Investigaciones | Detectives Privados en Tenerife</Title>
      
      {/* Dynamic Canonical */}
      <Link rel="canonical" href={canonicalUrl()} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData())}
      </script>

      {/* Open Graph Base */}
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:site_name" content="SD Investigaciones" />
    </>
  );
};

export default Head;
