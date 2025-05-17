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
    title: 'General Litigation',
    description: 'Comprehensive representation in civil and commercial disputes, from negotiation to trial.',
  },
  {
    id: 'corporate-law',
    icon: Briefcase,
    title: 'Corporate Law',
    description: 'Advising businesses on formation, governance, mergers, acquisitions, and compliance.',
  },
  {
    id: 'criminal-defense',
    icon: ShieldCheck,
    title: 'Criminal Defense',
    description: 'Staunch defense for individuals facing criminal charges, protecting rights at every step.',
  },
  {
    id: 'family-law',
    icon: Users,
    title: 'Family Law',
    description: 'Compassionate guidance through divorce, custody, support, and other family matters.',
  },
  {
    id: 'real-estate-law',
    icon: Landmark,
    title: 'Real Estate Law',
    description: 'Handling transactions, disputes, zoning, and development for residential and commercial property.',
  },
  {
    id: 'contracts',
    icon: FileText,
    title: 'Contract Law',
    description: 'Drafting, reviewing, and negotiating contracts to protect your interests and minimize risk.',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Areas of Expertise</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Specialized knowledge across a wide spectrum of legal fields to provide you with dedicated and effective solutions.
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
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
