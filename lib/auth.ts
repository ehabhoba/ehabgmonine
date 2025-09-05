import { supabase } from './supabase'
import { User } from '@supabase/supabase-js'

export interface AuthUser extends User {
  user_metadata: {
    full_name?: string
    avatar_url?: string
  }
}

export const auth = {
  // تسجيل الدخول بـ Google
  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    return { data, error }
  },

  // تسجيل الخروج
  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // الحصول على المستخدم الحالي
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { user: user as AuthUser | null, error }
  },

  // مراقبة حالة المصادقة
  onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(session?.user as AuthUser | null)
    })
  },

  // تحديث ملف المستخدم
  async updateProfile(updates: {
    full_name?: string
    avatar_url?: string
  }) {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    })
    return { data, error }
  }
}