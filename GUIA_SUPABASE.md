# 📘 Guia Completo: Configuração do Supabase

Este guia vai te ajudar passo a passo a configurar o Supabase para o site da Sevengen.

---

## 🎯 Passo 1: Criar Conta e Projeto no Supabase

### 1.1. Acessar o Supabase
1. Acesse o site: **https://supabase.com**
2. Clique em **"Start your project"** ou **"Sign in"** se já tiver conta
3. Faça login com GitHub, Google ou crie uma conta com email

### 1.2. Criar Novo Projeto
1. Após fazer login, clique no botão **"New Project"** (ou "Novo Projeto")
2. Preencha os dados:
   - **Name**: `sevengen-eletrica` (ou qualquer nome que preferir)
   - **Database Password**: Crie uma senha forte e **ANOTE ELA** (você vai precisar depois)
   - **Region**: Escolha a região mais próxima (ex: South America - São Paulo)
3. Clique em **"Create new project"**
4. ⏳ Aguarde alguns minutos enquanto o projeto é criado (pode levar 2-3 minutos)

---

## 🗄️ Passo 2: Criar a Tabela no Banco de Dados

### 2.1. Acessar o SQL Editor
1. No menu lateral esquerdo, clique em **"SQL Editor"** (ou "Editor SQL")
2. Você verá uma tela com um editor de código

### 2.2. Executar o Script SQL
1. Abra o arquivo `supabase-setup.sql` que está na pasta do projeto
2. **Copie TODO o conteúdo** do arquivo
3. Cole no editor SQL do Supabase
4. Clique no botão **"Run"** (ou pressione `Ctrl + Enter`)
5. ✅ Você deve ver uma mensagem de sucesso: "Success. No rows returned"

### 2.3. Verificar se a Tabela foi Criada
1. No menu lateral, clique em **"Table Editor"** (ou "Editor de Tabelas")
2. Você deve ver a tabela **"contatos"** na lista
3. Clique nela para ver a estrutura (colunas: id, nome, email, telefone, assunto, mensagem, created_at)

---

## 🔑 Passo 3: Obter as Credenciais (URL e Chave)

### 3.1. Acessar as Configurações da API
1. No menu lateral, clique em **"Settings"** (Configurações) - ícone de engrenagem ⚙️
2. Clique em **"API"** no submenu

### 3.2. Copiar as Credenciais
Você verá duas informações importantes:

#### **Project URL** (URL do Projeto)
- Procure por **"Project URL"** ou **"URL do Projeto"**
- Exemplo: `https://xxxxxxxxxxxxx.supabase.co`
- **Copie essa URL completa**

#### **anon public key** (Chave Anônima)
- Procure por **"Project API keys"** (Chaves da API do Projeto)
- Encontre a chave chamada **"anon"** ou **"anon public"**
- É uma string longa que começa com `eyJ...`
- **Copie essa chave completa** (clique no ícone de copiar ao lado)

⚠️ **IMPORTANTE**: Use a chave **"anon"** (não a "service_role" que é secreta!)

---

## 📝 Passo 4: Configurar o Arquivo .env.local

### 4.1. Criar o Arquivo
1. Na raiz do projeto (pasta `sevensite`), crie um arquivo chamado `.env.local`
2. Se estiver usando VS Code ou outro editor, você pode criar diretamente

### 4.2. Adicionar as Variáveis
Abra o arquivo `.env.local` e cole o seguinte conteúdo, substituindo pelos seus valores:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

**Exemplo real** (substitua pelos seus valores):
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODk2NzI5MCwiZXhwIjoxOTU0NTQzMjkwfQ.exemplo123456789
```

### 4.3. Salvar o Arquivo
- Salve o arquivo (Ctrl + S)
- ⚠️ **NUNCA** compartilhe esse arquivo ou faça commit dele no Git (ele já está no .gitignore)

---

## ✅ Passo 5: Testar a Configuração

### 5.1. Instalar Dependências (se ainda não fez)
```bash
npm install
```

### 5.2. Iniciar o Servidor
```bash
npm run dev
```

### 5.3. Testar o Formulário
1. Acesse: **http://localhost:3000/contato**
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Se aparecer "Mensagem enviada com sucesso!", está funcionando! ✅

### 5.4. Verificar no Supabase
1. Volte ao Supabase
2. Vá em **"Table Editor"** > **"contatos"**
3. Você deve ver o registro que acabou de criar! 🎉

---

## 🆘 Solução de Problemas

### Erro: "Missing Supabase environment variables"
- **Causa**: O arquivo `.env.local` não foi criado ou está vazio
- **Solução**: Crie o arquivo `.env.local` na raiz do projeto com as variáveis corretas

### Erro: "new row violates row-level security policy"
- **Causa**: As políticas de segurança não foram criadas corretamente
- **Solução**: Execute novamente o script SQL completo no SQL Editor

### Erro: "Invalid API key"
- **Causa**: Você copiou a chave errada ou ela está incompleta
- **Solução**: Verifique se copiou a chave **"anon"** completa (não a "service_role")

### A tabela não aparece
- **Causa**: O script SQL não foi executado
- **Solução**: Execute o script `supabase-setup.sql` novamente no SQL Editor

---

## 📸 Onde Encontrar Cada Coisa no Supabase

```
Supabase Dashboard
├── 🏠 Home (página inicial)
├── 📊 Table Editor (ver tabelas)
├── 🔍 SQL Editor (executar scripts SQL) ← Use aqui para criar a tabela
├── ⚙️ Settings
│   ├── API ← Use aqui para pegar URL e chave
│   ├── Database
│   └── ...
└── ...
```

---

## ✨ Pronto!

Agora seu site está configurado e pronto para receber mensagens de contato que serão salvas no Supabase!

Se tiver alguma dúvida, consulte a documentação oficial: https://supabase.com/docs
