import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Unsere Leistungen | Kenna Immobilien-Visualisierung",
  description:
    "Drei Pakete für jeden Bedarf: Kurzfilm, Großes Kino, Blockbuster. Professionelle Immobilien-Visualisierung ohne Maklerprovision.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Unsere Leistungen"
        subheadline="Professionelle Immobilien-Visualisierung für jeden Bedarf – transparent und fair"
        ctaPrimary={{ text: "Paket wählen", href: "#pakete" }}
        ctaSecondary={{ text: "Kontakt aufnehmen", href: "/kontakt" }}
      />

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Wir bieten Ihnen flexible Pakete, die genau auf Ihre Bedürfnisse
            zugeschnitten sind. Vom kompakten Fotografie-Paket bis zur
            umfassenden Rundum-Betreuung – Sie entscheiden, wie viel
            Unterstützung Sie benötigen.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <div id="pakete">
        <ServiceCards services={services} />
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Warum Kenna?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-coral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                DEKRA-zertifiziert
              </h3>
              <p className="text-gray-600">
                Professionelle Expertise mit offizieller Zertifizierung
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-coral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Transparente Preise
              </h3>
              <p className="text-gray-600">
                Keine versteckten Kosten – Sie wissen genau, was Sie bezahlen
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-coral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Moderne Technologie
              </h3>
              <p className="text-gray-600">
                360° Touren, Homestaging, Drohnenaufnahmen – State of the Art
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        headline="Welches Paket passt zu Ihnen?"
        subheadline="Lassen Sie uns gemeinsam das perfekte Angebot für Ihre Immobilie finden"
        ctaText="Jetzt beraten lassen"
        ctaHref="/kontakt"
      />
    </>
  );
}
