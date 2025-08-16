"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, TrendingUp, ShoppingCart, Globe, Smartphone, PenTool, BarChart3 } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function PortfolioClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "الكل", icon: Globe, count: 25 },
    { name: "تسويق رقمي", icon: TrendingUp, count: 12 },
    { name: "تطوير مواقع", icon: Globe, count: 8 },
    { name: "تجارة إلكترونية", icon: ShoppingCart, count: 5 },
    { name: "تطبيقات جوال", icon: Smartphone, count: 3 },
    { name: "تصميم جرافيك", icon: PenTool, count: 7 },
  ]

  const projects = [
    {
      id: 1,
      title: "مطعم الأصالة - حملة تسويقية متكاملة",
      category: "تسويق رقمي",
      client: "مطعم الأصالة",
      description: "حملة تسويقية شاملة أدت إلى زيادة المبيعات بنسبة 300% خلال 3 أشهر",
      image: "/egyptian-restaurant-campaign.png",
      results: {
        sales: "+300%",
        reach: "2M+",
        engagement: "+250%",
        roi: "400%",
      },
      services: ["فيسبوك ادز", "انستجرام", "تصميم جرافيك", "إدارة المحتوى"],
      duration: "3 أشهر",
      year: "2023",
    },
    {
      id: 2,
      title: "عيادة الدكتور أحمد - موقع طبي احترافي",
      category: "تطوير مواقع",
      client: "عيادة طبية",
      description: "تصميم موقع طبي احترافي مع نظام حجز المواعيد وإدارة المرضى",
      image: "/modern-arabic-dental-website.png",
      results: {
        bookings: "+400%",
        visitors: "50K+",
        conversion: "+180%",
        satisfaction: "98%",
      },
      services: ["تطوير ويب", "SEO", "تصميم UI/UX", "نظام إدارة"],
      duration: "2 أشهر",
      year: "2023",
    },
    {
      id: 3,
      title: "متجر الأزياء العصرية - تجارة إلكترونية",
      category: "تجارة إلكترونية",
      client: "متجر أزياء",
      description: "تطوير متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المخزون",
      image: "/modern-fashion-ecommerce.png",
      results: {
        revenue: "+500%",
        orders: "1000+",
        customers: "+350%",
        retention: "85%",
      },
      services: ["تجارة إلكترونية", "تصميم", "تسويق", "SEO"],
      duration: "4 أشهر",
      year: "2023",
    },
    {
      id: 4,
      title: "شركة الإنشاءات - هوية بصرية متكاملة",
      category: "تصميم جرافيك",
      client: "شركة إنشاءات",
      description: "تصميم هوية بصرية شاملة تشمل الشعار والمطبوعات والمواد التسويقية",
      image: "/construction-company-brand.png",
      results: {
        recognition: "+200%",
        leads: "+150%",
        trust: "+180%",
        professional: "95%",
      },
      services: ["تصميم شعار", "هوية بصرية", "مطبوعات", "دليل العلامة"],
      duration: "1.5 أشهر",
      year: "2023",
    },
    {
      id: 5,
      title: "تطبيق التوصيل - تطبيق جوال",
      category: "تطبيقات جوال",
      client: "شركة توصيل",
      description: "تطوير تطبيق توصيل طعام مع نظام تتبع الطلبات والدفع الإلكتروني",
      image: "/food-delivery-app.png",
      results: {
        downloads: "10K+",
        orders: "5K+",
        rating: "4.8/5",
        retention: "75%",
      },
      services: ["تطوير iOS", "تطوير Android", "تصميم UI/UX", "API"],
      duration: "6 أشهر",
      year: "2023",
    },
    {
      id: 6,
      title: "معهد التدريب - منصة تعليمية",
      category: "تطوير مواقع",
      client: "معهد تدريب",
      description: "تطوير منصة تعليمية متكاملة مع نظام إدارة الكورسات والطلاب",
      image: "/online-learning-platform.png",
      results: {
        students: "2K+",
        courses: "50+",
        completion: "90%",
        satisfaction: "96%",
      },
      services: ["تطوير ويب", "LMS", "تصميم", "دعم فني"],
      duration: "5 أشهر",
      year: "2023",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "الكل" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">معرض أعمالنا المميزة</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            اكتشف مشاريعنا الناجحة وكيف ساعدنا عملاءنا في تحقيق نتائج استثنائية
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="opacity-80">مشروع ناجح</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="opacity-80">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8+</div>
              <div className="opacity-80">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="ابحث في المشاريع..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <Badge variant="secondary" className="mr-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-green-600 text-white">{project.category}</Badge>
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <Badge variant="outline" className="text-sm">
                      {project.duration}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.results)
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="text-lg font-bold text-green-600 mb-1">{value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {key === "sales" && "المبيعات"}
                            {key === "reach" && "الوصول"}
                            {key === "engagement" && "التفاعل"}
                            {key === "bookings" && "الحجوزات"}
                            {key === "visitors" && "الزوار"}
                            {key === "conversion" && "التحويل"}
                            {key === "revenue" && "الإيرادات"}
                            {key === "orders" && "الطلبات"}
                            {key === "customers" && "العملاء"}
                            {key === "roi" && "العائد على الاستثمار"}
                            {key === "satisfaction" && "الرضا"}
                            {key === "retention" && "الاحتفاظ"}
                            {key === "recognition" && "التعرف"}
                            {key === "leads" && "العملاء المحتملين"}
                            {key === "trust" && "الثقة"}
                            {key === "professional" && "الاحترافية"}
                            {key === "downloads" && "التحميلات"}
                            {key === "rating" && "التقييم"}
                            {key === "students" && "الطلاب"}
                            {key === "courses" && "الكورسات"}
                            {key === "completion" && "الإكمال"}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full group-hover:bg-green-700 transition-colors">
                    <ExternalLink className="w-4 h-4 ml-2" />
                    عرض تفاصيل المشروع
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
              <BarChart3 className="w-5 h-5 ml-2" />
              عرض المزيد من المشاريع
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
