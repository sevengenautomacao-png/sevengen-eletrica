'use client'

// Força renderização dinâmica (não faz prerender estático)
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { getSupabaseClient } from '@/lib/supabase'
import { Mail, Phone, Calendar, MessageSquare, Trash2, RefreshCw } from 'lucide-react'

interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
  created_at: string
}

export default function Admin() {
  const [contatos, setContatos] = useState<Contato[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchContatos = async () => {
    try {
      setLoading(true)
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from('contatos')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setContatos(data || [])
      setError(null)
    } catch (err: any) {
      setError(err.message || 'Erro ao carregar contatos')
      console.error('Erro:', err)
    } finally {
      setLoading(false)
    }
  }

  const deleteContato = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este contato?')) return

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase
        .from('contatos')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Atualizar lista
      setContatos(contatos.filter(c => c.id !== id))
    } catch (err: any) {
      alert('Erro ao excluir contato: ' + err.message)
    }
  }

  useEffect(() => {
    fetchContatos()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Área Administrativa</h1>
              <p className="text-gray-600 mt-2">Gerenciamento de contatos recebidos</p>
            </div>
            <button
              onClick={fetchContatos}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center space-x-2"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-primary-600">{contatos.length}</div>
            <div className="text-gray-600 mt-2">Total de Contatos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-primary-600">
              {contatos.filter(c => c.assunto === 'orcamento').length}
            </div>
            <div className="text-gray-600 mt-2">Solicitações de Orçamento</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-primary-600">
              {contatos.filter(c => {
                const date = new Date(c.created_at)
                const today = new Date()
                return date.toDateString() === today.toDateString()
              }).length}
            </div>
            <div className="text-gray-600 mt-2">Contatos Hoje</div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Contatos List */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="text-gray-600">Carregando contatos...</div>
          </div>
        ) : contatos.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <div className="text-gray-600">Nenhum contato encontrado</div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Assunto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Mensagem
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contatos.map((contato) => (
                    <tr key={contato.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{formatDate(contato.created_at)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{contato.nome}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-400" />
                            <span>{contato.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-400" />
                            <span>{contato.telefone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800">
                          {contato.assunto === 'orcamento' && 'Orçamento'}
                          {contato.assunto === 'duvida' && 'Dúvida'}
                          {contato.assunto === 'suporte' && 'Suporte'}
                          {contato.assunto === 'outro' && 'Outro'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          {contato.mensagem}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => deleteContato(contato.id)}
                          className="text-red-600 hover:text-red-800 transition flex items-center space-x-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Excluir</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
