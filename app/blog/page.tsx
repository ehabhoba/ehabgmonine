import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "المدونة - ehabgm | مقالات التسويق الرقمي وتطوير الأعمال",
  description:
    "اقرأ أحدث المقالات والنصائح في التسويق الرقمي، تطوير المواقع، والسوشيال ميديا من خبراء ehabgm في حلوان، القاهرة.",
  keywords: "مدونة, مقالات تسويق رقمي, نصائح سوشيال ميديا, تطوير مواقع, ehabgm",
  openGraph: {
    title: "المدونة - ehabgm | مقالات التسويق الرقمي",
    description: "اقرأ أحدث المقالات والنصائح في التسويق الرقمي",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
