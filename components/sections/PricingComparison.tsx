import Container from "@/components/layout/Container";

interface ComparisonRow {
  feature: string;
  makler: string | "check" | "dash";
  kenna: string | "check" | "dash";
  kennaHighlight?: boolean; // Green checkmark for benefits
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Provision",
    makler: "3,57% + MwSt",
    kenna: "0%",
    kennaHighlight: true,
  },
  {
    feature: "Fixkosten",
    makler: "dash",
    kenna: "3.999€",
  },
  {
    feature: "Ersparnis (Haus 500k€)",
    makler: "dash",
    kenna: "~17.000€",
    kennaHighlight: true,
  },
  {
    feature: "Professionelles Marketing",
    makler: "check",
    kenna: "check",
  },
  {
    feature: "Besichtigungen",
    makler: "check",
    kenna: "check",
  },
  {
    feature: "Vertragsverhandlung",
    makler: "check",
    kenna: "check",
  },
  {
    feature: "Käuferprüfung",
    makler: "check",
    kenna: "check",
  },
  {
    feature: "Notartermin-Begleitung",
    makler: "check",
    kenna: "Optional",
  },
];

function renderCellContent(value: string | "check" | "dash", highlight?: boolean) {
  if (value === "check") {
    return (
      <span className={`text-xl font-bold ${highlight ? "text-green-300" : "text-green-500"}`}>
        ✓
      </span>
    );
  }
  if (value === "dash") {
    return <span className="text-gray-400">—</span>;
  }
  
  // Regular text with optional green checkmark
  if (highlight) {
    return (
      <span className="flex items-center justify-center gap-2">
        {value}
        <span className="text-green-300 text-xl font-bold">✓</span>
      </span>
    );
  }
  
  return value;
}

export default function PricingComparison() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4 text-dark-700">
            Transparenter Vergleich
          </h2>
          <p className="text-body-lg text-dark-500 max-w-2xl mx-auto">
            Sehen Sie selbst, warum sich KENNA lohnt
          </p>
        </div>

        {/* Desktop Table (hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-6 py-5 text-left font-semibold text-dark-700">
                  Feature
                </th>
                <th className="px-6 py-5 text-center font-semibold text-dark-700">
                  Makler
                </th>
                <th className="px-6 py-5 text-center font-semibold text-white bg-accent-400 border-2 border-accent-500 rounded-t-lg shadow-lg">
                  KENNA
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-left text-dark-700">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-dark-600">
                    {renderCellContent(row.makler)}
                  </td>
                  <td className="px-6 py-4 text-center bg-accent-400/10 font-semibold text-dark-700">
                    {renderCellContent(row.kenna, row.kennaHighlight)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (hidden on desktop) */}
        <div className="md:hidden space-y-6">
          {/* Makler Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-dark-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💼</span> Makler
            </h3>
            <ul className="space-y-3">
              {comparisonData.map((row, index) => (
                <li key={index} className="flex items-start justify-between gap-3 py-2">
                  <span className="text-dark-600 flex-1">{row.feature}:</span>
                  <span className="font-medium text-dark-700 text-right">
                    {renderCellContent(row.makler)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* KENNA Card (Highlighted) */}
          <div className="bg-accent-400 border-2 border-accent-500 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span> KENNA
              <span className="ml-auto text-sm bg-white/20 px-3 py-1 rounded-full">
                Empfohlen
              </span>
            </h3>
            <ul className="space-y-3 text-white">
              {comparisonData.map((row, index) => (
                <li key={index} className="flex items-start justify-between gap-3 py-2">
                  <span className="flex-1">{row.feature}:</span>
                  <span className="font-semibold text-right">
                    {renderCellContent(row.kenna, row.kennaHighlight)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-12 text-center">
          <p className="text-body text-dark-500">
            Bei einem Haus für <strong>500.000€</strong> sparen Sie mit KENNA ca.{" "}
            <strong className="text-accent-400">17.000€</strong> gegenüber einem klassischen Makler.
          </p>
        </div>
      </Container>
    </section>
  );
}
