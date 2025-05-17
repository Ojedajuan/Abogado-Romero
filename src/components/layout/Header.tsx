
'use client';

import Link from 'next/link';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
        <Link href="/" className="flex items-center gap-2" aria-label="Asesor Legal">
          <Scale className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary font-sans">Asesor Legal</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLinksContent />
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://placehold.co/40x40.png" alt="Foto del profesional" data-ai-hint="professional portrait" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                    <Menu className="h-6 w-6" />
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0 pt-6">
                    <SheetHeader className="px-6 pb-4 border-b">
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
                    </SheetHeader>
                    <div className="mt-6 flex flex-col items-center space-y-6 px-6"> {/* Added padding to content area */}
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://placehold.co/80x80.png" alt="Foto del profesional" data-ai-hint="professional portrait" />
                            <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <NavLinksContent className="items-center" />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
