import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 lg:py-40 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
         {/* Placeholder for a subtle background pattern or image if desired */}
      </div>
      <div className="container mx-auto px-4 md:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 animate-fade-in-down font-sans">
          Expert Legal Counsel, Proven Results.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-in-up">
          Navigating complex legal landscapes with precision and dedication. Trust us to champion your cause and achieve the best possible outcome.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="#contact">
              Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="#case-studies">
              Explore Our Cases
            </Link>
          </Button>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

// Add some simple keyframes for animations if not already in globals/tailwind config
// For this example, assuming these utility classes would be defined in globals.css or via a plugin
// e.g. @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fade-in-down { animation: fadeInDown 0.5s ease-out forwards; }
// Similar for animate-fade-in-up
// .animation-delay-300 { animation-delay: 0.3s; }
