import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";

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
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Hero Background Placeholder</span>
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wide leading-tight mb-6 max-w-4xl mx-auto">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 font-light">
            {subheadline}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6">
                {ctaPrimary.text}
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20 hover:text-white"
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
