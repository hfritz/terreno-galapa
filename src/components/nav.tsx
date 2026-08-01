const links = [
  { href: "#especificaciones", label: "Especificaciones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#fotos", label: "Fotos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  return (
    <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/50 to-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
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
      </nav>
    </div>
  );
}
