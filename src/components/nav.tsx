"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#especificaciones", label: "Especificaciones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#fotos", label: "Fotos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-white"
          >
            Terreno Galapa
          </a>
          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="text-white sm:hidden"
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-foreground sm:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-sm font-semibold tracking-tight text-background">
              Terreno Galapa
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="text-background"
            >
              <X className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-medium text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
