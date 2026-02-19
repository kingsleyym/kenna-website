import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { processSteps } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Unser Prozess | Kenna Immobilien-Visualisierung",
  description:
    "In 7 strukturierten Schritten zum erfolgreichen Immobilienverkauf. Transparent, effizient und mit Ihrer Kontrolle.",
};

export default function ProzessPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Unser Prozess"
        subheadline="In 7 strukturierten Schritten zum erfolgreichen Immobilienverkauf"
        ctaPrimary={{ text: "Jetzt starten", href: "/kontakt" }}
        ctaSecondary={{ text: "Pakete ansehen", href: "/leistungen" }}
      />

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Ein erfolgreicher Immobilienverkauf ist kein Zufall. Mit unserem
            bewährten 7-Schritte-Prozess begleiten wir Sie professionell von der
            ersten Idee bis zum signierten Kaufvertrag – transparent, strukturiert
            und mit Ihrer vollen Kontrolle.
          </p>
        </div>
      </section>

      {/* 7 Steps Timeline */}
      <section className="py-20 bg-primary-200">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-coral-400 to-coral-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  {step.details && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
                        Was passiert in diesem Schritt:
                      </p>
                      <p className="text-gray-600">{step.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Warum unser Prozess funktioniert
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="text-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent</h3>
              <p className="text-gray-600">
                Sie wissen immer, wo Sie stehen. Keine Überraschungen, kein
                Kleingedrucktes.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strukturiert</h3>
              <p className="text-gray-600">
                Jeder Schritt baut auf dem vorherigen auf. Bewährt in dutzenden
                erfolgreichen Verkäufen.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Erfolgsorientiert</h3>
              <p className="text-gray-600">
                Optimiert für maximale Sichtbarkeit und qualifizierte
                Interessenten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Placeholder) */}
      <section className="py-20 bg-dark-700 text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <svg
              className="w-16 h-16 text-coral-400 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-2xl font-light leading-relaxed mb-6 italic">
            &ldquo;Der strukturierte Prozess hat uns geholfen, unsere Immobilie in nur
            4 Wochen zu verkaufen – und das zu unserem Wunschpreis. Wir wussten
            immer, was als nächstes kommt.&rdquo;
          </p>
          <p className="text-gray-400">
            — Familie Müller, Eigentümer einer 180m² Doppelhaushälfte
          </p>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA
        headline="Lassen Sie uns starten"
        subheadline="Buchen Sie Ihr kostenloses Erstgespräch und starten Sie Ihren erfolgreichen Verkaufsprozess"
        ctaText="Erstgespräch vereinbaren"
        ctaHref="/kontakt"
      />
    </>
  );
}
