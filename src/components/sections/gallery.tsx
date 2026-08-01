import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder";

const photos = [
  {
    src: "/images/plano-terreno.jpg",
    alt: "Plano del terreno con el lote delimitado sobre vista satelital",
    label: "Plano del terreno",
  },
  {
    src: "/images/plano-subdivision.jpg",
    alt: "División del lote en dos parcelas de 17 hectáreas y 6 hectáreas",
    label: "División del lote (17 ha / 6 ha)",
  },
  {
    src: "/images/acceso-via.png",
    alt: "Vista desde la Circunvalar de la Prosperidad, Atlántico, señalando el acceso al terreno",
    label: "Acceso desde la Circunvalar de la Prosperidad",
  },
];

export function Gallery() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Fotos del terreno
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {photo.label}
              </figcaption>
            </figure>
          ))}
          <ImagePlaceholder
            label="Vista aérea del terreno (pendiente)"
            className="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
