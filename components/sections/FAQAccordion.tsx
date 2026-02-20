"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    question: "Wie funktioniert der Verkaufsprozess mit KENNA?",
    answer: "Der Verkaufsprozess beginnt mit einer kostenlosen Erstberatung, bei der wir Ihre Immobilie bewerten und eine maßgeschneiderte Verkaufsstrategie entwickeln. Wir übernehmen das professionelle Marketing, die Besichtigungen und die Verhandlungen bis zum erfolgreichen Abschluss."
  },
  {
    question: "Was kostet die Immobilienbewertung?",
    answer: "Die Erstbewertung Ihrer Immobilie ist vollkommen kostenlos und unverbindlich. Wir analysieren den aktuellen Marktwert anhand von Vergleichsobjekten, Lage und Zustand und erstellen eine fundierte Werteinschätzung."
  },
  {
    question: "Wie lange dauert ein Immobilienverkauf durchschnittlich?",
    answer: "Die Verkaufsdauer variiert je nach Objekt und Marktlage, liegt aber in der Regel zwischen 8 und 16 Wochen. Mit unserer professionellen Vermarktungsstrategie und unserem Netzwerk erreichen wir oft schnellere Verkaufszeiten."
  },
  {
    question: "Welche Unterlagen benötige ich für den Verkauf?",
    answer: "Für einen erfolgreichen Verkauf benötigen Sie Grundbuchauszug, Energieausweis, Grundrisse, Bauunterlagen und ggf. Mietverträge. Wir unterstützen Sie bei der Beschaffung fehlender Dokumente und prüfen die Vollständigkeit."
  },
  {
    question: "Was unterscheidet KENNA von anderen Maklern?",
    answer: "KENNA verbindet modernste Technologie mit persönlicher Beratung. Unsere digitale Plattform ermöglicht transparente Prozesse, während unser erfahrenes Team individuelle Betreuung bietet. Wir setzen auf professionelles Storytelling und zielgruppengerechtes Marketing."
  },
  {
    question: "Kann ich meine Immobilie auch selbst verkaufen?",
    answer: "Natürlich ist ein Privatverkauf möglich, jedoch oft mit erheblichem Zeitaufwand, rechtlichen Risiken und niedrigeren Verkaufspreisen verbunden. Als professionelle Makler kennen wir den Markt, haben Zugang zu qualifizierten Käufern und erzielen durchschnittlich 8-12% höhere Verkaufspreise."
  },
  {
    question: "Wie wird die Maklerprovision berechnet?",
    answer: "Unsere Provision richtet sich nach dem erfolgreichen Verkaufspreis und wird erst bei Vertragsabschluss fällig. Die genaue Höhe besprechen wir transparent in unserem Erstgespräch. Keine versteckten Kosten, keine Vorauszahlungen."
  }
];

export default function FAQAccordion({ faqs = defaultFAQs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="py-16 md:py-24 bg-beige-50 relative overflow-hidden"
      data-parallax="scroll"
      data-speed="0.5"
    >
      <Container maxWidth="md">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-700 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-base md:text-lg text-dark-500">
            Antworten auf die wichtigsten Fragen rund um Ihren Immobilienverkauf
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl backdrop-blur-2xl bg-white/30 border border-white/20 overflow-hidden transition-all duration-300 hover:bg-white/40"
            >
              {/* Header (always visible) */}
              <button
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between py-5 px-6 md:py-6 md:px-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
              >
                <h3 className="text-base md:text-lg font-semibold text-dark-700 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-accent-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Content (conditionally visible) */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 text-dark-600 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
