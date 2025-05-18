'use client';

import HeroSection from '@/components/sections/HeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import ContactSection from '@/components/sections/ContactSection';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      {/* Wrap ContactSection in Suspense as it uses useSearchParams */}
      <Suspense fallback={<div>Cargando formulario de contacto...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}
