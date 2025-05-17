
'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#expertise', label: 'Experiencia' },
  { href: '#case-studies', label: 'Casos de Estudio' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#brief-generator', label: 'Herramienta IA Informes' },
  { href: '#contact', label: 'Contacto' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const NavLinksContent = ({ className }: { className?: string }) => (
    <nav className={cn("flex flex-col md:flex-row md:items-center gap-4 md:gap-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={handleLinkClick}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          aria-label={link.label}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="LawPortfolio Inicio">
          <Scale className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary font-sans">LawPortfolio</span>
        </Link>

        <div className="hidden md:flex">
          <NavLinksContent />
        </div>
        
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <SheetTitle asChild>
                    <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick} aria-label="LawPortfolio Inicio">
                      <Scale className="h-6 w-6 text-primary" />
                      <span className="text-lg font-bold text-primary font-sans">LawPortfolio</span>
                    </Link>
                  </SheetTitle>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Cerrar menú de navegación">
                        <X className="h-5 w-5" />
                      </Button>
                  </SheetClose>
                </div>
                {/* You can add an invisible SheetDescription for more context if needed, e.g.
                <SheetDescription className="sr-only">Menú de navegación principal</SheetDescription> 
                */}
              </SheetHeader>
              <div className="mt-6"> {/* Added margin top for spacing after header */}
                <NavLinksContent className="items-start" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
