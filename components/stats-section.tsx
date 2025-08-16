import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    number: "+200%",
    label: "متوسط زيادة المبيعات",
    description: "للعملاء خلال أول 3 أشهر",
  },
  {
    icon: Users,
    number: "+100",
    label: "عميل راضي",
    description: "في مصر والوطن العربي",
  },
  {
    icon: Award,
    number: "+500",
    label: "حملة إعلانية ناجحة",
    description: "على جميع المنصات",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "دعم فني",
    description: "خدمة عملاء متواصلة",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">أرقام تتحدث عن نجاحنا</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            نفتخر بالنتائج التي حققناها لعملائنا في جميع أنحاء مصر والوطن العربي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>

              <div className="text-xl font-semibold mb-2">{stat.label}</div>

              <div className="text-primary-foreground/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
