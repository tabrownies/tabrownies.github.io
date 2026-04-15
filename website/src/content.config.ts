import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { ProjectTagSchema, AdventureTagSchema } from './data/tags';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Projects', 'Adventures']),
    cover_image: z.string(),
    summary: z.string(),
    tags: z.array(ProjectTagSchema),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Projects', 'Adventures']),
    cover_image: z.string(),
    summary: z.string(),
    tags: z.array(AdventureTagSchema),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
