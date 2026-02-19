import Container from "@/components/layout/Container";

export default function ImpressumPage() {
  return (
    <div className="py-16 md:py-24">
      <Container maxWidth="md">
        <h1 className="text-4xl md:text-5xl font-medium mb-8 text-gray-900">Impressum</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">Impressum-Inhalte folgen...</p>
          <p className="text-sm text-gray-500 mt-8">
            Platzhalter - Bitte durch echte Firmendaten ersetzen.
          </p>
        </div>
      </Container>
    </div>
  );
}
