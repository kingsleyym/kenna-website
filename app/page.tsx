import HeroSection from "@/components/sections/HeroSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceCards from "@/components/sections/ServiceCards";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/content/services";
import { processSteps } from "@/lib/content/process";
import { faqs } from "@/lib/content/faqs";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Hausverkauf für Privatverkäufer"
        subheadline="Verkaufen Sie Ihre Immobilie professionell und stressfrei – ohne Maklerprovision"
        ctaPrimary={{ text: "Jetzt Paket wählen", href: "#pakete" }}
        ctaSecondary={{ text: "Mehr erfahren", href: "/prozess" }}
      />
      <ProblemStatement />
      
      {/* Mission Statement Section */}
      <section className="py-16 md:py-24 bg-beige-light">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Mehr Fairness, mehr Transparenz, weniger Kosten
          </h2>
          
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3 text-coral">
                DEKRA-zertifiziert
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Als DEKRA-zertifizierter Sachverständiger bringe ich professionelle 
                Expertise und jahrelange Erfahrung mit – ohne die überhöhten Kosten 
                klassischer Makler.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3 text-coral">
                Ihre Expertise zählt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sie kennen Ihre Immobilie besser als jeder Makler. Ich liefere die 
                technische Unterstützung – Sie behalten die Kontrolle über den Verkauf.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3 text-coral">
                Gemeinsam zum Ziel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Statt Sie zu ersetzen, unterstütze ich Sie mit modernster Technologie 
                und professionellem Know-how – als Partner auf Augenhöhe.
              </p>
            </div>
          </div>
          
          {/* Secondary Text */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              Niemand kennt Ihr Zuhause so gut wie Sie selbst.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deshalb kombinieren wir Ihre persönliche Expertise mit meiner 
              technischen Unterstützung – für einen Verkauf, der fair, transparent 
              und erfolgreich ist.
            </p>
          </div>
        </div>
      </section>
      
      <ProcessSteps steps={processSteps} />
      <div id="pakete">
        <ServiceCards services={services} />
      </div>
      
      {/* Pricing Table Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Pakete im direkten Vergleich
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Alle Leistungen auf einen Blick – finden Sie das passende Paket für Ihre Bedürfnisse
          </p>
          
          {/* Desktop: Table, Mobile: Stacked */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-6 py-4 text-left font-semibold">Leistung</th>
                  <th className="px-6 py-4 text-center font-semibold">Kurzfilm<br/><span className="text-sm font-normal text-gray-300">750€</span></th>
                  <th className="px-6 py-4 text-center font-semibold bg-coral">Großes Kino<br/><span className="text-sm font-normal text-white/80">1.500€</span></th>
                  <th className="px-6 py-4 text-center font-semibold">Blockbuster<br/><span className="text-sm font-normal text-gray-300">Auf Anfrage</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Professionelle Fotos</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">✓</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">360° Virtuelle Tour</td>
                  <td className="px-6 py-3 text-center text-gray-400">—</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">✓</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Drohnenaufnahmen</td>
                  <td className="px-6 py-3 text-center text-gray-400">—</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">✓</td>
                  <td className="px-6 py-3 text-center text-green-600">✓ Erweitert</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Digitales Homestaging</td>
                  <td className="px-6 py-3 text-center text-gray-400">—</td>
                  <td className="px-6 py-3 text-center text-gray-400 bg-coral/5">—</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Exposé-Erstellung</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">✓ Premium</td>
                  <td className="px-6 py-3 text-center text-green-600">✓ Premium</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Portal-Veröffentlichung</td>
                  <td className="px-6 py-3 text-center text-gray-400">Optional</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">✓</td>
                  <td className="px-6 py-3 text-center text-green-600">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-3 font-medium">Persönliche Beratung</td>
                  <td className="px-6 py-3 text-center text-green-600">1 Termin</td>
                  <td className="px-6 py-3 text-center text-green-600 bg-coral/5">Laufend</td>
                  <td className="px-6 py-3 text-center text-green-600">Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/preise" 
              className="inline-block bg-coral text-white font-semibold px-8 py-3 rounded-full hover:bg-coral-dark transition-colors"
            >
              Preise im Detail ansehen
            </a>
          </div>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-20 md:py-32 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Berechnen Sie Ihre Ersparnis
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Bei einem Verkaufspreis von 500.000 € sparen Sie mit Kenna bis zu <strong className="text-coral">28.500 €</strong> im Vergleich zu einem klassischen Makler (6% Provision).
          </p>
          
          {/* Placeholder für späteren Calculator */}
          <div className="bg-charcoal-light rounded-3xl p-8 md:p-12 mb-8">
            <div className="mb-6">
              <label className="block text-left mb-2 text-sm font-medium text-gray-300">
                Geschätzter Verkaufspreis Ihrer Immobilie
              </label>
              <div className="bg-white text-charcoal rounded-lg px-4 py-3 text-left">
                <span className="text-2xl font-bold">500.000 €</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-1">Klassischer Makler (6%)</div>
                <div className="text-3xl font-bold text-red-400">30.000 €</div>
              </div>
              
              <div className="bg-green-500/10 border-2 border-green-500 rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-1">Kenna (Großes Kino)</div>
                <div className="text-3xl font-bold text-green-400">1.500 €</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-coral to-coral-light rounded-xl p-4">
              <div className="text-sm mb-1">Ihre Ersparnis</div>
              <div className="text-4xl font-bold">28.500 €</div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-6">
            * Beispielrechnung. Tatsächliche Ersparnis abhängig von Verkaufspreis und gewähltem Paket.
          </p>
          
          <a 
            href="/preise" 
            className="inline-block bg-coral text-white font-semibold px-8 py-4 rounded-full hover:bg-coral-light transition-colors"
          >
            Detaillierte Preisübersicht
          </a>
        </div>
      </section>
      
      <FAQAccordion faqs={faqs} />
      
      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tipps & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wertvolle Informationen rund um den erfolgreichen Immobilienverkauf
            </p>
          </div>
          
          {/* 3 Blog Post Cards (Placeholder) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-coral-light to-coral"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">5. Februar 2026</div>
                <h3 className="text-xl font-bold mb-3">
                  10 Fehler beim Immobilienverkauf und wie Sie sie vermeiden
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Die häufigsten Stolpersteine beim Privatverkauf – und wie Sie mit der richtigen Vorbereitung Zeit und Geld sparen.
                </p>
                <a href="/blog" className="text-coral font-semibold hover:text-coral-dark transition-colors">
                  Artikel lesen →
                </a>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-beige to-beige-dark"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">28. Januar 2026</div>
                <h3 className="text-xl font-bold mb-3">
                  Homestaging: Lohnt sich die Investition?
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Digitales vs. physisches Homestaging – eine Kosten-Nutzen-Analyse für Privatverkäufer.
                </p>
                <a href="/blog" className="text-coral font-semibold hover:text-coral-dark transition-colors">
                  Artikel lesen →
                </a>
              </div>
            </article>
            
            {/* Card 3 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-charcoal-light to-charcoal"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">15. Januar 2026</div>
                <h3 className="text-xl font-bold mb-3">
                  Der perfekte Verkaufspreis: So ermitteln Sie ihn richtig
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Marktanalyse, Vergleichswerte und psychologische Preisgestaltung – ein Leitfaden.
                </p>
                <a href="/blog" className="text-coral font-semibold hover:text-coral-dark transition-colors">
                  Artikel lesen →
                </a>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-block border-2 border-charcoal text-charcoal font-semibold px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all"
            >
              Alle Artikel ansehen
            </a>
          </div>
        </div>
      </section>
      
      <FinalCTA
        headline="Bereit für den Verkauf?"
        subheadline="Lassen Sie uns gemeinsam Ihre Immobilie erfolgreich vermarkten"
        ctaText="Jetzt Kontakt aufnehmen"
        ctaHref="/kontakt"
      />
    </>
  );
}
