import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/site-data";

export function FloatingWhatsApp() {
  return (
    <Link
      href={company.whatsapp}
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#20ba59]"
    >
      <FaWhatsapp className="h-7 w-7" />
    </Link>
  );
}
