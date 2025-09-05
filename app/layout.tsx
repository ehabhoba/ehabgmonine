import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import AnimatedBackground from "@/components/animated-background"
import ClientComponents from "@/components/client-components"
import ThemeToggle from "@/components/theme-toggle"
import AccessibilityMenu from "@/components/accessibility-menu"
import PerformanceMonitor from "@/components/performance-monitor"
import SmartNotifications from "@/components/smart-notifications"
import SimpleHeader from "@/components/simple-header"
import { GoogleAnalytics, FacebookPixel } from "@/components/analytics"
import PerformanceOptimization from "@/components/performance-optimization"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ehabgm.online'),
  title: {
    default: "ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة | تصميم جرافيك وإعلانات ممولة وسوشيال ميديا",
    template: "%s | ehabgm - وكالة التسويق الرقمي"
  },
  description:
    "وكالة ehabgm للتسويق الرقمي في حلوان، القاهرة. خدمات التصميم الجرافيكي، إدارة السوشيال ميديا، الإعلانات الممولة، تطوير المواقع، وتحسين محركات البحث SEO. اتصل بنا: 01022679250",
  keywords: [
    "تسويق رقمي حلوان",
    "تصميم جرافيك القاهرة", 
    "إعلانات ممولة",
    "سوشيال ميديا",
    "تطوير مواقع",
    "SEO مصر",
    "وكالة تسويق حلوان",
    "ehabgm",
    "فيسبوك",
    "انستجرام",
    "تيك توك",
    "يوتيوب",
    "إيهاب محمد",
    "Digital Marketing Egypt",
    "Social Media Management Cairo",
    "Web Development Helwan",
    "Graphic Design Egypt"
  ],
  authors: [{ name: "إيهاب محمد - المؤسس والمدير التنفيذي", url: "https://ehabgm.online/about" }],
  creator: "إيهاب محمد",
  publisher: "ehabgm Digital Marketing Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: "https://i.postimg.cc/TYyK2Rtv/logo.png", sizes: "32x32", type: "image/png" },
      { url: "https://i.postimg.cc/TYyK2Rtv/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "https://i.postimg.cc/TYyK2Rtv/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "https://i.postimg.cc/TYyK2Rtv/logo.png",
  },
  openGraph: {
    title: "ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة",
    description: "خدمات التسويق الرقمي المتكاملة وإدارة السوشيال ميديا من حلوان للعالم العربي",
    url: "https://ehabgm.online",
    siteName: "ehabgm Digital Marketing Agency",
    locale: "ar_EG",
    type: "website",
    countryName: "Egypt",
    emails: ['info@ehabgm.online'],
    phoneNumbers: ['+201022679250'],
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "ehabgm - وكالة التسويق الرقمي في حلوان، القاهرة",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ehabgm - وكالة التسويق الرقمي",
    description: "خدمات التسويق الرقمي المتكاملة من حلوان، القاهرة",
    images: ["https://i.postimg.cc/TYyK2Rtv/logo.png"],
  },
  alternates: {
    canonical: "https://ehabgm.online",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Helwan, Cairo" />
        <meta name="geo.position" content="29.8500;31.3333" />
        <meta name="ICBM" content="29.8500, 31.3333" />
        <link rel="canonical" href="https://ehabgm.online" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
        <link rel="shortcut icon" href="https://i.postimg.cc/TYyK2Rtv/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ehabgm" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://ehabgm.online/#organization",
                name: "ehabgm Digital Marketing Agency",
                alternateName: "إيهاب جي إم للتسويق الرقمي",
                description: "وكالة التسويق الرقمي في حلوان، القاهرة - المؤسس والمدير التنفيذي: إيهاب محمد",
                url: "https://ehabgm.online",
                telephone: "+201022679250",
                email: "info@ehabgm.online",
                logo: "https://i.postimg.cc/TYyK2Rtv/logo.png",
                image: "https://i.postimg.cc/TYyK2Rtv/logo.png",
                founder: {
                  "@type": "Person",
                  name: "إيهاب محمد",
                  jobTitle: "المؤسس والمدير التنفيذي",
                  nationality: "Egyptian"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Helwan",
                  addressRegion: "Cairo Governorate",
                  addressCountry: "Egypt",
                  postalCode: "11421"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 29.85,
                  longitude: 31.3333
                },
                openingHours: "Mo-Su 09:00-22:00",
                priceRange: "$$",
                currenciesAccepted: "EGP, USD",
                paymentAccepted: "Cash, Credit Card, Bank Transfer",
                sameAs: [
                  "https://wa.me/201022679250",
                  "https://www.facebook.com/ehabgm",
                  "https://www.instagram.com/ehabgm",
                  "https://www.linkedin.com/company/ehabgm"
                ],
                serviceArea: {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 29.85,
                    longitude: 31.3333
                  },
                  geoRadius: "50000"
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Digital Marketing Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Social Media Management",
                        description: "إدارة حسابات السوشيال ميديا بشكل احترافي"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "Graphic Design",
                        description: "تصميم جرافيك احترافي للهوية البصرية"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service", 
                        name: "Paid Advertising",
                        description: "إدارة الإعلانات الممولة على جميع المنصات"
                      }
                    }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://ehabgm.online/#website",
                url: "https://ehabgm.online",
                name: "ehabgm - وكالة التسويق الرقمي",
                description: "وكالة ehabgm للتسويق الرقمي في حلوان، القاهرة",
                publisher: {
                  "@id": "https://ehabgm.online/#organization"
                },
                inLanguage: "ar-EG",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://ehabgm.online/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "الرئيسية",
                  item: "https://ehabgm.online"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="arabic-text">
        <PerformanceOptimization />
        <GoogleAnalytics />
        <FacebookPixel />
        <ClientComponents />
        <SimpleHeader />
        <main className="pt-16">{children}</main>
        <AnimatedBackground />
        <ThemeToggle />
        <AccessibilityMenu />
        <SmartNotifications />
        <PerformanceMonitor />
        <a
          href="https://wa.me/201022679250"
          className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="تواصل عبر الواتساب"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </body>
    </html>
  )
}
