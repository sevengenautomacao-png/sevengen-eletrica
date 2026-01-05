# ⚡ Início Rápido - Supabase

## 🎯 Resumo em 4 Passos

### 1️⃣ Criar Projeto
```
supabase.com → Login → "New Project" → Preencha → "Create"
```

### 2️⃣ Criar Tabela
```
Menu lateral → "SQL Editor" → Cole o conteúdo de supabase-setup.sql → "Run"
```

### 3️⃣ Pegar Credenciais
```
Menu lateral → "Settings" (⚙️) → "API" → Copiar:
- Project URL
- anon public key
```

### 4️⃣ Configurar .env.local
```
Criar arquivo .env.local na raiz do projeto:
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
```

---

## 📋 Checklist

- [ ] Conta criada no Supabase
- [ ] Projeto criado no Supabase
- [ ] Script SQL executado (tabela criada)
- [ ] URL do projeto copiada
- [ ] Chave anônima copiada
- [ ] Arquivo .env.local criado
- [ ] Credenciais adicionadas no .env.local
- [ ] Testado o formulário de contato

---

## 🔍 Onde Está Cada Coisa?

### No Supabase Dashboard:

**SQL Editor** (para criar tabela):
- Menu lateral esquerdo
- Ícone de código `</>` ou texto "SQL Editor"
- Cole o script e clique em "Run"

**Settings > API** (para pegar credenciais):
- Menu lateral esquerdo
- Ícone de engrenagem ⚙️ "Settings"
- Clique em "API" no submenu
- Procure por "Project URL" e "anon public" key

**Table Editor** (para ver os dados):
- Menu lateral esquerdo
- Ícone de tabela ou "Table Editor"
- Clique em "contatos" para ver os registros

---

## 💡 Dica Rápida

Se você já tem o Supabase aberto:
1. Vá direto no **SQL Editor** (menu lateral)
2. Cole o conteúdo de `supabase-setup.sql`
3. Clique em **Run**
4. Depois vá em **Settings > API** e copie as credenciais

Pronto! 🎉
