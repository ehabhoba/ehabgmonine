import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, DollarSign, Users, Shield, Smartphone, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تصميم موقع مبوبة إعلانية | ehabgm - حلوان، القاهرة",
  description: "تصميم وتطوير مواقع مبوبة إعلانية احترافية مع نظام بحث متقدم وإدارة إعلانات في حلوان، القاهرة",
  keywords: "موقع مبوبة، إعلانات مبوبة، تصميم موقع إعلانات، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "تصميم موقع مبوبة إعلانية احترافي | ehabgm",
    description: "نصمم ونطور مواقع مبوبة إعلانية احترافية مع أنظمة بحث وإدارة متقدمة",
    images: ["/classified-ads-showcase.png"],
  },
}

export default function ClassifiedAdsPage() {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "بحث متقدم وفلترة",
      description: "نظام بحث ذكي مع فلاتر متعددة للوصول السريع للإعلانات",
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "خرائط تفاعلية",
      description: "عرض الإعلانات على الخريطة مع تحديد المواقع الجغرافية",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "نظام دفع آمن",
      description: "بوابات دفع متعددة وآمنة للإعلانات المميزة",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "إدارة المستخدمين",
      description: "نظام عضوية متكامل مع ملفات شخصية وتقييمات",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "مراجعة الإعلانات",
      description: "نظام مراجعة تلقائي ويدوي لضمان جودة المحتوى",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "تطبيق جوال",
      description: "تطبيق جوال مخصص لنظامي iOS و Android",
    },
  ]

  const categories = [
    { name: "عقارات", count: "15,000+", color: "bg-blue-500" },
    { name: "سيارات", count: "8,500+", color: "bg-green-500" },
    { name: "وظائف", count: "12,000+", color: "bg-purple-500" },
    { name: "خدمات", count: "6,200+", color: "bg-orange-500" },
    { name: "إلكترونيات", count: "9,800+", color: "bg-red-500" },
    { name: "أثاث", count: "4,300+", color: "bg-indigo-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Search className="w-4 h-4 ml-2" />
                  مواقع مبوبة إعلانية
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  موقعك المبوب
                  <span className="text-blue-600 block">بتقنيات متقدمة</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نصمم ونطور مواقع مبوبة إعلانية احترافية مع أنظمة بحث متقدمة وإدارة شاملة للإعلانات والمستخدمين
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link
                    href="https://wa.me/201022679250?text=مرحباً، أريد تصميم موقع مبوبة إعلانية احترافي"
                    className="flex items-center"
                  >
                    ابدأ مشروعك الآن
                    <Search className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                >
                  شاهد نماذج أعمالنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">موقع مبوب</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500K+</div>
                  <div className="text-sm text-gray-600">إعلان منشور</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/classified-ads-showcase.png"
                  alt="تصميم موقع مبوبة إعلانية احترافي"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">أقسام متنوعة لجميع الاحتياجات</h2>
            <p className="text-xl text-gray-600">نصمم مواقع مبوبة شاملة تغطي جميع فئات الإعلانات</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600">{category.count} إعلان</p>
                    </div>
                    <div
                      className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Filter className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">مميزات مواقعنا المبوبة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول تقنية متطورة لضمان تجربة مستخدم مميزة وإدارة فعالة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">جاهز لإطلاق موقعك المبوب؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية وخطة مفصلة لتصميم وتطوير موقعك المبوب
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية لتصميم موقع مبوبة إعلانية">
                احجز استشارتك المجانية
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
            >
              شاهد أعمالنا السابقة
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
