import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { property } from "@/lib/property";

export function Hero() {
  return (
    <section className="relative aspect-[4/5] w-full overflow-hidden bg-background sm:aspect-[16/9]">
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
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-40 pb-12 sm:pb-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm text-white/80">
            {property.ubicacion.municipio}, {property.ubicacion.departamento}
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {property.areaHectareas} hectáreas en el corredor de crecimiento
            de Barranquilla
          </h1>
          <p className="max-w-xl text-base text-white/85 sm:text-lg">
            Un terreno con {property.frenteMetros} metros de frente sobre la{" "}
            {property.viaFrente}, con potencial industrial, logístico y
            agropecuario.
          </p>
          <span className="glow-border relative inline-block p-[2px]">
            <Button
              nativeButton={false}
              className="relative border-transparent bg-black/30 text-white hover:bg-white hover:text-foreground"
              render={<a href="#contacto" />}
            >
              Solicitar información
              <ArrowRight className="size-4" />
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
}
