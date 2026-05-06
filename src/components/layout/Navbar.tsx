"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, serviceDropdownItems, specialtyDropdownItems } from "@/data/site-data";

type DropdownProps = {
  label: string;
  items: string[];
  queryKey: "servico" | "especialidade";
};

function toSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Dropdown({ label, items, queryKey }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`group relative inline-flex items-center gap-1 overflow-hidden rounded-full px-3 py-2 text-sm font-medium transition ${
          open ? "bg-yellow-100 text-zinc-900" : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="absolute inset-0 -translate-x-full bg-yellow-100/80 transition-transform duration-300 ease-out group-hover:translate-x-0" />
        <span className="relative z-10">{label}</span>
        <ChevronDown className={`relative z-10 h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-30 w-64 pt-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/10">
            {items.map((item) => (
              <Link
                key={item}
                href={`/contato?${queryKey}=${toSlug(item)}`}
                className="block w-full rounded-xl px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progress = Math.min(scrollY / 180, 1);
  const headerBgOpacity = 0.95 - progress * 0.45;
  const borderOpacity = 0.75 - progress * 0.25;
  const shadowOpacity = progress * 0.12;
  const blurAmount = 8 + progress * 10;

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity.toFixed(3)})`,
        borderBottom: `1px solid rgba(228, 228, 231, ${Math.max(borderOpacity, 0.2).toFixed(3)})`,
        backdropFilter: `blur(${blurAmount.toFixed(1)}px)`,
        boxShadow: `0 8px 24px rgba(9, 9, 11, ${shadowOpacity.toFixed(3)})`,
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logoSec.png"
            alt="Logo Manauara Design"
            width={196}
            height={56}
            priority
            className="h-11 w-auto object-contain md:h-12 [filter:brightness(0)_saturate(100%)_invert(79%)_sepia(77%)_saturate(1565%)_hue-rotate(355deg)_brightness(104%)_contrast(104%)]"
          />
        </Link>

        <button
          type="button"
          className="inline-flex rounded-xl border border-zinc-200 p-2 text-zinc-700 transition hover:bg-zinc-100 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white/90 p-1.5 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative overflow-hidden rounded-full px-3 py-2 text-sm font-medium transition ${
                pathname === link.href
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
              }`}
            >
              {pathname !== link.href ? (
                <span className="absolute inset-0 -translate-x-full bg-yellow-100/80 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              ) : null}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <Dropdown label="Serviços" items={serviceDropdownItems} queryKey="servico" />
          <Dropdown label="Especialidades" items={specialtyDropdownItems} queryKey="especialidade" />
          <Link
            href="/contato"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              pathname === "/contato"
                ? "bg-yellow-400 text-zinc-900"
                : "bg-zinc-900 text-white hover:bg-black"
            }`}
          >
            Solicitar orçamento
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="rounded-lg bg-zinc-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">Serviços</p>
              <div className="mt-2 space-y-1">
                {serviceDropdownItems.map((item) => (
                  <Link
                    key={item}
                    href={`/contato?servico=${toSlug(item)}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-2 py-1 text-sm text-zinc-700 transition hover:bg-zinc-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-zinc-100 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                Especialidades
              </p>
              <div className="mt-2 space-y-1">
                {specialtyDropdownItems.map((item) => (
                  <Link
                    key={item}
                    href={`/contato?especialidade=${toSlug(item)}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-2 py-1 text-sm text-zinc-700 transition hover:bg-zinc-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
