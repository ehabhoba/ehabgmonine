import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import TestimonialsList from "@/components/testimonials/testimonials-list"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            آراء عملائنا
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ماذا يقول <span className="text-primary">عملاؤنا</span> عنا؟
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نفتخر بثقة عملائنا ونسعى دائماً لتحقيق توقعاتهم وتجاوزها
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12">
          <TestimonialsList />
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">معدل رضا العملاء</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-primary mb-2">+100</div>
              <div className="text-muted-foreground">عميل راضي</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-primary mb-2">5/5</div>
              <div className="text-muted-foreground">متوسط التقييمات</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
