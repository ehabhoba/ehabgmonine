"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDownIcon, QuestionMarkCircleIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const faqs = [
  {
    question: "ما هي خدمات التسويق الرقمي التي تقدمونها؟",
    answer:
      "نقدم خدمات شاملة تشمل إدارة السوشيال ميديا، الإعلانات الممولة، تصميم الجرافيك، تطوير المواقع، تحسين محركات البحث SEO، التسويق بالمحتوى، والاستشارات التسويقية.",
  },
  {
    question: "كم تستغرق مدة تنفيذ المشروع؟",
    answer:
      "تختلف مدة التنفيذ حسب نوع المشروع. تصميم الشعار يستغرق 3-5 أيام، تطوير الموقع 7-14 يوم، بينما حملات السوشيال ميديا تبدأ خلال 24 ساعة من الموافقة.",
  },
  {
    question: "هل تقدمون ضمان على الخدمات؟",
    answer:
      "نعم، نقدم ضمان استرداد الأموال خلال 30 يوم إذا لم تكن راضياً عن النتائج. كما نضمن التعديلات المجانية لمدة شهر بعد تسليم المشروع.",
  },
  {
    question: "ما هي أسعار خدماتكم؟",
    answer:
      "أسعارنا تنافسية وتبدأ من 500 جنيه للتصميمات البسيطة، 2000 جنيه للمواقع الأساسية، و1500 جنيه شهرياً لإدارة السوشيال ميديا. يمكنك مراجعة صفحة الأسعار للتفاصيل الكاملة.",
  },
  {
    question: "هل تعملون مع الشركات خارج القاهرة؟",
    answer:
      "بالطبع! نخدم العملاء في جميع أنحاء مصر والوطن العربي. نعمل عن بُعد بكفاءة عالية ونضمن التواصل المستمر معك أينما كنت.",
  },
  {
    question: "كيف يمكنني متابعة تقدم مشروعي؟",
    answer:
      "نوفر تقارير دورية مفصلة ونتواصل معك عبر الواتساب والبريد الإلكتروني. كما يمكنك طلب اجتماع فيديو في أي وقت لمناقشة تقدم المشروع.",
  },
  {
    question: "هل تقدمون خدمات التدريب؟",
    answer:
      "نعم، نقدم دورات تدريبية في التسويق الرقمي وإدارة السوشيال ميديا للأفراد والشركات. التدريب متاح أونلاين أو في مقرنا بحلوان.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع نقداً، تحويل بنكي، فودافون كاش، أو أورانج موني. للمشاريع الكبيرة نقبل الدفع على دفعات حسب مراحل التنفيذ.",
  },
]

export default function FAQClientPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <QuestionMarkCircleIcon className="h-16 w-16 text-green-600 ml-4" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">الأسئلة الشائعة</h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            إجابات شاملة على جميع استفساراتك حول خدماتنا التسويقية
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-green-50 transition-colors"
                >
                  <ChevronDownIcon
                    className={`h-6 w-6 text-green-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 flex-1 ml-4">{faq.question}</h3>
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-lime-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h2>
            <p className="text-xl mb-8 opacity-90">تواصل معنا مباشرة وسنجيب على جميع استفساراتك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/201022679250?text=مرحباً، لدي استفسار إضافي"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 ml-2" />
                تواصل عبر الواتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
