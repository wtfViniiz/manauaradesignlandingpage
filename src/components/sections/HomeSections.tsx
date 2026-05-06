import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CreditCard,
  Megaphone,
  Palette,
  Printer,
  ScanLine,
  Star,
  Sticker,
  Store,
  SwatchBook,
  Wallpaper,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { checklistItems, company, differentials, services, testimonials } from "@/data/site-data";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.5-5.5 3.5-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C17 3 14.7 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z"
      />
      <path
        fill="#34A853"
        d="M2 12c0 1.6.4 3 1.2 4.3l3.3-2.6c-.2-.6-.4-1.1-.4-1.7s.1-1.2.4-1.7L3.2 7.7C2.4 9 2 10.4 2 12z"
      />
      <path
        fill="#FBBC05"
        d="M12 22c2.7 0 5-1 6.7-2.7l-3.1-2.5c-.8.6-2 1-3.6 1-2.6 0-4.8-1.7-5.6-4.1L3 16.3C4.8 19.8 8.1 22 12 22z"
      />
      <path
        fill="#4285F4"
        d="M21.6 10.3H12v3.9h5.5c-.3 1.3-1.2 2.2-2 2.8l3.1 2.5c1.8-1.6 3-4.1 3-7.5 0-.7-.1-1.2-.2-1.7z"
      />
    </svg>
  );
}

export function HomeHeroSection() {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden text-white"
    >
      <Image
        src="/36f73d39-59b2-4994-9e1f-78eec799000f.png"
        alt="Equipe trabalhando em design"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/70" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-20 md:px-6 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">Manauara Design</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Sua marca vende mais com uma comunicação visual profissional.
        </h1>
        <p className="max-w-3xl text-base text-zinc-100 md:text-lg">
          Criamos materiais gráficos e identidades visuais para atrair clientes, fortalecer sua presença
          e gerar resultados no mercado local.
        </p>
        <p className="max-w-4xl text-xl font-semibold leading-tight text-white md:text-2xl">
          <span className="mt-2 block max-w-full">
            <span className="whitespace-normal text-yellow-300">
              inovação, eficiência e prosperidade do seu negócio.
            </span>
          </span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/sobre"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300/60 bg-white/10 px-6 py-3 font-semibold text-white transition hover:border-zinc-200"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const serviceIcons = [
    CreditCard,
    Wallpaper,
    Store,
    Sticker,
    Megaphone,
    SwatchBook,
    ScanLine,
    Printer,
    Palette,
  ];

  return (
    <section
      className="bg-gradient-to-b from-white to-zinc-50 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading title="Conheça nossos serviços" subtitle="Serviços" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-100/85 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-yellow-100 p-3 text-yellow-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
                </div>
                <p className="mt-3 text-sm text-zinc-600">{service.description}</p>
                <Link
                  href={`/contato?servico=${encodeURIComponent(service.title)}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MidBannerSection() {
  return (
    <section
      className="bg-zinc-100 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white md:grid-cols-2">
        <div className="px-6 py-10 md:px-10 md:py-12">
          <p className="text-3xl font-bold text-zinc-900 md:text-4xl">
            Conte com o Manauara Design para sua comunicação visual.
          </p>
          <p className="mt-4 max-w-xl text-zinc-600">
            Transformamos ideias em materiais de alto impacto para fortalecer sua marca no mercado.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
          >
            Solicitar orçamento
          </Link>
        </div>
        <div className="relative min-h-[260px]">
          <Image
            src="/Screenshot_59.png"
            alt="Design criativo em processo"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-300/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section
      className="bg-gradient-to-r from-zinc-50 to-white py-16 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="rounded-3xl bg-zinc-900 p-8 text-white shadow-lg">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-300">
            Conheça o Manauara Design
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Quem somos</h2>
          <p className="mt-5 text-zinc-200">
            Acreditamos que todas as empresas tem potencial para alcançar o sucesso. Nossa missão é
            capacitar empreendedores com uma comunicação visual eficaz.
          </p>
          <Link
            href="/sobre"
            className="mt-7 inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-zinc-900 transition hover:bg-yellow-300"
          >
            Saiba mais
          </Link>
        </div>
        <ul className="grid gap-3 self-start rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          {checklistItems.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-xl bg-zinc-50 px-4 py-3 text-zinc-800">
              <Check className="h-5 w-5 text-yellow-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  return (
    <section
      className="bg-zinc-50 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading title="O que nos diferencia?" centered />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <item.icon className="h-8 w-8 text-yellow-500" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-zinc-50 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading title="O que nossos clientes dizem" centered />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.date}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <GoogleLogo />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-700">{testimonial.content}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center font-semibold text-zinc-700">
          Avaliação Google: 5.0 de 5 com base em 8 avaliações
        </p>
      </div>
    </section>
  );
}

export function FinalBannerSection() {
  return (
    <section
      className="bg-yellow-400 py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <p className="max-w-3xl text-2xl font-bold text-zinc-900 md:text-3xl">
          Soluções personalizadas que transformam desafios em oportunidades
        </p>
        <Link
          href="/contato"
          className="inline-flex rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
        >
          Solicitar orçamento
        </Link>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section
      className="bg-zinc-50 py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading title="Nossa localização" centered />
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <iframe
            title="Mapa Manauara Design"
            src={company.mapEmbed}
            loading="lazy"
            className="h-80 w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
