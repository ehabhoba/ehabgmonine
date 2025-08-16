"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, ArrowLeft, CheckCircle, Play } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function MobileAppsClientPage() {
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات تطوير تطبيقات الجوال")

  const appTypes = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "تطبيقات iOS",
      description: "تطبيقات احترافية لأجهزة iPhone و iPad",
      features: ["Swift & SwiftUI", "App Store Optimization", "تصميم متجاوب", "أمان عالي"],
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "تطبيقات Android",
      description: "تطبيقات مخصصة لنظام Android",
      features: ["Kotlin & Java", "Google Play Store", "Material Design", "تحسين الأداء"],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "تطبيقات هجينة",
      description: "تطبيقات تعمل على جميع المنصات",
      features: ["React Native", "Flutter", "توفير التكلفة", "تطوير سريع"],
    },
  ]

  const developmentProcess = [
    { step: "01", title: "التخطيط والتحليل", description: "دراسة المتطلبات وتحليل السوق المستهدف" },
    { step: "02", title: "التصميم والنماذج", description: "تصميم واجهات المستخدم وتجربة المستخدم" },
    { step: "03", title: "التطوير والبرمجة", description: "كتابة الكود وتطوير الميزات المطلوبة" },
    { step: "04", title: "الاختبار والتحسين", description: "اختبار شامل وتحسين الأداء والأمان" },
    { step: "05", title: "النشر والدعم", description: "نشر التطبيق ودعم فني مستمر" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
                <Smartphone className="w-4 h-4 ml-2" />
                تطوير تطبيقات الجوال
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                تطبيقات جوال <span className="gradient-text">احترافية</span>
                <br />
                لنشاطك التجاري
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                نطور تطبيقات جوال مبتكرة ومخصصة تلبي احتياجات عملك وتوفر تجربة استثنائية لعملائك على أجهزة iOS و Android
                بأحدث التقنيات والمعايير العالمية
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-8 py-4"
                  onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  احصل على عرض سعر مجاني
                </Button>

                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  <Play className="w-5 h-5 ml-2" />
                  شاهد نماذج التطبيقات
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">أنواع التطبيقات التي نطورها</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نقدم حلول تطوير شاملة لجميع أنواع التطبيقات بأحدث التقنيات
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary ml-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">مراحل تطوير التطبيق</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نتبع منهجية احترافية مدروسة لضمان تطوير تطبيق عالي الجودة
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {developmentProcess.map((process, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex items-start mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg ml-6">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">جاهز لتطوير تطبيقك؟</h2>
              <p className="text-xl text-muted-foreground mb-8">
                تواصل معنا اليوم واحصل على استشارة مجانية لتطوير تطبيق جوال احترافي لنشاطك التجاري
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-4"
                onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                ابدأ مشروعك الآن
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
