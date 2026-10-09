import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://podecomer.blog.br';

export const GET: APIRoute = async () => {
  const receitas = await getCollection('receitas');
  const artigos = await getCollection('artigos');

  const paginas = [
    '',
    '/receitas',
    '/guia',
    '/sobre',
    '/contato',
    '/politica-de-privacidade',
  ];

  const urls = [
    ...paginas.map((p) => `${site}${p}`),
    ...receitas.map((r) => `${site}/receitas/${r.slug}`),
    ...artigos.map((a) => `${site}/guia/${a.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
