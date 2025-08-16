import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import TrustSection from "@/components/trust-section"
import PortfolioPreview from "@/components/portfolio-preview"
import ClientGuideSection from "@/components/client-guide-section"
import CertificationsSection from "@/components/certifications-section"
import SpecialOfferBanner from "@/components/special-offer-banner"
import QuickQuoteForm from "@/components/quick-quote-form"
import InteractiveRating from "@/components/interactive-rating"

export const metadata: Metadata = {
  title: "ehabgm - وكالة التسويق الرقمي الرائدة في حلوان، القاهرة | تصميم جرافيك، إعلانات ممولة، سوشيال ميديا",
  description:
    "وكالة ehabgm للتسويق الرقمي في حلوان، القاهرة. أكثر من 8 سنوات خبرة، 500+ مشروع ناجح، 1000+ عميل راضي. خدمات التصميم الجرافيكي، إدارة السوشيال ميديا، الإعلانات الممولة، تطوير المواقع، وتحسين محركات البحث SEO. استشارة مجانية: 01022679250",
  keywords:
    "تسويق رقمي حلوان، تصميم جرافيك القاهرة، إعلانات ممولة فيسبوك، سوشيال ميديا، تطوير مواقع، SEO مصر، وكالة تسويق حلوان، ehabgm، إيهاب محمد، تصميم شعار، هوية بصرية، متجر إلكتروني، تطبيقات جوال، يوتيوب، انستجرام، تيك توك، لينكد إن، جوجل ادز، فيسبوك ادز، تسويق بالمحتوى، استشارات تسويقية",
  authors: [{ name: "إيهاب محمد - المؤسس والمدير التنفيذي لوكالة ehabgm" }],
  creator: "إيهاب محمد - خبير التسويق الرقمي",
  publisher: "ehabgm Digital Marketing Agency",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "ehabgm - وكالة التسويق الرقمي الرائدة في حلوان، القاهرة",
    description:
      "خدمات التسويق الرقمي المتكاملة وإدارة السوشيال ميديا من حلوان للعالم العربي. أكثر من 8 سنوات خبرة و 500+ مشروع ناجح",
    url: "https://ehabgm.online",
    siteName: "ehabgm Digital Marketing Agency",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "ehabgm - وكالة التسويق الرقمي الرائدة في حلوان، القاهرة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ehabgm - وكالة التسويق الرقمي الرائدة في حلوان، القاهرة",
    description: "خدمات التسويق الرقمي المتكاملة من حلوان، القاهرة. أكثر من 8 سنوات خبرة و 500+ مشروع ناجح",
    images: ["https://i.postimg.cc/TYyK2Rtv/logo.png"],
  },
  alternates: {
    canonical: "https://ehabgm.online",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SpecialOfferBanner />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <QuickQuoteForm />
      <PortfolioPreview />
      <AboutSection />
      <StatsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <InteractiveRating />
      <ClientGuideSection />
      <ContactSection />
    </main>
  )
}
