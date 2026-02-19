import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { FloatingImage } from "@/components/ui/FloatingImage";
import { TestimonialBubble } from "@/components/ui/TestimonialBubble";
import { Camera, Star, MapPin, Play } from "lucide-react";

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
        {/* Floating Images */}
        <FloatingImage 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
          alt="Modern House"
          position={{ top: '10%', left: '5%' }}
          size="md"
          delay={0}
          speed="slow"
          parallaxSpeed={0.15}
        />
        
        <FloatingImage 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" 
          alt="Luxury Interior"
          position={{ top: '20%', right: '8%' }}
          size="sm"
          delay={2}
          speed="normal"
          parallaxSpeed={0.25}
        />
        
        <FloatingImage 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop" 
          alt="Real Estate Property"
          position={{ bottom: '15%', left: '10%' }}
          size="lg"
          delay={4}
          speed="fast"
          parallaxSpeed={0.1}
        />
        
        <FloatingImage 
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop" 
          alt="Apartment View"
          position={{ bottom: '25%', right: '12%' }}
          size="md"
          delay={3}
          speed="slow"
          parallaxSpeed={0.2}
        />
        
        {/* Testimonial Chat-Blasen */}
        <TestimonialBubble 
          text="12 fotos werden hochgeladen"
          position={{ top: '15%', right: '10%' }}
          icon={<Camera className="w-4 h-4" />}
          delay={1}
          parallaxSpeed={0.3}
        />
        
        <TestimonialBubble 
          text="Visuell geliebt | Shooting Nr. 0012"
          position={{ top: '25%', left: '8%' }}
          icon={<Star className="w-4 h-4" />}
          delay={2}
          parallaxSpeed={0.35}
        />
        
        <TestimonialBubble 
          text="Wohnung 2, Etage Vermietet"
          position={{ bottom: '20%', left: '12%' }}
          icon={<MapPin className="w-4 h-4" />}
          delay={3}
          parallaxSpeed={0.25}
        />
        
        <TestimonialBubble 
          text="Entdecke uns 1:32"
          position={{ bottom: '30%', right: '15%' }}
          icon={<Play className="w-4 h-4" />}
          delay={4}
          parallaxSpeed={0.4}
        />
      </div>
      
      {/* Glasmorphism Card - KRITISCH! */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        {/* Blur Background (weiche Ränder, KEIN Shadow!) */}
        <div 
          className="absolute inset-[-40px] bg-white/30 backdrop-blur-2xl rounded-[60px]" 
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-dark-700 mb-6">
            {headline}
          </h1>
          
          {subheadline && (
            <p className="text-xl text-dark-500 mb-8 leading-relaxed max-w-2xl mx-auto">
              {subheadline}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaPrimary && (
              <Link href={ctaPrimary.href}>
                <Button size="lg" className="px-8 py-3">
                  {ctaPrimary.text}
                </Button>
              </Link>
            )}
            {ctaSecondary && (
              <Link href={ctaSecondary.href}>
                <Button size="lg" variant="outline" className="px-8 py-3">
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
