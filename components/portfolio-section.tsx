import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "مطعم الأصالة - حلوان",
    category: "مطاعم وكافيهات",
    description: "زيادة المبيعات بنسبة 180% خلال 3 أشهر من خلال حملات فيسبوك وإنستجرام المستهدفة",
    image: "/egyptian-restaurant-campaign.png",
    results: [
      { metric: "زيادة المبيعات", value: "+180%" },
      { metric: "متابعين جدد", value: "+5,000" },
      { metric: "معدل التفاعل", value: "+250%" },
    ],
    tags: ["سوشيال ميديا", "إعلانات ممولة", "تصوير منتجات"],
  },
  {
    title: "عيادة د. أحمد للأسنان",
    category: "خدمات طبية",
    description: "تطوير موقع إلكتروني وحملة SEO أدت لزيادة الحجوزات بنسبة 300%",
    image: "/modern-arabic-dental-website.png",
    results: [
      { metric: "زيادة الحجوزات", value: "+300%" },
      { metric: "زوار الموقع", value: "+400%" },
      { metric: "ترتيب جوجل", value: "الصفحة الأولى" },
    ],
    tags: ["تطوير مواقع", "SEO", "تصميم طبي"],
  },
  {
    title: "متجر أزياء فاشونيستا",
    category: "تجارة إلكترونية",
    description: "إطلاق متجر إلكتروني مع استراتيجية تسويق شاملة حققت مبيعات تجاوزت المليون جنيه",
    image: "/arabic-fashion-ecommerce.png",
    results: [
      { metric: "إجمالي المبيعات", value: "+1M جنيه" },
      { metric: "معدل التحويل", value: "+8.5%" },
      { metric: "عملاء جدد", value: "+2,500" },
    ],
    tags: ["تجارة إلكترونية", "تصميم مواقع", "تسويق رقمي"],
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            أعمالنا المميزة
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            قصص نجاح <span className="text-primary">حقيقية</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف كيف ساعدنا عملاءنا في حلوان والقاهرة على تحقيق نتائج استثنائية وتنمية أعمالهم
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <CardContent
                  className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{project.title}</h3>

                      <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-fit bg-transparent">
                      <TrendingUp className="w-4 h-4 ml-2" />
                      اعرف التفاصيل
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">شاهد المزيد من أعمالنا</h3>
            <p className="text-muted-foreground mb-6">لدينا العديد من قصص النجاح الأخرى التي نفتخر بها</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="w-5 h-5 ml-2" />
              عرض جميع الأعمال
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
