import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(26,29,35)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(255 107 107)' }}>Kenna</h3>
            <p className="text-gray-400 text-sm">
              Professionelle Immobilien-Visualisierung für Privatverkäufer
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/leistungen" className="hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/prozess" className="hover:text-white transition-colors">
                  Prozess
                </Link>
              </li>
              <li>
                <Link href="/preise" className="hover:text-white transition-colors">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@kenna.de</li>
              <li>Tel: +49 XXX XXXXXX</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Kenna. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
