'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'website' | 'organization' | 'localBusiness' | 'service' | 'article' | 'breadcrumb'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

// بيانات منظمة للشركة
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ehabgm Digital Marketing Agency",
  "alternateName": "ehabgm",
  "url": "https://ehabgm.online",
  "logo": "https://i.postimg.cc/TYyK2Rtv/logo.png",
  "description": "وكالة التسويق الرقمي المتخصصة في حلوان، القاهرة. نقدم خدمات التصميم الجرافيكي، إدارة السوشيال ميديا، الإعلانات الممولة، تطوير المواقع، وتحسين محركات البحث SEO.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "إيهاب محمد",
    "jobTitle": "المؤسس والمدير التنفيذي"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Helwan",
    "addressRegion": "Cairo",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.85,
    "longitude": 31.3333
  },
  "telephone": "+201022679250",
  "email": "info@ehabgm.online",
  "sameAs": [
    "https://wa.me/201022679250",
    "https://www.facebook.com/ehabgm",
    "https://www.instagram.com/ehabgm",
    "https://www.linkedin.com/company/ehabgm"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 29.85,
      "longitude": 31.3333
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات التسويق الرقمي",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تصميم المواقع الإلكترونية",
          "description": "تصميم وتطوير المواقع الإلكترونية الاحترافية"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "إدارة السوشيال ميديا",
          "description": "إدارة حسابات السوشيال ميديا وإنشاء محتوى جذاب"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "الإعلانات الممولة",
          "description": "إدارة الحملات الإعلانية على فيسبوك وجوجل"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تحسين محركات البحث SEO",
          "description": "تحسين المواقع لمحركات البحث وزيادة الظهور"
        }
      }
    ]
  }
}

// بيانات منظمة للخدمات
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "خدمات التسويق الرقمي",
  "description": "خدمات التسويق الرقمي المتكاملة في حلوان، القاهرة",
  "provider": {
    "@type": "Organization",
    "name": "ehabgm Digital Marketing Agency"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Egypt"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات التسويق الرقمي",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تصميم المواقع الإلكترونية"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "إدارة السوشيال ميديا"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "الإعلانات الممولة"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "تحسين محركات البحث SEO"
        }
      }
    ]
  }
}

// بيانات منظمة للمقالات
export const articleSchema = (article: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.featured_image,
  "author": {
    "@type": "Person",
    "name": "إيهاب محمد"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ehabgm Digital Marketing Agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://i.postimg.cc/TYyK2Rtv/logo.png"
    }
  },
  "datePublished": article.created_at,
  "dateModified": article.updated_at,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://ehabgm.online/blog/${article.slug}`
  }
})