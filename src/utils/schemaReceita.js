const SITE = 'https://podecomer.blog.br';

function limpar(texto) {
  return texto.replace(/\*\*/g, '').trim();
}

export function extrairIngredientes(corpo) {
  const linhas = (corpo || '').split('\n');
  const inicio = linhas.findIndex((l) =>
    l.trim().toLowerCase().startsWith('## ingredientes')
  );
  if (inicio === -1) return [];
  const itens = [];
  for (let i = inicio + 1; i < linhas.length; i++) {
    const linha = linhas[i].trim();
    if (linha.toLowerCase().startsWith('## modo de preparo')) break;
    if (linha.startsWith('- ')) itens.push(limpar(linha.slice(2)));
  }
  return itens;
}

export function extrairPassos(corpo) {
  const linhas = (corpo || '').split('\n');
  const inicio = linhas.findIndex((l) =>
    l.trim().toLowerCase().startsWith('## modo de preparo')
  );
  if (inicio === -1) return [];
  const passos = [];
  for (let i = inicio + 1; i < linhas.length; i++) {
    const linha = linhas[i].trim();
    if (linha.startsWith('## ')) break;
    const m = linha.match(/^\d+\.\s+(.*)$/);
    if (m) passos.push(limpar(m[1]));
  }
  return passos;
}

export function montarSchema({ slug, data, body }) {
  if (!data.imagem) return null;
  const ingredientes = extrairIngredientes(body);
  const passos = extrairPassos(body);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: data.title,
    description: data.descricao,
    image: [`${SITE}${data.imagem}`],
    author: { '@type': 'Organization', name: 'PodeComer' },
    recipeCategory: data.categoria,
    url: `${SITE}/receitas/${slug}`,
  };
  if (ingredientes.length > 0) schema.recipeIngredient = ingredientes;
  if (passos.length > 0) {
    schema.recipeInstructions = passos.map((text) => ({
      '@type': 'HowToStep',
      text,
    }));
  }
  return schema;
}
