export default function MissionStatement() {
  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Main Headline - Mixed Color Style */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            <span className="text-accent-400">Mehr Fairness,</span>{" "}
            <span className="text-accent-400">mehr Transparenz,</span>
            <br />
            <span className="text-dark-700">weniger Kosten</span>
          </h2>
        </div>

        {/* Three Blocks - Stat Style with Border-Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Block 1: DEKRA */}
          <div className="border-l-4 border-accent-400 pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-accent-400 mb-4">
              DEKRA-zertifiziert
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Als DEKRA-zertifizierter Sachverständiger bringe ich professionelle
              Expertise und jahrelange Erfahrung mit – ohne die überhöhten Kosten
              klassischer Makler.
            </p>
          </div>

          {/* Block 2: Expertise */}
          <div className="border-l-4 border-accent-400 pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-accent-400 mb-4">
              Ihre Expertise zählt
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Sie kennen Ihre Immobilie besser als jeder Makler. Ich liefere die
              technische Unterstützung – Sie behalten die Kontrolle über den Verkauf.
            </p>
          </div>

          {/* Block 3: Gemeinsam */}
          <div className="border-l-4 border-accent-400 pl-6">
            <h3 className="text-xl md:text-2xl font-bold text-accent-400 mb-4">
              Gemeinsam zum Ziel
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Statt Sie zu ersetzen, unterstütze ich Sie mit modernster Technologie
              und professionellem Know-how – als Partner auf Augenhöhe.
            </p>
          </div>
        </div>

        {/* Bottom Text - Centered */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-dark-700 mb-4">
            Niemand kennt Ihr Zuhause so gut wie Sie selbst.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Deshalb kombinieren wir Ihre persönliche Expertise mit meiner
            technischen Unterstützung – für einen Verkauf, der fair, transparent
            und erfolgreich ist.
          </p>
        </div>
      </div>
    </section>
  );
}
