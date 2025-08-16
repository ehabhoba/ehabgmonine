"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react"

export default function TrustSection() {
  const trustElements = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "ضمان استرداد كامل في حالة عدم الرضا خلال 30 يوم",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "خبرة 8+ سنوات",
      description: "فريق محترف مع خبرة تزيد عن 8 سنوات في التسويق الرقمي",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "1000+ عميل راضي",
      description: "أكثر من ألف عميل حقق نجاحاً مع خدماتنا المتميزة",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "دعم 24/7",
      description: "فريق دعم فني متاح على مدار الساعة لخدمتك",
      color: "text-orange-600",
    },
  ]

  const certifications = [
    "شريك معتمد من فيسبوك",
    "خبير معتمد في جوجل ادز",
    "متخصص في تحسين محركات البحث",
    "خبير في التجارة الإلكترونية",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            <Star className="w-5 h-5 ml-2 text-yellow-500" />
            وكالة موثوقة ومعتمدة
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">لماذا يثق بنا العملاء؟</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نحن نبني الثقة من خلال النتائج المحققة والشفافية الكاملة في التعامل
          </p>
        </div>

        {/* Trust Elements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustElements.map((element, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6 ${element.color}`}
                >
                  <element.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{element.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{element.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">شهادات الاعتماد والخبرة</h3>
            <p className="text-gray-600 dark:text-gray-300">حاصلون على شهادات معتمدة من أكبر المنصات الرقمية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 ml-3" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
            <Shield className="w-12 h-12 ml-4" />
            <div className="text-right">
              <h3 className="text-2xl font-bold mb-2">ضمان استرداد الأموال</h3>
              <p className="text-lg opacity-90">إذا لم تكن راضياً عن النتائج خلال 30 يوم، نعيد لك أموالك كاملة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
