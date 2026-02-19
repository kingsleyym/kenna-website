import Container from "@/components/layout/Container";

export default function ProblemStatement() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      <Container maxWidth="xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark-700 mb-8 tracking-tight">
            Hausverkauf ohne Makler –{" "}
            <span className="text-accent-400 font-semibold">aber mit System</span>
          </h2>
          <p className="text-xl md:text-2xl text-dark-500 mb-12 leading-relaxed max-w-3xl mx-auto">
            Viele Privatverkäufer wollen die hohe Maklerprovision sparen, wissen aber nicht, wie sie ihre Immobilie professionell präsentieren sollen.
          </p>
          <div className="bg-primary-50 rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border-l-4 border-accent-400">
            <p className="text-xl md:text-2xl text-dark-700 leading-relaxed">
              <strong className="text-accent-400 font-semibold">Kenna</strong> bietet Ihnen die Lösung: Professionelle Visualisierung, Vermarktungsstrategie und Begleitung –
              <span className="text-dark-700 font-semibold"> ohne die klassische Maklerprovision.</span>
            </p>
          </div>
        </div>
      </Container>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
