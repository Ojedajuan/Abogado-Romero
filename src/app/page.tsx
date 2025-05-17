import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BriefGeneratorSection from '@/components/sections/BriefGeneratorSection';
import ContactSection from '@/components/sections/ContactSection';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BriefGeneratorSection />
      {/* Wrap ContactSection in Suspense as it uses useSearchParams */}
      <Suspense fallback={<div>Cargando formulario de contacto...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}
