"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="md">
        <h2 className="text-h2 text-center mb-12 text-dark-700">
          Häufige Fragen
        </h2>
        <p className="text-center text-body-lg text-dark-500 mb-12">
          Antworten hinter den Kulissen
        </p>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 transition-colors duration-200 ${
                openIndex === index ? "bg-primary-50" : "hover:bg-gray-50"
              }`}
            >
              {/* Header (always visible) */}
              <button
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between py-6 px-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Content (conditionally visible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-6 text-gray-600 leading-relaxed">
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
