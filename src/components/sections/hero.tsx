import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { property } from "@/lib/property";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9]">
        <Nav />
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

      <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-16 sm:py-24">
        <p className="text-sm text-muted-foreground">
          {property.ubicacion.municipio}, {property.ubicacion.departamento}
        </p>
        <h1 className="font-heading max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {property.areaHectareas} hectáreas en el corredor de crecimiento de
          Barranquilla
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Un terreno con {property.frenteMetros} metros de frente sobre la{" "}
          {property.viaFrente}, con potencial industrial, logístico y
          agropecuario.
        </p>
        <Button nativeButton={false} render={<a href="#contacto" />}>
          Contactar
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
