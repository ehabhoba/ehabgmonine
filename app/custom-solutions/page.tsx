import type { Metadata } from "next"
import CustomSolutionsClientPage from "./CustomSolutionsClientPage"

export const metadata: Metadata = {
  title: "حلول برمجية مخصصة | ehabgm - حلوان، القاهرة",
  description:
    "تطوير حلول برمجية مخصصة ومتقدمة في حلوان، القاهرة. أنظمة إدارة، تطبيقات ويب، وحلول تقنية مبتكرة لجميع احتياجات الأعمال.",
  keywords: "حلول برمجية مخصصة, تطوير أنظمة, تطبيقات ويب, حلوان, القاهرة, برمجة",
  openGraph: {
    title: "حلول برمجية مخصصة | ehabgm",
    description: "حلول برمجية مبتكرة ومخصصة لجميع احتياجات الأعمال",
    images: ["/custom-solutions-showcase.png"],
  },
}

export default function CustomSolutionsPage() {
  return <CustomSolutionsClientPage />
}
