export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details?: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Erstkontakt & Analyse",
    description:
      "Ein erfolgreiches Projekt beginnt mit dem richtigen Team. In unserem ersten Gespräch lernen wir uns kennen, analysieren die Chancen und prüfen gemeinsam, wie wir Ihr Ziel erreichen.",
    details: "Kostenloses Erstgespräch, Besichtigung, Marktanalyse und Preiseinschätzung",
  },
  {
    number: 2,
    title: "Konzeption – Die Strategie",
    description:
      "Ein fundierter Verkauf ist kein Zufall. Gemeinsam erarbeiten wir eine professionelle Strategie, die auf Ihre Immobilie zugeschnitten ist – für maximalen Erfolg im Markt.",
    details: "Marketing-Strategie, Zielgruppenanalyse, Zeitplan, Vermarktungskanäle",
  },
  {
    number: 3,
    title: "Produktion – hochwertiger Aufbereitung",
    description:
      "Durch Ihre Immobilie können Sie eine Geschichte erzählen. Wir nutzen das Potenzial durch professionelle Fotos, moderne Videos und optional eine virtuelle 360° Tour, um das Interesse zu wecken.",
    details: "Fotografie, Video, Homestaging, Exposé, Grundrisse",
  },
  {
    number: 4,
    title: "Showtime – Veröffentlichung im Markt",
    description:
      "Sobald die aus Exposé, Video und ggf. 360° Tour fertig sind, wird Ihre Immobilie professionell vermarktet. Wir präsentieren das Objekt so, dass es bei den richtigen Interessenten ankommt.",
    details: "Veröffentlichung auf Portalen, Social Media, gezielte Ansprache",
  },
  {
    number: 5,
    title: "Meet & Greet – Die persönliche Begegnung",
    description:
      "Nach der Veröffentlichung folgt der wichtigste Schritt: Sie führen die Besichtigungen persönlich durch. Niemand kennt Ihre Immobilie besser – und das spürt der potenzielle Käufer.",
    details: "Vorqualifizierung, Terminkoordination, optionale Begleitung",
  },
  {
    number: 6,
    title: "Nachbereitung – Vom Abschluss zur Verwirklichung",
    description:
      "Die Immobilie ist verkauft – doch bis zum Notartermin gibt es noch Details zu klären. Wir unterstützen Sie bei der Auswahl qualifizierter Sachverständiger, helfen bei der Objektübergabe und stehen Ihnen zur Seite.",
    details: "Verhandlungen, Notar-Koordination, Übergabeprotokolle",
  },
  {
    number: 7,
    title: "Signierte Verträge – Ein Happy End findet seine Ruhe",
    description:
      "Der große Moment ist gekommen: Die Unterschriften sind gesetzt, der Verkaufsprozess ist abgeschlossen. Sie haben Ihr Ziel erreicht – und wir sind stolz darauf, Sie auf diesem Weg begleitet zu haben.",
    details: "Notartermin, Eigentumsübertragung, Objektübergabe",
  },
];
