import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تصميم مواقع إلكترونية احترافية | ehabgm - حلوان، القاهرة",
  description:
    "خدمات تصميم المواقع الإلكترونية الاحترافية في حلوان والقاهرة. مواقع متجاوبة وسريعة مع تحسين محركات البحث وتجربة مستخدم متميزة.",
  keywords: "تصميم مواقع, مواقع إلكترونية, حلوان, القاهرة, تطوير ويب, مواقع متجاوبة",
}

export default function WebsiteDesignPage() {
  const features = [
    { icon: Globe, title: "تصميم متجاوب", description: "يعمل بشكل مثالي على جميع الأجهزة" },
    { icon: Zap, title: "سرعة فائقة", description: "تحميل سريع وأداء محسن" },
    { icon: Shield, title: "أمان عالي", description: "حماية متقدمة وشهادات SSL" },
    { icon: TrendingUp, title: "SEO محسن", description: "تحسين محركات البحث" },
  ]

  const portfolioItems = [
    {
      title: "موقع شركة تقنية",
      category: "شركات التكنولوجيا",
      image: "/tech-company-website.png",
      description: "موقع احترافي لشركة تقنية رائدة",
    },
    {
      title: "موقع عيادة طبية",
      category: "القطاع الطبي",
      image: "/medical-website.png",
      description: "منصة طبية متكاملة مع نظام حجز",
    },
    {
      title: "موقع مطعم فاخر",
      category: "المطاعم والضيافة",
      image: "/restaurant-website.png",
      description: "موقع أنيق لمطعم راقي مع قائمة تفاعلية",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">تصميم مواقع احترافية</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  مواقع إلكترونية
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}
                    احترافية
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نصمم مواقع إلكترونية متطورة وسريعة تعكس هويتك التجارية وتحقق أهدافك الرقمية بأحدث التقنيات العالمية
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://wa.me/201022679250?text=أريد تصميم موقع إلكتروني احترافي">
                    احصل على عرض سعر مجاني
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 bg-transparent">
                  مشاهدة أعمالنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">موقع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/professional-website-mockup.png"
                  alt="تصميم موقع إلكتروني احترافي"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">لماذا تختار خدماتنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول تصميم مواقع متكاملة تجمع بين الجمال والوظائف المتقدمة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أعمالنا المميزة</h2>
            <p className="text-xl text-gray-600">مشاريع حقيقية نفخر بإنجازها لعملائنا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800">{item.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لبدء مشروعك؟</h2>
            <p className="text-xl text-blue-100 mb-8">احصل على استشارة مجانية وعرض سعر مخصص لمشروعك</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة مجانية لتصميم موقع إلكتروني">
                تواصل معنا الآن
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
