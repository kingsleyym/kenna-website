import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kenna - Immobilien-Visualisierung für Privatverkäufer",
  description:
    "Professionelle Immobilien-Präsentation ohne Maklerprovision. 7-Schritte Prozess für erfolgreichen Hausverkauf.",
  keywords:
    "Immobilien, Visualisierung, Privatverkauf, Hausverkauf, Makler Alternative",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
