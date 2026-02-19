import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
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
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                index === 1 
                  ? 'border-2 border-accent-400 shadow-xl bg-white/90 backdrop-blur-sm' 
                  : 'bg-white/80 backdrop-blur-sm border border-primary-200'
              }`}
            >
              <CardHeader>
                <div className="w-full aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-dark-300 text-sm">Paket Icon</span>
                </div>
                <CardTitle className="text-h3 text-dark-700">{service.title}</CardTitle>
                <CardDescription className="text-xl font-semibold mt-2 text-accent-400">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-400" />
                      <span className="text-body text-dark-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={service.href} className="w-full">
                  <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                    Mehr erfahren
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
