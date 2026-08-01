# UI Spec: Terreno Galapa

## Status

Draft

## Aesthetic Direction

**Mood:** Clean and minimal — earthy, grounded, understated premium. The site should feel credible and calm, not sales-y or loud. Think "quiet confidence" rather than "invest now!" urgency.

**Keywords:** minimal, earthy, natural, restrained, credible, spacious, warm-neutral, editorial.

**What this style is NOT:**
- Not a generic "corporate real estate" template (stock-photo hero, aggressive CTAs, countdown-timer urgency).
- Not the loud gold/green gradient-and-icon-grid look of the original brochure — that reference informs the *palette*, not the *density* or *decoration*.
- Not dark, not moody, not luxury-nightlife (no deep purples/navy/gold-on-black).
- Not cluttered — no more than one strong visual idea per section.

## Reference Images

- Aesop (https://www.aesop.com) — primary style reference. Extracted: ultra-minimal layout, generous whitespace, restrained typography as the main visual device, warm neutral color fields, no decorative clutter, photography used sparingly and deliberately.
- Original property brochure (5 PDF pages, provided by owner) — source of the earthy palette (olive green, tan/gold, cream) and the factual content (specs, location data, aerial/satellite imagery of the plot). Its dense grid/icon layout and bold gradient triangles are explicitly *not* being carried forward — see "What this style is not."

## Color Palette

All colors warm and earthy, consistent with the land/nature subject. No pure black or white.

| Token | Value | Usage |
|---|---|---|
| `background` | `#FAF7F1` (warm cream) | Page background |
| `surface` | `#F1ECE1` (soft greige) | Cards, panels |
| `surface-alt` | `#E4DDCC` (deeper sand) | Section dividers, alternating blocks |
| `accent` | `#5C6B4F` (olive green) | Primary accent, links, active states |
| `accent-dark` | `#454F3B` (deep olive) | Hover states, emphasis |
| `accent-warm` | `#B98B4E` (muted tan/gold) | Secondary accent, small highlights only |
| `text-primary` | `#2B2A25` (warm near-black) | Headings, primary copy |
| `text-secondary` | `#5E5A4E` (warm gray-brown) | Body copy, secondary labels |
| `text-muted` | `#8B8676` (muted taupe) | Captions, metadata |
| `border` | `#DFD8C8` | Dividers, card borders |

## Typography

- **Heading and body font:** Inter, for both. One typeface family throughout — weight and size carry the hierarchy, not a font pairing.
- **Heading weight:** 600–700 (semibold/bold), tight letter-spacing.
- **Body weight:** 400 (regular), 500 (medium) for emphasis.
- **Scale:** modest and editorial — avoid oversized "hero shock" type. Suggested scale: H1 40–56px, H2 28–32px, H3 20–22px, body 16–18px, caption 13–14px.
- Line-height generous on body copy (1.5–1.6) to reinforce the calm, minimal feel.

## Spacing & Layout

- Base unit: 8px.
- Section vertical padding: generous — 96–128px on desktop, 64px on mobile. Whitespace is a primary design tool here (per Aesop reference).
- Max content width: ~1200px, with narrower text columns (~640–720px) for readability in copy-heavy sections.
- Single strong idea per section — avoid dense multi-column data dumps like the original brochure.

## Elevation & Depth

- No shadows, anywhere. Depth and separation come from background color blocks and whitespace, never drop shadows.

## Border Radius

- Sharp corners throughout — 0px radius on all buttons, images, and content blocks, matching the Aesop reference exactly.

## Buttons

- All buttons are 1px-bordered rectangles with a transparent background — never a filled saturated-color block, never pill-shaped.
- **Primary:** border and text `#5C6B4F` (accent), hover → inverts to filled `#5C6B4F` background with `#FAF7F1` (background) text.
- **Secondary:** thin neutral border (`text-foreground` at low opacity), transparent background, hover → border solidifies to full `text-foreground`.
- **Ghost / inline:** no border, no background, text only, underline on hover — used for inline links and tertiary CTAs, optionally with a trailing arrow icon.
- Keep CTA copy calm and direct in Spanish (e.g. "Contactar", "Ver más"), never urgency-driven ("¡Compre ya!").

## Gradients & Decorative Elements

- Avoid the brochure's bold triangular color-block motifs and heavy gradients — too loud for this direction.
- If any gradient is used, keep it extremely subtle: a soft linear fade between `background` and `surface` at section transitions, nothing more.
- Primary decorative element is photography: the aerial/satellite plot images and road/access photos from the brochure, used full-bleed or large-format, not cropped into small icon-grid tiles.

## Cards

- No boxed/bordered cards. Content blocks are flat — separated by background-color changes (e.g. `background` → `muted` → `secondary` between sections) and generous whitespace, not by borders or fill.
- Where a grouping needs internal separation (e.g. a spec list, a distances list), use a single hairline top border plus hairline dividers between rows — never a filled box around the group.
- Images run full-bleed or edge-to-edge within their grid cell — no border, no radius, no drop shadow. Captions sit as plain text directly below the image, not in a boxed strip.

## Iconography

- Minimal, single-line/outline icons only, no filled icon badges or circular icon backgrounds like the brochure.
- Icon color: `text-secondary` or `accent`, never decorative multi-color.
- Use icons sparingly — only where they aid scanning (e.g. next to a phone number or address), not as decoration on every list item.

## Motion

- Subtle and fast. Fade/slide-in on scroll for section reveals (150–250ms), no bouncy or playful easing.
- No auto-playing carousels or attention-grabbing animation loops.

## Tone of Voice

- Escribir todo el contenido en español.
- Directo y creíble, no exagerado — evitar lenguaje de "oportunidad única" repetido en exceso (el brochure original abusa de esto).
- Dejar que los datos (24 hectáreas, 200 metros de frente, ubicación) hablen por sí solos antes que adjetivos de venta.
- Cercano pero profesional — como si un asesor de confianza estuviera explicando la propiedad, no un anuncio publicitario.
- CTAs claros y de baja presión: "Contactar", "Conocer el terreno", "Ver ubicación".

## What This Style Is Not

- Not dense, icon-grid-heavy, or triangle/gradient-decorated like the source brochure.
- Not urgency-driven sales copy ("¡Invierta ahora!", "oportunidad única" repetido).
- Not dark mode, not high-contrast bold-modern.
- Not generic stock-photo real estate template — visuals should come from the actual property (aerial/satellite imagery, road access photos).
