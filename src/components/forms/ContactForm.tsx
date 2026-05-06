"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("servico")?.trim() ?? "";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setWhatsappUrl("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nome: String(formData.get("nome") ?? ""),
      email: String(formData.get("email") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
      servico: String(formData.get("servico") ?? ""),
      termos: formData.get("termos") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string; whatsappUrl?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message ?? "Não foi possível enviar sua solicitação.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Solicitação enviada com sucesso.");
      setWhatsappUrl(data.whatsappUrl ?? "");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Falha de conexão. Tente novamente em alguns instantes.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="order-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:order-1 md:p-8"
    >
      <h2 className="text-2xl font-bold text-zinc-900">Solicite seu orçamento</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Preencha os dados abaixo e nossa equipe retorna com uma proposta alinhada ao seu objetivo
        comercial.
      </p>
      <div className="mt-6 space-y-4">
        {selectedService ? (
          <p className="rounded-lg bg-yellow-50 px-3 py-2 text-sm text-zinc-800">
            Serviço selecionado: <strong>{selectedService}</strong>
          </p>
        ) : null}
        <label className="block text-sm font-medium text-zinc-700">
          Nome
          <input
            required
            type="text"
            name="nome"
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2.5 outline-none ring-yellow-300 focus:ring"
            placeholder="Seu nome completo"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2.5 outline-none ring-yellow-300 focus:ring"
            placeholder="seuemail@gmail.com"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          Telefone
          <input
            required
            type="tel"
            name="telefone"
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2.5 outline-none ring-yellow-300 focus:ring"
            placeholder="(92) 99999-9999"
          />
        </label>
        <label className="block text-sm font-medium text-zinc-700">
          Mensagem
          <textarea
            required
            name="mensagem"
            rows={5}
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2.5 outline-none ring-yellow-300 focus:ring"
            placeholder="Conte sobre seu projeto e necessidades."
            defaultValue={
              selectedService
                ? `Gostaria de solicitar um orçamento para o serviço: ${selectedService}.`
                : undefined
            }
          />
        </label>
        <input type="hidden" name="servico" value={selectedService} />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
        <label className="flex items-center gap-2 text-sm text-zinc-700">
          <input required type="checkbox" name="termos" className="h-4 w-4 rounded border-zinc-300" />
          Li e concordo com os termos
        </label>

        {status !== "idle" ? (
          <p
            className={`rounded-lg px-3 py-2 text-sm ${
              status === "success"
                ? "bg-emerald-50 text-emerald-700"
                : status === "error"
                  ? "bg-red-50 text-red-700"
                  : "bg-zinc-100 text-zinc-700"
            }`}
          >
            {status === "loading" ? "Enviando solicitação..." : message}
          </p>
        ) : null}

        {status === "success" && whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 transition hover:border-zinc-500"
          >
            Continuar no WhatsApp
          </a>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Solicitar orçamento
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
