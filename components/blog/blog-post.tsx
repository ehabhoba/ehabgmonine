'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Share2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string | null
  slug: string
  featured_image: string | null
  created_at: string
  published_at: string | null
  author_id: string
}

interface BlogPostProps {
  slug: string
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  const supabase = createClient()

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      
      // Fetch the specific post
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (postError) throw postError

      setPost(postData)

      // Fetch related posts
      const { data: relatedData, error: relatedError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .neq('id', postData?.id)
        .order('published_at', { ascending: false })
        .limit(3)

      if (!relatedError) {
        setRelatedPosts(relatedData || [])
      }
    } catch (error) {
      console.error('Error fetching blog post:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt || '',
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('تم نسخ الرابط!')
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">المقال غير موجود</h1>
        <p className="text-gray-600 mb-6">المقال الذي تبحث عنه غير موجود أو تم حذفه</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة للمدونة
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.published_at || post.created_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>ehabgm</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              مشاركة
            </Button>
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-shadow duration-300">
                  {relatedPost.featured_image && (
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {relatedPost.excerpt && (
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {relatedPost.excerpt}
                      </p>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        اقرأ المزيد
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}