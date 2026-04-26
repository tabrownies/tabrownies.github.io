import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { ProjectTagSchema, AdventureTagSchema } from './data/tags';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Projects', 'Adventures']),
    cover_image: image().optional(),
    summary: z.string(),
    tags: z.array(ProjectTagSchema),
    hidden: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Projects', 'Adventures']),
    cover_image: image().optional(),
    summary: z.string(),
    tags: z.array(AdventureTagSchema),
    hidden: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
