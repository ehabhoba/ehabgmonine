import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import BlogPostContent from '@/components/blog/blog-post-content'
import BlogPostHeader from '@/components/blog/blog-post-header'
import RelatedPosts from '@/components/blog/related-posts'
import { articleSchema } from '@/components/seo/structured-data'
import StructuredData from '@/components/seo/structured-data'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getBlogPost(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error || !data) {
      return null
    }

    return data
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

async function getRelatedPosts(category: string, currentId: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .neq('id', currentId)
      .limit(3)

    if (error) {
      console.error('Error fetching related posts:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'المقال غير موجود | ehabgm',
      description: 'المقال المطلوب غير موجود أو تم حذفه'
    }
  }

  return {
    title: `${post.title} | ehabgm`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'تسويق رقمي، تصميم مواقع، سوشيال ميديا',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://ehabgm.online/blog/${post.slug}`,
      type: 'article',
      images: post.featured_image ? [post.featured_image] : undefined,
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
      authors: ['إيهاب محمد'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : undefined,
    },
    alternates: {
      canonical: `https://ehabgm.online/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.category || '', post.id)

  // زيادة عدد المشاهدات
  try {
    await supabase
      .from('blog_posts')
      .update({ views: post.views + 1 })
      .eq('id', post.id)
  } catch (error) {
    console.error('Error updating views:', error)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="article" data={articleSchema(post)} />
      
      <BlogPostHeader post={post} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPostContent post={post} />
          </div>
          <div className="lg:col-span-1">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </div>
      </div>
    </div>
  )
}