import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcnsubwxwynckntemfqx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnN1Ynd4d3luY2tudGVtZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTQyNDUsImV4cCI6MjA2OTU3MDI0NX0.RBiOLn9cJkf_JOyLs54NHRmllfPTZM1UAFBanZkBYk8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  featured_image?: string
  author_id: string
  published: boolean
  created_at: string
  updated_at: string
  tags?: string[]
  views: number
}

export interface Service {
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

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  rating: number
  avatar_url?: string
  featured: boolean
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied'
  created_at: string
}