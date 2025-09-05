import type { Metadata } from "next"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "أسعار الخدمات - ehabgm | أسعار التسويق الرقمي والتصميم في حلوان",
  description:
    "اكتشف أسعار خدمات التسويق الرقمي، التصميم الجرافيكي، إدارة السوشيال ميديا والإعلانات الممولة في حلوان، القاهرة. أسعار تنافسية وجودة عالية.",
  keywords:
    "أسعار التسويق الرقمي، أسعار التصميم الجرافيكي، أسعار السوشيال ميديا، أسعار الإعلانات الممولة، حلوان، القاهرة",
  openGraph: {
    title: "أسعار الخدمات - ehabgm",
    description: "أسعار تنافسية لخدمات التسويق الرقمي والتصميم في حلوان، القاهرة",
    url: "https://ehabgm.online/pricing",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingSection />
      <Footer />
    </main>
  )
}
