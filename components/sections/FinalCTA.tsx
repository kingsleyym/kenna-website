import Container from "@/components/layout/Container";
import Link from "next/link";
import { Shield, Clock, Euro } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-beige-50" data-parallax="1">
      <Container>
        {/* Glassmorphic CTA Box */}
        <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-8 md:p-12 border border-white/40 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark-700 mb-4">
              Bereit für Ihren erfolgreichen Immobilienverkauf?
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Starten Sie jetzt und sparen Sie tausende Euro beim Hausverkauf – ohne Maklergebühren, mit professioneller Unterstützung
            </p>
          </div>

          {/* Trust Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center mb-3">
                <Euro className="w-6 h-6 text-accent-400" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                Kostenlose Bewertung
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-accent-400" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                Schneller Verkauf
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-400/10 flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-accent-400" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                100% Zufriedenheitsgarantie
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 text-base md:text-lg bg-accent-400 text-white rounded-xl hover:bg-accent-500 focus:ring-4 focus:ring-accent-400/50 focus:outline-none transition-all duration-200 font-semibold text-center"
            >
              Jetzt kostenlos starten →
            </Link>
            <Link
              href="/preisrechner"
              className="inline-block px-8 py-4 text-base md:text-lg bg-white/50 backdrop-blur-sm text-dark-700 rounded-xl border border-accent-400/30 hover:border-accent-400 hover:bg-white/70 focus:ring-4 focus:ring-accent-400/50 focus:outline-none transition-all duration-200 font-semibold text-center"
            >
              Preis berechnen
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
