"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/forms/contact-form"

export default function ContactClientPage() {

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+20 102 267 9250",
      link: "tel:+201022679250",
      color: "text-green-600",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+20 102 267 9250",
      link: "https://wa.me/201022679250",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@ehabgm.com",
      link: "mailto:info@ehabgm.com",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "حلوان، القاهرة، مصر",
      link: "#",
      color: "text-red-600",
    },
  ]

  const workingHours = [
    { day: "السبت - الخميس", hours: "9:00 ص - 6:00 م" },
    { day: "الجمعة", hours: "مغلق" },
    { day: "الدعم الفني", hours: "24/7" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">تواصل معنا</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              نحن هنا لمساعدتك
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              هل لديك مشروع في ذهنك؟ أو تحتاج استشارة مجانية؟ تواصل معنا الآن وسنكون سعداء لمساعدتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <MessageCircle className="w-6 h-6 ml-2 text-blue-600" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">معلومات التواصل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 space-x-reverse">
                      <div className={`p-3 rounded-full bg-gray-100 ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{info.title}</h3>
                        <Link href={info.link} className={`${info.color} hover:underline`}>
                          {info.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Clock className="w-6 h-6 ml-2 text-blue-600" />
                    ساعات العمل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    واتساب - استشارة فورية
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Link href="tel:+201022679250">
                    <Phone className="w-5 h-5 ml-2" />
                    اتصل بنا الآن
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">موقعنا</h2>
            <p className="text-gray-600">نحن في قلب حلوان، القاهرة - في خدمتك دائماً</p>
          </div>
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">حلوان، القاهرة</h3>
                <p className="text-gray-600">مصر</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
