import Container from "@/components/layout/Container";

export default function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
            Hausverkauf ohne Makler – aber mit System
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Viele Privatverkäufer wollen die hohe Maklerprovision sparen, wissen aber nicht, wie sie ihre Immobilie professionell präsentieren sollen.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Kenna</strong> bietet Ihnen die Lösung: Professionelle Visualisierung, Vermarktungsstrategie und Begleitung – ohne die klassische Maklerprovision.
          </p>
        </div>
      </Container>
    </section>
  );
}
