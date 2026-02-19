import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function KontaktPage() {
  return (
    <div className="py-16 md:py-24">
      <Container maxWidth="md">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-gray-900">Kontakt</h1>
        <p className="text-gray-600 mb-12 text-lg">
          Lassen Sie uns gemeinsam Ihr Projekt starten
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Vorname *</label>
              <Input placeholder="Max" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nachname *</label>
              <Input placeholder="Mustermann" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">E-Mail *</label>
              <Input type="email" placeholder="max@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefon</label>
              <Input placeholder="+49 XXX XXXXXX" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Nachricht *</label>
            <Textarea 
              placeholder="Ihre Nachricht..." 
              className="min-h-[150px]" 
              required 
            />
          </div>

          <Button size="lg" className="w-full md:w-auto">
            Absenden
          </Button>
        </form>

        <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: 'rgb(245 243 238)' }}>
          <h3 className="font-semibold mb-4 text-lg">Kontaktinformationen</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>E-Mail:</strong> info@kenna.de
          </p>
          <p className="text-sm text-gray-600">
            <strong>Telefon:</strong> +49 XXX XXXXXX
          </p>
        </div>
      </Container>
    </div>
  );
}
