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

  // Durante o build (SSR), retorna um cliente mock que não vai ser usado
  // Isso evita erros durante o prerender
  if (typeof window === 'undefined') {
    // Retorna um cliente mock apenas para evitar erro durante build
    // Este cliente nunca será usado, pois só é chamado no cliente
    const mockUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const mockKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
    return createClient(mockUrl, mockKey)
  }

  // Só inicializa no cliente (browser)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}
