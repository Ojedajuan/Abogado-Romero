// components/ImageWithFallback.tsx
'use client'

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  showBackground?: boolean; // Nueva prop para controlar el fondo
};

export default function ImageWithFallback({ 
  src, 
  alt, 
  width = 100, 
  height = 100, 
  className = "",
  showBackground = false // Por defecto sin fondo
}: Props) {
  const [hasError, setHasError] = useState(false);

    if (hasError) {
      return (
        <div className={`bg-primary text-primary-foreground flex items-center justify-center ${className}`}>
          <span className="text-sm font-bold">EJM</span>
        </div>
      );
    }
  
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => setHasError(true)}
        style={showBackground ? { backgroundColor: '#f0f0f0' } : undefined}
      />
    );
  }