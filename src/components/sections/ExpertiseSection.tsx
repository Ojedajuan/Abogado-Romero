import { Scale, Briefcase, ShieldCheck, Users, Landmark, FileText, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ExpertiseArea {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'general-law',
    icon: Scale,
    title: 'Litigio General',
    description: 'Representación integral en disputas civiles y comerciales, desde la negociación hasta el juicio.',
  },
  {
    id: 'corporate-law',
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description: 'Asesoramiento a empresas en formación, gobernanza, fusiones, adquisiciones y cumplimiento normativo.',
  },
  {
    id: 'criminal-defense',
    icon: ShieldCheck,
    title: 'Defensa Penal',
    description: 'Defensa firme para individuos que enfrentan cargos penales, protegiendo sus derechos en cada paso.',
  },
  {
    id: 'family-law',
    icon: Users,
    title: 'Derecho Familiar',
    description: 'Guía compasiva a través de divorcios, custodia, manutención y otros asuntos familiares.',
  },
  {
    id: 'real-estate-law',
    icon: Landmark,
    title: 'Derecho Inmobiliario',
    description: 'Manejo de transacciones, disputas, zonificación y desarrollo de propiedades residenciales y comerciales.',
  },
  {
    id: 'contracts',
    icon: FileText,
    title: 'Derecho Contractual',
    description: 'Redacción, revisión y negociación de contratos para proteger sus intereses y minimizar riesgos.',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Áreas de Experiencia</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Conocimiento especializado en un amplio espectro de campos legales para brindarle soluciones dedicadas y efectivas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <Card key={area.id} className="flex flex-col bg-card hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-4 flex justify-center md:justify-start">
                  <area.icon className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary font-sans">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                 <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80" asChild>
                    <Link href={`#contact?service=${encodeURIComponent(area.title)}`}>
                        Saber Más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
