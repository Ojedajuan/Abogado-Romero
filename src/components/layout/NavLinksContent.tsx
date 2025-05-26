
// src/app/components/NavLinksContent.tsx
'use client'

import React from 'react';
import Link from 'next/link';

export const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#expertise', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
];

export const NavLinksContent = ({ className }: { className?: string }) => {
  return (
    <nav className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ${className || ''}`}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          aria-label={link.label}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};