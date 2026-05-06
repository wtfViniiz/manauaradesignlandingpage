import Link from "next/link";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-300">
          <AlertTriangle className="h-4 w-4" />
          Erro 404
        </div>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">Pagina nao encontrada</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          A pagina que voce tentou acessar pode ter sido removida, renomeada ou nao existe.
          Continue navegando pelo site do Manauara Design pelos atalhos abaixo.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-zinc-900 transition hover:bg-yellow-300"
          >
            <Home className="h-4 w-4" />
            Voltar para a Home
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-zinc-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Ir para contato
          </Link>
        </div>
      </div>
    </section>
  );
}
