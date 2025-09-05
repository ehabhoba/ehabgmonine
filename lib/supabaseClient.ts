import { createClient } from "@supabase/supabase-js"

// Single instance pattern for Supabase client in the browser
// The values are injected via environment variables at build time.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are missing")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)