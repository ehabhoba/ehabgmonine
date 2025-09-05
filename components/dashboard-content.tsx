'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, LogOut, Settings, Package, MessageSquare, BarChart3 } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'

interface DashboardContentProps {
  user: SupabaseUser
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    router.push('/')
  }

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  const fullName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'مستخدم'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback>{getUserInitials(fullName)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  أهلاً بك، {fullName}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
            </div>
            <Button
              onClick={handleSignOut}
              disabled={loading}
              variant="outline"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <LogOut className="h-4 w-4" />
              <span>تسجيل الخروج</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2 rtl:space-x-reverse">
                <BarChart3 className="h-4 w-4" />
                <span>نظرة عامة</span>
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center space-x-2 rtl:space-x-reverse">
                <Package className="h-4 w-4" />
                <span>خدماتي</span>
              </TabsTrigger>
              <TabsTrigger value="messages" className="flex items-center space-x-2 rtl:space-x-reverse">
                <MessageSquare className="h-4 w-4" />
                <span>الرسائل</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center space-x-2 rtl:space-x-reverse">
                <Settings className="h-4 w-4" />
                <span>الإعدادات</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">المشاريع النشطة</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">+2 من الشهر الماضي</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">الرسائل الجديدة</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+4 من الأمس</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">المهام المكتملة</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+8 من الأسبوع الماضي</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">معدل الرضا</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98%</div>
                    <p className="text-xs text-muted-foreground">+2% من الشهر الماضي</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>المشاريع الحديثة</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="space-y-4">
                      {[
                        { name: 'تصميم هوية بصرية', status: 'قيد التنفيذ', date: '2024-01-15' },
                        { name: 'حملة إعلانية فيسبوك', status: 'مكتمل', date: '2024-01-10' },
                        { name: 'تطوير موقع إلكتروني', status: 'قيد المراجعة', date: '2024-01-08' },
                      ].map((project, index) => (
                        <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{project.name}</p>
                            <p className="text-sm text-muted-foreground">{project.date}</p>
                          </div>
                          <div className="mr-auto">
                            <Badge 
                              variant={
                                project.status === 'مكتمل' ? 'default' :
                                project.status === 'قيد التنفيذ' ? 'secondary' : 'outline'
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>إحصائيات سريعة</CardTitle>
                    <CardDescription>نظرة على أداء حسابك هذا الشهر</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="w-9 h-9 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Package className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">خدمات جديدة</p>
                          <p className="text-xs text-muted-foreground">5 خدمات تم إضافتها</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="w-9 h-9 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">استشارات</p>
                          <p className="text-xs text-muted-foreground">15 استشارة مجانية</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>خدماتي المفضلة</CardTitle>
                  <CardDescription>الخدمات التي طلبتها أو تتابعها</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">لم تقم بطلب أي خدمات بعد</p>
                    <Button className="mt-4" onClick={() => router.push('/')}>
                      تصفح الخدمات
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>الرسائل</CardTitle>
                  <CardDescription>رسائلك مع فريق الدعم</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">لا توجد رسائل جديدة</p>
                    <Button className="mt-4" onClick={() => router.push('/contact')}>
                      إرسال رسالة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الحساب</CardTitle>
                  <CardDescription>إدارة معلومات حسابك وتفضيلاتك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">الاسم الكامل</label>
                        <p className="text-sm text-muted-foreground mt-1">{fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">البريد الإلكتروني</label>
                        <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">رقم الهاتف</label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {user.user_metadata?.phone || 'غير محدد'}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">تاريخ التسجيل</label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(user.created_at).toLocaleDateString('ar-EG')}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline">تحديث المعلومات</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}