import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, TrendingUp, Users, Award, Sparkles, Zap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 bg-gradient-to-br from-background via-muted/50 to-background overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary text-sm font-medium border border-primary/20 card-hover">
                  <Award className="w-4 h-4 ml-2 icon-bounce" />
                  <Sparkles className="w-3 h-3 ml-1 text-secondary animate-pulse" />
                  وكالة معتمدة في حلوان، القاهرة
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  نضاعف مبيعاتك خلال <span className="gradient-text">90 يوم</span>
                  <br />
                  <span className="relative">
                    أو تسترد أموالك!
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                  </span>
                </h1>

                <div className="text-xl text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    وكالة <strong className="text-primary">ehabgm</strong> للتسويق الرقمي – شركاؤك في النجاح من قلب
                    حلوان إلى أي مكان في العالم.
                  </p>
                  <p className="typewriter">نقدم حلول تسويق رقمي متكاملة تساعدك على جذب العملاء وزيادة المبيعات.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-8 py-4 relative overflow-hidden btn-animated group"
                >
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-bl-lg animate-pulse">
                    <Zap className="w-3 h-3 inline ml-1" />
                    عرض محدود!
                  </span>
                  <span className="relative z-10">احصل على استشارة مجانية</span>
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 bg-transparent border-2 border-primary/20 hover:border-primary/40 btn-animated group"
                >
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  شاهد أعمالنا
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <ScrollReveal delay={200}>
                  <div className="text-center card-hover p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6 text-primary ml-2 icon-bounce" />
                      <span className="text-2xl font-bold gradient-text counter">+200%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">زيادة المبيعات</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="text-center card-hover p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-primary ml-2 icon-bounce" style={{ animationDelay: "0.5s" }} />
                      <span className="text-2xl font-bold gradient-text counter">+100</span>
                    </div>
                    <p className="text-sm text-muted-foreground">عميل راضي</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <div className="text-center card-hover p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-primary ml-2 icon-bounce" style={{ animationDelay: "1s" }} />
                      <span className="text-2xl font-bold gradient-text counter">5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">سنوات خبرة</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/ehab-mohamed-ceo.jpg"
                  alt="إيهاب محمد - المؤسس والمدير التنفيذي لوكالة ehabgm للتسويق الرقمي في حلوان، القاهرة"
                  className="relative w-full h-auto rounded-2xl shadow-2xl card-hover"
                />

                <div className="absolute -top-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg card-hover">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">نشط الآن</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-4 rounded-xl shadow-lg card-hover">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">دعم فني</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
