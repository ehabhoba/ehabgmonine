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
  BarChart3, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react'

export default function DashboardPage() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalVisitors: 0,
    totalMessages: 0,
    totalBlogPosts: 0,
    totalServices: 0
  })
  const [recentMessages, setRecentMessages] = useState<any[]>([])
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
      loadDashboardData()
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

  const loadDashboardData = async () => {
    try {
      // تحميل الإحصائيات
      const [messagesResult, blogResult, servicesResult] = await Promise.all([
        supabase.from('contact_messages').select('*'),
        supabase.from('blog_posts').select('*'),
        supabase.from('services').select('*')
      ])

      setStats({
        totalVisitors: 1250, // يمكن ربطه بـ Google Analytics
        totalMessages: messagesResult.data?.length || 0,
        totalBlogPosts: blogResult.data?.length || 0,
        totalServices: servicesResult.data?.length || 0
      })

      // تحميل الرسائل الأخيرة
      const { data: messages } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      setRecentMessages(messages || [])
    } catch (error) {
      console.error('خطأ في تحميل البيانات:', error)
    }
  }

  const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
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
              <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
              <p className="text-sm text-gray-500">مرحباً، {user.user_metadata?.full_name || user.email}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الزوار</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+20.1% من الشهر الماضي</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الرسائل</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMessages}</div>
              <p className="text-xs text-muted-foreground">+5 رسائل جديدة اليوم</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">مقالات المدونة</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
              <p className="text-xs text-muted-foreground">+2 مقال جديد هذا الأسبوع</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الخدمات</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalServices}</div>
              <p className="text-xs text-muted-foreground">جميع الخدمات متاحة</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="messages">الرسائل</TabsTrigger>
            <TabsTrigger value="blog">المدونة</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Messages */}
              <Card>
                <CardHeader>
                  <CardTitle>الرسائل الأخيرة</CardTitle>
                  <CardDescription>آخر 5 رسائل وردت من العملاء</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message: any) => (
                      <div key={message.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{message.name}</p>
                          <p className="text-sm text-muted-foreground">{message.subject}</p>
                        </div>
                        <Badge variant={message.status === 'new' ? 'default' : 'secondary'}>
                          {message.status === 'new' ? 'جديد' : 'مقروء'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>الإجراءات السريعة</CardTitle>
                  <CardDescription>أدوات سريعة لإدارة الموقع</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة مقال جديد
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Edit className="w-4 h-4 mr-2" />
                      تعديل الخدمات
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      إعدادات الموقع
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الرسائل</CardTitle>
                <CardDescription>عرض وإدارة جميع الرسائل الواردة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message: any) => (
                    <div key={message.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{message.name}</h3>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Badge variant={message.status === 'new' ? 'default' : 'secondary'}>
                            {message.status === 'new' ? 'جديد' : 'مقروء'}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(message.created_at).toLocaleDateString('ar-EG')}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{message.subject}</p>
                      <p className="text-sm">{message.message}</p>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mt-3">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          عرض
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          رد
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-1" />
                          حذف
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>إدارة المدونة</CardTitle>
                    <CardDescription>إدارة مقالات المدونة والمحتوى</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    مقال جديد
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">لا توجد مقالات بعد. ابدأ بإنشاء مقالك الأول!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>إدارة الخدمات</CardTitle>
                    <CardDescription>إدارة خدمات الشركة والأسعار</CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    خدمة جديدة
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">إدارة الخدمات قريباً...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
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
    </div>
  )
}