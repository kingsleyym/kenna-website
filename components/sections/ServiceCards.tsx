import { Button } from "@/components/ui/button";
import { Camera, FileText, Award, Check } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";

interface Service {
  id: string;
  title: string;
  price: string;
  features: string[];
  href: string;
}

interface ServiceCardsProps {
  services: Service[];
}

// Icon mapping for each service (Basis, Premium, Professional)
const serviceIcons = [FileText, Camera, Award];

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="py-24 md:py-32 bg-primary-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4 text-dark-700">
            Maßgeschneidert für Ihren Erfolg
          </h2>
          <p className="text-body-lg text-dark-500 max-w-2xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || FileText;
            const isPremium = index === 1;
            
            return (
              <div
                key={service.id}
                className={`
                  bg-primary-50
                  rounded-3xl
                  shadow-2xl
                  p-8 md:p-12
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]
                  flex flex-col
                  ${isPremium ? 'ring-2 ring-accent-400 ring-offset-4' : ''}
                `}
              >
                {/* Icon/Badge at top */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent-400/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-dark-700 mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Price */}
                <p className="text-xl font-semibold text-accent-400 mb-6">
                  {service.price}
                </p>

                {/* Features list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                      <span className="text-dark-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.href} className="w-full">
                  <Button 
                    variant={isPremium ? "default" : "outline"} 
                    size="lg"
                    className="w-full"
                  >
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
