import type { Metadata } from "next"
import AchievementsClientPage from "./AchievementsClientPage"

export const metadata: Metadata = {
  title: "إنجازاتنا - ehabgm | وكالة التسويق الرقمي في حلوان، القاهرة",
  description:
    "اكتشف إنجازات وكالة ehabgm في التسويق الرقمي. أكثر من 500 مشروع ناجح و1000+ عميل راضي في حلوان والقاهرة",
  keywords: "إنجازات، نجاحات، مشاريع، تسويق رقمي، حلوان، القاهرة، ehabgm، عملاء راضين",
  openGraph: {
    title: "إنجازاتنا - ehabgm",
    description: "رحلة نجاح مليئة بالإنجازات والمشاريع المتميزة",
    url: "https://ehabgm.online/achievements",
  },
}

export default function AchievementsPage() {
  return <AchievementsClientPage />
}
