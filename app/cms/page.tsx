'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth, AuthUser } from '@/lib/auth'
import { supabase } from '@/lib/supabase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Users, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Save,
  X
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  featured_image?: string
  published: boolean
  created_at: string
  updated_at: string
  tags?: string[]
  views: number
}

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: number
  category: string
  featured: boolean
  created_at: string
  updated_at: string
}

export default function CMSPage() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('posts')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const router = useRouter()

  useEffect(() => {
    // التحقق من تسجيل الدخول
    auth.getCurrentUser().then(({ user, error }) => {
      if (error || !user) {
        router.push('/')
        return
      }
      setUser(user)
      setLoading(false)
      loadData()
    })

    // مراقبة تغييرات المصادقة
    const { data: { subscription } } = auth.onAuthStateChange((user) => {
      if (!user) {
        router.push('/')
        return
      }
      setUser(user)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [router])

  const loadData = async () => {
    try {
      // تحميل المقالات
      const { data: postsData } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      setPosts(postsData || [])

      // تحميل الخدمات
      const { data: servicesData } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false })

      setServices(servicesData || [])
    } catch (error) {
      console.error('خطأ في تحميل البيانات:', error)
    }
  }

  const handleCreatePost = () => {
    const newPost: BlogPost = {
      id: '',
      title: '',
      content: '',
      excerpt: '',
      slug: '',
      published: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: [],
      views: 0
    }
    setEditingPost(newPost)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
  }

  const handleSavePost = async () => {
    if (!editingPost) return

    try {
      if (editingPost.id) {
        // تحديث مقال موجود
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: editingPost.title,
            content: editingPost.content,
            excerpt: editingPost.excerpt,
            slug: editingPost.slug,
            published: editingPost.published,
            updated_at: new Date().toISOString(),
            tags: editingPost.tags
          })
          .eq('id', editingPost.id)

        if (error) throw error
      } else {
        // إنشاء مقال جديد
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            title: editingPost.title,
            content: editingPost.content,
            excerpt: editingPost.excerpt,
            slug: editingPost.slug,
            published: editingPost.published,
            author_id: user?.id,
            tags: editingPost.tags
          })

        if (error) throw error
      }

      setEditingPost(null)
      loadData()
    } catch (error) {
      console.error('خطأ في حفظ المقال:', error)
    }
  }

  const handleDeletePost = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المقال؟')) return

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

      if (error) throw error
      loadData()
    } catch (error) {
      console.error('خطأ في حذف المقال:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h1>
              <p className="text-sm text-gray-500">إدارة المقالات والخدمات</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="posts">المقالات</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">إدارة المقالات</h2>
              <Button onClick={handleCreatePost}>
                <Plus className="w-4 h-4 mr-2" />
                مقال جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <Badge variant={post.published ? 'default' : 'secondary'}>
                        {post.published ? 'منشور' : 'مسودة'}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{new Date(post.created_at).toLocaleDateString('ar-EG')}</span>
                      <span>{post.views} مشاهدة</span>
                    </div>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditPost(post)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        تعديل
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        حذف
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">إدارة الخدمات</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                خدمة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant={service.featured ? 'default' : 'secondary'}>
                        {service.featured ? 'مميز' : 'عادي'}
                      </Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">الفئة:</span> {service.category}
                    </div>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        تعديل
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4 mr-1" />
                        حذف
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات الموقع</CardTitle>
                <CardDescription>تخصيص إعدادات الموقع والمظهر</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">الإعدادات قريباً...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Post Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  {editingPost.id ? 'تعديل المقال' : 'مقال جديد'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingPost(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عنوان المقال
                </label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل عنوان المقال"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ملخص المقال
                </label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="أدخل ملخص المقال"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رابط المقال (Slug)
                </label>
                <input
                  type="text"
                  value={editingPost.slug}
                  onChange={(e) => setEditingPost({...editingPost, slug: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="article-slug"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  محتوى المقال
                </label>
                <textarea
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={10}
                  placeholder="أدخل محتوى المقال"
                />
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingPost.published}
                    onChange={(e) => setEditingPost({...editingPost, published: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">نشر المقال</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t flex justify-end space-x-4 rtl:space-x-reverse">
              <Button
                variant="outline"
                onClick={() => setEditingPost(null)}
              >
                إلغاء
              </Button>
              <Button onClick={handleSavePost}>
                <Save className="w-4 h-4 mr-2" />
                حفظ
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}