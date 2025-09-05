'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, User, Eye, Share2, Bookmark } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  featured_image?: string
  created_at: string
  updated_at: string
  views: number
  tags?: string[]
  author_id: string
}

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert('تم نسخ الرابط إلى الحافظة')
    }
  }

  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(post.created_at).toLocaleDateString('ar-EG')}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>5 دقائق قراءة</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>إيهاب محمد</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{post.views} مشاهدة</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleShare}
              className="flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300"
            >
              <Share2 className="w-4 h-4 mr-2" />
              مشاركة
            </button>
            <button className="flex items-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300">
              <Bookmark className="w-4 h-4 mr-2" />
              حفظ
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}