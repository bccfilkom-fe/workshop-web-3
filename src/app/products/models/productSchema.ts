import { z } from "zod";

// Zod schema
export const productSchema = z.object({
    name: z.string().min(1, "Name is required"),
    image: z.string().url("Must be a valid URL").min(1, "Image URL is required"),
    price: z.string().min(1, "Price is required"),
    description: z.string().min(1, "Description is required"),
    material: z.string().min(1, "Material is required"),
});

export type ProductFormValues = z.infer<typeof productSchema>;
