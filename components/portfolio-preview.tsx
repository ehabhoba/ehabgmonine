"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPreview() {
  const projects = [
    {
      id: 1,
      title: "مطعم الأصالة - حملة تسويقية متكاملة",
      category: "تسويق رقمي",
      description: "زيادة المبيعات بنسبة 300% خلال 3 أشهر من خلال حملة تسويقية متكاملة",
      image: "/egyptian-restaurant-campaign.png",
      results: {
        sales: "+300%",
        reach: "2M+",
        engagement: "+250%",
      },
      tags: ["فيسبوك", "انستجرام", "تصميم جرافيك"],
    },
    {
      id: 2,
      title: "عيادة الدكتور أحمد - موقع طبي",
      category: "تطوير مواقع",
      description: "تصميم موقع طبي احترافي مع نظام حجز المواعيد وإدارة المرضى",
      image: "/modern-arabic-dental-website.png",
      results: {
        bookings: "+400%",
        visitors: "50K+",
        conversion: "+180%",
      },
      tags: ["تطوير ويب", "SEO", "تصميم UI/UX"],
    },
    {
      id: 3,
      title: "متجر الأزياء العصرية - تجارة إلكترونية",
      category: "متجر إلكتروني",
      description: "تطوير متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المخزون",
      image: "/modern-fashion-ecommerce.png",
      results: {
        revenue: "+500%",
        orders: "1000+",
        customers: "+350%",
      },
      tags: ["تجارة إلكترونية", "تصميم", "تسويق"],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
            <Eye className="w-5 h-5 ml-2" />
            أعمالنا المميزة
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">مشاريع نفخر بإنجازها</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            اكتشف كيف ساعدنا عملاءنا في تحقيق نتائج استثنائية وزيادة أرباحهم
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white">{project.category}</Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {key === "sales" && "المبيعات"}
                        {key === "reach" && "الوصول"}
                        {key === "engagement" && "التفاعل"}
                        {key === "bookings" && "الحجوزات"}
                        {key === "visitors" && "الزوار"}
                        {key === "conversion" && "التحويل"}
                        {key === "revenue" && "الإيرادات"}
                        {key === "orders" && "الطلبات"}
                        {key === "customers" && "العملاء"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
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

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="px-8 py-4 text-lg">
              <TrendingUp className="w-5 h-5 ml-2" />
              عرض جميع أعمالنا
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
