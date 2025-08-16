import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "الباقة الأساسية",
      price: "1,500",
      period: "شهرياً",
      description: "مثالية للشركات الناشئة والمشاريع الصغيرة",
      features: [
        "إدارة منصة واحدة (فيسبوك أو انستجرام)",
        "15 منشور شهرياً",
        "تصميم 10 بوستات",
        "رد على التعليقات والرسائل",
        "تقرير شهري مبسط",
        "دعم فني أساسي",
      ],
      popular: false,
      buttonText: "اختر الباقة الأساسية",
    },
    {
      name: "الباقة المتقدمة",
      price: "2,800",
      period: "شهرياً",
      description: "الأنسب للشركات المتوسطة التي تريد نمو أسرع",
      features: [
        "إدارة 3 منصات (فيسبوك، انستجرام، تيك توك)",
        "25 منشور شهرياً",
        "تصميم 20 بوست احترافي",
        "إعلانات ممولة (بميزانية 500 جنيه)",
        "استراتيجية محتوى مخصصة",
        "تقارير تفصيلية أسبوعية",
        "دعم فني متقدم",
        "استشارة تسويقية شهرية",
      ],
      popular: true,
      buttonText: "اختر الباقة المتقدمة",
    },
    {
      name: "الباقة الاحترافية",
      price: "4,500",
      period: "شهرياً",
      description: "للشركات الكبيرة التي تريد هيمنة كاملة على السوق",
      features: [
        "إدارة جميع المنصات (6 منصات)",
        "40 منشور شهرياً",
        "تصميم 35 بوست + فيديوهات",
        "إعلانات ممولة (بميزانية 1000 جنيه)",
        "إنشاء محتوى فيديو احترافي",
        "تحليلات متقدمة ودراسة المنافسين",
        "استراتيجية تسويق شاملة",
        "دعم فني على مدار الساعة",
        "اجتماعات استراتيجية أسبوعية",
      ],
      popular: false,
      buttonText: "اختر الباقة الاحترافية",
    },
  ]

  const additionalServices = [
    { service: "تصميم لوجو احترافي", price: "300 - 800 جنيه" },
    { service: "تصميم هوية تجارية كاملة", price: "1,200 - 2,500 جنيه" },
    { service: "تطوير موقع إلكتروني", price: "2,000 - 8,000 جنيه" },
    { service: "تطبيق موبايل", price: "5,000 - 15,000 جنيه" },
    { service: "حملة إعلانية مخصصة", price: "800 - 2,000 جنيه" },
    { service: "تصوير منتجات احترافي", price: "500 - 1,500 جنيه" },
    { service: "كتابة محتوى تسويقي", price: "200 - 500 جنيه" },
    { service: "استشارة تسويقية", price: "300 - 600 جنيه" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            أسعار تنافسية
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            باقات <span className="text-primary">التسويق الرقمي</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اختر الباقة المناسبة لاحتياجاتك وميزانيتك. جميع الباقات تشمل ضمان الجودة والنتائج المضمونة
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-4 h-4 ml-1" />
                    الأكثر شعبية
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                <div className="text-4xl font-bold text-primary">
                  {plan.price} <span className="text-lg text-muted-foreground">جنيه</span>
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mt-0.5 ml-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href={`https://wa.me/201022679250?text=مرحباً، أريد الاستفسار عن ${plan.name}`}>
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">خدمات إضافية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">{item.service}</h3>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج باقة مخصصة؟</h2>
          <p className="text-xl text-muted-foreground mb-8">تواصل معنا لتصميم باقة تناسب احتياجاتك الخاصة وميزانيتك</p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية لتصميم باقة مخصصة">
              احصل على استشارة مجانية
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
