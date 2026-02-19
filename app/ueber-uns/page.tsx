import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Über Uns | Kenna Immobilien-Visualisierung",
  description:
    "Professionelle Immobilien-Visualisierung mit Herz und Verstand. Lernen Sie das Team hinter Kenna kennen.",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Über Kenna"
        subheadline="Professionelle Immobilien-Visualisierung mit Herz und Verstand"
        ctaPrimary={{ text: "Jetzt kennenlernen", href: "/kontakt" }}
        ctaSecondary={{ text: "Unsere Leistungen", href: "/leistungen" }}
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Kenna steht für moderne, transparente und faire Immobilienvermarktung.
              Wir glauben, dass Privatverkäufer nicht 6-7% Maklerprovision zahlen
              sollten, um ihre Immobilie professionell zu präsentieren.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Unsere Mission ist es, Ihnen alle Tools und Dienstleistungen an die
              Hand zu geben, die Sie für einen erfolgreichen Verkauf benötigen –
              ohne die überhöhten Kosten traditioneller Makler. Sie behalten die
              Kontrolle, wir liefern die Expertise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mit modernster Technologie (360° Touren, Drohnenaufnahmen, digitales
              Homestaging) und jahrelanger Erfahrung im Immobilienbereich helfen wir
              Ihnen, Ihre Immobilie ins beste Licht zu rücken – professionell,
              effizient und transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-primary-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Was uns auszeichnet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 text-center">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparenz</h3>
              <p className="text-gray-600">
                Keine versteckten Kosten, keine Überraschungen. Sie wissen immer
                genau, was Sie bezahlen und wofür.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2">Technologie</h3>
              <p className="text-gray-600">
                Modernste Tools und Methoden: 360° Touren, Drohnenaufnahmen,
                digitales Homestaging.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              <h3 className="text-xl font-semibold mb-2">Fairness</h3>
              <p className="text-gray-600">
                Faire Preise statt überhöhter Provisionen. Sie sparen tausende
                Euro.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kontrolle</h3>
              <p className="text-gray-600">
                Sie behalten die volle Kontrolle über den Verkaufsprozess. Niemand
                kennt Ihr Zuhause besser als Sie.
              </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
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
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                DEKRA-zertifizierter Sachverständiger und jahrelange Erfahrung im
                Immobilienbereich.
              </p>
            </div>

            {/* Value 6 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Leidenschaft</h3>
              <p className="text-gray-600">
                Wir lieben, was wir tun. Jede Immobilie ist einzigartig – und das
                zeigen wir in unserer Arbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Unser Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Team Member Photo */}
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-gray-400 text-lg">Teamfoto Platzhalter</span>
              </div>
            </div>

            {/* Team Member Info */}
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-2">[Name]</h3>
              <p className="text-xl text-coral-500 font-semibold mb-6">
                Geschäftsführer & DEKRA-zertifizierter Sachverständiger D1
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mit über [X] Jahren Erfahrung in der Immobilienbranche und einer
                DEKRA-Zertifizierung als Sachverständiger bringe ich nicht nur
                technisches Know-how, sondern auch ein tiefes Verständnis für den
                Markt mit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mein Ziel: Privatverkäufern die gleichen professionellen Tools und
                Dienstleistungen zu bieten wie großen Maklern – aber zu fairen
                Preisen und mit voller Transparenz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary-200">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Zertifizierungen & Qualifikationen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cert 1 */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-gold-600"
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
                DEKRA-zertifizierter Sachverständiger D1
              </h3>
              <p className="text-gray-600">
                Offizielle Zertifizierung für Immobilienbewertung und
                Marktanalyse.
              </p>
            </div>

            {/* Cert 2 (Placeholder) */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Immobilienfachwirt (IHK)
              </h3>
              <p className="text-gray-600">
                Fundierte Ausbildung in allen Aspekten der Immobilienwirtschaft.
              </p>
            </div>

            {/* Cert 3 (Placeholder) */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professionelle Fotografie
              </h3>
              <p className="text-gray-600">
                Langjährige Erfahrung in Immobilienfotografie und -visualisierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        headline="Lernen Sie uns kennen"
        subheadline="Buchen Sie ein kostenloses Erstgespräch und überzeugen Sie sich selbst von unserer Expertise"
        ctaText="Jetzt Termin vereinbaren"
        ctaHref="/kontakt"
      />
    </>
  );
}
