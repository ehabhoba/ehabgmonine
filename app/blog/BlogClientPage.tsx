"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp, Eye, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "جميع المقالات", count: 24 },
    { id: "digital-marketing", name: "التسويق الرقمي", count: 8 },
    { id: "social-media", name: "السوشيال ميديا", count: 6 },
    { id: "web-development", name: "تطوير المواقع", count: 5 },
    { id: "seo", name: "تحسين محركات البحث", count: 3 },
    { id: "business-tips", name: "نصائح الأعمال", count: 2 },
  ]

  const featuredPost = {
    id: 1,
    title: "دليل شامل للتسويق عبر السوشيال ميديا في 2024",
    excerpt: "تعرف على أحدث استراتيجيات التسويق عبر منصات التواصل الاجتماعي وكيفية بناء حضور قوي لعلامتك التجارية",
    image: "/social-media-marketing-strategy.png",
    category: "التسويق الرقمي",
    author: "إيهاب محمد",
    date: "15 يناير 2024",
    readTime: "10 دقائق",
    views: 1250,
    comments: 23,
  }

  const blogPosts = [
    {
      id: 2,
      title: "كيفية تحسين موقعك لمحركات البحث في 2024",
      excerpt: "خطوات عملية لتحسين ترتيب موقعك في نتائج البحث وزيادة الزيارات المجانية",
      image: "/seo-optimization.png",
      category: "تحسين محركات البحث",
      author: "أحمد علي",
      date: "12 يناير 2024",
      readTime: "8 دقائق",
      views: 890,
      comments: 15,
    },
    {
      id: 3,
      title: "أفضل ممارسات تصميم المواقع الإلكترونية",
      excerpt: "تعرف على أحدث اتجاهات تصميم المواقع وكيفية إنشاء تجربة مستخدم مميزة",
      image: "/modern-website-design.png",
      category: "تطوير المواقع",
      author: "فاطمة حسن",
      date: "10 يناير 2024",
      readTime: "12 دقائق",
      views: 756,
      comments: 18,
    },
    {
      id: 4,
      title: "استراتيجيات الإعلانات الممولة على فيسبوك",
      excerpt: "كيفية إنشاء حملات إعلانية ناجحة على فيسبوك وتحقيق أفضل عائد على الاستثمار",
      image: "/facebook-ads-campaign.png",
      category: "التسويق الرقمي",
      author: "محمد سعد",
      date: "8 يناير 2024",
      readTime: "15 دقائق",
      views: 1120,
      comments: 31,
    },
    {
      id: 5,
      title: "بناء الهوية البصرية للعلامة التجارية",
      excerpt: "خطوات إنشاء هوية بصرية قوية ومتماسكة تعكس قيم علامتك التجارية",
      image: "/brand-identity-design.png",
      category: "التسويق الرقمي",
      author: "إيهاب محمد",
      date: "5 يناير 2024",
      readTime: "9 دقائق",
      views: 634,
      comments: 12,
    },
    {
      id: 6,
      title: "التجارة الإلكترونية: دليل البداية الشامل",
      excerpt: "كل ما تحتاج معرفته لبدء متجرك الإلكتروني وتحقيق النجاح في التجارة الرقمية",
      image: "/ecommerce-online-store.png",
      category: "نصائح الأعمال",
      author: "أحمد علي",
      date: "3 يناير 2024",
      readTime: "18 دقائق",
      views: 945,
      comments: 27,
    },
    {
      id: 7,
      title: "تحليل البيانات في التسويق الرقمي",
      excerpt: "كيفية استخدام البيانات لاتخاذ قرارات تسويقية ذكية وتحسين الأداء",
      image: "/digital-marketing-analytics.png",
      category: "التسويق الرقمي",
      author: "فاطمة حسن",
      date: "1 يناير 2024",
      readTime: "11 دقائق",
      views: 723,
      comments: 19,
    },
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

      {/* Featured Post */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <TrendingUp className="w-6 h-6 ml-2 text-blue-600" />
              المقال المميز
            </h2>
          </div>
          <Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600 text-white">{featuredPost.category}</Badge>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4 space-x-reverse">
                  <div className="flex items-center">
                    <User className="w-4 h-4 ml-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 ml-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 ml-1" />
                    {featuredPost.views}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 ml-1" />
                    {featuredPost.comments}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  اقرأ المقال
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <Badge className="absolute top-3 right-3 bg-blue-600 text-white text-xs">{post.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <span className="flex items-center">
                            <User className="w-3 h-3 ml-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 ml-1" />
                            {post.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 ml-1" />
                            {post.views}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-3 h-3 ml-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        اقرأ المزيد
                        <ArrowRight className="w-3 h-3 mr-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  تحميل المزيد من المقالات
                </Button>
              </div>
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
