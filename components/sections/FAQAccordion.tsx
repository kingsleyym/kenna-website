import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/layout/Container";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="md">
        <h2 className="text-h2 text-center mb-12 text-dark-700">
          Häufige Fragen
        </h2>
        <p className="text-center text-body-lg text-dark-500 mb-12">
          Antworten hinter den Kulissen
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-body-lg font-medium text-dark-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-dark-500 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
