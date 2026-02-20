"use client";

import { useState, useEffect } from "react";

export default function Calculator() {
  const [kaufpreis, setKaufpreis] = useState(500000);
  const [maklerProvision, setMaklerProvision] = useState(3.57);
  const [ergebnis, setErgebnis] = useState({ ersparnis: 0, maklerKosten: 0 });

  // Real-time calculation
  useEffect(() => {
    const maklerKosten = (kaufpreis * maklerProvision / 100) * 1.19; // +19% MwSt
    const kennaKosten = 3999;
    const ersparnis = maklerKosten - kennaKosten;

    setErgebnis({ ersparnis, maklerKosten });
  }, [kaufpreis, maklerProvision]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            💰 Ersparnis-Rechner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Berechnen Sie Ihre Ersparnis gegenüber einem traditionellen Makler
          </p>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* Kaufpreis */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kaufpreis Ihrer Immobilie
            </label>
            <div className="relative">
              <input
                type="number"
                value={kaufpreis}
                onChange={(e) => setKaufpreis(Number(e.target.value))}
                className="w-full px-6 py-4 text-lg font-medium border-2 border-gray-300 rounded-xl 
                  focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 focus:outline-none 
                  transition-all duration-200 hover:border-gray-400"
                placeholder="500.000"
                min="0"
                step="10000"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-lg text-gray-500 font-medium pointer-events-none">
                €
              </span>
            </div>
          </div>

          {/* Makler-Provision */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Makler-Provision (üblich)
            </label>
            <div className="relative">
              <input
                type="number"
                value={maklerProvision}
                onChange={(e) => setMaklerProvision(Number(e.target.value))}
                className="w-full px-6 py-4 text-lg font-medium border-2 border-gray-300 rounded-xl 
                  focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 focus:outline-none 
                  transition-all duration-200 hover:border-gray-400"
                placeholder="3,57"
                min="0"
                max="10"
                step="0.1"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-lg text-gray-500 font-medium pointer-events-none">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Result Display */}
        <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-accent-50 to-accent-100 border-2 border-accent-300 rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-sm md:text-base text-gray-600 font-medium mb-2 text-center">
            🎉 Ihre Ersparnis mit Kenna:
          </p>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent-500 mb-4 text-center">
            {ergebnis.ersparnis > 0
              ? ergebnis.ersparnis.toLocaleString("de-DE", { maximumFractionDigits: 0 })
              : "0"}{" "}
            €
          </p>
          <p className="text-sm md:text-base text-gray-600 text-center">
            (statt {ergebnis.maklerKosten.toLocaleString("de-DE", { maximumFractionDigits: 0 })}€ Makler-Provision + MwSt)
          </p>
        </div>
      </div>
    </section>
  );
}
