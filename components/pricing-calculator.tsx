"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Calculator, Zap, Star, ArrowRight, Brain } from "lucide-react"

export default function PricingCalculator() {
  const [websitePages, setWebsitePages] = useState([5])
  const [socialPosts, setSocialPosts] = useState([20])
  const [adBudget, setAdBudget] = useState([5000])
  const [businessType, setBusinessType] = useState("general")

  const calculatePrice = () => {
    // Real Egyptian market pricing
    const websitePrice = websitePages[0] * 800 // 800 EGP per page (realistic for Egyptian market)
    const socialPrice = socialPosts[0] * 75 // 75 EGP per post
    const adManagement = adBudget[0] * 0.2 // 20% management fee

    // Business type multiplier for specialized industries
    const businessMultiplier = {
      medical: 1.3,
      restaurant: 1.1,
      ecommerce: 1.4,
      tech: 1.5,
      general: 1.0,
    }

    const basePrice = websitePrice + socialPrice + adManagement
    return basePrice * (businessMultiplier[businessType] || 1.0)
  }

  const totalPrice = calculatePrice()
  const discount = totalPrice > 20000 ? 0.25 : totalPrice > 10000 ? 0.2 : totalPrice > 5000 ? 0.15 : 0.1
  const finalPrice = totalPrice * (1 - discount)

  const getAIRecommendation = () => {
    if (websitePages[0] > 10 && socialPosts[0] < 30) {
      return "💡 نصيحة ذكية: موقعك كبير، ننصح بزيادة المحتوى على السوشيال ميديا لجذب المزيد من الزوار"
    }
    if (adBudget[0] > 20000 && socialPosts[0] < 50) {
      return "🚀 اقتراح ذكي: مع ميزانية الإعلانات العالية، يمكن زيادة المحتوى لتحقيق نتائج أفضل"
    }
    if (websitePages[0] < 5 && adBudget[0] > 10000) {
      return "⚡ توصية: موقع أكبر سيحسن من أداء إعلاناتك ويزيد معدل التحويل"
    }
    return "✨ مشروعك متوازن ومناسب لتحقيق نتائج ممتازة!"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Brain className="w-4 h-4 mr-2" />
            حاسبة الأسعار الذكية - أسعار السوق المصري
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            احسب تكلفة مشروعك بالأسعار الحقيقية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حاسبة ذكية تعتمد على أسعار السوق المصري الحقيقية مع توصيات مخصصة لمشروعك
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-800">حاسبة التكلفة الذكية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">نوع النشاط التجاري</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    { key: "general", label: "عام", icon: "🏢" },
                    { key: "medical", label: "طبي", icon: "🏥" },
                    { key: "restaurant", label: "مطاعم", icon: "🍽️" },
                    { key: "ecommerce", label: "تجارة إلكترونية", icon: "🛒" },
                    { key: "tech", label: "تقني", icon: "💻" },
                  ].map((type) => (
                    <button
                      key={type.key}
                      onClick={() => setBusinessType(type.key)}
                      className={`p-3 rounded-lg text-center transition-all ${
                        businessType === type.key
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-white text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{type.icon}</div>
                      <div className="text-sm font-medium">{type.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      عدد صفحات الموقع: {websitePages[0]} صفحة
                    </label>
                    <Slider
                      value={websitePages}
                      onValueChange={setWebsitePages}
                      max={20}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>صفحة واحدة</span>
                      <span>20 صفحة</span>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">800 جنيه لكل صفحة (أسعار السوق المصري)</div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      منشورات السوشيال ميديا شهرياً: {socialPosts[0]} منشور
                    </label>
                    <Slider
                      value={socialPosts}
                      onValueChange={setSocialPosts}
                      max={100}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>10 منشورات</span>
                      <span>100 منشور</span>
                    </div>
                    <div className="text-sm text-purple-600 font-medium">75 جنيه لكل منشور (أسعار السوق المصري)</div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-green-600" />
                      ميزانية الإعلانات شهرياً: {adBudget[0].toLocaleString()} جنيه
                    </label>
                    <Slider
                      value={adBudget}
                      onValueChange={setAdBudget}
                      max={50000}
                      min={1000}
                      step={500}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1,000 جنيه</span>
                      <span>50,000 جنيه</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      20% من إجمالي الميزانية (أسعار السوق المصري)
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">تقدير التكلفة</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span>تصميم الموقع</span>
                      <span>{(websitePages[0] * 800).toLocaleString()} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>إدارة السوشيال ميديا</span>
                      <span>{(socialPosts[0] * 75).toLocaleString()} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>إدارة الإعلانات (20%)</span>
                      <span>{(adBudget[0] * 0.2).toLocaleString()} جنيه</span>
                    </div>
                    {businessType !== "general" && (
                      <div className="flex justify-between items-center text-yellow-300">
                        <span>
                          تخصص{" "}
                          {businessType === "medical"
                            ? "طبي"
                            : businessType === "restaurant"
                              ? "مطاعم"
                              : businessType === "ecommerce"
                                ? "تجارة إلكترونية"
                                : "تقني"}
                        </span>
                        <span>
                          +
                          {(
                            (calculatePrice() /
                              (businessType === "medical"
                                ? 1.3
                                : businessType === "restaurant"
                                  ? 1.1
                                  : businessType === "ecommerce"
                                    ? 1.4
                                    : 1.5)) *
                            (businessType === "medical"
                              ? 0.3
                              : businessType === "restaurant"
                                ? 0.1
                                : businessType === "ecommerce"
                                  ? 0.4
                                  : 0.5)
                          ).toLocaleString()}{" "}
                          جنيه
                        </span>
                      </div>
                    )}
                    <hr className="border-white/30" />
                    <div className="flex justify-between items-center text-lg">
                      <span>المجموع الفرعي</span>
                      <span>{totalPrice.toLocaleString()} جنيه</span>
                    </div>
                    <div className="flex justify-between items-center text-green-300">
                      <span>خصم {discount * 100}%</span>
                      <span>-{(totalPrice * discount).toLocaleString()} جنيه</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-yellow-300" />
                      <span className="font-semibold text-yellow-300">توصية ذكية</span>
                    </div>
                    <p className="text-sm text-white/90">{getAIRecommendation()}</p>
                  </div>

                  <div className="bg-white/20 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>السعر النهائي</span>
                      <span>{finalPrice.toLocaleString()} جنيه</span>
                    </div>
                    <div className="text-sm text-white/80 mt-2">
                      💰 وفرت {(totalPrice * discount).toLocaleString()} جنيه!
                    </div>
                  </div>

                  <Button
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-3"
                    onClick={() => {
                      const businessTypeArabic = {
                        medical: "طبي",
                        restaurant: "مطاعم",
                        ecommerce: "تجارة إلكترونية",
                        tech: "تقني",
                        general: "عام",
                      }
                      const message = `مرحباً، أريد الحصول على عرض سعر مخصص:\n\n🏢 نوع النشاط: ${businessTypeArabic[businessType]}\n📊 تفاصيل المشروع:\n• عدد صفحات الموقع: ${websitePages[0]} صفحة\n• منشورات السوشيال ميديا: ${socialPosts[0]} منشور شهرياً\n• ميزانية الإعلانات: ${adBudget[0].toLocaleString()} جنيه شهرياً\n\n💰 التكلفة المقدرة: ${finalPrice.toLocaleString()} جنيه\n🤖 التوصية الذكية: ${getAIRecommendation()}\n\nأرجو التواصل معي لمناقشة التفاصيل والحصول على استشارة مجانية.`
                      window.open(`https://wa.me/201234567890?text=${encodeURIComponent(message)}`, "_blank")
                    }}
                  >
                    احصل على عرض سعر مخصص + استشارة مجانية
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
