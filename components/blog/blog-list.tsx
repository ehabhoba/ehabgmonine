'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Eye } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  featured_image?: string
  created_at: string
  views: number
  tags?: string[]
}

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-100 rounded-2xl p-12">
          <h3 className="text-2xl font-semibold text-gray-600 mb-4">لا توجد مقالات بعد</h3>
          <p className="text-gray-500 mb-6">سنقوم بإضافة مقالات جديدة قريباً</p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-700 mb-2">مقالات قادمة:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• أفضل استراتيجيات التسويق الرقمي في 2024</li>
                <li>• كيفية تحسين موقعك لمحركات البحث</li>
                <li>• نصائح لإدارة حسابات السوشيال ميديا</li>
                <li>• دليل شامل للإعلانات الممولة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">أحدث المقالات</h2>
        <div className="text-sm text-gray-500">
          {posts.length} مقال
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                {post.featured_image ? (
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(post.created_at).toLocaleDateString('ar-EG')}</span>
                  <Clock className="w-4 h-4 mr-1 ml-4" />
                  <span>5 دقائق قراءة</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span>اقرأ المزيد</span>
                  <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {posts.length > 6 && (
        <div className="text-center pt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
            عرض المزيد من المقالات
          </button>
        </div>
      )}
    </div>
  )
}