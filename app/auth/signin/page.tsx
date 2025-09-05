import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import SignInForm from './SignInForm'

export const metadata: Metadata = {
  title: 'تسجيل الدخول - ehabgm',
  description: 'تسجيل الدخول إلى لوحة إدارة ehabgm',
  robots: 'noindex, nofollow'
}

export default async function SignInPage() {
  const supabase = createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    redirect('/admin')
  }

  return <SignInForm />
}