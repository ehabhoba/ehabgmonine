"use client"

import { motion } from "framer-motion"
import { Award, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img
                src="/ceo-ehab-mohamed.png"
                alt="إيهاب محمد - المؤسس والمدير التنفيذي"
                className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white/20"
              />

              {/* Floating Achievement Badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg"
              >
                <Award className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <div className="mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              >
                إيهاب محمد
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-blue-200 font-semibold mb-6"
              >
                المؤسس والمدير التنفيذي
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                رائد في مجال التسويق الرقمي مع أكثر من 8 سنوات من الخبرة في بناء العلامات التجارية وتطوير الاستراتيجيات
                التسويقية المبتكرة.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                تحت قيادته، نجحت وكالة ehabgm في خدمة أكثر من 500 عميل وتحقيق نمو يتجاوز 300% في المبيعات لعملائنا.
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">8+</div>
                <div className="text-sm text-gray-300">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
                <div className="text-sm text-gray-300">نمو المبيعات</div>
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-200">مجالات الخبرة:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "استراتيجيات التسويق الرقمي",
                  "إدارة العلامات التجارية",
                  "تحليل البيانات",
                  "قيادة الفرق",
                  "التطوير التقني",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/201022679250?text=أريد التحدث مع إيهاب محمد مباشرة حول مشروعي", "_blank")
                }
              >
                تحدث مع إيهاب مباشرة
                <Users className="mr-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
