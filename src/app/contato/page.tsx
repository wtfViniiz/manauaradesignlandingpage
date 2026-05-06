import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircleMore, Phone, Timer } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite seu orcamento com a Manauara Design e receba atendimento personalizado em comunicacao visual e impressao.",
  openGraph: {
    title: "Contato | Manauara Design",
    description:
      "Entre em contato para orcamentos e projetos personalizados em servicos graficos e comunicacao visual.",
    url: "https://manauaradesign.com.br/contato",
  },
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-white">
        <Image
          src="/36f73d39-59b2-4994-9e1f-78eec799000f.png"
          alt="Atendimento comercial Manauara Design"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-300">Contato</p>
            <h1 className="text-4xl font-bold md:text-5xl">Solicite seu orçamento com atendimento consultivo</h1>
            <p className="mt-5 max-w-2xl text-zinc-200">
              Nosso time está pronto para entender sua necessidade, sugerir soluções visuais
              estratégicas e montar um orçamento com atendimento consultivo e agilidade na entrega.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-700/80 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-lg font-semibold text-yellow-300">Atendimento personalizado</p>
            <div className="mt-5 grid gap-3">
              <p className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3 text-sm">
                <Timer className="h-4 w-4 text-yellow-300" />
                Resposta rápida para orçamentos e dúvidas
              </p>
              <p className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3 text-sm">
                <MapPin className="h-4 w-4 text-yellow-300" />
                Atendimento local em Manaus e região
              </p>
              <p className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3 text-sm">
                <Phone className="h-4 w-4 text-yellow-300" />
                Suporte comercial durante todo o projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <Suspense
            fallback={
              <div className="order-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:order-1 md:p-8">
                <h2 className="text-2xl font-bold text-zinc-900">Solicite seu orçamento</h2>
                <p className="mt-2 text-sm text-zinc-600">Carregando formulário...</p>
              </div>
            }
          >
            <ContactForm />
          </Suspense>

          <div className="order-1 space-y-6 md:order-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">Canais de atendimento</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Fale com nossa equipe pelo canal que for mais conveniente para voce.
              </p>
              <div className="mt-4 space-y-3 text-sm text-zinc-700">
                <p className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2">
                  <Phone className="h-4 w-4 text-zinc-900" />
                  {company.phone}
                </p>
                <p className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2">
                  <Mail className="h-4 w-4 text-zinc-900" />
                  {company.email}
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Link
                  href={company.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-zinc-300 p-2 transition hover:border-zinc-500"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  href={company.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-zinc-300 p-2 transition hover:border-zinc-500"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-5 w-5" />
                </Link>
                <Link
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-lg border border-zinc-300 p-2 transition hover:border-zinc-500"
                  aria-label="WhatsApp"
                >
                  <MessageCircleMore className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">Localização</h3>
              <p className="mt-3 text-sm text-zinc-600">{company.address}</p>
              <p className="mt-1 text-sm text-zinc-600">CNPJ: {company.cnpj}</p>
              <iframe
                title="Mapa de localização Manauara Design"
                src={company.mapEmbed}
                loading="lazy"
                className="mt-4 h-72 w-full rounded-xl border border-zinc-200"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
