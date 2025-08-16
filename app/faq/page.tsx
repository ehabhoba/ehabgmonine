import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "الأسئلة الشائعة - ehabgm | وكالة التسويق الرقمي في حلوان، القاهرة",
  description:
    "إجابات على الأسئلة الشائعة حول خدمات التسويق الرقمي والتصميم الجرافيكي والإعلانات الممولة في حلوان، القاهرة",
  keywords: "أسئلة شائعة، تسويق رقمي، تصميم جرافيك، إعلانات ممولة، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "الأسئلة الشائعة - ehabgm",
    description: "إجابات شاملة على جميع استفساراتك حول خدماتنا التسويقية",
    url: "https://ehabgm.online/faq",
  },
}

export default function FAQPage() {
  return <FAQClientPage />
}
