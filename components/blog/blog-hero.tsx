'use client'

import { motion } from 'framer-motion'
import { Search, BookOpen, TrendingUp } from 'lucide-react'

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            مدونة <span className="text-yellow-300">ehabgm</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            نصائح وخبرات في التسويق الرقمي، تصميم المواقع، وإدارة السوشيال ميديا
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                className="w-full pr-12 pl-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              />
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-colors duration-300 whitespace-nowrap">
              بحث
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <BookOpen className="w-12 h-12 mx-auto text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">مقالات متخصصة</h3>
            <p className="text-blue-100">نصائح وخبرات من خبراء التسويق الرقمي</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <TrendingUp className="w-12 h-12 mx-auto text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">أحدث الاتجاهات</h3>
            <p className="text-blue-100">تحديثات مستمرة عن عالم التسويق الرقمي</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
              <Search className="w-12 h-12 mx-auto text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">محتوى مخصص</h3>
            <p className="text-blue-100">محتوى مصمم خصيصاً للسوق المصري</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}