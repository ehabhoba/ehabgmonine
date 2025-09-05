import type { Metadata } from "next"
import EnhancedContactForm from "@/components/enhanced-contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "تواصل معنا - ehabgm | وكالة التسويق الرقمي في حلوان",
  description:
    "تواصل مع فريق ehabgm للحصول على استشارة مجانية في التسويق الرقمي وتطوير المواقع. نحن في خدمتك 24/7 في حلوان، القاهرة.",
  keywords: [
    "تواصل معنا",
    "استشارة مجانية", 
    "ehabgm",
    "حلوان",
    "القاهرة",
    "دعم فني",
    "خدمة العملاء",
    "تسويق رقمي",
    "Contact Us Egypt",
    "Digital Marketing Consultation"
  ],
  openGraph: {
    title: "تواصل معنا - ehabgm | وكالة التسويق الرقمي",
    description: "احصل على استشارة مجانية من خبراء التسويق الرقمي",
    images: [{ url: "https://i.postimg.cc/TYyK2Rtv/logo.png" }],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EnhancedContactForm />
      <Footer />
    </main>
  )
}
