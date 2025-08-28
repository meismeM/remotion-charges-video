import {z} from 'zod';

export const contentSchema = z.object({
	title: z.string(),
	definition: z.string(),
	properties: z.array(z.string()),
	formula: z.string(),
});

export type Content = z.infer<typeof contentSchema>;
