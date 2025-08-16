import type { Metadata } from "next"
import CMSClientPage from "./CMSClientPage"

export const metadata: Metadata = {
  title: "أنظمة إدارة المحتوى CMS | ehabgm - حلوان، القاهرة",
  description:
    "تطوير أنظمة إدارة المحتوى المخصصة والمتقدمة في حلوان، القاهرة. حلول CMS احترافية لإدارة المواقع والمحتوى بسهولة وأمان.",
  keywords: "أنظمة إدارة المحتوى, CMS, WordPress, Drupal, حلوان, القاهرة, تطوير مواقع",
  openGraph: {
    title: "أنظمة إدارة المحتوى CMS | ehabgm",
    description: "حلول CMS احترافية ومخصصة لإدارة المحتوى بسهولة وأمان",
    images: ["/cms-showcase.png"],
  },
}

export default function CMSPage() {
  return <CMSClientPage />
}
