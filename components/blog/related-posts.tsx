'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Eye, ArrowLeft } from 'lucide-react'

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

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return (
      <div className="space-y-6">
        {/* Back to Blog */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <Link
            href="/blog"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            العودة إلى المدونة
          </Link>
        </div>

        {/* Popular Posts */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">مقالات شائعة</h3>
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
          <h3 className="text-lg font-bold mb-3">اشترك في النشرة الإخبارية</h3>
          <p className="text-blue-100 text-sm mb-4">
            احصل على أحدث المقالات والنصائح
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full px-3 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-sm"
            />
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm">
              اشترك الآن
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Back to Blog */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <Link
          href="/blog"
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          العودة إلى المدونة
        </Link>
      </div>

      {/* Related Posts */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">مقالات ذات صلة</h3>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    {post.featured_image ? (
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                        {post.title.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.created_at).toLocaleDateString('ar-EG')}</span>
                      <Eye className="w-3 h-3 mr-1 ml-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-3">اشترك في النشرة الإخبارية</h3>
        <p className="text-blue-100 text-sm mb-4">
          احصل على أحدث المقالات والنصائح
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="w-full px-3 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-sm"
          />
          <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm">
            اشترك الآن
          </button>
        </div>
      </div>
    </div>
  )
}