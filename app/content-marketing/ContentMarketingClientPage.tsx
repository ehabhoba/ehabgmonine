"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenTool, ArrowLeft, CheckCircle, Play, FileText, Video, ImageIcon, Mic } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContentMarketingClientPage() {
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات التسويق بالمحتوى")

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "المحتوى المكتوب",
      description: "مقالات ومنشورات احترافية",
      features: ["مقالات SEO", "منشورات السوشيال ميديا", "النشرات الإخبارية", "المحتوى التسويقي"],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "المحتوى المرئي",
      description: "فيديوهات وموشن جرافيك",
      features: ["فيديوهات تسويقية", "موشن جرافيك", "إعلانات مرئية", "محتوى تفاعلي"],
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "التصميم الجرافيكي",
      description: "تصاميم بصرية جذابة",
      features: ["إنفوجرافيك", "تصاميم السوشيال ميديا", "البانرات الإعلانية", "الهوية البصرية"],
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "المحتوى الصوتي",
      description: "بودكاست ومحتوى صوتي",
      features: ["بودكاست احترافي", "إعلانات صوتية", "التعليق الصوتي", "الكتب الصوتية"],
    },
  ]

  const benefits = [
    { title: "زيادة الوعي بالعلامة التجارية", description: "محتوى يعزز هوية علامتك التجارية" },
    { title: "تحسين محركات البحث", description: "محتوى محسن لمحركات البحث SEO" },
    { title: "زيادة التفاعل", description: "محتوى جذاب يزيد من تفاعل الجمهور" },
    { title: "بناء الثقة", description: "محتوى قيم يبني الثقة مع العملاء" },
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
                <PenTool className="w-4 h-4 ml-2" />
                التسويق بالمحتوى
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                محتوى <span className="gradient-text">يحقق النتائج</span>
                <br />
                ويجذب العملاء
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                نساعدك في إنشاء استراتيجية محتوى شاملة تجذب جمهورك المستهدف وتحقق أهدافك التسويقية من خلال محتوى عالي
                الجودة ومتنوع يناسب جميع المنصات الرقمية
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-8 py-4"
                  onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  احصل على استراتيجية محتوى مجانية
                </Button>

                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                  <Play className="w-5 h-5 ml-2" />
                  شاهد نماذج المحتوى
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">أنواع المحتوى التي نقدمها</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                نقدم جميع أنواع المحتوى الرقمي لتلبية احتياجاتك التسويقية المختلفة
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary ml-2 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">فوائد التسويق بالمحتوى</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                اكتشف كيف يمكن للمحتوى الجيد أن يحول نشاطك التجاري
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="flex items-start p-6 bg-gradient-to-r from-card to-card/50 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg ml-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">جاهز لبناء استراتيجية محتوى فعالة؟</h2>
              <p className="text-xl text-muted-foreground mb-8">
                تواصل معنا اليوم واحصل على استشارة مجانية لبناء استراتيجية محتوى تحقق أهدافك التسويقية
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-4"
                onClick={() => window.open(`https://wa.me/201234567890?text=${whatsappMessage}`, "_blank")}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                ابدأ استراتيجيتك الآن
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
