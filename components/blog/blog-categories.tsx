'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tag, TrendingUp, Star } from 'lucide-react'

interface Category {
  id: string
  name: string
  slug: string
  description?: string
  post_count?: number
  color?: string
}

interface BlogCategoriesProps {
  categories: Category[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  const defaultCategories = [
    {
      id: '1',
      name: 'التسويق الرقمي',
      slug: 'digital-marketing',
      description: 'استراتيجيات ونصائح التسويق الرقمي',
      post_count: 15,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      name: 'تصميم المواقع',
      slug: 'web-design',
      description: 'أحدث تقنيات تصميم المواقع',
      post_count: 12,
      color: 'bg-purple-500'
    },
    {
      id: '3',
      name: 'السوشيال ميديا',
      slug: 'social-media',
      description: 'إدارة حسابات السوشيال ميديا',
      post_count: 18,
      color: 'bg-pink-500'
    },
    {
      id: '4',
      name: 'تحسين محركات البحث',
      slug: 'seo',
      description: 'نصائح وتحسينات SEO',
      post_count: 10,
      color: 'bg-green-500'
    },
    {
      id: '5',
      name: 'الإعلانات الممولة',
      slug: 'paid-ads',
      description: 'إدارة الحملات الإعلانية',
      post_count: 8,
      color: 'bg-orange-500'
    },
    {
      id: '6',
      name: 'التجارة الإلكترونية',
      slug: 'ecommerce',
      description: 'بناء المتاجر الإلكترونية',
      post_count: 6,
      color: 'bg-red-500'
    }
  ]

  const displayCategories = categories.length > 0 ? categories : defaultCategories

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-blue-600" />
          التصنيفات
        </h3>
        
        <div className="space-y-3">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${category.color || 'bg-gray-400'} mr-3`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {category.name}
                    </h4>
                    {category.description && (
                      <p className="text-sm text-gray-500">{category.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {category.post_count || 0}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
          المقالات الشائعة
        </h3>
        
        <div className="space-y-4">
          {[
            {
              title: "أفضل استراتيجيات التسويق الرقمي في 2024",
              views: 1250,
              date: "2024-01-15"
            },
            {
              title: "كيفية تحسين موقعك لمحركات البحث",
              views: 980,
              date: "2024-01-10"
            },
            {
              title: "نصائح لإدارة حسابات السوشيال ميديا",
              views: 750,
              date: "2024-01-05"
            },
            {
              title: "دليل شامل للإعلانات الممولة",
              views: 650,
              date: "2024-01-01"
            }
          ].map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3 rtl:space-x-reverse"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{post.views} مشاهدة</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2 text-yellow-300" />
          اشترك في النشرة الإخبارية
        </h3>
        <p className="text-blue-100 mb-4">
          احصل على أحدث المقالات والنصائح في التسويق الرقمي
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="w-full px-4 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
          />
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-3 rounded-xl font-semibold transition-colors duration-300">
            اشترك الآن
          </button>
        </div>
      </div>
    </div>
  )
}