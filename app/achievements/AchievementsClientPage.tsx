"use client"

import { motion } from "framer-motion"
import {
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  StarIcon,
  CalendarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline"
import Footer from "@/components/footer"

const achievements = [
  {
    icon: UserGroupIcon,
    number: "1000+",
    title: "عميل راضي",
    description: "عملاء سعداء بخدماتنا المتميزة",
  },
  {
    icon: ChartBarIcon,
    number: "500+",
    title: "مشروع ناجح",
    description: "مشاريع مكتملة بأعلى معايير الجودة",
  },
  {
    icon: StarIcon,
    number: "4.9/5",
    title: "تقييم العملاء",
    description: "متوسط تقييمات عملائنا الكرام",
  },
  {
    icon: CalendarIcon,
    number: "5+",
    title: "سنوات خبرة",
    description: "خبرة متراكمة في التسويق الرقمي",
  },
  {
    icon: GlobeAltIcon,
    number: "15+",
    title: "دولة عربية",
    description: "نخدم العملاء في الوطن العربي",
  },
  {
    icon: TrophyIcon,
    number: "50+",
    title: "جائزة وتقدير",
    description: "جوائز من منصات التسويق المختلفة",
  },
]

const milestones = [
  {
    year: "2019",
    title: "بداية الرحلة",
    description: "تأسيس ehabgm كوكالة تسويق رقمي متخصصة في حلوان",
  },
  {
    year: "2020",
    title: "التوسع الأول",
    description: "وصلنا إلى 100 عميل وأطلقنا خدمات التصميم الجرافيكي",
  },
  {
    year: "2021",
    title: "الانتشار الإقليمي",
    description: "بدأنا خدمة العملاء في جميع أنحاء مصر والوطن العربي",
  },
  {
    year: "2022",
    title: "التطوير التقني",
    description: "أطلقنا خدمات تطوير المواقع والتطبيقات الذكية",
  },
  {
    year: "2023",
    title: "الريادة في السوق",
    description: "أصبحنا من أكبر وكالات التسويق الرقمي في حلوان",
  },
  {
    year: "2024",
    title: "الابتكار المستمر",
    description: "إطلاق خدمات الذكاء الاصطناعي والتسويق المتقدم",
  },
]

const awards = [
  {
    title: "أفضل وكالة تسويق رقمي",
    organization: "جوائز التسويق المصرية",
    year: "2023",
    image: "/award-1.png",
  },
  {
    title: "جائزة الإبداع في التصميم",
    organization: "مؤتمر التصميم العربي",
    year: "2023",
    image: "/award-2.png",
  },
  {
    title: "شهادة التميز في الخدمة",
    organization: "اتحاد الشركات التقنية",
    year: "2024",
    image: "/award-3.png",
  },
]

export default function AchievementsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <TrophyIcon className="h-16 w-16 text-yellow-600 ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">إنجازاتنا</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            رحلة نجاح مليئة بالإنجازات والمشاريع المتميزة
          </motion.p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <achievement.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            رحلة النجاح
          </motion.h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                    <div className="text-yellow-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            الجوائز والتقديرات
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrophyIcon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.organization}</p>
                <div className="text-yellow-600 font-semibold">{award.year}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">كن جزءاً من قصة نجاحنا</h2>
            <p className="text-xl mb-8 opacity-90">انضم إلى أكثر من 1000 عميل راضي واحصل على خدمات تسويقية متميزة</p>
            <a
              href="https://wa.me/201022679250?text=أريد أن أكون جزءاً من قصة نجاحكم"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              ابدأ مشروعك معنا
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
