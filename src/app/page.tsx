
'use client';

import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BriefGeneratorSection from '@/components/sections/BriefGeneratorSection';
import ContactSection from '@/components/sections/ContactSection';
import { Suspense, useState, useEffect } from 'react';

export default function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false); // Simulate admin state

  // Simulate checking admin status on component mount
  useEffect(() => {
    // In a real app, you would check authentication status here
    // For demonstration, we'll just set isAdmin to true
    setIsAdmin(true); 
  }, []);

  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      {isAdmin && <BriefGeneratorSection />}
      {/* Wrap ContactSection in Suspense as it uses useSearchParams */}
      <Suspense fallback={<div>Cargando formulario de contacto...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}
