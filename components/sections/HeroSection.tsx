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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32 bg-primary-100">
      
      {/* Floating Images + Testimonials (DAHINTER + DAVOR) */}
      <div className="absolute inset-0 z-0">
        
        {/* DESKTOP: 6 images in circle + 1 center behind blur */}
        <div className="hidden md:block">
          {/* Top (12 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
            alt="Modern House"
            position={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
            size="md"
            delay={0}
            speed="slow"
            parallaxSpeed={0.3}
          />
          
          {/* Top-Right (2 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" 
            alt="Luxury Interior"
            position={{ top: '15%', right: '10%' }}
            size="sm"
            delay={2}
            speed="normal"
            parallaxSpeed={0.5}
          />
          
          {/* Bottom-Right (4 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop" 
            alt="Real Estate Property"
            position={{ bottom: '15%', right: '10%' }}
            size="lg"
            delay={4}
            speed="fast"
            parallaxSpeed={0.4}
          />
          
          {/* Bottom (6 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
            alt="Apartment View"
            position={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}
            size="md"
            delay={3}
            speed="slow"
            parallaxSpeed={0.3}
          />
          
          {/* Bottom-Left (8 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop" 
            alt="Cozy Living Room"
            position={{ bottom: '15%', left: '10%' }}
            size="sm"
            delay={1}
            speed="normal"
            parallaxSpeed={0.5}
          />
          
          {/* Top-Left (10 o'clock) */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&h=750&fit=crop" 
            alt="Elegant Home"
            position={{ top: '15%', left: '10%' }}
            size="lg"
            delay={5}
            speed="fast"
            parallaxSpeed={0.4}
          />
          
          {/* CENTER BEHIND BLUR (z-index -1, größtes Bild) */}
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
        
        {/* MOBILE: 4 images closer to center (smaller circle) */}
        <div className="block md:hidden">
          {/* Top */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
            alt="Modern House"
            position={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
            size="sm"
            delay={0}
            speed="slow"
            parallaxSpeed={0.3}
          />
          
          {/* Right */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" 
            alt="Luxury Interior"
            position={{ top: '50%', right: '5%', transform: 'translateY(-50%)' }}
            size="sm"
            delay={2}
            speed="normal"
            parallaxSpeed={0.4}
          />
          
          {/* Bottom */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop" 
            alt="Real Estate Property"
            position={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
            size="sm"
            delay={4}
            speed="fast"
            parallaxSpeed={0.3}
          />
          
          {/* Left */}
          <FloatingImage 
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
            alt="Apartment View"
            position={{ top: '50%', left: '5%', transform: 'translateY(-50%)' }}
            size="sm"
            delay={3}
            speed="slow"
            parallaxSpeed={0.4}
          />
        </div>
        
        {/* DESKTOP: All 4 Testimonials */}
        <div className="hidden sm:block">
          <TestimonialBubble 
            text="12 fotos hochgeladen"
            position={{ top: '20%', right: '10%' }}
            icon={<Camera className="w-4 h-4" />}
            delay={1}
            parallaxSpeed={0.3}
          />
          
          <TestimonialBubble 
            text="Entdecke uns 1:32"
            position={{ bottom: '30%', right: '15%' }}
            icon={<Play className="w-4 h-4" />}
            delay={4}
            parallaxSpeed={0.4}
          />
          
          <TestimonialBubble 
            text="In 5 Minuten online"
            position={{ top: '30%', left: '10%' }}
            icon={<Clock className="w-4 h-4" />}
            delay={2}
            parallaxSpeed={0.35}
          />
          
          <TestimonialBubble 
            text="Maximaler Preis"
            position={{ bottom: '20%', left: '15%' }}
            icon={<TrendingUp className="w-4 h-4" />}
            delay={3}
            parallaxSpeed={0.25}
          />
        </div>
        
        {/* MOBILE: Only 2 Testimonials */}
        <div className="block sm:hidden">
          <TestimonialBubble 
            text="12 fotos hochgeladen"
            position={{ top: '20%', right: '5%' }}
            icon={<Camera className="w-3 h-3" />}
            delay={1}
            parallaxSpeed={0.3}
          />
          
          <TestimonialBubble 
            text="Entdecke uns"
            position={{ bottom: '20%', left: '5%' }}
            icon={<Play className="w-3 h-3" />}
            delay={3}
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
