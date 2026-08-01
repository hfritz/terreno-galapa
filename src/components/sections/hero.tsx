import { ImagePlaceholder } from "@/components/image-placeholder";
import { property } from "@/lib/property";

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {property.ubicacion.municipio}, {property.ubicacion.departamento}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {property.areaHectareas} hectáreas en el corredor de crecimiento de
          Barranquilla
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Un terreno con {property.frenteMetros} metros de frente sobre la{" "}
          {property.viaFrente}, con potencial industrial, logístico y
          agropecuario.
        </p>
        <a
          href="#contacto"
          className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#454f3b]"
        >
          Contactar
        </a>
        <ImagePlaceholder
          label="Foto aérea del terreno (pendiente)"
          className="mt-8 h-72 w-full max-w-3xl rounded-lg"
        />
      </div>
    </section>
  );
}
