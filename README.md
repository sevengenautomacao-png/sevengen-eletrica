# Sevengen de Elétrica - Site Institucional

Site institucional da empresa Sevengen de Elétrica, desenvolvido com Next.js, TypeScript e integração com Supabase.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Supabase** - Banco de dados e backend
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.local.example` para `.env.local`
   - Preencha com suas credenciais do Supabase:
   ```
   NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

## 🗄️ Configuração do Supabase

📘 **Para um guia passo a passo detalhado, consulte o arquivo [GUIA_SUPABASE.md](./GUIA_SUPABASE.md)**

Resumo rápido:
1. Crie um novo projeto no Supabase (https://supabase.com)
2. Execute o script SQL do arquivo `supabase-setup.sql` no SQL Editor
3. Copie a URL e a chave anônima em Settings > API
4. Crie o arquivo `.env.local` e adicione as credenciais

## 🏃 Executando o Projeto

Para desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

Para produção:
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
sevensite/
├── app/                    # Páginas e rotas (App Router)
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página sobre
│   ├── servicos/          # Página de serviços
│   ├── contato/           # Página de contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho
│   └── Footer.tsx         # Rodapé
├── lib/                   # Bibliotecas e utilitários
│   └── supabase.ts        # Cliente Supabase
└── public/                # Arquivos estáticos
```

## 🎨 Páginas

- **Home** (`/`) - Página inicial com hero, features e preview de serviços
- **Sobre** (`/sobre`) - Informações sobre a empresa
- **Serviços** (`/servicos`) - Lista completa de serviços oferecidos
- **Contato** (`/contato`) - Formulário de contato integrado com Supabase

## 🔐 Segurança

- As variáveis de ambiente não devem ser commitadas no Git
- O arquivo `.env.local` está no `.gitignore`
- Configure as políticas de segurança no Supabase conforme necessário

## 📝 Licença

Este projeto é propriedade da Sevengen de Elétrica.
