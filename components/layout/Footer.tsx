import Container from "@/components/layout/Container";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-beige-50" data-parallax="1">
      <Container>
        {/* Glassmorphic Footer Box */}
        <div className="backdrop-blur-2xl bg-white/30 rounded-3xl p-8 md:p-12 border border-white/40">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Logo & Tagline */}
            <div>
              <h3 className="text-2xl font-bold text-dark-700 mb-3">Kenna</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Professionelle Immobilien-Visualisierung für erfolgreiche Privatverkäufer
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark-700 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/leistungen"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prozess"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Prozess
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preise"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Preise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ueber-uns"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Kontakt */}
            <div>
              <h4 className="text-lg font-semibold text-dark-700 mb-4">Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@kenna.de"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    info@kenna.de
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+49XXXXXXXXX"
                    className="text-sm text-gray-700 hover:text-accent-400 transition-colors"
                  >
                    +49 XXX XXXXXX
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Deutschland
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-dark-700 mb-4">Folgen Sie uns</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-accent-400/30 flex items-center justify-center text-gray-700 hover:text-accent-400 hover:border-accent-400 hover:bg-white/70 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-accent-400/30 flex items-center justify-center text-gray-700 hover:text-accent-400 hover:border-accent-400 hover:bg-white/70 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-accent-400/30 flex items-center justify-center text-gray-700 hover:text-accent-400 hover:border-accent-400 hover:bg-white/70 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="border-t border-gray-300/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Kenna. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-accent-400 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-accent-400 transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="hover:text-accent-400 transition-colors"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
