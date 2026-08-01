import { Button } from "@/components/ui/button";
import { property } from "@/lib/property";

function whatsappHref(number: string) {
  const digits = number.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function Contact() {
  return (
    <section id="contacto" className="bg-background">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Contactar
        </h2>
        <p className="mt-4 text-muted-foreground">
          Escríbenos para conocer más sobre el terreno, su documentación y
          disponibilidad.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            nativeButton={false}
            className="w-full sm:w-auto"
            render={
              <a href={`tel:${property.contacto.telefono.replace(/\s/g, "")}`} />
            }
          >
            Llamar {property.contacto.telefono}
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            className="w-full sm:w-auto"
            render={
              <a
                href={whatsappHref(property.contacto.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            WhatsApp
          </Button>
          <Button
            nativeButton={false}
            variant="ghost"
            className="w-full sm:w-auto"
            render={<a href={`mailto:${property.contacto.email}`} />}
          >
            {property.contacto.email}
          </Button>
        </div>
      </div>
    </section>
  );
}
