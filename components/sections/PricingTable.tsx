import Container from "@/components/layout/Container";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basis",
    price: "2.999€",
    period: "einmalig",
    description: "Perfekt für einfache Immobilien und erfahrene Verkäufer",
    features: [
      "Professionelles Exposé",
      "Fotos & Grundriss",
      "Listung auf Portalen",
      "E-Mail Support",
      "Basis-Marketing",
    ],
    cta: "Jetzt starten",
    ctaLink: "/kontakt?plan=basis",
  },
  {
    name: "Premium",
    price: "3.999€",
    period: "einmalig",
    description: "Unsere Empfehlung für optimale Ergebnisse",
    features: [
      "Alles aus Basis",
      "Premium-Fotografie",
      "Virtual Staging",
      "Social Media Kampagne",
      "Besichtigungsmanagement",
      "Telefonischer Support",
      "Verkaufsverhandlung",
    ],
    popular: true,
    cta: "Jetzt Premium wählen",
    ctaLink: "/kontakt?plan=premium",
  },
  {
    name: "Full Service",
    price: "4.999€",
    period: "einmalig",
    description: "Rundum-sorglos für höchste Ansprüche",
    features: [
      "Alles aus Premium",
      "Drohnenaufnahmen",
      "3D-Rundgang",
      "Käuferprüfung",
      "Notartermin-Begleitung",
      "Priority Support",
      "Persönlicher Ansprechpartner",
    ],
    cta: "Full Service buchen",
    ctaLink: "/kontakt?plan=full-service",
  },
];

interface PricingCardProps {
  tier: PricingTier;
}

function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative ${
        tier.popular ? "scale-105 lg:scale-110 z-10" : "z-0"
      }`}
      data-parallax={tier.popular ? "0.8" : "1"}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-accent-400 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
            Beliebteste Wahl
          </div>
        </div>
      )}

      {/* Glassmorphic Card */}
      <div
        className={`backdrop-blur-2xl bg-white/30 rounded-3xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${
          tier.popular
            ? "border-2 border-accent-400"
            : "border border-white/40 hover:border-accent-400/50"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-dark-700 mb-2">
            {tier.name}
          </h3>
          <div className="mb-3">
            <span className="text-3xl md:text-4xl font-bold text-accent-400">
              {tier.price}
            </span>
            {tier.period && (
              <span className="text-sm text-gray-600 ml-2">{tier.period}</span>
            )}
          </div>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {tier.description}
          </p>
        </div>

        {/* Features List */}
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    tier.popular ? "text-accent-400" : "text-accent-400/80"
                  }`}
                />
                <span className="text-sm md:text-base text-gray-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={tier.ctaLink}
          className={`block w-full text-center py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 ${
            tier.popular
              ? "bg-accent-400 text-white hover:bg-accent-500 hover:scale-105"
              : "bg-white/50 text-dark-700 hover:bg-white/70 hover:scale-105"
          }`}
        >
          {tier.cta}
        </a>
      </div>
    </div>
  );
}

export default function PricingTable() {
  return (
    <section className="py-16 md:py-24 bg-beige-50" data-parallax="1.2">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-700 mb-4">
            <span className="text-accent-400">Transparente Preise</span> für jeden Bedarf
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie das Paket, das zu Ihrer Immobilie passt. Keine versteckten Kosten, keine Provision.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-gray-600">
            Alle Preise verstehen sich zzgl. MwSt. •{" "}
            <a
              href="/kontakt"
              className="text-accent-400 font-medium hover:underline"
            >
              Individuelle Beratung anfragen
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
