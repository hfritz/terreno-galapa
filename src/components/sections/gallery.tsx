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
    <section className="border-b border-border bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Fotos del terreno
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="bg-card px-4 py-3 text-sm text-card-foreground">
                {photo.label}
              </figcaption>
            </figure>
          ))}
          <ImagePlaceholder
            label="Vista aérea del terreno (pendiente)"
            className="aspect-[4/3] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
