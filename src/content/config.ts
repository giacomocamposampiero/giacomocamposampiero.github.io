import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const edu = defineCollection({
  type: "content",
  schema: z.object({
    school: z.string(),
    program: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const pub = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string(),
    paper_link: z.string(),
    selected: z.boolean().optional(),
    award: z.string().optional(),
  }),
});


export const collections = { blog, work, edu, pub };
