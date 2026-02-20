"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details?: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

// Default images for scroll effect (fallback)
const defaultImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1554224311-beee460201b4?w=800&h=1200&fit=crop",
];

// Group steps into pairs for desktop scroll effect
const groupSteps = (steps: ProcessStep[]) => {
  const groups: ProcessStep[][] = [];
  for (let i = 0; i < steps.length; i += 2) {
    groups.push(steps.slice(i, i + 2));
  }
  return groups;
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepGroups = groupSteps(steps);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = groupRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1) {
            setActiveGroupIndex(index);
          }
        }
      });
    }, observerOptions);

    groupRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Get images for active group (2 images per group)
  const topImageIndex = activeGroupIndex * 2;
  const bottomImageIndex = activeGroupIndex * 2 + 1;

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        {/* MOBILE: Stacked Vertical Layout */}
        <div className="block lg:hidden">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-700 mb-4">
              <span className="text-accent-400">7 Schritte</span> zu Ihrem
              Immobilien-Erfolg
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
              Von der ersten Idee bis zum Notartermin – wir begleiten Sie Schritt
              für Schritt zum erfolgreichen Verkauf.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                {/* Orange Circle — FIX 1 */}
                <div className="flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-md"
                    style={{ backgroundColor: "rgb(255, 107, 107)" }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {step.details && (
                    <p className="text-sm text-gray-500 mt-2 italic">
                      {step.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: 2-Column Layout with Scroll Magic */}
        <div className="hidden lg:grid lg:grid-cols-[60%_40%] gap-12">
          {/* LEFT: Sticky Header + Scrolling Steps */}
          <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-44 z-10 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-700 mb-4">
                <span className="text-accent-400">7 Schritte</span> zu Ihrem
                Immobilien-Erfolg
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                Von der ersten Idee bis zum Notartermin – wir begleiten Sie
                Schritt für Schritt zum erfolgreichen Verkauf.
              </p>
            </div>

            {/* Scroll Trigger Areas (invisible) */}
            <div className="space-y-24">
              {stepGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  ref={(el) => {
                    groupRefs.current[groupIndex] = el;
                  }}
                  className="min-h-[600px]"
                />
              ))}
            </div>

            {/* Sticky Steps (bottom-left) — FIX 2 */}
            <div className="sticky bottom-8 left-0 z-20 pointer-events-none">
              {stepGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`transition-all duration-700 ease-in-out ${
                    activeGroupIndex === groupIndex
                      ? "opacity-100 blur-0 relative"
                      : "opacity-0 blur-md absolute inset-0"
                  }`}
                >
                  <div className="space-y-8">
                    {group.map((step) => (
                      <div key={step.number} className="flex gap-6 items-start">
                        {/* Orange Circle — FIX 1 */}
                        <div className="flex-shrink-0">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg"
                            style={{ backgroundColor: "rgb(255, 107, 107)" }}
                          >
                            {step.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pointer-events-auto">
                          <h3 className="text-xl md:text-2xl font-semibold text-dark-700 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base text-gray-600 leading-relaxed mb-2">
                            {step.description}
                          </p>
                          {step.details && (
                            <p className="text-sm text-gray-500 italic">
                              {step.details}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Fixed Container with Switching Images — FIX 3 */}
          <div className="sticky top-44 h-[600px]">
            {/* Hellgrauer Container mit Border + Padding */}
            <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 h-full flex flex-col gap-4">
              {/* Top Image (kleiner) */}
              <div className="relative w-full h-[30%] rounded-lg overflow-hidden shadow-md">
                <img
                  src={defaultImages[topImageIndex] || defaultImages[0]}
                  alt={`Step ${activeGroupIndex * 2 + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={`top-${activeGroupIndex}`}
                />
              </div>

              {/* Bottom Image (größer) */}
              <div className="relative w-full flex-1 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={defaultImages[bottomImageIndex] || defaultImages[1]}
                  alt={`Step ${activeGroupIndex * 2 + 1} detail`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={`bottom-${activeGroupIndex}`}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
