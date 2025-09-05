'use client'

import { useState, useEffect } from 'react'
import { auth, AuthUser } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, User, Settings } from 'lucide-react'

export default function AuthButton() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // الحصول على المستخدم الحالي
    auth.getCurrentUser().then(({ user }) => {
      setUser(user)
      setLoading(false)
    })

    // مراقبة تغييرات المصادقة
    const { data: { subscription } } = auth.onAuthStateChange((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignIn = async () => {
    setLoading(true)
    const { error } = await auth.signInWithGoogle()
    if (error) {
      console.error('خطأ في تسجيل الدخول:', error)
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    setLoading(true)
    const { error } = await auth.signOut()
    if (error) {
      console.error('خطأ في تسجيل الخروج:', error)
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <Button disabled className="bg-blue-600 hover:bg-blue-700">
        جاري التحميل...
      </Button>
    )
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name || 'المستخدم'} />
              <AvatarFallback>
                {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'م'}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.user_metadata?.full_name || 'المستخدم'}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>الملف الشخصي</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>الإعدادات</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>تسجيل الخروج</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button onClick={handleSignIn} className="bg-blue-600 hover:bg-blue-700">
      تسجيل الدخول بـ Google
    </Button>
  )
}