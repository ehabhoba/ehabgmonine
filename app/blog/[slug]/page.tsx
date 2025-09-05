import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import BlogPost from '@/components/blog/blog-post'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const supabase = createClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, featured_image')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) {
    return {
      title: 'المقال غير موجود - ehabgm',
      description: 'المقال الذي تبحث عنه غير موجود'
    }
  }

  return {
    title: `${post.title} - ehabgm | مدونة التسويق الرقمي`,
    description: post.excerpt || 'مقال من مدونة ehabgm للتسويق الرقمي',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'مقال من مدونة ehabgm للتسويق الرقمي',
      images: post.featured_image ? [post.featured_image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const supabase = createClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl py-24 px-4">
        <BlogPost slug={params.slug} />
      </div>
    </div>
  )
}