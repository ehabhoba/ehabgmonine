import { Metadata } from 'next'
import { supabase } from '@/lib/supabase'
import BlogList from '@/components/blog/blog-list'
import BlogHero from '@/components/blog/blog-hero'
import BlogCategories from '@/components/blog/blog-categories'
import { organizationSchema } from '@/components/seo/structured-data'
import StructuredData from '@/components/seo/structured-data'

export const metadata: Metadata = {
  title: "المدونة - نصائح وخبرات في التسويق الرقمي | ehabgm",
  description: "مدونة ehabgm المتخصصة في التسويق الرقمي، تصميم المواقع، إدارة السوشيال ميديا، وتحسين محركات البحث. نصائح وخبرات من خبراء التسويق الرقمي في مصر.",
  keywords: "مدونة تسويق رقمي، نصائح تسويق، تصميم مواقع، سوشيال ميديا، SEO، إعلانات ممولة، ehabgm، إيهاب محمد",
  openGraph: {
    title: "مدونة ehabgm - نصائح وخبرات في التسويق الرقمي",
    description: "مدونة متخصصة في التسويق الرقمي وتطوير المواقع من خبراء ehabgm",
    url: "https://ehabgm.online/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://ehabgm.online/blog",
  },
}

async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(12)

    if (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

async function getBlogCategories() {
  try {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name', { ascending: true })

    if (error) {
      console.error('Error fetching categories:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getBlogCategories()
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="organization" data={organizationSchema} />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogList posts={posts} />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}