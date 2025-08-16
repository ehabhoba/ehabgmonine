"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Send, CheckCircle } from "lucide-react"

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)

    // Create WhatsApp message
    const message = `مرحباً، أريد طلب عرض سعر:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
الخدمة: ${formData.service}
الميزانية: ${formData.budget}
التفاصيل: ${formData.description}`

    window.open(`https://wa.me/201022679250?text=${encodeURIComponent(message)}`, "_blank")

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center border-green-200 bg-white/80">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">تم إرسال طلبك بنجاح!</h3>
              <p className="text-green-600">سنتواصل معك خلال 30 دقيقة</p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">احصل على عرض سعر فوري</h2>
            <p className="text-gray-600">أخبرنا عن مشروعك وسنرسل لك عرض سعر مخصص خلال 30 دقيقة</p>
          </div>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-xl">نموذج طلب عرض السعر</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الخدمة المطلوبة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">إدارة السوشيال ميديا</SelectItem>
                    <SelectItem value="website">تطوير موقع إلكتروني</SelectItem>
                    <SelectItem value="graphic-design">تصميم جرافيك</SelectItem>
                    <SelectItem value="paid-ads">إعلانات ممولة</SelectItem>
                    <SelectItem value="seo">تحسين محركات البحث</SelectItem>
                    <SelectItem value="mobile-app">تطبيق جوال</SelectItem>
                    <SelectItem value="other">خدمة أخرى</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="الميزانية المتوقعة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-3000">1,000 - 3,000 جنيه</SelectItem>
                    <SelectItem value="3000-5000">3,000 - 5,000 جنيه</SelectItem>
                    <SelectItem value="5000-10000">5,000 - 10,000 جنيه</SelectItem>
                    <SelectItem value="10000+">أكثر من 10,000 جنيه</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="وصف مختصر للمشروع..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4 ml-2" />
                  احصل على عرض السعر
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
