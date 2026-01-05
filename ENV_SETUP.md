# Configuração de Variáveis de Ambiente

Para que o site funcione corretamente, você precisa configurar as variáveis de ambiente do Supabase.

## Passos:

1. Crie um arquivo `.env.local` na raiz do projeto

2. Adicione as seguintes variáveis:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

## Como obter as credenciais do Supabase:

1. Acesse [supabase.com](https://supabase.com) e faça login
2. Selecione seu projeto (ou crie um novo)
3. Vá em **Settings** > **API**
4. Copie:
   - **Project URL** → use como `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → use como `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Importante:

- O arquivo `.env.local` está no `.gitignore` e não será commitado
- Nunca compartilhe suas chaves do Supabase publicamente
- Use a chave `anon` para o frontend (ela já tem as políticas de segurança aplicadas)
