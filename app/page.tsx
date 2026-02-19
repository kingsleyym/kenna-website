import HeroSection from "@/components/sections/HeroSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceCards from "@/components/sections/ServiceCards";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { services } from "@/lib/content/services";
import { processSteps } from "@/lib/content/process";
import { faqs } from "@/lib/content/faqs";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Hausverkauf für Privatverkäufer"
        subheadline="Verkaufen Sie Ihre Immobilie professionell und stressfrei – ohne Maklerprovision"
        ctaPrimary={{ text: "Jetzt Paket wählen", href: "#pakete" }}
        ctaSecondary={{ text: "Mehr erfahren", href: "/prozess" }}
      />
      <ProblemStatement />
      <ProcessSteps steps={processSteps} />
      <div id="pakete">
        <ServiceCards services={services} />
      </div>
      <FAQAccordion faqs={faqs} />
      <FinalCTA
        headline="Bereit für den Verkauf?"
        subheadline="Lassen Sie uns gemeinsam Ihre Immobilie erfolgreich vermarkten"
        ctaText="Jetzt Kontakt aufnehmen"
        ctaHref="/kontakt"
      />
    </>
  );
}
