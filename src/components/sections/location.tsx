import Image from "next/image";
import { property } from "@/lib/property";

export function Location() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Ubicación
          </h2>
          <p className="mt-4 text-muted-foreground">
            {property.ubicacion.municipio}, {property.ubicacion.departamento}
            , {property.ubicacion.pais}. {property.ubicacionRelativa}, con
            frente sobre la {property.viaPrincipal}.
          </p>

          <dl className="mt-8 space-y-4">
            {property.distancias.map((d) => (
              <div key={d.destino} className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted-foreground">Distancia a {d.destino}</dt>
                <dd className="font-medium text-foreground">{d.minutos} min</dd>
              </div>
            ))}
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">Coordenadas GPS</dt>
              <dd className="font-medium text-foreground">
                {property.gps.lat.toFixed(5)}° N, {Math.abs(property.gps.lng).toFixed(5)}° O
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-border">
          <Image
            src="/images/mapa-regional.png"
            alt="Mapa regional mostrando la ubicación de Galapa respecto a Barranquilla y Soledad"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
