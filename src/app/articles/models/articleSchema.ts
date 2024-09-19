import { z } from 'zod';

export const articleSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    category: z.string().min(1, 'Category is required'),
    content: z.string().min(1, 'Content is required'),
    author: z.string().min(1, 'Author is required'),
    image: z.string().url('Invalid URL'),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
