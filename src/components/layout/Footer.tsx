import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { company } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Manauara Design</h3>
          <p className="max-w-md text-sm text-zinc-300">
            Comunicação visual, impressão e serviços gráficos para empresas que buscam presença
            profissional e crescimento sustentável.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={company.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-zinc-700 p-2 hover:border-yellow-400 hover:text-yellow-400"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href={company.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-zinc-700 p-2 hover:border-yellow-400 hover:text-yellow-400"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-zinc-700 p-2 hover:border-yellow-400 hover:text-yellow-400"
              aria-label="WhatsApp"
            >
              <MessageCircleMore className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-lg font-semibold text-white">Informações da empresa</h4>
          <p>{company.address}</p>
          <p>CNPJ: {company.cnpj}</p>
          <Link
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block text-yellow-400"
          >
            Fale no WhatsApp
          </Link>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-4 py-5 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Manauara Design. Todos os direitos reservados.
      </div>
    </footer>
  );
}
