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
  keywords: z.string().min(10, { message: 'Por favor, ingrese al menos 10 caracteres de palabras clave.' }).max(500, {message: 'Las palabras clave no pueden exceder los 500 caracteres.'}),
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
        title: "Informe Generado",
        description: "El borrador de su informe legal ha sido generado exitosamente.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating brief:', error);
      toast({
        title: "Error",
        description: "Falló la generación del informe legal. Por favor, inténtelo de nuevo.",
        variant: "destructive",
      });
      setGeneratedBrief("Ocurrió un error al generar el informe. Por favor, revise la consola para más detalles o inténtelo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="brief-generator" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Generador de Informes con IA</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Utilice nuestra herramienta de IA de vanguardia para redactar argumentos legales iniciales a partir de palabras clave. Un poderoso asistente para su investigación y preparación legal.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary font-sans">
              <Wand2 className="h-6 w-6 text-accent" />
              Generar Informe Legal
            </CardTitle>
            <CardDescription>
              Ingrese palabras clave relacionadas con su caso, y nuestra IA le ayudará a redactar un punto de partida para su informe legal.
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
                      <FormLabel htmlFor="keywords" className="text-primary font-sans">Palabras Clave</FormLabel>
                      <FormControl>
                        <Textarea
                          id="keywords"
                          placeholder="ej., 'incumplimiento de contrato, falta de entrega de bienes, cálculo de daños, secciones relevantes del código de comercio...'"
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
                      Generando...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generar Informe
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
          {generatedBrief && (
            <div className="p-6 border-t">
              <h3 className="text-xl font-semibold text-primary mb-3 font-sans">Borrador de Informe Generado:</h3>
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
