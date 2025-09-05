import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp } from "lucide-react"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"

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

        {/* Portfolio Grid */}
        <PortfolioGrid />

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
