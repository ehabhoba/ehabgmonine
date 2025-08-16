import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, DollarSign, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "الإعلانات الممولة | وكالة ehabgm للتسويق الرقمي - حلوان، القاهرة",
  description:
    "خدمات الإعلانات الممولة الاحترافية على فيسبوك، جوجل، انستجرام. حملات إعلانية مربحة مع أفضل عائد استثمار في حلوان، القاهرة.",
  keywords: "الإعلانات الممولة، إعلانات فيسبوك، إعلانات جوجل، إعلانات انستجرام، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "الإعلانات الممولة الاحترافية - وكالة ehabgm",
    description: "حملات إعلانية مربحة مع أفضل عائد استثمار على جميع المنصات الرقمية",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function PaidAdsPage() {
  const platforms = [
    { name: "فيسبوك وانستجرام", icon: "📱", reach: "3.8B", cost: "منخفض" },
    { name: "جوجل أدز", icon: "🔍", reach: "8.5B", cost: "متوسط" },
    { name: "يوتيوب", icon: "📺", reach: "2.7B", cost: "متوسط" },
    { name: "لينكد إن", icon: "💼", reach: "900M", cost: "عالي" },
  ]

  const services = [
    {
      icon: Target,
      title: "استهداف دقيق",
      description: "استهداف الجمهور المناسب بناءً على الاهتمامات والسلوك",
    },
    {
      icon: TrendingUp,
      title: "تحسين الحملات",
      description: "تحسين مستمر للحملات لتحقيق أفضل النتائج",
    },
    {
      icon: DollarSign,
      title: "عائد استثمار عالي",
      description: "تحقيق أقصى عائد من ميزانيتك الإعلانية",
    },
    {
      icon: BarChart3,
      title: "تقارير مفصلة",
      description: "تقارير شاملة عن أداء الحملات والنتائج",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-800">الإعلانات الممولة</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                حملات إعلانية
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  {" "}
                  مربحة
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                نصمم ونُدير حملات إعلانية احترافية على جميع المنصات الرقمية لتحقيق أقصى عائد من استثمارك الإعلاني
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                >
                  <Link href="https://wa.me/201022679250?text=أريد إطلاق حملة إعلانية ممولة">ابدأ حملتك الآن</Link>
                </Button>
                <Button variant="outline" size="lg">
                  مشاهدة النتائج
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/paid-ads-dashboard.png"
                alt="لوحة تحكم الإعلانات الممولة"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">المنصات الإعلانية</h2>
            <p className="text-xl text-gray-600">نُدير حملاتك على أهم المنصات الرقمية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-lg">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-600">{platform.reach}</div>
                    <div className="text-sm text-gray-600">مستخدم نشط</div>
                    <Badge variant="outline" className="mt-2">
                      تكلفة {platform.cost}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا الإعلانية</h2>
            <p className="text-xl text-gray-600">حلول شاملة لحملاتك الإعلانية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لإطلاق حملتك الإعلانية؟</h2>
            <p className="text-xl text-orange-100 mb-8">احصل على استشارة مجانية وخطة إعلانية مخصصة</p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة مجانية للإعلانات الممولة">
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
