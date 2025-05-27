// src/app/layout.tsx

import type { Metadata } from 'next';
import { Playfair_Display, EB_Garamond } from 'next/font/google'; // Usamos EB Garamond para cuerpo
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

// Configuración de fuentes
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Estudio Jurídico Mediador | Soluciones Legales y Mediación',
  description: 'Portafolio profesional de Estudio Jurídico Mediador, ofreciendo servicios de asesoría legal y mediación experta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          playfair.variable,
          ebGaramond.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}