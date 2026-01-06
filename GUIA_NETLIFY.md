# 🚀 Guia: Deploy no Netlify

Este guia vai te ajudar a fazer o deploy do site da Sevengen no Netlify, conectando com seu repositório do GitHub.

---

## 📋 Pré-requisitos

1. ✅ Código já no GitHub (seguir o [GUIA_GITHUB.md](./GUIA_GITHUB.md))
2. ✅ Conta no Netlify (criar em https://netlify.com se não tiver)
3. ✅ Variáveis de ambiente do Supabase anotadas

---

## 🎯 Passo a Passo Completo

### 1️⃣ Acessar o Netlify

1. Acesse **https://netlify.com**
2. Faça login (pode usar GitHub, Google ou email)
3. No dashboard, clique em **"Add new site"** → **"Import an existing project"**

### 2️⃣ Conectar com o GitHub

1. Escolha **"GitHub"** como provedor
2. Autorize o Netlify a acessar seus repositórios (se necessário)
3. Procure e selecione o repositório **`sevengen-eletrica`** (ou o nome que você usou)
4. Clique em **"Import"**

### 3️⃣ Configurar o Build

O Netlify deve detectar automaticamente que é um projeto Next.js. Verifique se está assim:

- **Build command**: `npm run build`
- **Publish directory**: `.next` (ou deixe vazio, o plugin do Next.js cuida disso)
- **Base directory**: (deixe vazio)

⚠️ **Importante**: O arquivo `netlify.toml` já está configurado no projeto, então essas configurações devem aparecer automaticamente.

### 4️⃣ Adicionar Variáveis de Ambiente

**CRÍTICO**: Você precisa adicionar as variáveis do Supabase aqui!

1. Na seção **"Environment variables"**, clique em **"Add variable"**
2. Adicione as duas variáveis:

   **Variável 1:**
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Cole a URL do seu projeto Supabase
   - Clique em **"Add variable"**

   **Variável 2:**
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Cole a chave anônima do Supabase
   - Clique em **"Add variable"**

3. ✅ Verifique se ambas aparecem na lista

### 5️⃣ Fazer o Deploy

1. Clique no botão **"Deploy site"** (ou "Deploy")
2. ⏳ Aguarde o build (pode levar 2-5 minutos na primeira vez)
3. Você verá o progresso em tempo real

### 6️⃣ Verificar o Deploy

1. Quando terminar, você verá uma mensagem de sucesso
2. O Netlify vai gerar uma URL automática tipo: `https://random-name-123.netlify.app`
3. Clique na URL para testar o site
4. ✅ Teste o formulário de contato para garantir que o Supabase está funcionando

---

## 🔧 Configurar Domínio Personalizado (Opcional)

Se você quiser usar um domínio próprio (ex: `www.sevengen.com.br`):

1. No dashboard do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio
4. Siga as instruções para configurar o DNS

---

## 🔄 Atualizar o Site (Futuro)

Sempre que você fizer alterações:

1. Faça commit e push no GitHub:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```

2. O Netlify detecta automaticamente e faz um novo deploy
3. Você pode acompanhar o progresso no dashboard do Netlify

---

## ⚙️ Configurações Importantes

### Build Settings (já configurado no netlify.toml)

O arquivo `netlify.toml` já está no projeto com as configurações corretas:
- Build command: `npm run build`
- Plugin do Next.js instalado automaticamente

### Variáveis de Ambiente

**NUNCA** compartilhe suas variáveis de ambiente publicamente. Elas devem estar apenas:
- ✅ No Netlify (Environment variables)
- ✅ No seu `.env.local` local (não commitado)

---

## 🐛 Solução de Problemas

### Erro: "Build failed"

**Possíveis causas:**
1. Variáveis de ambiente não configuradas
   - **Solução**: Adicione `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. Erro de dependências
   - **Solução**: Verifique se o `package.json` está correto

3. Erro de build do Next.js
   - **Solução**: Teste localmente primeiro com `npm run build`

### Site não conecta com o Supabase

**Causa**: Variáveis de ambiente não configuradas ou incorretas
- **Solução**: Verifique se as variáveis estão corretas no Netlify
- **Solução**: Faça um novo deploy após adicionar as variáveis

### Formulário não funciona

**Causa**: Políticas do Supabase ou variáveis incorretas
- **Solução**: Verifique se as políticas RLS estão configuradas corretamente
- **Solução**: Teste localmente primeiro

---

## 📊 Monitoramento

No dashboard do Netlify você pode:
- Ver histórico de deploys
- Ver logs de build
- Ver analytics do site
- Configurar notificações

---

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Código está no GitHub
- [ ] Netlify conectado ao repositório
- [ ] Variáveis de ambiente configuradas
- [ ] Build executado com sucesso
- [ ] Site acessível pela URL do Netlify
- [ ] Formulário de contato testado e funcionando
- [ ] Área administrativa acessível e funcionando

---

## 🎉 Pronto!

Seu site está no ar! 🚀

Agora você pode:
- Compartilhar a URL do Netlify
- Configurar um domínio personalizado
- Continuar desenvolvendo e fazendo deploys automáticos

---

## 📝 Notas Importantes

1. **Deploys Automáticos**: Toda vez que você fizer `git push`, o Netlify faz deploy automaticamente
2. **Preview Deploys**: Pull requests geram deploys de preview automaticamente
3. **Rollback**: Você pode voltar para versões anteriores no histórico de deploys
4. **SSL**: O Netlify fornece certificado SSL gratuito automaticamente

---

## 🔗 Links Úteis

- [Documentação do Netlify](https://docs.netlify.com/)
- [Next.js no Netlify](https://docs.netlify.com/integrations/frameworks/nextjs/)
- [Guia GitHub](./GUIA_GITHUB.md)
