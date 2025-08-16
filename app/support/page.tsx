import type { Metadata } from "next"
import SupportClientPage from "./SupportClientPage"

export const metadata: Metadata = {
  title: "الدعم الفني - ehabgm | وكالة التسويق الرقمي في حلوان، القاهرة",
  description: "خدمة الدعم الفني المتاحة 24/7 لعملاء ehabgm. احصل على المساعدة الفورية في جميع خدمات التسويق الرقمي",
  keywords: "دعم فني، مساعدة، تسويق رقمي، حلوان، القاهرة، ehabgm، خدمة عملاء",
  openGraph: {
    title: "الدعم الفني - ehabgm",
    description: "خدمة دعم فني متميزة متاحة على مدار الساعة",
    url: "https://ehabgm.online/support",
  },
}

export default function SupportPage() {
  return <SupportClientPage />
}
