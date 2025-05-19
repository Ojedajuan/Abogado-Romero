
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CaseStudy {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
  details: string;
  precedents?: string[];
  outcome: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Reestructuración Corporativa Emblemática',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Navegamos con éxito una compleja reestructuración corporativa para un cliente multinacional, preservando activos y el valor para los accionistas en medio de difíciles condiciones de mercado.',
    details: 'Relato detallado de las maniobras legales estratégicas, negociaciones con acreedores y cumplimiento normativo que llevaron a un resultado favorable. Esto implicó coordinación legal transfronteriza y una innovadora estructuración financiera. El caso sentó un nuevo precedente en el manejo de entidades internacionales insolventes dentro de esta jurisdicción.',
    precedents: [
      'Smith v. Jones (1988) - Principios establecidos sobre deberes de los directores durante la insolvencia.',
      'Global Corp v. Autoridad Local (2005) - Procesos clarificados de recuperación de activos transfronterizos.'
    ],
    outcome: 'Reestructuración exitosa, la empresa volvió a ser rentable en 2 años.'
  },
  {
    id: 'cs2',
    title: 'Defensa de Propiedad Intelectual de Alto Perfil',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Defendimos a una startup tecnológica contra reclamaciones de infracción de patentes de un importante actor de la industria, asegurando un veredicto que protegió su innovación principal.',
    details: 'La defensa se centró en probar el estado de la técnica anterior y la no obviedad de la tecnología del cliente. El extenso testimonio de peritos y el análisis forense de repositorios de código fueron fundamentales. La victoria permitió a la startup continuar su trayectoria de crecimiento y asegurar financiación adicional.',
    precedents: [
      'Innovatech v. Copycat Corp (2012) - Definición de "uso transformador" en patentes de software.',
      'Directrices de la Oficina de Patentes Sección 2.3.1 sobre patentabilidad de software.'
    ],
    outcome: 'Desestimación de todas las reclamaciones, el cliente retuvo todos los derechos de propiedad intelectual.'
  },
  {
    id: 'cs3',
    title: 'Victoria en Litigio Inmobiliario Complejo',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Ganamos una disputa inmobiliaria multifacética que involucraba la titularidad de tierras en disputa y derechos de desarrollo, lo que resultó en una recuperación financiera significativa para el cliente.',
    details: 'Este caso implicó desentrañar décadas de registros de propiedad, impugnar transferencias fraudulentas y navegar por complejas leyes de zonificación. El litigio se extendió por varios años y múltiples apelaciones, culminando finalmente en una sentencia que afirmó la titularidad de nuestro cliente y otorgó indemnización por daños y perjuicios.',
    precedents: [
      'TitleSure v. OldDeed (1950) - Caso fundamental sobre la cadena de titularidad.',
      'Apelación de la Junta de Zonificación No. 789 (2001) - Interpretación del "interés público" en las variaciones de zonificación.'
    ],
    outcome: 'Plenos derechos de propiedad afirmados y daños sustanciales otorgados al cliente.'
  },
];

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Casos de Estudio Destacados</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore una selección de nuestros casos anteriores, demostrando nuestro compromiso para lograr resultados favorables para nuestros clientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <Card key={cs.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-48 w-full">
                <Image src={cs.imageUrl} alt={cs.title} fill={true} className="object-cover" data-ai-hint="legal document desk" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary font-sans">{cs.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm line-clamp-3">{cs.summary}</p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Ver Detalles
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] md:max-w-[780px] lg:max-w-[900px] max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary font-sans">{cs.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground pt-2">
                        Un vistazo detallado al caso, la estrategia y el resultado.
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh] pr-4">
                      <div className="grid gap-4 py-4">
                        <div className="relative h-64 w-full rounded-md overflow-hidden mb-4">
                           <Image src={cs.imageUrl} alt={cs.title} fill={true} className="object-cover" data-ai-hint="legal justice" />
                        </div>
                        <h3 className="font-semibold text-lg text-primary font-sans">Resumen del Caso</h3>
                        <p className="text-sm text-foreground/90">{cs.summary}</p>
                        
                        <h3 className="font-semibold text-lg text-primary font-sans mt-4">Relato Detallado</h3>
                        <p className="text-sm text-foreground/90 whitespace-pre-line">{cs.details}</p>
                        
                        {cs.precedents && cs.precedents.length > 0 && (
                          <>
                            <h3 className="font-semibold text-lg text-primary font-sans mt-4">Precedentes Clave y Base Legal</h3>
                            <ul className="list-disc list-inside text-sm text-foreground/90 space-y-1">
                              {cs.precedents.map((p, index) => <li key={index}>{p}</li>)}
                            </ul>
                          </>
                        )}
                        <h3 className="font-semibold text-lg text-primary font-sans mt-4">Resultado</h3>
                        <p className="text-sm font-medium text-accent">{cs.outcome}</p>
                      </div>
                    </ScrollArea>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">Cerrar</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
