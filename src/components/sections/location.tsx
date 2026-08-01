import Image from "next/image";
import { property } from "@/lib/property";

export function Location() {
  return (
    <section className="bg-secondary">
      <div className="grid sm:grid-cols-2">
        <div className="relative min-h-[420px] sm:min-h-[640px]">
          <Image
            src="/images/mapa-regional.png"
            alt="Mapa regional mostrando la ubicación de Galapa respecto a Barranquilla y Soledad"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-16 sm:py-0">
          <p className="text-sm text-muted-foreground">Ubicación</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold tracking-tight text-foreground">
            {property.ubicacion.municipio}, {property.ubicacion.departamento}
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            {property.ubicacion.pais}. {property.ubicacionRelativa}, con
            frente sobre la {property.viaPrincipal}.
          </p>

          <div className="mt-10 max-w-md divide-y divide-border border-t border-border">
            {property.distancias.map((d) => (
              <div key={d.destino} className="flex justify-between py-3">
                <dt className="text-muted-foreground">Distancia a {d.destino}</dt>
                <dd className="font-medium text-foreground">{d.minutos} min</dd>
              </div>
            ))}
            <div className="flex justify-between py-3">
              <dt className="text-muted-foreground">Coordenadas GPS</dt>
              <dd className="font-medium text-foreground">
                {property.gps.lat.toFixed(5)}° N, {Math.abs(property.gps.lng).toFixed(5)}° O
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
