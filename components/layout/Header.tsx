"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-sm' 
        : 'bg-transparent backdrop-blur-none border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-accent-400 hover:text-accent-500 transition-colors">
            Kenna
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Leistungen Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLeistungenOpen(true)}
              onMouseLeave={() => setLeistungenOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-accent-400 transition-colors">
                Leistungen <ChevronDown className="w-4 h-4" />
              </button>
              {leistungenOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/leistungen/kurzfilm"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Kurzfilm (750€)
                  </Link>
                  <Link
                    href="/leistungen/grosses-kino"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Großes Kino (1.5k)
                  </Link>
                  <Link
                    href="/leistungen/blockbuster"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Blockbuster (Auf Anfrage)
                  </Link>
                </div>
              )}
            </div>

            <Link href="/prozess" className="text-gray-700 hover:text-accent-400 transition-colors">
              Prozess
            </Link>
            <Link href="/preise" className="text-gray-700 hover:text-accent-400 transition-colors">
              Preise
            </Link>
            <Link href="/ueber-uns" className="text-gray-700 hover:text-accent-400 transition-colors">
              Über uns
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-accent-400 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/kontakt" className="hidden md:block">
            <Button>Kontakt</Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            <Link href="/leistungen" className="block text-gray-700 hover:text-accent-400">
              Leistungen
            </Link>
            <Link href="/prozess" className="block text-gray-700 hover:text-accent-400">
              Prozess
            </Link>
            <Link href="/preise" className="block text-gray-700 hover:text-accent-400">
              Preise
            </Link>
            <Link href="/ueber-uns" className="block text-gray-700 hover:text-accent-400">
              Über uns
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-accent-400">
              Blog
            </Link>
            <Link href="/kontakt">
              <Button className="w-full">Kontakt</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
