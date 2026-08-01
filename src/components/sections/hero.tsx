import { property } from "@/lib/property";

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pt-24 pb-16 text-center sm:pt-32">
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
      </div>

      <div className="relative aspect-video w-full overflow-hidden sm:aspect-[21/9]">
        <video
          className="h-full w-full object-cover"
          src="/video/terreno-aereo.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vista aérea del terreno en Galapa, Atlántico"
        />
      </div>
    </section>
  );
}
