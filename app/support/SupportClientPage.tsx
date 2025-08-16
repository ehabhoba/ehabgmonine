"use client"

import { motion } from "framer-motion"
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const supportChannels = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "الدردشة المباشرة",
    description: "تواصل معنا فوراً عبر الواتساب",
    action: "بدء المحادثة",
    link: "https://wa.me/201022679250?text=مرحباً، أحتاج مساعدة فنية",
    color: "bg-green-500",
  },
  {
    icon: PhoneIcon,
    title: "المكالمات الهاتفية",
    description: "اتصل بنا مباشرة للحصول على المساعدة",
    action: "اتصل الآن",
    link: "tel:+201022679250",
    color: "bg-blue-500",
  },
  {
    icon: EnvelopeIcon,
    title: "البريد الإلكتروني",
    description: "أرسل استفسارك وسنرد خلال ساعة",
    action: "إرسال إيميل",
    link: "mailto:support@ehabgm.online",
    color: "bg-purple-500",
  },
]

const supportTypes = [
  {
    title: "مشاكل تقنية",
    description: "مساعدة في حل المشاكل التقنية والأخطاء",
    icon: ExclamationTriangleIcon,
    examples: ["مشاكل في الموقع", "أخطاء في التطبيق", "مشاكل في الحساب"],
  },
  {
    title: "استفسارات الخدمات",
    description: "معلومات حول خدماتنا وكيفية استخدامها",
    icon: CheckCircleIcon,
    examples: ["شرح الخدمات", "كيفية البدء", "معلومات الأسعار"],
  },
  {
    title: "طلبات التعديل",
    description: "طلب تعديلات على المشاريع الحالية",
    icon: ChatBubbleLeftRightIcon,
    examples: ["تعديل التصميم", "تحديث المحتوى", "إضافة مميزات"],
  },
]

export default function SupportClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <ChatBubbleLeftRightIcon className="h-16 w-16 text-blue-600 ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">الدعم الفني</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            نحن هنا لمساعدتك على مدار الساعة
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center bg-green-100 text-green-800 px-6 py-3 rounded-full inline-flex"
          >
            <ClockIcon className="h-5 w-5 ml-2" />
            متاح 24/7 - استجابة خلال 15 دقيقة
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            طرق التواصل معنا
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div
                  className={`${channel.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <channel.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4">{channel.title}</h3>
                <p className="text-gray-600 mb-6">{channel.description}</p>

                <a
                  href={channel.link}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow inline-block"
                >
                  {channel.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            أنواع الدعم المتاحة
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <type.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">أمثلة:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <ExclamationTriangleIcon className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">دعم الطوارئ</h2>
            <p className="text-xl mb-8 opacity-90">للمشاكل العاجلة التي تؤثر على عملك، تواصل معنا فوراً</p>
            <a
              href="https://wa.me/201022679250?text=طوارئ: لدي مشكلة عاجلة تحتاج حل فوري"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <PhoneIcon className="h-6 w-6 ml-2" />
              اتصال طوارئ
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
