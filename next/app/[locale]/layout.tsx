import "../globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SlugProvider } from "@/components/context/SlugContext"; // ✅ Kontext importieren

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: {
    default: "JEMIX - IT Solutions & Services",
    template: "%s | JEMIX",
  },
  description: "JEMIX bietet IT-Lösungen, Netzwerke, WLAN, Support und Beratung auf Mallorca.",
  keywords: ["IT", "Mallorca", "WLAN", "Support", "Netzwerk", "IT-Lösungen", "JEMIX"],
  metadataBase: new URL("https://jemix.es"),
  openGraph: {
    title: "JEMIX - IT Solutions & Services",
    description: "Moderne IT-Infrastruktur & Beratung für Unternehmen, Praxen & Private.",
    url: "https://jemix.es",
    siteName: "JEMIX",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JEMIX Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEMIX - IT Solutions & Services",
    description: "Netzwerk. WLAN. Beratung. Mallorca.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SlugProvider> {/* ✅ Kontext für alle Komponenten verfügbar */}
          {children}
        </SlugProvider>
      </body>
    </html>
  );
}