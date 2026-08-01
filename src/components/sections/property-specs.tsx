import { property } from "@/lib/property";

const specs = [
  { label: "Área total", value: `${property.areaHectareas} hectáreas (${property.areaM2.toLocaleString("es-CO")} m²)` },
  { label: "Frente", value: `${property.frenteMetros} metros sobre ${property.viaFrente}` },
  { label: "Clasificación de suelo", value: property.clasificacionSuelo.join(", ") },
  { label: "Potencial", value: property.potencial.join(", ") },
];

export function PropertySpecs() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Especificaciones del terreno
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-card p-6">
              <dt className="text-sm text-muted-foreground">{spec.label}</dt>
              <dd className="mt-1 text-lg font-medium text-card-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-medium text-foreground">
            Usos potenciales
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {property.usosPotenciales.map((uso) => (
              <li
                key={uso}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-card-foreground"
              >
                {uso}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-medium text-foreground">
            Ventajas del terreno
          </h3>
          <ul className="mt-4 space-y-2">
            {property.ventajas.map((ventaja) => (
              <li
                key={ventaja}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {ventaja}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
