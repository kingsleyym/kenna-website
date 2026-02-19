import { AnimatedText } from '@/components/ui/AnimatedText';

export default function DashboardSection() {
  const textLines = [
    'Professionelle Immobilien-',
    'visualisierung für schnelleren',
    'Verkauf ohne Maklerprovision'
  ];

  return (
    <section className="relative z-10 min-h-screen bg-[#1A1D23] py-32 md:py-48 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedText lines={textLines} className="max-w-4xl mx-auto" delayPerLine={500} />
        <div className="mt-16 hidden md:block">
          <div className="relative w-full max-w-3xl mx-auto aspect-[16/10]">
            <div className="w-full h-[92%] bg-gray-900 rounded-t-2xl shadow-2xl border-4 border-gray-800 overflow-hidden">
              <div className="w-full h-full bg-white" />
            </div>
            <div className="w-full h-[8%] bg-gray-300 rounded-b-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
