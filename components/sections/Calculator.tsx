"use client";

import { useState, useEffect } from "react";

export default function Calculator() {
  const [kaufpreis, setKaufpreis] = useState(300000);
  const [verkaufspreis, setVerkaufspreis] = useState(350000);
  const [monate, setMonate] = useState(24);
  const [ergebnis, setErgebnis] = useState({ roi: 0, monatlichRoi: 0, gewinn: 0 });

  // Real-time ROI calculation
  useEffect(() => {
    const gewinn = verkaufspreis - kaufpreis;
    const roi = kaufpreis > 0 ? (gewinn / kaufpreis) * 100 : 0;
    const monatlichRoi = monate > 0 ? roi / monate : 0;

    setErgebnis({ roi, monatlichRoi, gewinn });
  }, [kaufpreis, verkaufspreis, monate]);

  return (
    <section 
      className="relative py-16 md:py-24 bg-beige-50 overflow-hidden"
      data-parallax="0.15"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-parallax="0.1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            📊 ROI-Rechner
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Berechnen Sie Ihre Rendite auf Investitionen in Immobilien
          </p>
        </div>

        {/* Calculator Card - Glassmorphism */}
        <div 
          className="max-w-5xl mx-auto backdrop-blur-2xl bg-white/30 border border-white/40 rounded-3xl p-8 md:p-12"
          data-parallax="0.05"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Input Sliders */}
            <div className="space-y-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
                Ihre Investition
              </h3>

              {/* Kaufpreis Slider */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Kaufpreis
                </label>
                <div className="mb-3">
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={kaufpreis}
                    onChange={(e) => setKaufpreis(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 
                      [&::-webkit-slider-thumb]:h-6 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-accent-400 
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:hover:bg-accent-500
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-moz-range-thumb]:w-6 
                      [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-accent-400 
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:shadow-lg
                      [&::-moz-range-thumb]:hover:bg-accent-500
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:transition-all"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {kaufpreis.toLocaleString("de-DE")} €
                  </span>
                  <span className="text-sm text-gray-500">50k – 1M €</span>
                </div>
              </div>

              {/* Verkaufspreis Slider */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Erwarteter Verkaufspreis
                </label>
                <div className="mb-3">
                  <input
                    type="range"
                    min="50000"
                    max="1500000"
                    step="10000"
                    value={verkaufspreis}
                    onChange={(e) => setVerkaufspreis(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 
                      [&::-webkit-slider-thumb]:h-6 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-accent-400 
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:hover:bg-accent-500
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-moz-range-thumb]:w-6 
                      [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-accent-400 
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:shadow-lg
                      [&::-moz-range-thumb]:hover:bg-accent-500
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:transition-all"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {verkaufspreis.toLocaleString("de-DE")} €
                  </span>
                  <span className="text-sm text-gray-500">50k – 1.5M €</span>
                </div>
              </div>

              {/* Zeit Slider */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Haltedauer
                </label>
                <div className="mb-3">
                  <input
                    type="range"
                    min="1"
                    max="120"
                    step="1"
                    value={monate}
                    onChange={(e) => setMonate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:w-6 
                      [&::-webkit-slider-thumb]:h-6 
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-accent-400 
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:shadow-lg
                      [&::-webkit-slider-thumb]:hover:bg-accent-500
                      [&::-webkit-slider-thumb]:transition-all
                      [&::-moz-range-thumb]:w-6 
                      [&::-moz-range-thumb]:h-6 
                      [&::-moz-range-thumb]:rounded-full 
                      [&::-moz-range-thumb]:bg-accent-400 
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:shadow-lg
                      [&::-moz-range-thumb]:hover:bg-accent-500
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:transition-all"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">
                    {monate} {monate === 1 ? "Monat" : "Monate"}
                  </span>
                  <span className="text-sm text-gray-500">1 – 120 Monate</span>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Ihre Rendite
              </h3>

              {/* Gesamt-ROI */}
              <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-6 border border-white/60">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  Gesamt-ROI
                </p>
                <p className="text-4xl md:text-5xl font-bold text-accent-500">
                  {ergebnis.roi.toFixed(2)}%
                </p>
              </div>

              {/* Monatlicher ROI */}
              <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-6 border border-white/60">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  Monatlicher ROI
                </p>
                <p className="text-4xl md:text-5xl font-bold text-accent-500">
                  {ergebnis.monatlichRoi.toFixed(2)}%
                </p>
              </div>

              {/* Gewinn */}
              <div className="backdrop-blur-xl bg-accent-400/10 rounded-2xl p-6 border border-accent-400/30">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  Erwarteter Gewinn
                </p>
                <p className={`text-3xl md:text-4xl font-bold ${ergebnis.gewinn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {ergebnis.gewinn >= 0 ? '+' : ''}{ergebnis.gewinn.toLocaleString("de-DE")} €
                </p>
              </div>

              {/* Info Text */}
              <div className="mt-4 p-4 bg-beige-100/60 rounded-xl">
                <p className="text-xs text-gray-600 leading-relaxed">
                  💡 <strong>Hinweis:</strong> Diese Berechnung berücksichtigt nur die Differenz zwischen Kauf- und Verkaufspreis. 
                  Nebenkosten, Steuern und laufende Kosten sind nicht enthalten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
