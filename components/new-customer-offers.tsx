import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Star, CheckCircle } from "lucide-react"

export default function NewCustomerOffers() {
  const offers = [
    {
      title: "عرض العميل الجديد",
      description: "خصم 50% على أول حملة إعلانية",
      originalPrice: "2000",
      discountedPrice: "1000",
      features: [
        "استشارة مجانية لمدة ساعة",
        "تحليل منافسين مجاني",
        "إعداد حملة إعلانية احترافية",
        "متابعة لمدة شهر مجاناً",
      ],
      badge: "الأكثر طلباً",
      urgent: true,
    },
    {
      title: "باقة البداية السريعة",
      description: "كل ما تحتاجه لبدء التسويق الرقمي",
      originalPrice: "3500",
      discountedPrice: "2500",
      features: ["تصميم هوية بصرية كاملة", "إنشاء صفحات سوشيال ميديا", "محتوى لمدة شهر", "حملة إعلانية مجانية"],
      badge: "قيمة استثنائية",
    },
    {
      title: "الحزمة الذهبية",
      description: "حل شامل لنمو أعمالك",
      originalPrice: "5000",
      discountedPrice: "3500",
      features: ["موقع إلكتروني احترافي", "إدارة كاملة للسوشيال ميديا", "حملات إعلانية متقدمة", "تقارير شهرية مفصلة"],
      badge: "الأفضل للشركات",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4 ml-2" />
            عروض محدودة - لفترة قصيرة فقط!
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">عروض خاصة للعملاء الجدد</h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ابدأ رحلتك معنا بعروض استثنائية مصممة خصيصاً لمساعدتك على تحقيق النجاح
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                offer.urgent ? "ring-2 ring-red-500 ring-opacity-50" : ""
              }`}
            >
              {offer.badge && <Badge className="absolute top-4 right-4 bg-primary text-white">{offer.badge}</Badge>}

              {offer.urgent && (
                <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-1 text-sm">
                  🔥 عرض ساخن - احجز الآن!
                </div>
              )}

              <CardHeader className={offer.urgent ? "pt-8" : ""}>
                <CardTitle className="text-xl font-bold text-right">{offer.title}</CardTitle>
                <CardDescription className="text-right">{offer.description}</CardDescription>

                <div className="flex items-center justify-end gap-2 mt-4">
                  <span className="text-2xl font-bold text-primary">{offer.discountedPrice} جنيه</span>
                  <span className="text-lg text-muted-foreground line-through">{offer.originalPrice} جنيه</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-right">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Gift className="w-4 h-4 ml-2" />
                  احجز العرض الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 ml-2" />
              <span className="font-bold text-yellow-700">ضمان استرداد الأموال</span>
            </div>
            <p className="text-yellow-700">إذا لم تحصل على النتائج المتوقعة خلال 30 يوم، نسترد لك أموالك كاملة!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
