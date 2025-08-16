"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Database, Cloud, Shield, Zap, Cog } from "lucide-react"

export default function CustomSolutionsClientPage() {
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن الحلول البرمجية المخصصة")

  const solutionTypes = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "تطبيقات الويب",
      description: "تطوير تطبيقات ويب متقدمة ومخصصة",
      features: ["React & Next.js", "Node.js Backend", "قواعد بيانات متقدمة", "APIs مخصصة"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "أنظمة إدارة",
      description: "أنظمة إدارة شاملة للشركات والمؤسسات",
      features: ["إدارة العملاء CRM", "إدارة المخزون", "التقارير والإحصائيات", "نظام الصلاحيات"],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "الحلول السحابية",
      description: "حلول سحابية متطورة وآمنة",
      features: ["AWS & Azure", "النسخ الاحتياطي", "الأمان المتقدم", "التوسع التلقائي"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الأمان والحماية",
      description: "حلول أمان متقدمة لحماية البيانات",
      features: ["التشفير المتقدم", "المصادقة الثنائية", "المصادقة الثنائية", "مراقبة الأنشطة", "النسخ الاحتياطي"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "الأتمتة",
      description: "أتمتة العمليات وتحسين الكفاءة",
      features: ["سير العمل التلقائي", "التكامل مع الأنظمة", "التقارير التلقائية", "الإشعارات الذكية"],
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "التكامل",
      description: "تكامل الأنظمة والخدمات المختلفة",
      features: ["APIs متعددة", "تزامن البيانات", "التكامل السحابي", "الربط الآمن"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">حلول برمجية مخصصة</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              حلول تقنية مبتكرة
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              نطور حلول برمجية مخصصة ومتقدمة تلبي احتياجات عملك الفريدة وتساعدك على تحقيق أهدافك التقنية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
              >
                احصل على استشارة تقنية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                مشاهدة المشاريع
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أنواع الحلول البرمجية</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الحلول البرمجية المخصصة لجميع القطاعات
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionTypes.map((solution, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-purple-600 w-fit group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">عملية التطوير</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نتبع منهجية احترافية لضمان تسليم حلول برمجية عالية الجودة</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "التحليل والدراسة", desc: "فهم متطلباتك وتحليل احتياجاتك التقنية" },
              { step: "02", title: "التصميم والتخطيط", desc: "وضع خطة شاملة وتصميم النظام" },
              { step: "03", title: "التطوير والبرمجة", desc: "تطوير الحل البرمجي باستخدام أحدث التقنيات" },
              { step: "04", title: "الاختبار والتسليم", desc: "اختبار شامل وتسليم المشروع مع التدريب" },
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لتطوير حلك البرمجي المخصص؟</h2>
          <p className="text-xl mb-8 opacity-90">
            تواصل معنا الآن واحصل على استشارة تقنية مجانية لتطوير الحل البرمجي المناسب لعملك
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
          >
            ابدأ مشروعك الآن
          </Button>
        </div>
      </section>
    </div>
  )
}
