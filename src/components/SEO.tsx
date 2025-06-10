import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Padelicano",
    "applicationCategory": "SportsApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "The ultimate padel app for tournament management and organization. Create and manage padel tournaments including americano, mixicano and mexicano formats. Available for iPhone and Android.",
    "keywords": "padel app, padel americano, padel tournament, padel mexicano, padel iphone app, padel android app, padel tournament management",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 