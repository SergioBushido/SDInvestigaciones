import SEO from '../components/Seo/SEO';
import { A } from '@solidjs/router';
import { useAppContext } from '../context/AppContext';

const DetectivesTenerife = () => {
  const { t, lang } = useAppContext();
  
  // Dynamic Schema with current language URLs
  // ... (schema codes skipped in replace, just import change and usage)

  // NOTE: Schema definitions are inside function, we need to preserve them.
  // I will only replace the top imports and the return block start.
  // Actually, replace_file_content replaces a block.
  // I must be careful not to delete the schemas.
  // I will target the imports first.

  
  // Dynamic Schema with current language URLs
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.sdinvestigaciones.com${lang() === 'es' ? '' : '/' + lang()}/detectives-privados-tenerife/#service`,
    "name": t().detectivesPage.seoTitle,
    "provider": {
      "@id": "https://www.sdinvestigaciones.com/#localbusiness"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Tenerife"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t().detectivesPage.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t().nav.inicio,
        "item": `https://www.sdinvestigaciones.com${lang() === 'es' ? '' : '/' + lang()}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t().detectivesPage.h1,
        "item": `https://www.sdinvestigaciones.com${lang() === 'es' ? '' : '/' + lang()}/detectives-privados-tenerife`
      }
    ]
  };

  return (
    <main class="seo-page">
      <SEO 
        title={t().detectivesPage.seoTitle} 
        description={t().detectivesPage.seoDesc} 
      />
      
      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <section class="container section">
        <h1 class="text-gradient text-4xl font-bold mb-6 text-center">{t().detectivesPage.h1}</h1>
        <p class="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">{t().detectivesPage.intro}</p>
        
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div class="glass-card p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-6 text-blue-400">{t().detectivesPage.servicesTitle}</h2>
            <ul class="space-y-4">
              {t().detectivesPage.servicesList.map(item => (
                <li class="flex items-center text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div class="glass-card p-8 rounded-2xl">
            <h2 class="text-2xl font-bold mb-6 text-blue-400">{t().detectivesPage.whyChooseTitle}</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              {t().detectivesPage.whyChooseText}
            </p>
            <ul class="space-y-4">
               {t().hero.features && Object.values(t().hero.features).map(feature => (
                  <li class="flex items-center text-gray-300">
                    <svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
               ))}
            </ul>
          </div>
        </div>

        <article class="glass-card p-8 rounded-2xl mb-16 content-block">
            <h2 class="text-3xl font-bold mb-6 text-white">{t().detectivesPage.content.title}</h2>
            <div class="prose prose-invert max-w-none text-gray-300 space-y-4">
              <p innerHTML={t().detectivesPage.content.p1}></p>
              <p innerHTML={t().detectivesPage.content.p2}></p>
              <p innerHTML={t().detectivesPage.content.p3}></p>
            </div>
        </article>

        <section class="faq-section max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl font-bold mb-8 text-center">{t().detectivesPage.faq.title}</h2>
            <div class="space-y-4">
              {t().detectivesPage.faq.items.map(item => (
                <details class="glass-card rounded-xl overflow-hidden group">
                  <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span class="font-semibold text-lg">{item.q}</span>
                    <span class="transition-transform group-open:rotate-180">
                      <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
        </section>

        <div class="cta-box text-center glass-card p-12 rounded-2xl mb-16 bg-gradient-to-br from-blue-900/30 to-transparent">
          <h3 class="text-3xl font-bold mb-6">{t().detectivesPage.cta.title}</h3>
          <A href={`/${lang()}/contacto`} class="btn-primary inline-flex items-center px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105">
            {t().detectivesPage.cta.button}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </A>
        </div>
        
        <div class="seo-links-section max-w-4xl mx-auto">
           <h3 class="text-xl font-semibold text-gray-400">{t().seoLinks.title}</h3>
           <div class="seo-links-grid">
             <A href={`/${lang()}/precio-detective-privado-tenerife`} class="seo-link-item">{t().seoLinks.price}</A>
             <A href={`/${lang()}/agencia-investigacion-privada-tenerife`} class="seo-link-item">{t().seoLinks.agency}</A>
             <A href={`/${lang()}`} class="seo-link-item">{t().seoLinks.detectives} ({t().nav.inicio})</A>
           </div>
        </div>
      </section>
    </main>
  );
};

export default DetectivesTenerife;
