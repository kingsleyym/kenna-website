export interface Service {
  id: string;
  title: string;
  price: string;
  features: string[];
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    id: "kurzfilm",
    title: "Kurzfilm",
    price: "750€ inkl. MwSt.",
    href: "/leistungen/kurzfilm",
    description: "Für Verkäufer, die ihre Immobilie selbstständig vermarkten möchten, aber professionelle Aufbereitung benötigen",
    features: [
      "Professionelle Fotos/Videografie",
      "Digitales Homestaging",
      "Exposé-Erstellung",
      "Planungssoftware (Grundrisse)",
      "Unterstützung bei Vermarktung",
    ],
  },
  {
    id: "grosses-kino",
    title: "Großes Kino",
    price: "1.5k Monat, MwSt. vom Verkaufspreis zzgl. Inseratskosten",
    href: "/leistungen/grosses-kino",
    description: "Für Verkäufer, die umfassende Unterstützung wünschen, aber finale Entscheidungen selbst treffen",
    features: [
      "Alle Features aus Kurzfilm",
      "Marketingstrategie",
      "360° Tour",
      "Digitale Aufbereitung",
      "Anfragen-Management",
      "Besichtigungs-Begleitung",
      "Vermarktung auf Plattformen",
    ],
  },
  {
    id: "blockbuster",
    title: "Blockbuster",
    price: "Nach Absprache",
    href: "/leistungen/blockbuster",
    description: "Für Verkäufer, die Rundum-Betreuung wünschen und den Verkauf vollständig in professionelle Hände legen",
    features: [
      "Alle Features aus Großes Kino",
      "Umfassende Betreuung",
      "Exklusiver Zugang",
      "Individuelle Strategie",
      "Makler-ähnliche Betreuung",
    ],
  },
];
