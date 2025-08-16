import type { Metadata } from "next"
import PortfolioClientPage from "./PortfolioClientPage"

export const metadata: Metadata = {
  title: "معرض أعمالنا - ehabgm | مشاريع التسويق الرقمي الناجحة في حلوان، القاهرة",
  description:
    "اكتشف مشاريعنا الناجحة في التسويق الرقمي، تصميم المواقع، الإعلانات الممولة، وإدارة السوشيال ميديا. أكثر من 500 مشروع ناجح من حلوان، القاهرة",
  keywords:
    "معرض أعمال، مشاريع ناجحة، تسويق رقمي، تصميم مواقع، إعلانات ممولة، سوشيال ميديا، حلوان، القاهرة، ehabgm، portfolio، أعمال سابقة، نماذج أعمال",
  openGraph: {
    title: "معرض أعمالنا - ehabgm | مشاريع التسويق الرقمي الناجحة",
    description: "اكتشف مشاريعنا الناجحة في التسويق الرقمي وتصميم المواقع. أكثر من 500 مشروع ناجح",
    url: "https://ehabgm.online/portfolio",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "معرض أعمال ehabgm",
      },
    ],
  },
}

export default function PortfolioPage() {
  return <PortfolioClientPage />
}
