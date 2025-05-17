'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateLegalBrief, type GenerateLegalBriefInput, type GenerateLegalBriefOutput } from '@/ai/flows/generate-legal-brief';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const briefSchema = z.object({
  keywords: z.string().min(10, { message: 'Please enter at least 10 characters of keywords.' }).max(500, {message: 'Keywords cannot exceed 500 characters.'}),
});

type BriefFormValues = z.infer<typeof briefSchema>;

export default function BriefGeneratorSection() {
  const [generatedBrief, setGeneratedBrief] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<BriefFormValues>({
    resolver: zodResolver(briefSchema),
    defaultValues: {
      keywords: '',
    },
  });

  const onSubmit: SubmitHandler<BriefFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedBrief(null);
    try {
      const input: GenerateLegalBriefInput = { keywords: data.keywords };
      const result: GenerateLegalBriefOutput = await generateLegalBrief(input);
      setGeneratedBrief(result.brief);
      toast({
        title: "Brief Generated",
        description: "Your legal brief draft has been successfully generated.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating brief:', error);
      toast({
        title: "Error",
        description: "Failed to generate legal brief. Please try again.",
        variant: "destructive",
      });
      setGeneratedBrief("An error occurred while generating the brief. Please check the console for details or try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="brief-generator" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">AI-Powered Brief Generator</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Utilize our cutting-edge AI tool to draft initial legal arguments from keywords. A powerful assistant for your legal research and preparation.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary font-sans">
              <Wand2 className="h-6 w-6 text-accent" />
              Generate Legal Brief
            </CardTitle>
            <CardDescription>
              Enter keywords related to your case, and our AI will help draft a starting point for your legal brief.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="keywords" className="text-primary font-sans">Keywords</FormLabel>
                      <FormControl>
                        <Textarea
                          id="keywords"
                          placeholder="e.g., 'breach of contract, non-delivery of goods, damages calculation, relevant commercial code sections...'"
                          className="min-h-[120px] resize-y focus:ring-accent focus:border-accent"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Brief
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
          {generatedBrief && (
            <div className="p-6 border-t">
              <h3 className="text-xl font-semibold text-primary mb-3 font-sans">Generated Brief Draft:</h3>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4 bg-background">
                <pre className="text-sm whitespace-pre-wrap text-foreground/90">{generatedBrief}</pre>
              </ScrollArea>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
