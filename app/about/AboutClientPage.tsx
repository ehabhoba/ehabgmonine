"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Lightbulb, Heart, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutClientPage() {
  const stats = [
    { number: "500+", label: "عميل راضي", icon: Users },
    { number: "8+", label: "سنوات خبرة", icon: Award },
    { number: "1000+", label: "مشروع مكتمل", icon: Target },
    { number: "24/7", label: "دعم فني", icon: Heart },
  ]

  const values = [
    {
      icon: Target,
      title: "الدقة والجودة",
      description: "نلتزم بأعلى معايير الجودة في كل مشروع نعمل عليه",
    },
    {
      icon: Lightbulb,
      title: "الإبداع والابتكار",
      description: "نقدم حلولاً إبداعية ومبتكرة تميز عملاءنا عن المنافسين",
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "فريق متخصص يعمل بروح الفريق الواحد لتحقيق أهدافك",
    },
    {
      icon: Heart,
      title: "الشغف والالتزام",
      description: "نعمل بشغف والتزام كامل لضمان نجاح مشاريع عملائنا",
    },
  ]

  const team = [
    {
      name: "إيهاب محمد",
      role: "المؤسس والمدير التنفيذي",
      image: "/ehab-mohamed-ceo.jpg",
      description: "خبرة تزيد عن 8 سنوات في التسويق الرقمي وتطوير الأعمال",
    },
    {
      name: "أحمد علي",
      role: "مطور مواقع أول",
      image: "/professional-developer-portrait.png",
      description: "متخصص في تطوير المواقع والتطبيقات باستخدام أحدث التقنيات",
    },
    {
      name: "فاطمة حسن",
      role: "مديرة التسويق الرقمي",
      image: "/marketing-manager-portrait.png",
      description: "خبيرة في إدارة حملات السوشيال ميديا والإعلانات الممولة",
    },
    {
      name: "محمد سعد",
      role: "مصمم جرافيك أول",
      image: "/graphic-designer-portrait.png",
      description: "متخصص في تصميم الهويات البصرية والمطبوعات الإعلانية",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">من نحن</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              قصة نجاح ehabgm
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              رحلة بدأت بحلم وتحولت إلى واقع. نحن وكالة متخصصة في التسويق الرقمي وتطوير المواقع، نساعد الشركات على النمو
              والازدهار في العالم الرقمي.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">قصتنا</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  بدأت رحلة ehabgm في عام 2016 برؤية واضحة: مساعدة الشركات المحلية في حلوان والقاهرة على الاستفادة من
                  قوة التسويق الرقمي لتنمية أعمالها.
                </p>
                <p>
                  من خلال الشغف والالتزام، تمكنا من بناء فريق متخصص وتطوير خدماتنا لتشمل جميع جوانب التسويق الرقمي
                  وتطوير المواقع والتطبيقات.
                </p>
                <p>
                  اليوم، نفخر بخدمة أكثر من 500 عميل وإنجاز أكثر من 1000 مشروع ناجح، مما جعلنا الخيار الأول للشركات التي
                  تسعى للنمو الرقمي.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-office-team.png"
                alt="فريق عمل ehabgm"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">رؤيتنا ورسالتنا</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-0">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="leading-relaxed">
                  أن نكون الوكالة الرائدة في التسويق الرقمي في مصر والشرق الأوسط، ونساهم في تحويل الشركات المحلية إلى
                  علامات تجارية عالمية من خلال الحلول الرقمية المبتكرة.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-0">
                <Lightbulb className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                <p className="leading-relaxed">
                  نقدم حلولاً رقمية متكاملة وخدمات تسويقية مبتكرة تساعد عملاءنا على تحقيق أهدافهم وزيادة مبيعاتهم من خلال
                  فريق متخصص وتقنيات حديثة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">قيمنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">القيم التي نؤمن بها وتوجه عملنا اليومي في خدمة عملائنا</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80"
              >
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">فريق العمل</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">تعرف على الفريق المتخصص الذي يعمل على تحقيق أهدافك</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            انضم إلى أكثر من 500 عميل راضي واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الرقمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد معرفة المزيد عن خدماتكم">
                <Phone className="w-5 h-5 ml-2" />
                تواصل معنا الآن
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/pricing">عرض الأسعار</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
