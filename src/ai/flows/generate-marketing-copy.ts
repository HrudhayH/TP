'use server';
/**
 * @fileOverview A Genkit flow for generating marketing copy based on product details or company values.
 *
 * - generateMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductDetailsSchema = z.object({
  productName: z.string().describe('The name of the product (e.g., "Basmati Rice").'),
  category: z.string().describe('The category of the product (e.g., "Rice", "Millets").'),
  keyFeatures: z.string().describe('Key features and attributes of the product (e.g., "long grain, aromatic, organic").'),
});

const ValueDetailsSchema = z.object({
  valueName: z.string().describe('The name of the company value (e.g., "Sustainable Sourcing").'),
  description: z
    .string()
    .describe(
      'A detailed description of the company value (e.g., "Vriksa is committed to sourcing agricultural products responsibly...").'
    ),
});

const GenerateMarketingCopyInputSchema = z.object({
  type: z.enum(['product', 'value']).describe('The type of content to generate copy for: "product" or "value".'),
  details: z
    .union([ProductDetailsSchema, ValueDetailsSchema])
    .describe('Details specific to the product or value.'),
  targetRegion: z
    .string()
    .describe('The target geographical region for the marketing copy to optimize for its nuances (e.g., "Middle East", "Europe", "Global").'),
  purpose: z
    .string()
    .describe('The intended purpose or context for the copy (e.g., "website hero section headline", "product description for category page").'),
  length: z.enum(['short', 'medium', 'long']).describe('Desired length of the generated copy.'),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  headline: z.string().describe('A compelling headline for the marketing copy.'),
  body: z.string().describe('The main body content of the marketing copy.'),
  callToAction: z.string().optional().describe('An optional call-to-action related to the copy.'),
  nuanceNotes: z.string().describe('Notes on how regional nuances were considered in the generated copy.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const marketingCopyPrompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: { schema: GenerateMarketingCopyInputSchema },
  output: { schema: GenerateMarketingCopyOutputSchema },
  prompt: `You are an expert marketing copywriter for Vriksa, an agricultural export company.
Your task is to create compelling marketing copy based on the provided details, optimized for clarity, appeal, and regional market nuances.

Company Name: Vriksa

Type of Content: {{{type}}}
Purpose: {{{purpose}}}
Desired Length: {{{length}}}
Target Region: {{{targetRegion}}}

{{#ifEqual type 'product'}}
Product Name: {{{details.productName}}}
Category: {{{details.category}}}
Key Features: {{{details.keyFeatures}}}

Instructions: Generate marketing copy for the product. Highlight its quality and export standards, considering the target region's preferences and cultural context. Focus on evoking a sense of premium quality and reliability.

{{else ifEqual type 'value'}}
Value Name: {{{details.valueName}}}
Description: {{{details.description}}}

Instructions: Generate marketing copy that clearly articulates this company value. Emphasize Vriksa's commitment to quality, sustainability, or global logistics, making it appealing to the target region's audience.

{{/ifEqual}}

Provide a compelling headline, the main body content, and if appropriate for the purpose, a call to action. Also, include a brief explanation in 'nuanceNotes' on how you considered the regional nuances for the target region in the generated copy.`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async (input) => {
    const { output } = await marketingCopyPrompt(input);
    return output!;
  }
);
