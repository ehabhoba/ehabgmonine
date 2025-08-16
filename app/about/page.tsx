import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "من نحن - ehabgm | وكالة التسويق الرقمي في حلوان",
  description:
    "تعرف على قصة ehabgm وفريق العمل المتخصص في التسويق الرقمي وتطوير المواقع في حلوان، القاهرة. خبرة تزيد عن 8 سنوات في خدمة العملاء.",
  keywords: "من نحن, ehabgm, وكالة تسويق رقمي, حلوان, القاهرة, فريق العمل, خبرة",
  openGraph: {
    title: "من نحن - ehabgm | وكالة التسويق الرقمي",
    description: "تعرف على قصة ehabgm وفريق العمل المتخصص في التسويق الرقمي",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
