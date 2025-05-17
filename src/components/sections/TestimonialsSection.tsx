'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: "Su dedicación y aguda visión legal fueron fundamentales para resolver mi caso favorablemente. No podría haber pedido una mejor representación.",
    name: 'Juana Pérez',
    title: 'Directora Ejecutiva, Soluciones Tecnológicas Inc.',
    imageUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 't2',
    quote: "Profesionales, receptivos e increíblemente conocedores. Me guiaron a través de un complejo proceso legal con claridad y confianza.",
    name: 'Juan García',
    title: 'Fundador, Innovate Startups',
    imageUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: 't3',
    quote: "El equipo de LawPortfolio demostró una experiencia excepcional y un compromiso genuino con mi caso. Altamente recomendados para cualquier necesidad legal.",
    name: 'Alicia Marrón',
    title: 'Directora, Agencia Creativa',
    imageUrl: 'https://placehold.co/100x100.png',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000); // Rotate every 7 seconds
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Testimonios de Clientes</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Escuche a aquellos a quienes hemos tenido el privilegio de representar. Sus historias de éxito son nuestros mayores avales.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-xl rounded-lg bg-card">
            <CardContent className="p-8 md:p-12 min-h-[300px] md:min-h-[250px] flex flex-col items-center justify-center text-center relative">
               {testimonialsData.map((testimonial, index) => (
                <div key={testimonial.id} className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 transition-opacity duration-700 ease-in-out",
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  )}
                  style={{transitionDelay: index === currentIndex ? "0.3s" : "0s"}}
                  aria-hidden={index !== currentIndex}
                  >
                  <div className="mb-6">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full shadow-md"
                      data-ai-hint="professional portrait"
                    />
                  </div>
                  <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-primary font-sans">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 transform bg-card hover:bg-secondary rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
            onClick={prevTestimonial}
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 transform bg-card hover:bg-secondary rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
            onClick={nextTestimonial}
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
                )}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
