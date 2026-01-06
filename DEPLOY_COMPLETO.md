# 🚀 Guia Completo: GitHub + Netlify

Este guia vai te ajudar a subir o projeto para o GitHub e fazer deploy no Netlify.

---

## ✅ Status Atual

- ✅ Repositório Git inicializado
- ✅ Repositório conectado ao GitHub: `https://github.com/sevengenautomacao-png/sevengen-eletrica.git`
- ✅ Arquivo `netlify.toml` criado e configurado
- ✅ Alterações commitadas localmente
- ⏳ Falta fazer push para o GitHub

---

## 📤 PASSO 1: Enviar Código para o GitHub

### Opção A: Via Terminal (Recomendado)

1. **Abra o terminal** na pasta do projeto

2. **Faça o push** (pode pedir autenticação):
   ```bash
   cd "/home/junior/Área de trabalho/sevensite"
   git push origin main
   ```

3. **Se pedir autenticação:**
   - **Username**: `sevengenautomacao-png`
   - **Password**: Use um **Personal Access Token** (não sua senha normal)
   
   **Como criar o token:**
   - GitHub → Settings (perfil) → Developer settings
   - Personal access tokens → Tokens (classic)
   - Generate new token (classic)
   - Dê um nome (ex: "Netlify Deploy")
   - Marque a opção **"repo"**
   - Generate token
   - **COPIE O TOKEN** e use como senha

### Opção B: Via GitHub Desktop

1. Baixe o GitHub Desktop: https://desktop.github.com
2. Faça login com sua conta
3. O repositório deve aparecer automaticamente
4. Clique em "Push origin"

### Opção C: Via VS Code

1. Abra o projeto no VS Code
2. Vá na aba "Source Control" (Ctrl+Shift+G)
3. Clique nos "..." → "Push"

---

## 🌐 PASSO 2: Deploy no Netlify

### 2.1. Acessar o Netlify

1. Acesse **https://netlify.com**
2. Faça login (pode usar GitHub para facilitar)
3. Clique em **"Add new site"** → **"Import an existing project"**

### 2.2. Conectar com GitHub

1. Escolha **"GitHub"** como provedor
2. Autorize o Netlify (se necessário)
3. Procure e selecione: **`sevengenautomacao-png/sevengen-eletrica`**
4. Clique em **"Import"**

### 2.3. Configurar Build

O Netlify deve detectar automaticamente as configurações do `netlify.toml`:

- ✅ **Build command**: `npm run build` (já configurado)
- ✅ **Publish directory**: `.next` (já configurado)
- ✅ **Base directory**: (deixe vazio)

**Não precisa mudar nada!** O arquivo `netlify.toml` já está configurado.

### 2.4. ⚠️ IMPORTANTE: Adicionar Variáveis de Ambiente

**CRÍTICO**: Sem isso, o Supabase não vai funcionar!

1. Na seção **"Environment variables"**, clique em **"Add variable"**

2. **Adicione a primeira variável:**
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Cole a URL do seu projeto Supabase
     - Exemplo: `https://xxxxxxxxxxxxx.supabase.co`
   - Clique em **"Add variable"**

3. **Adicione a segunda variável:**
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Cole a chave anônima do Supabase
     - Exemplo: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Clique em **"Add variable"**

4. ✅ Verifique se ambas aparecem na lista antes de fazer deploy

**Onde encontrar essas informações:**
- Acesse seu projeto no Supabase
- Vá em **Settings** (⚙️) → **API**
- Copie **Project URL** e **anon public** key

### 2.5. Fazer o Deploy

1. Clique no botão **"Deploy site"**
2. ⏳ Aguarde o build (2-5 minutos na primeira vez)
3. Você verá o progresso em tempo real

### 2.6. Testar o Site

1. Quando terminar, você verá uma URL tipo: `https://random-name-123.netlify.app`
2. Clique na URL para abrir o site
3. ✅ Teste o formulário de contato
4. ✅ Verifique se a área administrativa funciona

---

## 🔄 Atualizações Futuras

Sempre que você fizer alterações no código:

1. **Commit e push no GitHub:**
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

2. **O Netlify detecta automaticamente** e faz um novo deploy
3. Você pode acompanhar no dashboard do Netlify

---

## 🎯 Checklist Completo

### GitHub:
- [ ] Código enviado para o GitHub (`git push`)
- [ ] Repositório visível em: https://github.com/sevengenautomacao-png/sevengen-eletrica

### Netlify:
- [ ] Conta criada no Netlify
- [ ] Site conectado ao repositório GitHub
- [ ] Variáveis de ambiente configuradas:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Deploy executado com sucesso
- [ ] Site acessível pela URL do Netlify
- [ ] Formulário de contato testado e funcionando
- [ ] Área administrativa testada

---

## 🐛 Problemas Comuns

### Erro ao fazer push: "could not read Username"
**Solução**: Use Personal Access Token ao invés de senha

### Build falha no Netlify
**Solução**: Verifique se as variáveis de ambiente estão configuradas

### Formulário não funciona no Netlify
**Solução**: 
1. Verifique se as variáveis de ambiente estão corretas
2. Verifique se as políticas RLS do Supabase estão configuradas
3. Faça um novo deploy após corrigir

### Site não atualiza após push
**Solução**: O deploy automático pode levar alguns minutos. Verifique o dashboard do Netlify.

---

## 📚 Documentação Adicional

- **Guia GitHub completo**: [GUIA_GITHUB.md](./GUIA_GITHUB.md)
- **Guia Netlify completo**: [GUIA_NETLIFY.md](./GUIA_NETLIFY.md)
- **Guia Supabase**: [GUIA_SUPABASE.md](./GUIA_SUPABASE.md)

---

## ✨ Pronto!

Depois de seguir esses passos, seu site estará:
- ✅ No GitHub (código versionado)
- ✅ No Netlify (site no ar)
- ✅ Conectado ao Supabase (formulário funcionando)

**URL do seu site**: Será gerada pelo Netlify após o deploy (ex: `https://sevengen-eletrica.netlify.app`)

---

## 💡 Dicas

1. **Deploys Automáticos**: Toda vez que você fizer `git push`, o Netlify faz deploy automaticamente
2. **Preview Deploys**: Pull requests geram deploys de preview
3. **SSL Gratuito**: O Netlify fornece certificado SSL automaticamente
4. **Domínio Personalizado**: Você pode configurar um domínio próprio depois

---

Boa sorte com o deploy! 🚀
