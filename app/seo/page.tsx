import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, Target, BarChart3, Globe, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تحسين محركات البحث SEO | ehabgm - حلوان، القاهرة",
  description:
    "خدمات تحسين محركات البحث SEO الاحترافية لتصدر نتائج البحث الأولى. زيادة الزيارات والعملاء المحتملين في حلوان والقاهرة.",
  keywords: "تحسين محركات البحث، SEO، تصدر نتائج البحث، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "تحسين محركات البحث SEO | ehabgm",
    description: "خدمات تحسين محركات البحث SEO الاحترافية لتصدر نتائج البحث الأولى",
    images: ["/seo-hero.png"],
  },
}

export default function SEOPage() {
  const services = [
    {
      icon: Search,
      title: "تحليل الكلمات المفتاحية",
      description: "بحث وتحليل أفضل الكلمات المفتاحية لمجال عملك",
    },
    {
      icon: TrendingUp,
      title: "تحسين المحتوى",
      description: "كتابة وتحسين المحتوى ليتوافق مع معايير SEO",
    },
    {
      icon: Target,
      title: "SEO التقني",
      description: "تحسين سرعة الموقع والبنية التقنية",
    },
    {
      icon: BarChart3,
      title: "تقارير الأداء",
      description: "تقارير شهرية مفصلة عن تقدم موقعك",
    },
    {
      icon: Globe,
      title: "SEO المحلي",
      description: "تحسين الظهور في البحث المحلي والخرائط",
    },
    {
      icon: Users,
      title: "بناء الروابط",
      description: "استراتيجيات بناء روابط عالية الجودة",
    },
  ]

  const results = [
    { metric: "زيادة الزيارات", value: "300%", description: "متوسط زيادة الزيارات العضوية" },
    { metric: "تحسن الترتيب", value: "الصفحة الأولى", description: "85% من الكلمات المستهدفة" },
    { metric: "زيادة العملاء", value: "250%", description: "زيادة في العملاء المحتملين" },
    { metric: "معدل التحويل", value: "45%", description: "تحسن في معدل التحويل" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">تحسين محركات البحث</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            تصدر نتائج البحث الأولى
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            نساعدك في تحسين موقعك ليظهر في المراكز الأولى في نتائج البحث وزيادة عدد الزوار والعملاء المحتملين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد تحسين موقعي في محركات البحث">
                احصل على تحليل مجاني
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#results">شاهد النتائج المحققة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات تحسين محركات البحث</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم حلول SEO شاملة لتحسين ترتيب موقعك في نتائج البحث
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">النتائج المحققة</h2>
            <p className="text-muted-foreground text-lg">إحصائيات حقيقية من مشاريعنا السابقة</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
              >
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                  <CardTitle className="text-lg">{result.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{result.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خطوات العمل</h2>
            <p className="text-muted-foreground text-lg">منهجية عمل مدروسة لضمان أفضل النتائج</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "التحليل والدراسة", desc: "تحليل شامل للموقع والمنافسين" },
              { step: "02", title: "وضع الاستراتيجية", desc: "خطة عمل مخصصة لأهدافك" },
              { step: "03", title: "التنفيذ والتحسين", desc: "تطبيق التحسينات المطلوبة" },
              { step: "04", title: "المتابعة والتقارير", desc: "مراقبة النتائج وتقارير دورية" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ رحلتك نحو الصفحة الأولى</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              احصل على تحليل مجاني لموقعك واكتشف الفرص المتاحة لتحسين ترتيبك
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد تحليل مجاني لموقعي في محركات البحث">
                <Search className="w-5 h-5 ml-2" />
                احصل على تحليل مجاني
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
