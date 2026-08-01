import { ImagePlaceholder } from "@/components/image-placeholder";

const placeholders = [
  "Vista aérea 1",
  "Vista aérea 2",
  "Acceso vía principal",
  "Vista satelital del lote",
];

export function Gallery() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Fotos del terreno
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {placeholders.map((label) => (
            <ImagePlaceholder
              key={label}
              label={`${label} (pendiente)`}
              className="aspect-[4/3] rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
