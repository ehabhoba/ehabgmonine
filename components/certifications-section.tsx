"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "شريك معتمد من فيسبوك",
      description: "معتمدون رسمياً من فيسبوك لإدارة الحملات الإعلانية",
      icon: "/facebook-partner-badge.png",
      level: "متقدم",
      year: "2023",
    },
    {
      title: "خبير معتمد في جوجل ادز",
      description: "شهادة جوجل المعتمدة في إدارة الحملات الإعلانية",
      icon: "/placeholder-ajffs.png",
      level: "خبير",
      year: "2023",
    },
    {
      title: "متخصص في تحسين محركات البحث",
      description: "خبرة معتمدة في تحسين المواقع لمحركات البحث",
      icon: "/placeholder-ae8pv.png",
      level: "متخصص",
      year: "2022",
    },
    {
      title: "خبير في التجارة الإلكترونية",
      description: "شهادة معتمدة في تطوير وإدارة المتاجر الإلكترونية",
      icon: "/ecommerce-expert-badge.png",
      level: "خبير",
      year: "2023",
    },
  ]

  const achievements = [
    {
      number: "500+",
      title: "مشروع ناجح",
      description: "مشاريع متنوعة في مختلف المجالات",
    },
    {
      number: "1000+",
      title: "عميل راضي",
      description: "عملاء حققوا نتائج استثنائية",
    },
    {
      number: "8+",
      title: "سنوات خبرة",
      description: "خبرة عملية في التسويق الرقمي",
    },
    {
      number: "95%",
      title: "معدل الرضا",
      description: "نسبة رضا العملاء عن خدماتنا",
    },
  ]

  const guarantees = [
    "ضمان استرداد الأموال خلال 30 يوم",
    "دعم فني مجاني لمدة 6 أشهر",
    "تحديثات مجانية للمشاريع",
    "استشارات مجانية مدى الحياة",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            <Award className="w-5 h-5 ml-2 text-yellow-500" />
            الشهادات والاعتمادات
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">خبرة معتمدة وموثقة</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            حاصلون على شهادات معتمدة من أكبر المنصات الرقمية العالمية
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src={cert.icon || "/placeholder.svg"}
                    alt={cert.title}
                    width={80}
                    height={80}
                    className="mx-auto rounded-lg"
                  />
                  <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">{cert.year}</Badge>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                <Badge variant="outline" className="text-xs">
                  {cert.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">{achievement.number}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">ضماناتنا لك</h3>
            <p className="text-gray-600 dark:text-gray-300">نقدم لك ضمانات شاملة لراحة بالك وثقتك الكاملة</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 ml-3 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
