"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const videoTestimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    company: "مطعم الأصالة",
    role: "المدير العام",
    thumbnail: "/restaurant-owner-testimonial.png",
    videoUrl: "#",
    quote: "تعاملي مع ehabgm كان نقطة تحول في مشروعي. زادت مبيعاتي 300% في 6 أشهر فقط!",
    rating: 5,
    results: "+300% زيادة في المبيعات",
  },
  {
    id: 2,
    name: "فاطمة علي",
    company: "عيادة الشفاء الطبية",
    role: "مديرة التسويق",
    thumbnail: "/placeholder-r16dw.png",
    videoUrl: "#",
    quote: "الحملات الإعلانية التي نفذوها لنا جلبت مئات المرضى الجدد. فريق محترف جداً!",
    rating: 5,
    results: "+250 مريض جديد شهرياً",
  },
  {
    id: 3,
    name: "محمد حسن",
    company: "شركة النيل للتكنولوجيا",
    role: "الرئيس التنفيذي",
    thumbnail: "/tech-ceo-testimonial.png",
    videoUrl: "#",
    quote: "الموقع الإلكتروني الذي صمموه لنا احترافي جداً وساعدنا في الوصول لعملاء جدد.",
    rating: 5,
    results: "+180% زيادة في الاستفسارات",
  },
]

export default function VideoTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
  }

  const current = videoTestimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Play className="w-4 h-4 mr-2" />
            شهادات فيديو حقيقية
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            عملاؤنا يتحدثون عن تجربتهم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استمع لقصص نجاح حقيقية من عملائنا وكيف ساعدناهم في تحقيق أهدافهم
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative group cursor-pointer">
                  <img
                    src={current.thumbnail || "/placeholder.svg"}
                    alt={`${current.name} testimonial`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-800 rounded-full w-20 h-20"
                    >
                      <Play className="w-8 h-8 mr-1" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <div className="flex gap-2 items-center">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-purple-600 mb-4" />

                  <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">"{current.quote}"</blockquote>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{current.name}</h4>
                      <p className="text-purple-600 font-semibold">{current.role}</p>
                      <p className="text-gray-600">{current.company}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-purple-800">النتيجة المحققة:</span>
                    </div>
                    <p className="text-purple-700 font-bold text-lg mt-1">{current.results}</p>
                  </div>
                </CardContent>
              </Card>

              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3"
                onClick={() => {
                  const message = `مرحباً، شاهدت شهادة ${current.name} وأريد تحقيق نتائج مماثلة لمشروعي. أرجو التواصل معي لمناقشة كيف يمكنكم مساعدتي.`
                  window.open(`https://wa.me/201234567890?text=${encodeURIComponent(message)}`, "_blank")
                }}
              >
                احصل على نتائج مماثلة لمشروعك
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
