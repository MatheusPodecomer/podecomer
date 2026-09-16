# PodeComer — Guia rápido

Este é o site PodeComer. Você não precisa entender programação para usá-lo.

## Como adicionar uma nova receita

1. Vá até a pasta `src/content/receitas`.
2. Copie o arquivo `bolo-de-chocolate-sem-lactose.md` como modelo.
3. Renomeie o novo arquivo (ex: `panqueca-sem-gluten.md`).
4. Abra o arquivo e edite:
   - `title`: nome da receita
   - `descricao`: uma frase curta sobre ela
   - `categoria`: ex. "Sem lactose", "Sem glúten"
   - O texto abaixo dos três traços (---) é o corpo da receita (ingredientes e modo de preparo).
5. Salve o arquivo e suba (upload) para o GitHub.
6. A Vercel atualiza o site sozinha em 1-2 minutos.

## Estrutura de pastas (não precisa mexer)

- `src/layouts/Layout.astro` → visual do site (cores, cabeçalho, rodapé)
- `src/pages/` → páginas do site
- `src/content/receitas/` → onde ficam as receitas (arquivos .md)
