import { defineCollection, z } from 'astro:content';

const receitas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descricao: z.string(),
    categoria: z.string(),
    imagem: z.string().optional(),
    produtos: z
      .array(
        z.object({
          nome: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

const artigos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descricao: z.string(),
    imagem: z.string().optional(),
  }),
});

export const collections = { receitas, artigos };
