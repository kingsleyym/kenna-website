import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Transparente Preise | Kenna Immobilien-Visualisierung",
  description:
    "Faire Preise ohne versteckte Kosten. Vergleichen Sie unsere Pakete und sparen Sie gegenüber klassischen Maklern.",
};

export default function PreisePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        headline="Transparente Preise"
        subheadline="Keine versteckten Kosten, keine Überraschungen – nur faire Konditionen"
        ctaPrimary={{ text: "Jetzt Paket wählen", href: "#pakete" }}
        ctaSecondary={{ text: "Kostenlose Beratung", href: "/kontakt" }}
      />

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Klassische Makler verlangen oft <strong>6-7% Provision</strong> vom
            Verkaufspreis. Bei einer Immobilie für 500.000 € sind das über{" "}
            <strong>30.000 €</strong>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Mit Kenna zahlen Sie nur für die Leistungen, die Sie wirklich
            benötigen – und sparen dabei erheblich.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <div id="pakete">
        <ServiceCards services={services} />
      </div>

      {/* Comparison Section */}
      <section className="py-20 bg-primary-200">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Vergleich: Kenna vs. Klassischer Makler
          </h2>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      Leistung
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Kenna
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">
                      Klassischer Makler
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Professionelle Fotos
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">360° Tour</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">
                      Selten
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Digitales Homestaging
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">
                      Selten
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Exposé-Erstellung
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Veröffentlichung auf Portalen
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      ✓
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Besichtigungen selbst durchführen
                    </td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">
                      Sie entscheiden
                    </td>
                    <td className="px-6 py-4 text-center text-red-500 font-semibold">
                      Nein
                    </td>
                  </tr>
                  <tr className="bg-primary-100">
                    <td className="px-6 py-4 font-bold">
                      Kosten (500.000 € Immobilie)
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-2xl font-bold text-coral-500">
                        750 € - 1.500 €
                      </div>
                      <div className="text-sm text-gray-600">Festpreis</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-2xl font-bold text-red-500">
                        ~30.000 €
                      </div>
                      <div className="text-sm text-gray-600">6% Provision</div>
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-bold text-green-700">
                      Ihre Ersparnis
                    </td>
                    <td
                      colSpan={2}
                      className="px-6 py-4 text-center text-3xl font-bold text-green-600"
                    >
                      bis zu 28.500 €
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Teaser */}
      <section className="py-20 bg-dark-700 text-white">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ihre individuelle Ersparnis berechnen</h2>
          <p className="text-lg text-gray-300 mb-8">
            Nutzen Sie unseren Preis-Rechner, um zu sehen, wie viel Sie im
            Vergleich zu einem klassischen Makler sparen können.
          </p>
          <Link
            href="/#rechner"
            className="inline-block bg-coral-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-coral-600 transition-all"
          >
            Zum Rechner
          </Link>
        </div>
      </section>

      {/* FAQ Pricing-specific */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Häufige Fragen zu unseren Preisen
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-primary-100 rounded-2xl p-6">
              <summary className="font-semibold text-lg cursor-pointer">
                Gibt es versteckte Kosten?
              </summary>
              <p className="mt-4 text-gray-600">
                Nein. Alle Preise sind transparent aufgelistet. Die einzigen
                zusätzlichen Kosten sind die Inseratskosten bei Paket 2, die
                wir 1:1 weitergeben (kein Aufschlag).
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-primary-100 rounded-2xl p-6">
              <summary className="font-semibold text-lg cursor-pointer">
                Was ist mit den Inseratskosten?
              </summary>
              <p className="mt-4 text-gray-600">
                Bei Paket 2 (&quot;Großes Kino&quot;) kommen die Inseratskosten für
                Plattformen wie Immobilienscout24 hinzu. Diese variieren je nach
                Paket (ca. 200-400 €) und werden von uns transparent
                weitergegeben.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-primary-100 rounded-2xl p-6">
              <summary className="font-semibold text-lg cursor-pointer">
                Kann ich einzelne Leistungen buchen?
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, wir bieten auch Einzelleistungen wie Fotografie,
                Drohnenaufnahmen oder Homestaging an. Kontaktieren Sie uns für
                ein individuelles Angebot.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-primary-100 rounded-2xl p-6">
              <summary className="font-semibold text-lg cursor-pointer">
                Wie zahle ich?
              </summary>
              <p className="mt-4 text-gray-600">
                Die Zahlung erfolgt per Rechnung. Bei Paket 1 vorab, bei Paket
                2 und 3 nach Absprache (z.B. 50% Anzahlung, 50% nach
                Fertigstellung).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
