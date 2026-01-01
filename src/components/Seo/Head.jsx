import { Title, Meta, Link } from '@solidjs/meta';
import { useLocation } from '@solidjs/router';
import { createMemo } from 'solid-js';
import { useAppContext } from '../../context/AppContext';
import { localBusinessSchema } from '../../data/seoSchema';

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
    let path = location.pathname;
    // Normalize: remove trailing slash if not root
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return `${siteUrl}${path}`;
  });

  // Main LocalBusiness Schema - Only render on Home
  // Detect home paths like '/', '/es/', '/en/'
  const isHome = createMemo(() => {
    let path = location.pathname;
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return path === '' || path === '/' || path.match(/^\/[a-z]{2}$/);
  });

  const schemaData = createMemo(() => {
    return isHome() ? localBusinessSchema : null;
  });

  return (
    <>
      {/* Default Title - pages can override this */}
      <Title>SD Investigaciones | Detectives Privados en Tenerife</Title>
      
      {/* Dynamic Canonical */}
      <Link rel="canonical" href={canonicalUrl()} />

      {/* Structured Data - Only on Home */}
      {schemaData() && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData())}
        </script>
      )}

      {/* Open Graph Base */}
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:site_name" content="SD Investigaciones" />
    </>
  );
};

export default Head;
