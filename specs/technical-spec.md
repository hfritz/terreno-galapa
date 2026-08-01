# Technical Spec: Terreno Galapa

## Status

Draft

## Owner

Name: Helmut Fritz

## Related Docs

- Product spec: [specs/product-spec.md](product-spec.md)
- UI spec: [specs/ui-spec.md](ui-spec.md)

## Summary

A single-page Next.js marketing site presenting one property (24 ha, Galapa, Atlántico) to potential buyers. Fully static content, no CMS, no database, no AI. Content is authored directly in JSX/TSX and is entirely in Spanish. Contact happens via direct links (phone, email, WhatsApp) — no backend form in this first version.

## Goals

- Ship a single, scrollable landing page covering: hero, property specs, location, potential uses, photos, and contact.
- Reuse the property data already captured from the existing brochure (specs, GPS coordinates, contact info).
- Apply the design tokens from `specs/ui-spec.md` (already wired into Tailwind theme) to all real content.
- Deploy to a public URL (Vercel) so the site is actually discoverable — directly addresses the core problem in the product spec (zero marketing presence today).

## Non-Goals

- No CMS or admin panel — content changes are code changes.
- No contact form backend, database, or email service integration in v1.
- No multi-language support — Spanish only.
- No analytics/tracking setup beyond what's trivial to add later (out of scope per product spec's decision to skip success metrics for this version).

## Current System

Fresh Next.js 16 (App Router, TypeScript, Tailwind v4) scaffold with shadcn/ui initialized. `globals.css` already carries the earthy color palette and Inter typography from the UI spec. `src/app/page.tsx` currently holds a placeholder that exercises the tokens, not real content.

## Proposed Approach

Single route (`/`) composed of section components, each a plain React component under `src/components/sections/`:

1. `Hero` — property name/tagline, primary aerial image, primary CTA ("Contactar").
2. `PropertySpecs` — data table: área total (24 ha / 240.000 m²), frente (200 m), clasificación de suelo, potencial (industrial, logístico, agropecuario).
3. `Location` — municipio, distancia a Barranquilla (12 min), distancia a Galapa (5 min), vía principal (Circunvalar de la Prosperidad), coordenadas GPS, embedded static map or satellite image.
4. `Gallery` — aerial/satellite plot images and road-access photo from the brochure.
5. `Contact` — teléfono, email, WhatsApp link; no form submission/backend.

Property data (specs, location, contact) lives in a single typed constant (`src/lib/property.ts`) rather than scattered through JSX, so numbers stay consistent and are easy to update if the listing changes (price, status, etc.).

## Architecture

```
src/
  app/
    page.tsx          -> composes section components
    layout.tsx         -> Inter font, metadata (title/description in Spanish)
    globals.css         -> design tokens (already applied)
  components/
    sections/
      hero.tsx
      property-specs.tsx
      location.tsx
      gallery.tsx
      contact.tsx
    ui/                 -> shadcn primitives
  lib/
    property.ts          -> single source of truth for property data
public/
  images/                -> aerial/satellite photos, road-access photo (exported from the brochure source images)
```

No API routes, no server actions, no external data fetching — everything is static at build time.

## Data Model

Not a database — a single static object in `src/lib/property.ts`:

```ts
type Property = {
  name: string;
  location: { municipio: string; departamento: string; pais: string };
  areaHectares: number;
  areaM2: number;
  frenteMetros: number;
  clasificacionSuelo: string[];
  potencial: string[];
  distancias: { destino: string; minutos: number }[];
  viaPrincipal: string;
  gps: { lat: number; lng: number };
  contacto: { telefono: string; email: string; whatsapp?: string };
};
```

## Interfaces

- No APIs or external services in v1.
- Contact links use standard `tel:`, `mailto:`, and (if a WhatsApp number is confirmed) `https://wa.me/<number>` — no third-party integration required.
- Location map: use a static embed (e.g. Google Maps static image or iframe embed) rather than an interactive maps SDK, to keep the site fully static and dependency-free.

## Edge Cases

- Missing/incomplete images: gallery must degrade gracefully if fewer than the expected 5 images are available at build time.
- Mobile viewport: property specs table and contact block must remain usable at narrow widths (this is a lead-gen page — mobile traffic from shared links is likely the majority case).

## Security And Privacy

- No user data is collected or stored (no form submission in v1), so no privacy/compliance surface beyond standard static hosting.
- Contact details (phone/email) are intentionally public-facing, matching the brochure's existing intent.

## Performance And Reliability

- Fully static site (SSG) — no runtime dependencies, minimal performance risk.
- Images should be optimized via `next/image` and reasonably compressed before adding to `public/images/`.

## Observability

None planned for v1 — no analytics or monitoring, consistent with the product spec's decision to skip success metrics for this version.

## Testing Plan

- Unit: none planned — no business logic beyond static content.
- Integration: none planned.
- End-to-end: none planned for v1.
- Manual: verify all sections render correctly on desktop and mobile, verify all contact links open the correct app/client, run `npm run build` before each deploy.
- Regression: re-check after any content or token change via manual browser pass.

## Rollout Plan

- Deploy to Vercel (already part of Helmut's toolkit) once content is complete.
- No feature flags, migrations, or phased rollout needed — single static site, single environment.
- No backwards-compatibility concerns (new project).

## Tradeoffs

- **Static content vs. CMS:** chosen static-in-code over a CMS because there's a single property and no ongoing content-authoring need — a CMS would add complexity without payoff.
- **Direct contact links vs. form + backend:** chosen direct links (`tel:`/`mailto:`/WhatsApp) to avoid needing a backend, database, or email service for a low-traffic single-property site; can add a form later if lead volume justifies it.
- **Static map embed vs. interactive maps SDK:** chosen static embed to keep the site dependency-free and fast; interactive panning/zooming isn't essential for a single fixed property location.

## Open Questions

- [ ] ¿Hay número de WhatsApp disponible, o solo el teléfono (+57 320 219 5172) y el email (info@terrenogalapa.com) del brochure?
- [ ] ¿Se debe mostrar precio de venta, o "contáctenos para más información"?
- [ ] ¿Están disponibles las imágenes originales del brochure (aéreas/satelitales, foto de vía) en alta resolución para usar en el sitio?
- [ ] ¿Dominio a usar? (`www.terrenogalapa.com` aparece en el brochure — ¿está registrado y listo para apuntar a Vercel?)
