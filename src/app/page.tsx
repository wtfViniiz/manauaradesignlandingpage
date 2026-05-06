import type { Metadata } from "next";
import {
  AboutPreviewSection,
  DifferentialsSection,
  FinalBannerSection,
  HomeHeroSection,
  LocationSection,
  MidBannerSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Solucoes em comunicacao visual, impressao e design grafico para fortalecer a imagem da sua empresa.",
  openGraph: {
    title: "Manauara Design | Comunicacao Visual e Impressao",
    description:
      "Conheca os servicos da Manauara Design e solicite um orcamento para sua empresa.",
    url: "https://manauaradesign.com.br/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <ServicesSection />
      <MidBannerSection />
      <AboutPreviewSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FinalBannerSection />
      <LocationSection />
    </>
  );
}
