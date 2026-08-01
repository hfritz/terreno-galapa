import { Blend, Factory, Warehouse } from "lucide-react";
import { property } from "@/lib/property";

const usos = [
  {
    label: property.usosPotenciales[0],
    description: "Centros de distribución y almacenamiento a gran escala.",
    icon: Warehouse,
  },
  {
    label: property.usosPotenciales[1],
    description: "Infraestructura para operaciones industriales y manufactura.",
    icon: Factory,
  },
  {
    label: property.usosPotenciales[2],
    description: "Flexibilidad para proyectos que combinan usos comerciales y residenciales.",
    icon: Blend,
  },
];

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

        <div className="mt-16">
          <h3 className="text-sm text-muted-foreground">Usos potenciales</h3>
          <div className="mt-6 grid gap-10 sm:grid-cols-3">
            {usos.map((uso) => (
              <div key={uso.label}>
                <uso.icon
                  className="size-6 text-accent-warm"
                  strokeWidth={1.5}
                />
                <p className="mt-4 text-xl font-medium text-foreground">
                  {uso.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {uso.description}
                </p>
              </div>
            ))}
          </div>
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
