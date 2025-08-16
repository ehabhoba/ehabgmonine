import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "تواصل معنا - ehabgm | وكالة التسويق الرقمي في حلوان",
  description:
    "تواصل مع فريق ehabgm للحصول على استشارة مجانية في التسويق الرقمي وتطوير المواقع. نحن في خدمتك 24/7 في حلوان، القاهرة.",
  keywords: "تواصل معنا, استشارة مجانية, ehabgm, حلوان, القاهرة, دعم فني",
  openGraph: {
    title: "تواصل معنا - ehabgm | وكالة التسويق الرقمي",
    description: "احصل على استشارة مجانية من خبراء التسويق الرقمي",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
