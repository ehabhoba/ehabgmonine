import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Newspaper, Users, TrendingUp, Globe, Clock, Shield, Zap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تصميم جريدة إلكترونية | ehabgm - حلوان، القاهرة",
  description: "تصميم وتطوير جرائد إلكترونية احترافية مع نظام إدارة محتوى متقدم وتحسين محركات البحث في حلوان، القاهرة",
  keywords: "تصميم جريدة إلكترونية، موقع إخباري، نظام إدارة المحتوى، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "تصميم جريدة إلكترونية احترافية | ehabgm",
    description: "نصمم ونطور جرائد إلكترونية احترافية مع أنظمة إدارة محتوى متقدمة",
    images: ["/news-website-showcase.png"],
  },
}

export default function NewsWebsitePage() {
  const features = [
    {
      icon: <Newspaper className="w-8 h-8 text-blue-600" />,
      title: "تصميم إخباري احترافي",
      description: "واجهات مستخدم حديثة مصممة خصيصاً للمحتوى الإخباري",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "نظام إدارة المحررين",
      description: "أدوات متقدمة لإدارة فريق التحرير والمحتوى",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "تحليلات متقدمة",
      description: "إحصائيات مفصلة عن الزوار والمحتوى الأكثر قراءة",
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "تحسين محركات البحث",
      description: "تحسين شامل لظهور أفضل في نتائج البحث",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "النشر المجدول",
      description: "إمكانية جدولة المقالات للنشر في أوقات محددة",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "أمان متقدم",
      description: "حماية شاملة للموقع والمحتوى من التهديدات",
    },
  ]

  const packages = [
    {
      name: "الباقة الأساسية",
      price: "15,000",
      features: [
        "تصميم واجهة احترافية",
        "نظام إدارة محتوى بسيط",
        "5 أقسام رئيسية",
        "تحسين أساسي للـ SEO",
        "دعم فني لمدة 3 أشهر",
      ],
    },
    {
      name: "الباقة المتقدمة",
      price: "25,000",
      features: [
        "تصميم متجاوب متقدم",
        "نظام إدارة محررين",
        "10 أقسام + أرشيف",
        "تحليلات Google Analytics",
        "نظام التعليقات",
        "دعم فني لمدة 6 أشهر",
      ],
      popular: true,
    },
    {
      name: "الباقة الاحترافية",
      price: "40,000",
      features: [
        "تصميم مخصص بالكامل",
        "نظام إدارة متكامل",
        "أقسام غير محدودة",
        "تطبيق جوال",
        "نظام اشتراكات",
        "تحليلات متقدمة",
        "دعم فني لمدة سنة",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Newspaper className="w-4 h-4 ml-2" />
                  تصميم جرائد إلكترونية
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  جريدتك الإلكترونية
                  <span className="text-blue-600 block">بتصميم احترافي</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نصمم ونطور جرائد إلكترونية احترافية مع أنظمة إدارة محتوى متقدمة وتحسين محركات البحث لضمان وصول أوسع
                  لجمهورك
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link
                    href="https://wa.me/201022679250?text=مرحباً، أريد تصميم جريدة إلكترونية احترافية"
                    className="flex items-center"
                  >
                    ابدأ مشروعك الآن
                    <Zap className="w-5 h-5 mr-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                >
                  شاهد أعمالنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">جريدة إلكترونية</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99%</div>
                  <div className="text-sm text-gray-600">رضا العملاء</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/news-website-showcase.png"
                  alt="تصميم جريدة إلكترونية احترافية"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">مميزات جرائدنا الإلكترونية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول شاملة لتصميم وتطوير جرائد إلكترونية احترافية مع أحدث التقنيات
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

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">باقات تصميم الجرائد الإلكترونية</h2>
            <p className="text-xl text-gray-600">اختر الباقة المناسبة لاحتياجات جريدتك الإلكترونية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Award className="w-4 h-4 ml-1" />
                      الأكثر طلباً
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">
                    {pkg.price}
                    <span className="text-lg text-gray-500 font-normal"> جنيه</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
                    <Link
                      href={`https://wa.me/201022679250?text=مرحباً، أريد الاستفسار عن ${pkg.name} لتصميم جريدة إلكترونية`}
                    >
                      اطلب الآن
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">جاهز لإطلاق جريدتك الإلكترونية؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية وخطة مفصلة لتصميم وتطوير جريدتك الإلكترونية
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            <Link href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية لتصميم جريدة إلكترونية">
              احجز استشارتك المجانية الآن
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
