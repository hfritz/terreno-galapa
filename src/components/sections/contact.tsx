import { property } from "@/lib/property";

function whatsappHref(number: string) {
  const digits = number.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function Contact() {
  return (
    <section id="contacto" className="bg-background">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Contactar
        </h2>
        <p className="mt-4 text-muted-foreground">
          Escríbenos para conocer más sobre el terreno, su documentación y
          disponibilidad.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${property.contacto.telefono.replace(/\s/g, "")}`}
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#454f3b] sm:w-auto"
          >
            Llamar {property.contacto.telefono}
          </a>
          <a
            href={whatsappHref(property.contacto.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary sm:w-auto"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${property.contacto.email}`}
            className="w-full rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            {property.contacto.email}
          </a>
        </div>
      </div>
    </section>
  );
}
