import Container from "@/components/layout/Container";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-h2 text-center mb-16 text-dark-700">
          Die 7 Schritte zu Ihrem Immobilien-Erfolg
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              {/* Number Circle */}
              <div 
                className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-medium text-white"
                style={{ backgroundColor: 'rgb(255 107 107)' }}
              >
                {step.number}
              </div>
              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-h3 mb-3 text-dark-700">{step.title}</h3>
                <p className="text-body text-dark-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
