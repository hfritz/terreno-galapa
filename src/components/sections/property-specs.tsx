import { property } from "@/lib/property";

const specs = [
  { label: "Área total", value: `${property.areaHectareas} hectáreas (${property.areaM2.toLocaleString("es-CO")} m²)` },
  { label: "Frente", value: `${property.frenteMetros} metros sobre ${property.viaFrente}` },
  { label: "Clasificación de suelo", value: property.clasificacionSuelo.join(", ") },
  { label: "Potencial", value: property.potencial.join(", ") },
];

export function PropertySpecs() {
  return (
    <section id="especificaciones" className="bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Especificaciones del terreno
        </h2>

        <dl className="mt-12 divide-y divide-border border-t border-border">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <dt className="text-sm text-muted-foreground">{spec.label}</dt>
              <dd className="text-lg font-medium text-foreground sm:text-right">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 max-w-2xl">
          <h3 className="text-sm text-muted-foreground">Usos potenciales</h3>
          <p className="mt-2 text-xl text-foreground">
            {property.usosPotenciales.join(" · ")}
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <h3 className="text-sm text-muted-foreground">
            Ventajas del terreno
          </h3>
          <ul className="mt-2 space-y-3 text-lg leading-relaxed text-foreground">
            {property.ventajas.map((ventaja) => (
              <li key={ventaja}>{ventaja}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
