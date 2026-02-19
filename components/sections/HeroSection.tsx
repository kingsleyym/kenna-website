import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { FloatingImage } from "@/components/ui/FloatingImage";
import { TestimonialBubble } from "@/components/ui/TestimonialBubble";
import { Camera, Star, MapPin, Play, Clock, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

export default function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center overflow-x-hidden py-24 md:py-32 bg-primary-100">
      
      {/* Floating Images + Testimonials (DAHINTER + DAVOR) */}
      <div className="absolute inset-0 z-0">
        
        {/* CENTER IMAGE - NUR auf Tiny Mobile (< 640px) */}
        <div className="block sm:hidden">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=900&fit=crop" 
            alt="Beautiful Property"
            position={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            size="xl"
            delay={0}
            speed="slow"
            parallaxSpeed={0.2}
            zIndex={-1}
          />
        </div>
        
        {/* IMAGE 1 - Top (sichtbar ab sm = 640px+) */}
        <div className="hidden sm:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
            alt="Modern House"
            position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
            size="md"
            delay={0}
            speed="slow"
            parallaxSpeed={0.3}
          />
        </div>
        
        {/* IMAGE 2 - Right (sichtbar ab sm = 640px+) */}
        <div className="hidden sm:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" 
            alt="Luxury Interior"
            position={{ top: '50%', right: '8%', transform: 'translateY(-50%)' }}
            size="sm"
            delay={2}
            speed="normal"
            parallaxSpeed={0.5}
          />
        </div>
        
        {/* IMAGE 3 - Bottom (sichtbar ab md = 768px+) */}
        <div className="hidden md:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop" 
            alt="Real Estate Property"
            position={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
            size="lg"
            delay={4}
            speed="fast"
            parallaxSpeed={0.4}
          />
        </div>
        
        {/* IMAGE 4 - Left (sichtbar ab md = 768px+) */}
        <div className="hidden md:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
            alt="Apartment View"
            position={{ top: '50%', left: '8%', transform: 'translateY(-50%)' }}
            size="sm"
            delay={3}
            speed="slow"
            parallaxSpeed={0.4}
          />
        </div>
        
        {/* IMAGE 5 - Top-Right (sichtbar ab lg = 1024px+) */}
        <div className="hidden lg:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop" 
            alt="Top Right Property"
            position={{ top: '15%', right: '10%' }}
            size="md"
            delay={1}
            speed="normal"
            parallaxSpeed={0.5}
          />
        </div>
        
        {/* IMAGE 6 - Bottom-Left (sichtbar ab xl = 1280px+) */}
        <div className="hidden xl:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&h=750&fit=crop" 
            alt="Bottom Left Property"
            position={{ bottom: '15%', left: '10%' }}
            size="lg"
            delay={5}
            speed="fast"
            parallaxSpeed={0.4}
          />
        </div>
        
        {/* IMAGE 7 - Top-Left (sichtbar ab 2xl = 1536px+) */}
        <div className="hidden 2xl:block">
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop" 
            alt="Top Left Property"
            position={{ top: '15%', left: '10%' }}
            size="md"
            delay={6}
            speed="slow"
            parallaxSpeed={0.3}
          />
        </div>
        
        {/* TESTIMONIAL 1 - Immer sichtbar */}
        <TestimonialBubble 
          text="12 fotos hochgeladen"
          position={{ top: '20%', right: '5%' }}
          icon={<Camera className="w-3 h-3 sm:w-4 sm:h-4" />}
          delay={1}
          parallaxSpeed={0.3}
        />
        
        {/* TESTIMONIAL 2 - Ab sm sichtbar (640px+) */}
        <div className="hidden sm:block">
          <TestimonialBubble 
            text="In 5 Minuten online"
            position={{ top: '30%', left: '10%' }}
            icon={<Clock className="w-4 h-4" />}
            delay={2}
            parallaxSpeed={0.35}
          />
        </div>
        
        {/* TESTIMONIAL 3 - Ab md sichtbar (768px+) */}
        <div className="hidden md:block">
          <TestimonialBubble 
            text="Maximaler Preis"
            position={{ bottom: '20%', left: '15%' }}
            icon={<TrendingUp className="w-4 h-4" />}
            delay={3}
            parallaxSpeed={0.25}
          />
        </div>
        
        {/* TESTIMONIAL 4 - Ab lg sichtbar (1024px+) */}
        <div className="hidden lg:block">
          <TestimonialBubble 
            text="Entdecke uns 1:32"
            position={{ bottom: '30%', right: '15%' }}
            icon={<Play className="w-4 h-4" />}
            delay={4}
            parallaxSpeed={0.4}
          />
        </div>
        
      </div>
      
      {/* Glasmorphism Card - RESPONSIVE! */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Blur Background (weiche Ränder, KEIN Shadow!) - RESPONSIVE! */}
        <div 
          className="absolute inset-[-20px] sm:inset-[-30px] md:inset-[-40px] bg-white/30 backdrop-blur-2xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" 
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 text-center">
          {/* RESPONSIVE TEXT: 30px → 60px */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-dark-700 mb-6">
            {headline}
          </h1>
          
          {subheadline && (
            <p className="text-base sm:text-lg md:text-xl text-dark-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
          
          {/* BUTTONS: Full-width stacked on Mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {ctaPrimary && (
              <Link href={ctaPrimary.href}>
                <Button size="lg" className="px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                  {ctaPrimary.text}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                  {ctaSecondary.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
    </section>
  );
}
