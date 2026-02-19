import Container from "@/components/layout/Container";

export default function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="md">
        <div className="text-center">
          <h2 className="text-h2 text-dark-700 mb-6">
            Hausverkauf ohne Makler – aber mit System
          </h2>
          <p className="text-body-lg text-dark-500 mb-6">
            Viele Privatverkäufer wollen die hohe Maklerprovision sparen, wissen aber nicht, wie sie ihre Immobilie professionell präsentieren sollen.
          </p>
          <p className="text-body-lg text-dark-500 leading-relaxed">
            <strong className="text-dark-700">Kenna</strong> bietet Ihnen die Lösung: Professionelle Visualisierung, Vermarktungsstrategie und Begleitung – ohne die klassische Maklerprovision.
          </p>
        </div>
      </Container>
    </section>
  );
}
