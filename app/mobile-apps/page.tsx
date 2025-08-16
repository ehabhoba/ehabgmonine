import type { Metadata } from "next"
import MobileAppsClientPage from "./MobileAppsClientPage"

export const metadata: Metadata = {
  title: "تطوير تطبيقات الجوال | وكالة ehabgm للتسويق الرقمي - حلوان، القاهرة",
  description:
    "خدمات تطوير تطبيقات الجوال الاحترافية في حلوان، القاهرة. تطبيقات iOS و Android مخصصة لنشاطك التجاري مع أحدث التقنيات والتصميم العصري.",
  keywords:
    "تطوير تطبيقات الجوال، تطبيقات iOS، تطبيقات Android، تطوير التطبيقات حلوان، برمجة التطبيقات القاهرة، ehabgm",
  openGraph: {
    title: "تطوير تطبيقات الجوال الاحترافية - وكالة ehabgm",
    description: "نطور تطبيقات جوال مبتكرة ومخصصة لنشاطك التجاري بأحدث التقنيات في حلوان، القاهرة",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function MobileAppsPage() {
  return <MobileAppsClientPage />
}
