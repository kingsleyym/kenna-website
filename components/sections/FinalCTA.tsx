import Container from "@/components/layout/Container";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-primary-50">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6">
            Bereit für den Verkauf Ihrer Immobilie?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Starten Sie jetzt und sparen Sie tausende Euro beim Hausverkauf – ohne Maklergebühren
          </p>
          <Link 
            href="/kontakt"
            className="inline-block w-full sm:w-auto px-8 py-4 text-lg bg-accent-400 text-white rounded-xl shadow-xl hover:bg-accent-500 hover:shadow-2xl hover:scale-105 focus:ring-4 focus:ring-accent-400/50 focus:outline-none transition-all duration-200 font-semibold"
          >
            Jetzt kostenlos starten →
          </Link>
        </div>
      </Container>
    </section>
  );
}
