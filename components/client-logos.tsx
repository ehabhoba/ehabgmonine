"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Star } from "lucide-react"

const clientLogos = [
  { name: "شركة النيل للتكنولوجيا", sector: "تكنولوجيا", logo: "/abstract-tech-logo.png" },
  { name: "مطعم الأصالة", sector: "مطاعم", logo: "/restaurant-logo.png" },
  { name: "عيادة الشفاء الطبية", sector: "طبي", logo: "/medical-clinic-logo.png" },
  { name: "أزياء القاهرة", sector: "أزياء", logo: "/abstract-fashion-logo.png" },
  { name: "شركة البناء الحديث", sector: "إنشاءات", logo: "/construction-company-logo.png" },
  { name: "معهد التعليم المتطور", sector: "تعليم", logo: "/education-institute-logo.png" },
  { name: "صالون الجمال الملكي", sector: "تجميل", logo: "/beauty-salon-logo.png" },
  { name: "شركة الخدمات المالية", sector: "مالي", logo: "/financial-services-logo.png" },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Building2 className="w-4 h-4 mr-2" />
            عملاؤنا المميزون
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            يثقون بنا ونفخر بخدمتهم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أكثر من 500 عميل من مختلف القطاعات يثقون في خدماتنا ويحققون نجاحات مستمرة معنا
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {clientLogos.map((client, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="p-6 text-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="w-full h-16 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="font-semibold text-gray-800 mb-2">{client.name}</h3>
                <Badge variant="outline" className="text-xs">
                  {client.sector}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-lg font-semibold text-gray-800">معدل رضا العملاء: 98.5%</span>
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>
    </section>
  )
}
