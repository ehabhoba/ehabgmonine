import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Eye, Heart } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "الرؤية",
      description: "أن نكون الوكالة الرائدة في التسويق الرقمي في مصر والوطن العربي",
    },
    {
      icon: Eye,
      title: "الرسالة",
      description: "مساعدة الشركات على النمو والنجاح من خلال استراتيجيات تسويق رقمي مبتكرة",
    },
    {
      icon: Heart,
      title: "القيم",
      description: "الشفافية، الجودة، الابتكار، والالتزام بتحقيق نتائج حقيقية لعملائنا",
    },
  ]

  const achievements = [
    { number: "+100", label: "حملة إعلانية ناجحة" },
    { number: "+50", label: "عميل في مصر والوطن العربي" },
    { number: "5", label: "سنوات خبرة في السوق" },
    { number: "24/7", label: "دعم فني متواصل" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                من نحن
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">ehabgm</span> – شغفنا هو نجاحك
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  نحن وكالة تسويق رقمية مقرها <strong className="text-foreground">حلوان – القاهرة</strong>، نساعد
                  الشركات الناشئة والصغيرة والمتوسطة على تحقيق نمو حقيقي وملموس عبر الإنترنت.
                </p>

                <p>
                  بخبرتنا في مجالات التصميم، البرمجة، والإعلان الرقمي، نستطيع تحويل فكرتك إلى مشروع ناجح بخطط تسويق ذكية
                  تعتمد على البيانات والإبداع.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">لماذا تختار ehabgm؟</h3>

              <div className="space-y-3">
                {[
                  "ضمان النتائج أو استرداد الأموال",
                  "خدمة عملاء 24/7 باللغة العربية",
                  "تقارير واضحة وشفافة",
                  "خطط دفع مرنة تناسب ميزانيتك",
                  "فريق متخصص ومعتمد",
                  "خبرة محلية في السوق المصري",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary ml-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Team Image */}
            <div className="relative mt-8">
              <img
                src="/arabic-business-team-cairo.png"
                alt="فريق عمل ehabgm في حلوان، القاهرة"
                className="w-full h-auto rounded-2xl shadow-lg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium text-foreground">📍 مقرنا في حلوان، القاهرة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
