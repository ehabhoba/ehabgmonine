"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ExternalLink, Heart, Share2 } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "حملة إعلانية لمطعم فاخر",
    category: "إعلانات ممولة",
    image: "/luxury-restaurant-campaign.png",
    description: "زيادة المبيعات بنسبة 300% خلال شهر واحد",
    results: "300% زيادة في المبيعات",
    likes: 245,
    views: 1200,
  },
  {
    id: 2,
    title: "هوية بصرية لشركة تقنية",
    category: "تصميم جرافيك",
    image: "/modern-tech-branding.png",
    description: "تصميم هوية بصرية متكاملة لشركة ناشئة",
    results: "تحسين الهوية البصرية بنسبة 250%",
    likes: 189,
    views: 890,
  },
  {
    id: 3,
    title: "إدارة حسابات عيادة طبية",
    category: "سوشيال ميديا",
    image: "/medical-clinic-social-media.png",
    description: "زيادة المتابعين والحجوزات بشكل كبير",
    results: "500% زيادة في الحجوزات",
    likes: 312,
    views: 1500,
  },
  {
    id: 4,
    title: "موقع إلكتروني لمتجر أزياء",
    category: "تطوير مواقع",
    image: "/fashion-ecommerce-website.png",
    description: "متجر إلكتروني متكامل مع نظام دفع آمن",
    results: "400% زيادة في المبيعات الإلكترونية",
    likes: 278,
    views: 1100,
  },
  {
    id: 5,
    title: "حملة تسويقية لتطبيق جوال",
    category: "تسويق رقمي",
    image: "/mobile-app-marketing.png",
    description: "إطلاق تطبيق جديد وتحقيق 50 ألف تحميل",
    results: "50,000 تحميل في الشهر الأول",
    likes: 456,
    views: 2100,
  },
  {
    id: 6,
    title: "استراتيجية SEO لموقع تجاري",
    category: "تحسين محركات البحث",
    image: "/seo-dashboard.png",
    description: "تحسين ترتيب الموقع في نتائج البحث",
    results: "المركز الأول في 15 كلمة مفتاحية",
    likes: 198,
    views: 950,
  },
]

const categories = [
  "الكل",
  "إعلانات ممولة",
  "تصميم جرافيك",
  "سوشيال ميديا",
  "تطوير مواقع",
  "تسويق رقمي",
  "تحسين محركات البحث",
]

export default function AdvancedPortfolio() {
  const [activeCategory, setActiveCategory] = useState("الكل")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "الكل" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">معرض أعمالنا المتميزة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة من أفضل مشاريعنا التي حققت نتائج استثنائية لعملائنا
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="btn-animated"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="card-hover group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-2">
                      <Button size="sm" variant="secondary" className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </Button>
                      <Button size="sm" variant="secondary" className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {item.likes}
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-primary text-white">{item.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-700">النتيجة: {item.results}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-animated">
            عرض المزيد من الأعمال
          </Button>
        </div>
      </div>
    </section>
  )
}
