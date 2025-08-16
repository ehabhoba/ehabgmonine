import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Facebook, Youtube, Twitter, Linkedin, TrendingUp, Users, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "إدارة حملات السوشيال ميديا | ehabgm - حلوان، القاهرة",
  description:
    "خدمات إدارة السوشيال ميديا الاحترافية في حلوان والقاهرة. إدارة فيسبوك، انستجرام، تيك توك، يوتيوب مع استراتيجيات تسويقية مبتكرة.",
  keywords: "سوشيال ميديا, فيسبوك, انستجرام, تيك توك, يوتيوب, حلوان, القاهرة, تسويق رقمي",
}

export default function SocialMediaPage() {
  const platforms = [
    { icon: Facebook, name: "فيسبوك", color: "from-blue-600 to-blue-700", users: "2.9B" },
    { icon: Instagram, name: "انستجرام", color: "from-pink-500 to-purple-600", users: "2B" },
    { icon: Youtube, name: "يوتيوب", color: "from-red-500 to-red-600", users: "2.7B" },
    { icon: Twitter, name: "تويتر", color: "from-sky-400 to-sky-500", users: "450M" },
    { icon: Linkedin, name: "لينكد إن", color: "from-blue-700 to-blue-800", users: "900M" },
  ]

  const services = [
    {
      title: "استراتيجية المحتوى",
      description: "خطط محتوى مدروسة تناسب جمهورك المستهدف",
      icon: Target,
      image: "/content-strategy.png",
    },
    {
      title: "إدارة الحسابات",
      description: "إدارة يومية احترافية لجميع منصاتك الاجتماعية",
      icon: Users,
      image: "/account-management.png",
    },
    {
      title: "تحليل الأداء",
      description: "تقارير مفصلة وتحليل عميق لنتائج حملاتك",
      icon: BarChart3,
      image: "/analytics-dashboard.png",
    },
    {
      title: "زيادة المتابعين",
      description: "استراتيجيات مثبتة لزيادة المتابعين الحقيقيين",
      icon: TrendingUp,
      image: "/follower-growth.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">إدارة السوشيال ميديا</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  نجعل علامتك التجارية
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {" "}
                    تتألق
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  إدارة احترافية لحساباتك على جميع منصات التواصل الاجتماعي مع استراتيجيات مبتكرة لزيادة التفاعل
                  والمبيعات
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
                >
                  <Link href="https://wa.me/201022679250?text=أريد إدارة حساباتي على السوشيال ميديا">
                    ابدأ حملتك الآن
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 bg-transparent">
                  مشاهدة نتائجنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">حساب مُدار</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">2M+</div>
                  <div className="text-sm text-gray-600">متابع جديد</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">300%</div>
                  <div className="text-sm text-gray-600">زيادة التفاعل</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/social-media-management.png"
                  alt="إدارة السوشيال ميديا"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">المنصات التي نديرها</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نغطي جميع منصات التواصل الاجتماعي الرئيسية بخبرة عميقة
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.users} مستخدم</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا المتكاملة</h2>
            <p className="text-xl text-gray-600">حلول شاملة لإدارة وتطوير حضورك الرقمي</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لتطوير حضورك الرقمي؟</h2>
            <p className="text-xl text-purple-100 mb-8">احصل على استراتيجية مخصصة لعلامتك التجارية</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة مجانية لإدارة السوشيال ميديا">
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
