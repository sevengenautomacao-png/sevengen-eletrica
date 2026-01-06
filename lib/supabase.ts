import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Variável para cache do cliente
let supabaseClient: SupabaseClient | null = null

// Função para obter o cliente Supabase de forma segura
// Só inicializa quando chamada no lado do cliente (browser)
export function getSupabaseClient(): SupabaseClient {
  // Se já existe um cliente, retorna ele
  if (supabaseClient) {
    return supabaseClient
  }

  // Só inicializa no cliente (browser)
  if (typeof window === 'undefined') {
    throw new Error('Supabase client can only be initialized on the client side')
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}
