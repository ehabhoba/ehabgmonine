import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcnsubwxwynckntemfqx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnN1Ynd4d3luY2tudGVtZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTQyNDUsImV4cCI6MjA2OTU3MDI0NX0.RBiOLn9cJkf_JOyLs54NHRmllfPTZM1UAFBanZkBYk8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  price: number
  category: string
  features: string[]
  created_at: string
  updated_at: string
}

export interface ContactForm {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  service_type?: string
  status: 'pending' | 'contacted' | 'completed'
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  company?: string
  rating: number
  comment: string
  avatar_url?: string
  service_type?: string
  is_featured: boolean
  created_at: string
}