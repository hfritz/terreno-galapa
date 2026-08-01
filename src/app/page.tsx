export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-background px-6 py-24 text-foreground">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Terreno Galapa
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          24 hectáreas estratégicas en el corredor de crecimiento
          Barranquilla–Galapa. Sitio en construcción.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 text-card-foreground sm:flex-row sm:items-center">
        <span className="text-sm text-muted-foreground">
          Vista previa de estilos
        </span>
        <button
          type="button"
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#454f3b]"
        >
          Contactar
        </button>
        <button
          type="button"
          className="rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-secondary"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
