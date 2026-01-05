# 🔐 Configuração da Área Administrativa

A área administrativa permite visualizar e gerenciar os contatos recebidos através do formulário do site.

## ⚠️ Importante - Segurança

**Por padrão, a área administrativa está acessível publicamente.** Isso significa que qualquer pessoa com o link pode ver e excluir os contatos.

### Recomendações de Segurança:

1. **Adicionar Autenticação** (Recomendado):
   - Configure autenticação no Supabase
   - Adicione login na página `/admin`
   - Restrinja as políticas do banco apenas para usuários autenticados

2. **Usar URL Secreta** (Alternativa Simples):
   - Use uma URL difícil de adivinhar
   - Exemplo: `/admin-abc123xyz` ao invés de `/admin`
   - Não compartilhe o link publicamente

3. **Restringir Políticas do Banco** (Mais Seguro):
   - Remova as políticas de leitura e exclusão públicas
   - Crie políticas apenas para usuários autenticados

## 📋 Funcionalidades da Área Administrativa

- ✅ Visualizar todos os contatos recebidos
- ✅ Ver estatísticas (total, orçamentos, contatos do dia)
- ✅ Excluir contatos
- ✅ Atualizar lista manualmente
- ✅ Ver detalhes completos (nome, email, telefone, mensagem, data)

## 🔧 Atualizar Políticas do Supabase (Opcional)

Se você quiser restringir o acesso, execute este SQL no Supabase:

```sql
-- Remover políticas públicas
DROP POLICY IF EXISTS "Permitir leitura pública" ON contatos;
DROP POLICY IF EXISTS "Permitir exclusão pública" ON contatos;

-- Criar políticas apenas para autenticados
CREATE POLICY "Permitir leitura para autenticados" ON contatos
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Permitir exclusão para autenticados" ON contatos
  FOR DELETE
  TO authenticated
  USING (true);
```

Depois, você precisará adicionar autenticação na página `/admin`.

## 📍 Acesso

A área administrativa está disponível em: **http://localhost:3000/admin**

Ou no footer do site, no link "Área Administrativa".
