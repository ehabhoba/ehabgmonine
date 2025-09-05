"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Tag, TrendingUp, MessageCircle } from "lucide-react"
import Link from "next/link"
import BlogList from "@/components/blog/blog-list"

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "جميع المقالات", count: 0 },
    { id: "digital-marketing", name: "التسويق الرقمي", count: 0 },
    { id: "social-media", name: "السوشيال ميديا", count: 0 },
    { id: "web-development", name: "تطوير المواقع", count: 0 },
    { id: "seo", name: "تحسين محركات البحث", count: 0 },
    { id: "business-tips", name: "نصائح الأعمال", count: 0 },
  ]

  const trendingTopics = [
    "التسويق بالذكاء الاصطناعي",
    "تحسين معدل التحويل",
    "التسويق عبر الفيديو",
    "التجارة الإلكترونية",
    "تحليل المنافسين",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">المدونة</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              مقالات ونصائح تسويقية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف أحدث الاتجاهات والاستراتيجيات في التسويق الرقمي وتطوير الأعمال من خبراء ehabgm
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 border-gray-300"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 ml-2" />
                بحث
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2">
              <BlogList />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Tag className="w-5 h-5 ml-2 text-blue-600" />
                    المواضيع الرائجة
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${topic}`}
                        className="block p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        #{topic}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">اشترك في النشرة الإخبارية</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    احصل على أحدث المقالات والنصائح التسويقية مباشرة في بريدك الإلكتروني
                  </p>
                  <div className="space-y-3">
                    <Input
                      placeholder="بريدك الإلكتروني"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">اشترك الآن</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">هل تحتاج مساعدة؟</h3>
                  <p className="text-gray-600 mb-4 text-sm">تواصل معنا للحصول على استشارة مجانية في التسويق الرقمي</p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/201022679250?text=مرحباً، أريد استشارة في التسويق الرقمي">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      تواصل عبر واتساب
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
