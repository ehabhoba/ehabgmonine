import type { Metadata } from "next"
import EmailMarketingClientPage from "./EmailMarketingClientPage"

export const metadata: Metadata = {
  title: "التسويق عبر البريد الإلكتروني | ehabgm - حلوان، القاهرة",
  description:
    "خدمات التسويق عبر البريد الإلكتروني الاحترافية في حلوان، القاهرة. حملات إيميل تسويقية فعالة لزيادة المبيعات والعملاء.",
  keywords: "التسويق عبر البريد الإلكتروني, إيميل ماركتينج, حملات البريد الإلكتروني, حلوان, القاهرة",
  openGraph: {
    title: "التسويق عبر البريد الإلكتروني | ehabgm",
    description: "حملات بريد إلكتروني احترافية لزيادة المبيعات والعملاء",
    images: ["/email-marketing-showcase.png"],
  },
}

export default function EmailMarketingPage() {
  return <EmailMarketingClientPage />
}
