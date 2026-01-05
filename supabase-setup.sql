-- Script SQL para criar a tabela de contatos no Supabase
-- Execute este script no SQL Editor do seu projeto Supabase

-- Criar tabela de contatos
CREATE TABLE IF NOT EXISTS contatos (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  assunto TEXT NOT NULL,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (qualquer pessoa pode enviar formulário)
CREATE POLICY "Permitir inserção pública" ON contatos
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Política para permitir leitura pública (para área administrativa)
-- ATENÇÃO: Por segurança, considere adicionar autenticação no futuro
CREATE POLICY "Permitir leitura pública" ON contatos
  FOR SELECT
  TO public
  USING (true);

-- Política para permitir exclusão pública (para área administrativa)
-- ATENÇÃO: Por segurança, considere adicionar autenticação no futuro
CREATE POLICY "Permitir exclusão pública" ON contatos
  FOR DELETE
  TO public
  USING (true);
