import { Title, Meta, Link } from '@solidjs/meta';
import { useLocation } from '@solidjs/router';
import { createMemo, mergeProps } from 'solid-js';
import { useAppContext } from '../../context/AppContext';

/**
 * SEO Component
 * Centralizes all SEO logic: Titles, Descriptions, Canonical URLs, and Robots.
 * 
 * Props:
 * - title (string): Page title (without suffix).
 * - description (string): Meta description.
 * - path (string, optional): Override canonical path (e.g., for duplicate routes).
 * - noindex (boolean): If true, adds robots=noindex.
 * - schema (object, optional): JSON-LD structured data.
 */
const SEO = (props) => {
  const merged = mergeProps({ 
    title: '', 
    description: '', 
    noindex: false 
  }, props);

  const location = useLocation();
  const { language } = useAppContext();
  
  // Base URL
  const siteUrl = 'https://www.sdinvestigaciones.com';

  // Calculate Canonical URL
  const canonicalUrl = createMemo(() => {
    // 1. Use manual path override if provided
    if (merged.path) {
      return `${siteUrl}${merged.path}`;
    }

    // 2. Otherwise use current location
    let path = location.pathname;
    
    // Normalize: remove trailing slash if not root
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    
    return `${siteUrl}${path}`;
  });

  // Full Title construction
  const fullTitle = createMemo(() => {
    const suffix = ' | SD Investigaciones';
    return merged.title ? `${merged.title}${suffix}` : 'SD Investigaciones | Detectives Privados';
  });

  return (
    <>
      <Title>{fullTitle()}</Title>
      <Meta name="description" content={merged.description} />
      
      {/* Canonical */}
      <Link rel="canonical" href={canonicalUrl()} />

      {/* Robots */}
      {merged.noindex && (
        <Meta name="robots" content="noindex, nofollow" />
      )}

      {/* Open Graph */}
      <Meta property="og:title" content={fullTitle()} />
      <Meta property="og:description" content={merged.description} />
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="SD Investigaciones" />

      {/* Structured Data (if any) */}
      {merged.schema && (
        <script type="application/ld+json">
          {JSON.stringify(merged.schema)}
        </script>
      )}
    </>
  );
};

export default SEO;
