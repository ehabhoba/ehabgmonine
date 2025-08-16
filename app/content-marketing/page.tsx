import type { Metadata } from "next"
import ContentMarketingClientPage from "./ContentMarketingClientPage"

export const metadata: Metadata = {
  title: "التسويق بالمحتوى | وكالة ehabgm للتسويق الرقمي - حلوان، القاهرة",
  description:
    "خدمات التسويق بالمحتوى الاحترافية في حلوان، القاهرة. إنشاء محتوى جذاب وفعال يزيد من تفاعل العملاء ويحقق أهدافك التسويقية.",
  keywords: "التسويق بالمحتوى، كتابة المحتوى، المحتوى الرقمي، استراتيجية المحتوى، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "التسويق بالمحتوى الاحترافي - وكالة ehabgm",
    description: "نساعدك في إنشاء محتوى جذاب وفعال يحقق أهدافك التسويقية ويزيد من تفاعل عملائك",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function ContentMarketingPage() {
  return <ContentMarketingClientPage />
}
