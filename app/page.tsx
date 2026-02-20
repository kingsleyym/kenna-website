import HeroSection from "@/components/sections/HeroSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ProblemStatement from "@/components/sections/ProblemStatement";
import MissionStatement from "@/components/sections/MissionStatement";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceCards from "@/components/sections/ServiceCards";
import PricingComparison from "@/components/sections/PricingComparison";
import Calculator from "@/components/sections/Calculator";
import FAQAccordion from "@/components/sections/FAQAccordion";
import BlogPreview from "@/components/sections/BlogPreview";
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
      
      <DashboardSection />
      
      
        <ProblemStatement />
      
      
      <MissionStatement />
      
      
      
        <ProcessSteps steps={processSteps} />
      
      
      
        <div id="pakete">
          <ServiceCards services={services} />
        </div>
      
      
      <PricingComparison />
      
      
      <Calculator />
      
      
      
        <FAQAccordion faqs={faqs} />
      
      
      <BlogPreview />
      
      
      
        <FinalCTA />
      
    </>
  );
}
