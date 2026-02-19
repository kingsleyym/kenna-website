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
    <section className="py-16 md:py-24" style={{ backgroundColor: 'rgb(245 243 238)' }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900">
            Maßgeschneidert für Ihren Erfolg
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className={`flex flex-col ${index === 1 ? 'border-2 border-[rgb(255,107,107)] shadow-xl' : ''}`}>
              <CardHeader>
                <div className="w-full aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Paket Icon</span>
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-xl font-semibold mt-2" style={{ color: 'rgb(255 107 107)' }}>
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(255 107 107)' }} />
                      <span className="text-sm text-gray-700">{feature}</span>
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
