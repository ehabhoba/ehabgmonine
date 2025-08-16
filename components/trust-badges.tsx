"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react"

const trustBadges = [
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "ضمان استرداد كامل خلال 30 يوم",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "معتمدون رسمياً",
    description: "شركاء معتمدون من Google & Facebook",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "+500 عميل راضي",
    description: "معدل رضا 98.5% من عملائنا",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "دعم 24/7",
    description: "فريق دعم متاح طوال الوقت",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CheckCircle,
    title: "خبرة 6 سنوات",
    description: "خبرة مثبتة في السوق المصري",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Star,
    title: "جوائز التميز",
    description: "حاصلون على جوائز أفضل وكالة",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Shield className="w-4 h-4 mr-2" />
            الثقة والمصداقية
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">لماذا يثق بنا أكثر من 500 عميل؟</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm"
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">{badge.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{badge.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
