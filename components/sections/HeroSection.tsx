import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { FloatingImage } from "@/components/ui/FloatingImage";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      {/* Floating Images */}
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" 
        alt="Modern Architecture Visualization 1"
        position={{ top: '10%', left: '5%' }}
        size="sm"
        delay={0}
      />
      
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" 
        alt="House Exterior Visualization 2"
        position={{ top: '15%', right: '8%' }}
        size="md"
        delay={1.5}
        speed="slow"
      />
      
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=750&fit=crop" 
        alt="Interior Design Visualization 3"
        position={{ bottom: '20%', left: '10%' }}
        size="lg"
        delay={3}
      />
      
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop" 
        alt="Real Estate Visualization 4"
        position={{ bottom: '15%', right: '15%' }}
        size="sm"
        delay={2}
        speed="slow"
      />
      
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop" 
        alt="Modern Home Visualization 5"
        position={{ top: '50%', left: '3%' }}
        size="md"
        delay={4}
      />
      
      <FloatingImage 
        src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop" 
        alt="Luxury Property Visualization 6"
        position={{ top: '40%', right: '5%' }}
        size="md"
        delay={2.5}
      />

      {/* Center Content with higher z-index */}
      <Container className="relative z-10 text-center">
        <h1 className="text-h1-hero text-dark-700 mb-6 max-w-5xl mx-auto drop-shadow-sm">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-body-lg text-dark-500 mb-10 max-w-3xl mx-auto">
            {subheadline}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                {ctaPrimary.text}
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base px-8 py-6 border-2 border-dark-700 text-dark-700 hover:bg-dark-700 hover:text-white transition-all"
              >
                {ctaSecondary.text}
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
