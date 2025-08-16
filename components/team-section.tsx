"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "إيهاب جمال",
    position: "المدير التنفيذي ومؤسس الوكالة",
    image: "/arabic-ceo.png",
    bio: "خبير في التسويق الرقمي مع أكثر من 8 سنوات من الخبرة في إدارة الحملات الناجحة",
    specialties: ["استراتيجية التسويق", "إدارة الفرق", "تطوير الأعمال"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "ehab@ehabgm.com",
    },
  },
  {
    id: 2,
    name: "سارة أحمد",
    position: "مديرة التصميم الجرافيكي",
    image: "/arabic-woman-graphic-designer.png",
    bio: "مصممة إبداعية متخصصة في الهوية البصرية والتصميم الرقمي مع لمسة عربية أصيلة",
    specialties: ["تصميم الهوية البصرية", "التصميم الرقمي", "الرسوم المتحركة"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "sara@ehabgm.com",
    },
  },
  {
    id: 3,
    name: "أحمد محمد",
    position: "خبير السوشيال ميديا",
    image: "/arabic-social-media-expert.png",
    bio: "متخصص في إدارة منصات التواصل الاجتماعي وإنشاء محتوى جذاب يحقق التفاعل المطلوب",
    specialties: ["إدارة المحتوى", "التفاعل مع الجمهور", "تحليل البيانات"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "ahmed@ehabgm.com",
    },
  },
  {
    id: 4,
    name: "فاطمة علي",
    position: "مطورة المواقع الإلكترونية",
    image: "/placeholder-lgzkj.png",
    bio: "مطورة مواقع محترفة متخصصة في تطوير المواقع الحديثة والمتجاوبة مع جميع الأجهزة",
    specialties: ["تطوير الواجهات", "تجربة المستخدم", "التحسين التقني"],
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "fatima@ehabgm.com",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">فريق الخبراء</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تعرف على فريقنا المتميز من الخبراء والمتخصصين في مجال التسويق الرقمي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="card-hover group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="sm" className="social-icon linkedin bg-transparent">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="social-icon bg-transparent">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="social-icon instagram bg-transparent">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="social-icon bg-transparent">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-animated">
            انضم إلى فريقنا
          </Button>
        </div>
      </div>
    </section>
  )
}
