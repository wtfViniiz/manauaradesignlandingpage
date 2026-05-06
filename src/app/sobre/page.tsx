import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, Goal, Sparkles } from "lucide-react";
import { DifferentialsSection } from "@/components/sections/HomeSections";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a historia, missão, visão e valores da Manauara Design em comunicação visual e serviços gráficos.",
  openGraph: {
    title: "Sobre a Manauara Design",
    description:
      "Conheça nossos diferenciais, valores e compromisso com qualidade em comunicação visual.",
    url: "https://manauaradesign.com.br/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-white">
        <Image
          src="/Screenshot_59.png"
          alt="Processo criativo de design"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-300">
              Sobre o Manauara Design
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">Transformamos ideias em presença de marca</h1>
            <p className="mt-5 max-w-xl text-zinc-200">
              Unimos estratégia, design e produção gráfica para criar materiais que comunicam valor e
              ajudam empresas a vender mais com consistência visual.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-yellow-300"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-zinc-700/80 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-lg font-semibold text-yellow-300">Atendimento consultivo e local</p>
            <p className="mt-3 text-zinc-200">
              Nosso processo começa no entendimento do seu objetivo comercial, passa pela criação
              personalizada e termina com execução gráfica de alta qualidade.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-zinc-100">
              <p className="rounded-lg border border-zinc-600/80 bg-zinc-900/40 px-4 py-3">
                Briefing estratégico e planejamento visual
              </p>
              <p className="rounded-lg border border-zinc-600/80 bg-zinc-900/40 px-4 py-3">
                Produção com controle de acabamento e prazo
              </p>
              <p className="rounded-lg border border-zinc-600/80 bg-zinc-900/40 px-4 py-3">
                Suporte para continuidade da comunicação da marca
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <SectionHeading
            title="Uma parceria estratégica para posicionar sua marca"
            subtitle="Quem somos"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7">
              <h3 className="text-xl font-semibold text-zinc-900">O que você ganha com a Manauara Design</h3>
              <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-600" />
                  Projetos alinhados ao seu objetivo de vendas e posicionamento.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-600" />
                  Padronização visual para fortalecer o reconhecimento da sua marca.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-600" />
                  Execução ágil com acompanhamento em todas as etapas.
                </li>
              </ul>
            </article>
            <article className="rounded-3xl border border-zinc-200 bg-zinc-900 p-7 text-white">
              <h3 className="text-xl font-semibold">Nossa forma de trabalhar</h3>
              <p className="mt-3 text-zinc-200">
                Acreditamos que toda empresa pode crescer com uma comunicação visual bem planejada.
                Por isso, atuamos de ponta a ponta: diagnóstico, criação, produção e entrega.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 px-3 py-4">
                  <p className="text-2xl font-bold text-yellow-300">1</p>
                  <p className="mt-1 text-xs text-zinc-200">Briefing</p>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-4">
                  <p className="text-2xl font-bold text-yellow-300">2</p>
                  <p className="mt-1 text-xs text-zinc-200">Criação</p>
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-4">
                  <p className="text-2xl font-bold text-yellow-300">3</p>
                  <p className="mt-1 text-xs text-zinc-200">Entrega</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <SectionHeading title="Missão, visão e valores que guiam cada projeto" subtitle="Nossa essência" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-yellow-100 p-3 text-yellow-700">
                <Goal className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">Nossa missão</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Entregar soluções de comunicação visual com qualidade e impacto para fortalecer marcas.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-yellow-100 p-3 text-yellow-700">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">Nossa visão</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Ser referência regional em serviços gráficos e design para negócios em crescimento.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-xl bg-yellow-100 p-3 text-yellow-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">Nossos valores</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Compromisso, agilidade, transparência e foco em resultados para cada cliente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <DifferentialsSection />

      <section className="bg-yellow-400 py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 px-4 md:flex-row md:items-center md:px-6">
          <p className="max-w-3xl text-2xl font-bold text-zinc-900">
            Sua marca merece uma comunicação visual profissional, consistente e orientada a resultado.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
