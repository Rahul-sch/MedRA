import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseClient: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
} else if (process.env.NODE_ENV !== 'production') {
  console.warn('Supabase environment variables are not configured.')
}

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabaseClient) {
    throw new Error('Supabase environment variables are not configured.')
  }
  return supabaseClient
}
