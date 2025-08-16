import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "أحمد محمد",
    position: "مالك مطعم الأصالة",
    location: "حلوان، القاهرة",
    content:
      "فريق ehabgm غير مجرى عملي تماماً. زادت مبيعاتي 180% في 3 أشهر فقط! الحملات الإعلانية كانت مدروسة والنتائج فاقت توقعاتي.",
    rating: 5,
    image: "/placeholder-oieaj.png",
  },
  {
    name: "د. سارة أحمد",
    position: "طبيبة أسنان",
    location: "المعادي، القاهرة",
    content:
      "الموقع الإلكتروني الذي صمموه لعيادتي رائع! أصبحت أحصل على حجوزات يومية من الإنترنت. خدمة عملاء ممتازة ومتابعة مستمرة.",
    rating: 5,
    image: "/egyptian-dentist-headshot.png",
  },
  {
    name: "محمد علي",
    position: "مؤسس متجر فاشونيستا",
    location: "التجمع الخامس، القاهرة",
    content:
      "تعاملت مع عدة شركات تسويق قبل ehabgm، لكن لم أحصل على نتائج مثل هذه. متجري الإلكتروني حقق مبيعات مليون جنيه في السنة الأولى!",
    rating: 5,
    image: "/placeholder-trb1m.png",
  },
  {
    name: "فاطمة حسن",
    position: "مديرة تسويق",
    location: "مدينة نصر، القاهرة",
    content:
      "التقارير الشهرية واضحة ومفصلة، والفريق متجاوب جداً. ساعدونا في بناء حضور قوي على السوشيال ميديا وزيادة التفاعل مع عملائنا.",
    rating: 5,
    image: "/egyptian-businesswoman-headshot.png",
  },
]

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
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <CardContent className="p-8 pt-20">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />

                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-primary">📍 {testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
