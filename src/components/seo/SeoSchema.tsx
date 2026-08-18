import React from "react";

export function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://microsistec.com.br/#organization",
        "name": "Microsistec",
        "url": "https://microsistec.com.br",
        "logo": "https://microsistec.com.br/icon.svg",
        "sameAs": [
          "https://www.facebook.com/microsistec",
          "https://www.instagram.com/microsistec",
          "https://www.youtube.com/user/microsistec"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-13-3227-8090",
          "contactType": "customer service",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://microsistec.com.br/#software",
        "name": "CRM Imobiliário Microsistec",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "url": "https://microsistec.com.br",
        "publisher": {
          "@id": "https://microsistec.com.br/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
