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
    title: 'Landmark Corporate Restructuring',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Successfully navigated a complex corporate restructuring for a multinational client, preserving assets and stakeholder value amidst challenging market conditions.',
    details: 'Detailed account of the strategic legal maneuvers, negotiations with creditors, and regulatory compliance that led to a favorable outcome. This involved cross-border legal coordination and innovative financial structuring. The case set a new precedent in handling insolvent international entities within this jurisdiction.',
    precedents: [
      'Smith v. Jones (1988) - Established principles of director duties during insolvency.',
      'Global Corp v. Local Authority (2005) - Clarified cross-border asset recovery processes.'
    ],
    outcome: 'Successful restructuring, company returned to profitability within 2 years.'
  },
  {
    id: 'cs2',
    title: 'High-Profile Intellectual Property Defense',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Defended a tech startup against patent infringement claims from a major industry player, securing a verdict that protected their core innovation.',
    details: 'The defense centered on proving prior art and non-obviousness of the client\'s technology. Extensive expert witness testimony and forensic analysis of code repositories were pivotal. The victory allowed the startup to continue its growth trajectory and secure further funding.',
    precedents: [
      'Innovatech v. Copycat Corp (2012) - Defined "transformative use" in software patents.',
      'Patent Office Guidelines Section 2.3.1 on software patentability.'
    ],
    outcome: 'Dismissal of all claims, client retained full IP rights.'
  },
  {
    id: 'cs3',
    title: 'Complex Real Estate Litigation Victory',
    imageUrl: 'https://placehold.co/600x400.png',
    summary: 'Won a multi-faceted real estate dispute involving contested land ownership and development rights, resulting in significant financial recovery for the client.',
    details: 'This case involved unraveling decades of property records, challenging fraudulent transfers, and navigating complex zoning laws. The litigation spanned several years and multiple appeals, ultimately culminating in a judgment that affirmed our client\'s ownership and awarded damages.',
    precedents: [
      'TitleSure v. OldDeed (1950) - Foundational case on chain of title.',
      'Zoning Board Appeal No. 789 (2001) - Interpretation of "public interest" in zoning variances.'
    ],
    outcome: 'Full ownership rights affirmed and substantial damages awarded to client.'
  },
];

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-sans">Notable Case Studies</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore a selection of our past cases, demonstrating our commitment to achieving favorable outcomes for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <Card key={cs.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <div className="relative h-48 w-full">
                <Image src={cs.imageUrl} alt={cs.title} layout="fill" objectFit="cover" data-ai-hint="legal document desk" />
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
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] md:max-w-[780px] lg:max-w-[900px] max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary font-sans">{cs.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground pt-2">
                        A detailed look into the case, strategy, and outcome.
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[60vh] pr-4">
                      <div className="grid gap-4 py-4">
                        <div className="relative h-64 w-full rounded-md overflow-hidden mb-4">
                           <Image src={cs.imageUrl} alt={cs.title} layout="fill" objectFit="cover" data-ai-hint="legal justice" />
                        </div>
                        <h3 className="font-semibold text-lg text-primary font-sans">Case Summary</h3>
                        <p className="text-sm text-foreground/90">{cs.summary}</p>
                        
                        <h3 className="font-semibold text-lg text-primary font-sans mt-4">Detailed Account</h3>
                        <p className="text-sm text-foreground/90 whitespace-pre-line">{cs.details}</p>
                        
                        {cs.precedents && cs.precedents.length > 0 && (
                          <>
                            <h3 className="font-semibold text-lg text-primary font-sans mt-4">Key Precedents & Legal Basis</h3>
                            <ul className="list-disc list-inside text-sm text-foreground/90 space-y-1">
                              {cs.precedents.map((p, index) => <li key={index}>{p}</li>)}
                            </ul>
                          </>
                        )}
                        <h3 className="font-semibold text-lg text-primary font-sans mt-4">Outcome</h3>
                        <p className="text-sm font-medium text-accent">{cs.outcome}</p>
                      </div>
                    </ScrollArea>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variant="outline">Close</Button>
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
