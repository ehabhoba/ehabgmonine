"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Rocket, Star, Target } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "تأسيس الشركة",
    description: "بدأت رحلتنا بحلم كبير وفريق صغير من المبدعين",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    achievements: ["أول موقع إلكتروني", "5 عملاء", "فريق من 3 أشخاص"],
  },
  {
    year: "2019",
    title: "التوسع الأول",
    description: "نمو سريع وتطوير خدمات السوشيال ميديا",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    achievements: ["50+ عميل", "خدمات السوشيال ميديا", "فريق من 8 أشخاص"],
  },
  {
    year: "2020",
    title: "التحول الرقمي",
    description: "مواكبة التطورات وإطلاق خدمات الإعلانات الممولة",
    icon: Target,
    color: "from-green-500 to-emerald-500",
    achievements: ["100+ عميل", "خدمات الإعلانات", "مكتب جديد في حلوان"],
  },
  {
    year: "2021",
    title: "الريادة المحلية",
    description: "أصبحنا الوكالة الرائدة في منطقة حلوان",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    achievements: ["200+ عميل", "جوائز التميز", "فريق من 15 شخص"],
  },
  {
    year: "2022",
    title: "التطوير التقني",
    description: "إطلاق خدمات تطوير التطبيقات والحلول المتقدمة",
    icon: Star,
    color: "from-indigo-500 to-purple-500",
    achievements: ["300+ عميل", "تطوير التطبيقات", "شراكات استراتيجية"],
  },
  {
    year: "2023",
    title: "النمو المستدام",
    description: "توسيع الخدمات وتطوير الفريق",
    icon: Calendar,
    color: "from-red-500 to-pink-500",
    achievements: ["500+ عميل", "خدمات متكاملة", "فريق من 25 شخص"],
  },
]

export default function InteractiveTimeline() {
  const [activeEvent, setActiveEvent] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Calendar className="w-4 h-4 mr-2" />
            رحلة النجاح
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            قصة نجاحنا عبر السنين
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تابع رحلتنا من البداية المتواضعة إلى أن أصبحنا الوكالة الرائدة في التسويق الرقمي
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Timeline Navigation */}
            <div className="space-y-4">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon
                return (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeEvent === index ? "shadow-xl scale-105 border-blue-500" : "hover:shadow-lg hover:scale-102"
                    }`}
                    onClick={() => setActiveEvent(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-gray-800">{event.year}</span>
                            <Badge variant="outline">{event.title}</Badge>
                          </div>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Active Event Details */}
            <div className="lg:sticky lg:top-8">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${timelineEvents[activeEvent].color} flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {(() => {
                        const IconComponent = timelineEvents[activeEvent].icon
                        return <IconComponent className="w-10 h-10" />
                      })()}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{timelineEvents[activeEvent].year}</h3>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">{timelineEvents[activeEvent].title}</h4>
                    <p className="text-gray-600 text-lg">{timelineEvents[activeEvent].description}</p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">الإنجازات الرئيسية:</h5>
                    {timelineEvents[activeEvent].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
