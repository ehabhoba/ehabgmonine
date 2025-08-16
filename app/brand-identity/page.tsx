import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Lightbulb, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "تصميم الهوية البصرية | وكالة ehabgm للتسويق الرقمي - حلوان، القاهرة",
  description:
    "خدمات تصميم الهوية البصرية الاحترافية في حلوان، القاهرة. شعارات، ألوان، خطوط، وعناصر بصرية متكاملة تعكس شخصية علامتك التجارية.",
  keywords: "تصميم الهوية البصرية، تصميم شعار، الهوية التجارية، التصميم الجرافيكي، حلوان، القاهرة، ehabgm",
  openGraph: {
    title: "تصميم الهوية البصرية الاحترافية - وكالة ehabgm",
    description: "نصمم هويات بصرية مميزة تعكس شخصية علامتك التجارية وتترك انطباعاً لا يُنسى",
    images: ["/ehab-mohamed-ceo.jpg"],
  },
}

export default function BrandIdentityPage() {
  const services = [
    {
      icon: Palette,
      title: "تصميم الشعار",
      description: "شعارات احترافية تعكس هوية علامتك التجارية",
    },
    {
      icon: Eye,
      title: "نظام الألوان",
      description: "اختيار الألوان المناسبة لشخصية علامتك",
    },
    {
      icon: Lightbulb,
      title: "دليل الهوية",
      description: "دليل شامل لاستخدام عناصر الهوية البصرية",
    },
    {
      icon: Award,
      title: "التطبيقات البصرية",
      description: "تطبيق الهوية على جميع المواد التسويقية",
    },
  ]

  const portfolio = [
    { title: "هوية مطعم فاخر", category: "مطاعم", image: "/restaurant-brand.png" },
    { title: "هوية شركة تقنية", category: "تكنولوجيا", image: "/tech-brand.png" },
    { title: "هوية عيادة طبية", category: "طبي", image: "/medical-brand.png" },
    { title: "هوية متجر أزياء", category: "أزياء", image: "/fashion-brand.png" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-100 text-purple-800">تصميم الهوية البصرية</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                هوية بصرية
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {" "}
                  مميزة
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                نصمم هويات بصرية احترافية تعكس شخصية علامتك التجارية وتترك انطباعاً لا يُنسى في أذهان عملائك
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Link href="https://wa.me/201022679250?text=أريد تصميم هوية بصرية لعلامتي التجارية">ابدأ مشروعك</Link>
                </Button>
                <Button variant="outline" size="lg">
                  مشاهدة أعمالنا
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/brand-identity-showcase.png"
                alt="عرض الهوية البصرية"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات الهوية البصرية</h2>
            <p className="text-xl text-gray-600">حلول شاملة لبناء هوية بصرية قوية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض أعمالنا</h2>
            <p className="text-xl text-gray-600">هويات بصرية مميزة صممناها لعملائنا</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-800">{item.category}</Badge>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لبناء هوية بصرية مميزة؟</h2>
            <p className="text-xl text-purple-100 mb-8">احصل على استشارة مجانية وتصميم أولي لهويتك البصرية</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة مجانية لتصميم الهوية البصرية">
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
