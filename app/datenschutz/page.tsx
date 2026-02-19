import Container from "@/components/layout/Container";

export default function DatenschutzPage() {
  return (
    <div className="py-16 md:py-24">
      <Container maxWidth="md">
        <h1 className="text-4xl md:text-5xl font-medium mb-8 text-gray-900">Datenschutz</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Datenschutzerklärung folgt...</p>
          <p className="text-sm text-gray-500 mt-8">
            Platzhalter - Bitte durch echte Datenschutzerklärung ersetzen.
          </p>
        </div>
      </Container>
    </div>
  );
}
