import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder";

const photos = [
  {
    src: "/images/plano-terreno.jpg",
    alt: "Plano del terreno con el lote delimitado sobre vista satelital",
    label: "Plano del terreno",
    text: "El polígono delimita las 24 hectáreas del predio, con acceso directo sobre la Circunvalar de la Prosperidad.",
  },
  {
    src: "/images/plano-subdivision.jpg",
    alt: "División del lote en dos parcelas de 17 hectáreas y 6 hectáreas",
    label: "División del lote",
    text: "El lote admite subdivisión de referencia en dos parcelas, de 17 y 6 hectáreas, según la conveniencia del comprador.",
  },
  {
    src: "/images/acceso-via.png",
    alt: "Vista desde la Circunvalar de la Prosperidad, Atlántico, señalando el acceso al terreno",
    label: "Acceso desde la vía principal",
    text: "A 12 minutos de Barranquilla, con acceso directo desde la Circunvalar de la Prosperidad, antes del peaje.",
  },
];

export function Gallery() {
  return (
    <section id="fotos" className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Fotos del terreno
        </h2>
      </div>

      <div className="mt-12 sm:mt-16">
        {photos.map((photo, i) => {
          const mirrored = i % 2 === 1;
          return (
            <div key={photo.src} className="grid sm:grid-cols-2">
              <div
                className={`relative min-h-[320px] sm:min-h-[520px] ${mirrored ? "sm:order-2" : ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-16 sm:py-0 ${mirrored ? "sm:order-1" : ""}`}
              >
                <p className="text-sm text-muted-foreground">
                  {photo.label}
                </p>
                <p className="mt-3 max-w-md text-xl text-foreground">
                  {photo.text}
                </p>
              </div>
            </div>
          );
        })}

        <div className="grid sm:grid-cols-2">
          <ImagePlaceholder
            label="Vista aérea del terreno (pendiente)"
            className="min-h-[320px] sm:order-2 sm:min-h-[520px]"
          />
          <div className="flex flex-col justify-center px-6 py-12 sm:order-1 sm:px-16 sm:py-0">
            <p className="text-sm text-muted-foreground">Vista aérea</p>
            <p className="mt-3 max-w-md text-xl text-foreground">
              Una toma aérea adicional del terreno estará disponible
              próximamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
