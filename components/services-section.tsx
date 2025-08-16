import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Megaphone,
  Palette,
  Globe,
  Search,
  Share2,
  BarChart3,
  ArrowLeft,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Megaphone,
    title: "إدارة الحملات الإعلانية",
    description: "حملات مدروسة على فيسبوك، إنستجرام، وجوجل تحقق أعلى عائد من ميزانيتك الإعلانية",
    features: ["تحليل السوق والمنافسين", "تصميم إعلانات جذابة", "متابعة مستمرة + تقارير أسبوعية"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Palette,
    title: "تصميم الهوية البصرية",
    description: "شعار، ألوان، وبروفايل شركة يعكس شخصيتك التجارية ويميزك عن المنافسين",
    features: ["تصميم شعار احترافي", "دليل الهوية البصرية", "تطبيق الهوية على جميع المواد"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Globe,
    title: "تصميم وتطوير المواقع",
    description: "مواقع حديثة وسريعة الاستجابة لجميع الأجهزة مع تحسين تجربة المستخدم",
    features: ["تصميم متجاوب", "سرعة تحميل عالية", "تحسين محركات البحث"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Search,
    title: "تحسين محركات البحث SEO",
    description: "رفع ترتيب موقعك في نتائج جوجل واستهداف العملاء المهتمين بخدماتك",
    features: ["تحليل الكلمات المفتاحية", "تحسين المحتوى", "بناء الروابط الخارجية"],
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Share2,
    title: "إدارة السوشيال ميديا",
    description: "محتوى جذاب وتفاعل حقيقي مع جمهورك على جميع منصات التواصل الاجتماعي",
    features: ["إنشاء محتوى إبداعي", "جدولة المنشورات", "تحليل الأداء والتفاعل"],
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: BarChart3,
    title: "التحليل والتقارير",
    description: "تقارير مفصلة وتحليل دقيق لأداء حملاتك التسويقية مع توصيات للتحسين",
    features: ["تقارير شهرية مفصلة", "تحليل ROI", "توصيات للتحسين"],
    color: "bg-teal-50 text-teal-600",
  },
]

const socialMediaServices = [
  {
    icon: Facebook,
    title: "إدارة فيسبوك",
    description: "إدارة احترافية لصفحتك على فيسبوك مع محتوى جذاب وتفاعل مستمر",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Instagram,
    title: "إدارة انستجرام",
    description: "محتوى بصري مميز وستوريز تفاعلية لزيادة المتابعين والمبيعات",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Youtube,
    title: "إدارة يوتيوب",
    description: "إنتاج وتحرير فيديوهات احترافية مع تحسين القناة لزيادة المشاهدات",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Twitter,
    title: "إدارة تويتر ولينكد إن",
    description: "محتوى احترافي وتفاعل مع المجتمع المهني لبناء سمعة قوية",
    color: "bg-blue-50 text-blue-600",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            خدماتنا المتميزة
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            حلول تسويق رقمي <span className="text-primary">شاملة</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            من حلوان، القاهرة نقدم خدمات التسويق الرقمي المتكاملة لمساعدة مشروعك على النمو والوصول لأهدافه
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8" />
                </div>

                <CardTitle className="text-xl font-bold text-foreground mb-2">{service.title}</CardTitle>

                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                  asChild
                >
                  <Link href="/pricing">
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              خدمات <span className="text-primary">السوشيال ميديا</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              إدارة احترافية لجميع منصات التواصل الاجتماعي لضمان وصولك لأكبر عدد من العملاء المحتملين
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">جاهز لبدء مشروعك؟</h3>
            <p className="text-muted-foreground mb-6">
              احجز استشارة مجانية الآن ودعنا نساعدك في تحقيق أهدافك التسويقية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                  احجز استشارتك المجانية الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  اطلع على الأسعار
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
