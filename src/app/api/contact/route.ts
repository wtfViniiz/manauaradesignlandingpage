import { NextResponse } from "next/server";

type ContactPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
  termos?: boolean;
  website?: string;
};

const whatsappBase = "https://wa.me/92992955059";

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot para bloquear envios automatizados.
    if (body.website) {
      return NextResponse.json({ message: "Requisição inválida." }, { status: 400 });
    }

    const nome = sanitizeText(body.nome, 120);
    const email = sanitizeText(body.email, 160).toLowerCase();
    const telefone = sanitizeText(body.telefone, 24);
    const mensagem = sanitizeText(body.mensagem, 1200);
    const termos = body.termos === true;

    if (!nome || !email || !telefone || !mensagem || !termos) {
      return NextResponse.json(
        { message: "Preencha todos os campos obrigatórios e aceite os termos." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Informe um email válido." }, { status: 400 });
    }

    const text = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de um orçamento.%0A%0ANome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`,
    );

    return NextResponse.json(
      {
        message: "Solicitação recebida com sucesso.",
        whatsappUrl: `${whatsappBase}?text=${text}`,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Não foi possível processar sua solicitação no momento." },
      { status: 500 },
    );
  }
}
