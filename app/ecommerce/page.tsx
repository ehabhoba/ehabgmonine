import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "تصميم متجر إلكتروني احترافي | ehabgm - حلوان، القاهرة",
  description:
    "تصميم وتطوير متاجر إلكترونية احترافية مع أنظمة دفع آمنة وإدارة مخزون متقدمة. خدمات التجارة الإلكترونية في حلوان والقاهرة.",
  keywords: "تصميم متجر إلكتروني، التجارة الإلكترونية، متجر أونلاين، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "تصميم متجر إلكتروني احترافي | ehabgm",
    description: "تصميم وتطوير متاجر إلكترونية احترافية مع أنظمة دفع آمنة وإدارة مخزون متقدمة",
    images: ["/ecommerce-hero.png"],
  },
}

export default function EcommercePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: "سلة تسوق ذكية",
      description: "نظام سلة تسوق متطور مع حفظ المنتجات وتذكير العملاء",
    },
    {
      icon: CreditCard,
      title: "أنظمة دفع متعددة",
      description: "دعم جميع وسائل الدفع الإلكتروني والتقسيط",
    },
    {
      icon: Truck,
      title: "إدارة الشحن",
      description: "نظام شحن متكامل مع تتبع الطلبات والإشعارات",
    },
    {
      icon: Shield,
      title: "الأمان والحماية",
      description: "حماية متقدمة للبيانات وشهادات SSL مجانية",
    },
    {
      icon: BarChart3,
      title: "تقارير المبيعات",
      description: "تحليلات مفصلة للمبيعات والعملاء والمنتجات",
    },
    {
      icon: Users,
      title: "إدارة العملاء",
      description: "نظام CRM متكامل لإدارة العملاء والطلبات",
    },
  ]

  const packages = [
    {
      name: "المتجر الأساسي",
      price: "15,000",
      features: ["تصميم متجر احترافي", "حتى 100 منتج", "نظام دفع واحد", "لوحة تحكم أساسية", "دعم فني لمدة 3 شهور"],
    },
    {
      name: "المتجر المتقدم",
      price: "25,000",
      features: [
        "تصميم متجر متطور",
        "منتجات غير محدودة",
        "أنظمة دفع متعددة",
        "تطبيق موبايل",
        "تقارير مفصلة",
        "دعم فني لمدة 6 شهور",
      ],
      popular: true,
    },
    {
      name: "المتجر الاحترافي",
      price: "40,000",
      features: [
        "متجر متعدد البائعين",
        "نظام نقاط الولاء",
        "تكامل مع المخازن",
        "تطبيق موبايل متقدم",
        "تسويق إلكتروني",
        "دعم فني لمدة سنة",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">التجارة الإلكترونية</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            تصميم متجر إلكتروني احترافي
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            نصمم ونطور متاجر إلكترونية احترافية تساعدك على بيع منتجاتك أونلاين بكفاءة عالية مع أنظمة دفع آمنة وإدارة
            مخزون متقدمة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد تصميم متجر إلكتروني احترافي">
                احصل على عرض سعر مجاني
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#portfolio">شاهد أعمالنا السابقة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مميزات متاجرنا الإلكترونية</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم حلول تجارة إلكترونية متكاملة تلبي جميع احتياجاتك التجارية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">باقات المتاجر الإلكترونية</h2>
            <p className="text-muted-foreground text-lg">اختر الباقة المناسبة لحجم عملك</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">الأكثر طلباً</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {pkg.price} <span className="text-sm text-muted-foreground">جنيه</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-4 h-4 text-primary ml-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link href={`https://wa.me/201022679250?text=مرحباً، أريد باقة ${pkg.name} للمتجر الإلكتروني`}>
                      اطلب الآن
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ متجرك الإلكتروني اليوم</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية وعرض سعر مخصص لمتجرك الإلكتروني
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد استشارة مجانية لتصميم متجر إلكتروني">
                <ShoppingCart className="w-5 h-5 ml-2" />
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
