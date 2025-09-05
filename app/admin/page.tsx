import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase-server'
import AdminDashboard from './AdminDashboard'

export const metadata: Metadata = {
  title: 'لوحة الإدارة - ehabgm',
  description: 'لوحة إدارة المحتوى لموقع ehabgm',
  robots: 'noindex, nofollow'
}

export default async function AdminPage() {
  const supabase = createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/auth/signin')
  }

  return <AdminDashboard />
}