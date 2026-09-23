# Recanto do Fazer — site institucional

Site estático em Vue 3 + TypeScript + Vite, com rotas pré-renderizadas via vite-ssg. Não precisa de backend.

## Desenvolvimento

- Instale dependências: `npm install`
- Inicie o servidor local: `npm run dev`
- Gere a versão de produção: `npm run build`
- Visualize a versão gerada: `npm run preview`

## SEO e publicação

Copie `.env.example` para `.env` e defina `SITE_URL` e `VITE_SITE_URL` como a origem pública real do site, sem barra no final. O build usa esses valores para incluir canonicals, `sitemap.xml` e a referência ao sitemap em `robots.txt`. Sem o domínio final, a geração do sitemap é omitida de propósito para não publicar URLs inventadas.

O build pré-renderiza as rotas `/`, `/pedagogia-waldorf`, `/turmas`, `/rotina` e `/contato` em HTML para indexação. Os títulos e descrições são definidos por página.

## Informações a confirmar antes da publicação

- Substituir o link de busca do Google Maps em `src/data/contatos.ts` pela URL exata do lugar, caso a escola queira usar um link compartilhado específico.
- Trocar os espaços demonstrativos de depoimentos por relatos reais autorizados ou remover a seção.
- Confirmar a informação institucional “primeira e única escola Waldorf da Baixada Fluminense” antes de publicar.
