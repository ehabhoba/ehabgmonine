import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, TrendingUp, Users, BarChart3, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "الاستشارات التسويقية | وكالة ehabgm للتسويق الرقمي - حلوان، القاهرة",
  description:
    "خدمات الاستشارات التسويقية الاحترافية في حلوان، القاهرة. استراتيجيات تسويقية مخصصة لنمو أعمالك وزيادة المبيعات مع خبراء التسويق.",
  keywords: "الاستشارات التسويقية، استراتيجية التسويق، خطة تسويقية، استشاري تسويق، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "الاستشارات التسويقية الاحترافية - وكالة ehabgm",
    description: "نقدم استشارات تسويقية متخصصة لمساعدتك في بناء استراتيجيات فعالة لنمو أعمالك",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function MarketingConsultingPage() {
  const services = [
    {
      icon: Brain,
      title: "تحليل السوق",
      description: "دراسة شاملة للسوق والمنافسين والفرص المتاحة",
    },
    {
      icon: Target,
      title: "استراتيجية التسويق",
      description: "وضع خطة تسويقية شاملة ومخصصة لأهدافك",
    },
    {
      icon: TrendingUp,
      title: "خطط النمو",
      description: "استراتيجيات مدروسة لتوسيع نطاق أعمالك",
    },
    {
      icon: Users,
      title: "تحليل الجمهور",
      description: "فهم عميق لجمهورك المستهدف واحتياجاته",
    },
    {
      icon: BarChart3,
      title: "قياس الأداء",
      description: "وضع مؤشرات الأداء وطرق قياس النجاح",
    },
    {
      icon: Lightbulb,
      title: "الحلول الإبداعية",
      description: "أفكار مبتكرة لتميز علامتك التجارية",
    },
  ]

  const process = [
    { step: "01", title: "التحليل الأولي", desc: "دراسة وضعك الحالي والتحديات" },
    { step: "02", title: "البحث والدراسة", desc: "تحليل السوق والمنافسين" },
    { step: "03", title: "وضع الاستراتيجية", desc: "تطوير خطة تسويقية شاملة" },
    { step: "04", title: "التنفيذ والمتابعة", desc: "مساعدتك في التطبيق والمراقبة" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800">الاستشارات التسويقية</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                استشارات تسويقية
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}
                  احترافية
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                نقدم استشارات تسويقية متخصصة لمساعدتك في بناء استراتيجيات فعالة تحقق أهدافك وتنمي أعمالك بشكل مستدام
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  <Link href="https://wa.me/201022679250?text=أريد استشارة تسويقية لأعمالي">احجز استشارتك</Link>
                </Button>
                <Button variant="outline" size="lg">
                  تعرف على خدماتنا
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ehab-mohamed-ceo.jpg"
                alt="إيهاب محمد - خبير الاستشارات التسويقية"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات الاستشارات التسويقية</h2>
            <p className="text-xl text-gray-600">حلول شاملة لجميع احتياجاتك التسويقية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">منهجية العمل</h2>
            <p className="text-xl text-gray-600">خطوات مدروسة لضمان نجاح استراتيجيتك التسويقية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لتطوير استراتيجيتك التسويقية؟</h2>
            <p className="text-xl text-blue-100 mb-8">احصل على استشارة مجانية مع خبرائنا في التسويق</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة تسويقية مجانية لأعمالي">
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
