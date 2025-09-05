import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcnsubwxwynckntemfqx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnN1Ynd4d3luY2tudGVtZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTQyNDUsImV4cCI6MjA2OTU3MDI0NX0.RBiOLn9cJkf_JOyLs54NHRmllfPTZM1UAFBanZkBYk8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string | null
          slug: string
          featured_image: string | null
          author_id: string
          published: boolean
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt?: string | null
          slug: string
          featured_image?: string | null
          author_id: string
          published?: boolean
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string | null
          slug?: string
          featured_image?: string | null
          author_id?: string
          published?: boolean
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      testimonials: {
        Row: {
          id: string
          client_name: string
          client_company: string | null
          client_image: string | null
          testimonial: string
          rating: number
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_name: string
          client_company?: string | null
          client_image?: string | null
          testimonial: string
          rating: number
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          client_company?: string | null
          client_image?: string | null
          testimonial?: string
          rating?: number
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      portfolio_items: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          category: string
          client_name: string | null
          project_url: string | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          category: string
          client_name?: string | null
          project_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          category?: string
          client_name?: string | null
          project_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}