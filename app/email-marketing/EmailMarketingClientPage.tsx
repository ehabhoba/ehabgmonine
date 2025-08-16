"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Users, BarChart3, Target, Zap, Shield } from "lucide-react"

export default function EmailMarketingClientPage() {
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات التسويق عبر البريد الإلكتروني")

  const emailFeatures = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "تصميم إيميلات احترافية",
      description: "تصميمات جذابة ومتجاوبة مع جميع الأجهزة",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "إدارة قوائم العملاء",
      description: "تنظيم وتقسيم قوائم العملاء بذكاء",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "الاستهداف الدقيق",
      description: "استهداف العملاء المناسبين في الوقت المناسب",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "تحليل الأداء",
      description: "تقارير مفصلة عن أداء الحملات",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "الأتمتة الذكية",
      description: "حملات تلقائية ذكية ومخصصة",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الامتثال والأمان",
      description: "التزام كامل بقوانين البريد الإلكتروني",
    },
  ]

  const emailPackages = [
    {
      name: "الباقة الأساسية",
      price: "2,500",
      period: "شهرياً",
      features: [
        "حتى 5,000 مشترك",
        "10 حملات شهرياً",
        "تصميمات جاهزة",
        "تقارير أساسية",
        "دعم فني",
        "تكامل مع وسائل التواصل",
      ],
      popular: false,
    },
    {
      name: "الباقة المتقدمة",
      price: "4,500",
      period: "شهرياً",
      features: [
        "حتى 15,000 مشترك",
        "حملات غير محدودة",
        "تصميمات مخصصة",
        "تقارير متقدمة",
        "الأتمتة الذكية",
        "اختبار A/B",
        "دعم فني أولوية",
      ],
      popular: true,
    },
    {
      name: "الباقة الاحترافية",
      price: "7,500",
      period: "شهرياً",
      features: [
        "مشتركين غير محدود",
        "حملات غير محدودة",
        "تصميمات مخصصة بالكامل",
        "تحليلات متقدمة",
        "أتمتة متقدمة",
        "مدير حساب مخصص",
        "استشارات استراتيجية",
        "دعم فني 24/7",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">التسويق عبر البريد الإلكتروني</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              حملات إيميل فعالة
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              نصمم وننفذ حملات التسويق عبر البريد الإلكتروني الاحترافية التي تزيد من معدلات التحويل والمبيعات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
              >
                ابدأ حملتك الآن
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                مشاهدة النتائج
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مميزات خدماتنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم حلول تسويق إلكتروني شاملة ومتطورة عبر البريد الإلكتروني
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">باقات التسويق الإلكتروني</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اختر الباقة المناسبة لحجم عملك وأهدافك التسويقية</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {emailPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-green-500 scale-105" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    الأكثر طلباً
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-green-600">
                    {pkg.price} جنيه
                    <span className="text-sm font-normal text-gray-500 block">{pkg.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    onClick={() =>
                      window.open(
                        `https://wa.me/201234567890?text=${encodeURIComponent(`أريد الاستفسار عن ${pkg.name} للتسويق عبر البريد الإلكتروني`)}`,
                        "_blank",
                      )
                    }
                  >
                    اشترك الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لبدء حملة تسويق إلكتروني ناجحة؟</h2>
          <p className="text-xl mb-8 opacity-90">
            تواصل معنا الآن واحصل على استشارة مجانية لتطوير استراتيجية التسويق عبر البريد الإلكتروني
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
            onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
          >
            ابدأ حملتك الآن
          </Button>
        </div>
      </section>
    </div>
  )
}
