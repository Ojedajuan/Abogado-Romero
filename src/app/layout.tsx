
import type { Metadata } from 'next';
import { Lora, Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
          'min-h-screen bg-background font-serif antialiased',
          lora.variable,
          inter.variable,
          robotoMono.variable
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
