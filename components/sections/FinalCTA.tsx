import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";

interface FinalCTAProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaHref: string;
}

export default function FinalCTA({ headline, subheadline, ctaText, ctaHref }: FinalCTAProps) {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: 'rgb(255 107 107)' }}>
      <Container>
        <div className="text-center text-white">
          <h2 className="text-h2 text-white mb-6">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-body-lg mb-8 max-w-2xl mx-auto text-white/90">
              {subheadline}
            </p>
          )}
          <Link href={ctaHref}>
            <Button size="lg" variant="outline" className="bg-white text-[rgb(255,107,107)] hover:bg-gray-50 border-0 text-base px-8 py-6 font-semibold">
              {ctaText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
