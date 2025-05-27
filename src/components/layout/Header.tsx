'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import '@/app/globals.css';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { NavLinksContent } from './NavLinksContent';
import ImageWithFallback from '@/components/ImageWithFallback';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#expertise', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo + Nombre (Desktop) */}
        <Link href="/" className="flex items-center gap-2" aria-label="Estudio Jurídico Mediador">
          {/* Logo Desktop - más prolijo */}
          <ImageWithFallback
            src="/images/logo.png"
            alt="Logo del Estudio Jurídico Mediador"
            width={60} // Adjust size as needed
            height={60} // Adjust size as needed
            className="h-auto" // Maintain aspect ratio
            showBackground={false} // No background
          />
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinksContent />
      </div>

        {/* Menú Mobile */}
        <div className="md:hidden flex items-center">
  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    <SheetTrigger asChild>
      <Button 
        variant="ghost" 
        size="icon" 
        aria-label="Abrir menú de navegación"
        className="hover:bg-gray-100 transition-colors duration-200"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </Button>
    </SheetTrigger>
    
    <SheetContent side="right" className="w-[320px] p-0 bg-white">
      {/* Header del menú */}
      <SheetHeader className="px-6 pt-8 pb-6 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <SheetTitle asChild>
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsSheetOpen(false)}
              aria-label="Estudio Jurídico Mediador Inicio"
            >
              <Scale className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-200" />
              <div className="flex flex-col">
                <span className="text-base font-bold text-primary font-sans leading-tight">
                  Estudio Jurídico
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  Mediador
                </span>
              </div>
            </Link>
          </SheetTitle>
          
          <SheetClose asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Cerrar menú de navegación"
              className="hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </Button>
          </SheetClose>
        </div>
      </SheetHeader>

      {/* Contenido del menú */}
      <div className="py-8 px-6">
        {/* Logo principal - más grande y limpio */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="h-28 w-28 flex items-center justify-center">
              <ImageWithFallback
                src="/images/logo.png"
                alt="Logo del Estudio Jurídico Mediador"
                width={112}
                height={112}
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                showBackground={false}
              />
            </div>
            {/* Efecto de brillo sutil */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>

        {/* Enlaces de navegación */}
        <NavLinksContent className="items-center space-y-1" />
        
        {/* Información de contacto rápido (opcional) */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 font-medium">
              Consulta Gratuita
            </p>
            <p className="text-xs text-gray-500">
              Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
        </div>
      </div>
    </header>
  );
}