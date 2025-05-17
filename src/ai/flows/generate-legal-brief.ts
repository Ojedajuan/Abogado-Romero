// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview A legal brief generator AI agent.
 *
 * - generateLegalBrief - A function that handles the legal brief generation process.
 * - GenerateLegalBriefInput - The input type for the generateLegalBrief function.
 * - GenerateLegalBriefOutput - The return type for the generateLegalBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLegalBriefInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the legal case for generating the brief.'),
});
export type GenerateLegalBriefInput = z.infer<typeof GenerateLegalBriefInputSchema>;

const GenerateLegalBriefOutputSchema = z.object({
  brief: z.string().describe('The generated legal brief draft.'),
});
export type GenerateLegalBriefOutput = z.infer<typeof GenerateLegalBriefOutputSchema>;

export async function generateLegalBrief(input: GenerateLegalBriefInput): Promise<GenerateLegalBriefOutput> {
  return generateLegalBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLegalBriefPrompt',
  input: {schema: GenerateLegalBriefInputSchema},
  output: {schema: GenerateLegalBriefOutputSchema},
  prompt: `You are an AI legal assistant tasked with drafting a legal brief based on provided keywords.

  Please generate a comprehensive legal brief draft using the following keywords: {{{keywords}}}. The brief should include relevant arguments, precedents, and legal reasoning.
  Do not include any introductory or concluding remarks.
  Do not include a case name or court.
  Do not include anything other than the arguments, precedents, and legal reasoning.
  
  Assume that you are writing for an expert audience of seasoned lawyers, so do not explain basic legal concepts.
  Do not make up any information.
  Do not cite fake cases or statutes.
  If you do not know the answer, say that you do not know.
  `,
});

const generateLegalBriefFlow = ai.defineFlow(
  {
    name: 'generateLegalBriefFlow',
    inputSchema: GenerateLegalBriefInputSchema,
    outputSchema: GenerateLegalBriefOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
