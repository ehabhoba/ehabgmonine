"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "أحدث اتجاهات التسويق الرقمي في 2024",
    excerpt: "اكتشف أهم الاتجاهات والتقنيات الجديدة في عالم التسويق الرقمي التي ستشكل مستقبل الصناعة",
    image: "/digital-marketing-trends-2024-infographic.png",
    category: "تسويق رقمي",
    author: "إيهاب جمال",
    date: "15 يناير 2024",
    readTime: "5 دقائق",
    views: 1250,
  },
  {
    id: 2,
    title: "كيفية إنشاء محتوى جذاب للسوشيال ميديا",
    excerpt: "دليل شامل لإنشاء محتوى إبداعي ومؤثر يجذب الجمهور ويزيد من التفاعل على منصات التواصل الاجتماعي",
    image: "/social-media-content-guide.png",
    category: "سوشيال ميديا",
    author: "أحمد محمد",
    date: "12 يناير 2024",
    readTime: "7 دقائق",
    views: 980,
  },
  {
    id: 3,
    title: "أسرار تصميم الهوية البصرية الناجحة",
    excerpt: "تعلم كيفية إنشاء هوية بصرية قوية ومميزة تعكس قيم علامتك التجارية وتترك انطباعاً دائماً",
    image: "/brand-identity-process.png",
    category: "تصميم جرافيك",
    author: "سارة أحمد",
    date: "10 يناير 2024",
    readTime: "6 دقائق",
    views: 1100,
  },
  {
    id: 4,
    title: "تحسين محركات البحث: دليل المبتدئين",
    excerpt: "كل ما تحتاج لمعرفته عن تحسين محركات البحث SEO لتحسين ترتيب موقعك وزيادة الزيارات الطبيعية",
    image: "/seo-beginners-guide.png",
    category: "SEO",
    author: "فاطمة علي",
    date: "8 يناير 2024",
    readTime: "8 دقائق",
    views: 1350,
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">مدونة التسويق الرقمي</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اكتشف أحدث النصائح والاستراتيجيات في عالم التسويق الرقمي من خبرائنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white">{post.category}</Badge>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{post.views}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                >
                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-animated">
            عرض جميع المقالات
          </Button>
        </div>
      </div>
    </section>
  )
}
