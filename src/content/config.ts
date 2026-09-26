import { defineCollection, z } from 'astro:content';

const receitas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descricao: z.string(),
    categoria: z.string(),
    imagem: z.string().optional(),
  }),
});

export const collections = { receitas };
