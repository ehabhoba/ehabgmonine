"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  FileText,
  Target,
  Rocket,
  BarChart3,
  CheckCircle,
  ArrowLeft,
  Clock,
  Users,
  Lightbulb,
} from "lucide-react"

export default function ClientGuideSection() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "استشارة مجانية",
      description: "نبدأ بمكالمة مجانية لفهم احتياجاتك وأهدافك التسويقية",
      duration: "30 دقيقة",
      color: "bg-blue-500",
    },
    {
      number: "02",
      icon: FileText,
      title: "تحليل وتخطيط",
      description: "نحلل وضعك الحالي ونضع خطة تسويقية مخصصة لعملك",
      duration: "2-3 أيام",
      color: "bg-green-500",
    },
    {
      number: "03",
      icon: Target,
      title: "تحديد الأهداف",
      description: "نحدد أهداف واضحة وقابلة للقياس مع جدول زمني محدد",
      duration: "1 يوم",
      color: "bg-purple-500",
    },
    {
      number: "04",
      icon: Rocket,
      title: "التنفيذ",
      description: "نبدأ تنفيذ الخطة التسويقية بأحدث الأدوات والتقنيات",
      duration: "مستمر",
      color: "bg-orange-500",
    },
    {
      number: "05",
      icon: BarChart3,
      title: "المتابعة والتحليل",
      description: "نراقب الأداء ونقدم تقارير دورية مع التحسين المستمر",
      duration: "أسبوعي",
      color: "bg-red-500",
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "تحقيق النتائج",
      description: "نحقق الأهداف المحددة ونضمن رضاك الكامل عن النتائج",
      duration: "حسب الهدف",
      color: "bg-teal-500",
    },
  ]

  const tips = [
    {
      icon: Lightbulb,
      title: "نصائح قبل البدء",
      content: [
        "حدد أهدافك بوضوح قبل التواصل معنا",
        "اجمع معلومات عن منافسيك في السوق",
        "حدد الميزانية المتاحة للتسويق",
        "فكر في جمهورك المستهدف",
      ],
    },
    {
      icon: Users,
      title: "ما نحتاجه منك",
      content: [
        "معلومات تفصيلية عن عملك أو مشروعك",
        "أهدافك التسويقية والتجارية",
        "الميزانية المخصصة للتسويق",
        "أي مواد تسويقية موجودة (شعار، صور، فيديوهات)",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            <Users className="w-5 h-5 ml-2" />
            دليل العميل
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">كيف نعمل معك خطوة بخطوة؟</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            عملية واضحة ومنظمة لضمان تحقيق أفضل النتائج لعملك
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {step.number}
                  </div>
                  <Badge variant="outline" className="text-sm">
                    <Clock className="w-4 h-4 ml-1" />
                    {step.duration}
                  </Badge>
                </div>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4`}
                >
                  <step.icon className={`w-8 h-8 ${step.color.replace("bg-", "text-")}`} />
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </CardContent>

              {/* Arrow for connection */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowLeft className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tips.map((tip, index) => (
            <Card key={index} className="border-0 bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/20 flex items-center justify-center ml-4">
                    <tip.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tip.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 ml-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">جاهز لبدء رحلة النجاح؟</h3>
            <p className="text-lg mb-6 opacity-90">احجز استشارتك المجانية الآن ودعنا نساعدك في تحقيق أهدافك</p>
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <MessageCircle className="w-5 h-5 ml-2" />
              احجز استشارة مجانية
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
