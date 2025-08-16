"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Settings, Users, Shield, Zap, Globe } from "lucide-react"

export default function CMSClientPage() {
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات أنظمة إدارة المحتوى CMS")

  const cmsFeatures = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "إدارة سهلة",
      description: "واجهة بسيطة وسهلة الاستخدام لإدارة المحتوى",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "تعدد المستخدمين",
      description: "نظام صلاحيات متقدم لفرق العمل المختلفة",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "أمان عالي",
      description: "حماية متقدمة ضد الاختراق والهجمات",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "أداء سريع",
      description: "تحسين الأداء وسرعة التحميل",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "متعدد اللغات",
      description: "دعم كامل للغة العربية والإنجليزية",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "تحديثات تلقائية",
      description: "نظام تحديثات آمن وتلقائي",
    },
  ]

  const cmsPackages = [
    {
      name: "الباقة الأساسية",
      price: "15,000",
      features: [
        "نظام إدارة محتوى بسيط",
        "لوحة تحكم عربية",
        "إدارة الصفحات والمقالات",
        "نظام المستخدمين الأساسي",
        "تحسين محركات البحث",
        "دعم فني لمدة 3 شهور",
      ],
      popular: false,
    },
    {
      name: "الباقة المتقدمة",
      price: "25,000",
      features: [
        "نظام إدارة محتوى متقدم",
        "لوحة تحكم مخصصة",
        "إدارة المنتجات والخدمات",
        "نظام صلاحيات متعدد",
        "تكامل مع وسائل الدفع",
        "نظام التقارير والإحصائيات",
        "دعم فني لمدة 6 شهور",
      ],
      popular: true,
    },
    {
      name: "الباقة الاحترافية",
      price: "40,000",
      features: [
        "نظام إدارة محتوى مخصص بالكامل",
        "واجهات متعددة ومخصصة",
        "تكامل مع الأنظمة الخارجية",
        "نظام إدارة العملاء CRM",
        "تطبيق جوال للإدارة",
        "نظام النسخ الاحتياطي التلقائي",
        "دعم فني لمدة سنة كاملة",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">أنظمة إدارة المحتوى CMS</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              حلول CMS احترافية
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              نطور أنظمة إدارة المحتوى المخصصة والمتقدمة لتسهيل إدارة موقعك ومحتواك بكفاءة عالية وأمان تام
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
              >
                احصل على استشارة مجانية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                مشاهدة الأعمال
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مميزات أنظمة إدارة المحتوى</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نقدم حلول CMS متطورة تجمع بين السهولة والقوة والأمان</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cmsFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">باقات أنظمة إدارة المحتوى</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">اختر الباقة المناسبة لاحتياجاتك من أنظمة إدارة المحتوى</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cmsPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    الأكثر طلباً
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-blue-600">{pkg.price} جنيه</CardDescription>
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
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() =>
                      window.open(
                        `https://wa.me/201234567890?text=${encodeURIComponent(`أريد الاستفسار عن ${pkg.name} لأنظمة إدارة المحتوى`)}`,
                        "_blank",
                      )
                    }
                  >
                    اطلب الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لبناء نظام إدارة محتوى احترافي؟</h2>
          <p className="text-xl mb-8 opacity-90">
            تواصل معنا الآن واحصل على استشارة مجانية لتطوير نظام CMS مخصص لموقعك
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
          >
            تواصل معنا الآن
          </Button>
        </div>
      </section>
    </div>
  )
}
