# 📤 Guia: Enviar Código para o GitHub

Este guia vai te ajudar a enviar o código do site da Sevengen para o GitHub.

---

## 📋 Pré-requisitos

1. **Conta no GitHub**: Se não tiver, crie em https://github.com
2. **Git instalado**: Verifique se tem Git instalado:
   ```bash
   git --version
   ```
   Se não tiver, instale: https://git-scm.com/downloads

---

## 🚀 Passo a Passo

### 1️⃣ Inicializar o Repositório Git

Abra o terminal na pasta do projeto e execute:

```bash
cd "/home/junior/Área de trabalho/sevensite"
git init
```

### 2️⃣ Adicionar Todos os Arquivos

```bash
git add .
```

### 3️⃣ Fazer o Primeiro Commit

```bash
git commit -m "Initial commit: Site Sevengen de Elétrica"
```

### 4️⃣ Criar Repositório no GitHub

1. Acesse https://github.com e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `sevengen-eletrica` (ou outro nome)
   - **Description**: "Site institucional da Sevengen de Elétrica"
   - **Visibility**: Escolha **Public** ou **Private**
   - ⚠️ **NÃO marque** "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 5️⃣ Conectar ao Repositório Remoto

Após criar o repositório, o GitHub vai mostrar comandos. Use este (substitua `SEU_USUARIO` pelo seu usuário do GitHub):

```bash
git remote add origin https://github.com/SEU_USUARIO/sevengen-eletrica.git
```

### 6️⃣ Enviar o Código

```bash
git branch -M main
git push -u origin main
```

Se pedir autenticação:
- **Username**: Seu usuário do GitHub
- **Password**: Use um **Personal Access Token** (não sua senha normal)

---

## 🔐 Criar Personal Access Token (se necessário)

Se o GitHub pedir senha, você precisa criar um token:

1. GitHub → **Settings** (perfil) → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token (classic)**
4. Dê um nome (ex: "Sevengen Site")
5. Marque a opção **"repo"** (acesso completo aos repositórios)
6. Clique em **"Generate token"**
7. **COPIE O TOKEN** (você só verá uma vez!)
8. Use esse token como senha quando o Git pedir

---

## ✅ Verificar se Funcionou

1. Acesse seu repositório no GitHub
2. Você deve ver todos os arquivos do projeto
3. ✅ Pronto! Seu código está no GitHub!

---

## 🔄 Atualizar o Código no GitHub (futuro)

Sempre que fizer alterações, use estes comandos:

```bash
# Ver o que mudou
git status

# Adicionar alterações
git add .

# Fazer commit
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push
```

---

## ⚠️ Importante - Segurança

O arquivo `.env.local` está no `.gitignore` e **NÃO será enviado** para o GitHub. Isso é correto! 

**NUNCA** compartilhe suas credenciais do Supabase publicamente.

Se precisar que outros desenvolvedores usem o projeto:
- Eles devem criar seu próprio `.env.local`
- Use o arquivo `.env.local.example` como referência (mas não coloque valores reais nele)

---

## 📝 Comandos Rápidos (Resumo)

```bash
# Inicializar
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Mensagem do commit"

# Conectar ao GitHub (só na primeira vez)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Enviar código
git push -u origin main

# Atualizar (depois)
git add .
git commit -m "Descrição"
git push
```

---

## 🆘 Problemas Comuns

### Erro: "fatal: not a git repository"
- **Solução**: Execute `git init` primeiro

### Erro: "remote origin already exists"
- **Solução**: Remova e adicione novamente:
  ```bash
  git remote remove origin
  git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
  ```

### Erro de autenticação
- **Solução**: Use Personal Access Token ao invés de senha

### Arquivo .env.local foi enviado
- **Solução**: Remova do histórico (se já enviou):
  ```bash
  git rm --cached .env.local
  git commit -m "Remove .env.local"
  git push
  ```

---

## ✨ Pronto!

Agora seu código está versionado e seguro no GitHub! 🎉
