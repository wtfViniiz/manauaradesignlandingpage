import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { company } from "@/data/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manauaradesign.com.br"),
  title: {
    default: "Manauara Design | Comunicação Visual e Serviços Gráficos",
    template: "%s | Manauara Design",
  },
  description:
    "O Manauara Design oferece comunicação visual, impressão e design gráfico para fortalecer marcas com qualidade profissional.",
  openGraph: {
    title: "Manauara Design | Comunicação Visual e Serviços Gráficos",
    description:
      "Soluções em comunicação visual, impressão e design gráfico com atendimento rápido e foco em resultado.",
    url: "https://manauaradesign.com.br",
    siteName: "Manauara Design",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/logo/logoMain.png",
    shortcut: "/logo/logoMain.png",
    apple: "/logo/logoMain.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: "https://manauaradesign.com.br/logo/logoMain.png",
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
    url: "https://manauaradesign.com.br",
    sameAs: [company.instagram, company.facebook],
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <FloatingWhatsApp />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
