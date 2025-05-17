'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitContactForm, type ContactFormValues } from '@/app/actions/contactActions';


const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, ingrese una dirección de correo electrónico válida.' }),
  subject: z.string().min(5, { message: 'El asunto debe tener al menos 5 caracteres.' }).optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

// ContactFormValues type is now imported from contactActions.ts

export default function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      form.setValue('subject', `Consulta sobre ${decodeURIComponent(service)}`);
    }
  }, [searchParams, form]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: '¡Mensaje Enviado!',
          description: result.message, // This message comes from server action, ensure it's translated there if needed or use a generic one here.
          variant: 'default',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: result.message, // Same as above.
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Póngase en Contacto</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            ¿Tiene una pregunta legal o necesita discutir un caso? Contáctenos. Estamos aquí para ayudar.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-primary font-sans">Contáctenos</CardTitle>
            <CardDescription>
              Complete el formulario a continuación y le responderemos lo antes posible.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name" className="text-primary font-sans">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="Juan Pérez" {...field} disabled={isLoading} className="focus:ring-accent focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email" className="text-primary font-sans">Dirección de Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="usted@ejemplo.com" {...field} disabled={isLoading} className="focus:ring-accent focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject" className="text-primary font-sans">Asunto (Opcional)</FormLabel>
                      <FormControl>
                        <Input id="subject" placeholder="ej., Consulta sobre Derecho Corporativo" {...field} disabled={isLoading} className="focus:ring-accent focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message" className="text-primary font-sans">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Por favor, describa su inquietud o pregunta legal aquí..."
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
